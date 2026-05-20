import barba from '@barba/core';
import { addClass, findAll, findClosest, getElements, hasClass, removeClass } from '../utils/functions';
import getHtml from './get-html';
import { pt_fadeInOut } from './fade';
import { adjustPageScripts, shouldBarbaHandle, updateHeaderAndFooter } from './helper';
import { preventUrl } from './prevent-pt';
import { initNavAni, updateNavItemsClass } from './navbar';
import headerAni from './header';

export default function initAjaxTrnasition(){

    let ajaxWrap = getElements('[data-themeic-ajax-template="wrap"]');

    if(ajaxWrap.length){

        let pageLoading = false;

        if(hasClass(ajaxWrap[0], 'initialized-themeic-ajax-pt')) return false;
        
        addClass(ajaxWrap[0], 'initialized-themeic-ajax-pt');
        addClass(document.querySelector('html'), 'has-themeic-pt');
        
        let settings = JSON.parse(ajaxWrap[0].getAttribute('data-pt-settings')); 
        let pt_nav = initNavAni();
        let headerDefaultAni = headerAni();

        const emitter = {
            events: {},
            on(event, callback) {
                if (!this.events[event]) this.events[event] = [];
                this.events[event].push(callback);
                return this;
            },
            off(event, callback) {
                if (!this.events[event]) return;
                if (!callback) delete this.events[event];
                else this.events[event] = this.events[event].filter(cb => cb !== callback);
                return this;
            },
            emit(event, data) {
                if (!this.events[event]) return;
                this.events[event].forEach(callback => callback(data));
            },
            offAll(event) {
                if (event) {
                    // Clear only a specific event's listeners
                    delete this.events[event];
                } else {
                    // Clear EVERYTHING
                    this.events = {};
                }
                return this;
            }
        };

        barba.init({
            debug:false,
            // preventRunning:true,
            timeout:5000,
            prevent:(data)=>{
                preventUrl(data.el); 
            },
            schema:{
                prefix: 'data-themeic-ajax-template',
                wrapper: 'wrap',
                container: 'container',
                namespace: 'name',
                // limit: 0,
                // html: '', 
            },
            transitions:[
                {
                    sync: true,
                    name:'default-transition',
                    
                    before(data){
                        adjustPageScripts(getHtml(data)?.nextHTML);
                        emitter.emit('before', data);

                        if(!pt_nav.hasInit){
                            // headerDefaultAni.start();
                        }
                    },
                    leave(data){
                        let done = this.async();
                        
                        pt_fadeInOut(data, done);

                        emitter.emit('leave', data);
                    },
                    afterEnter(data){
                        emitter.emit('afterEnter', data);
                        
                        if(!pt_nav.hasInit){ 
                            updateHeaderAndFooter(data);
                            updateHeaderAndFooter(data, '.elementor-location-header', '.elementor-location-footer'); 
                            // headerDefaultAni.end();  
                        }
                    },
                    after(data){
                        emitter.emit('after', data);
                        document.body.classList.remove('starting-themeic-pt');
                        pageLoading = false; 
                        if(typeof elementorFrontend !== "undefined"){
                            elementorFrontend.init();
                        }
                        updateeditlink(getHtml(data).nextHTML);
                        if(pt_nav.hasInit){  
                            updateNavItemsClass(pt_nav.navbarEl, getHtml(data).nextHTML.querySelector('.has-pt-nav-slide'));  
                            pt_nav.nav.refresh();
                        }
                    }
                }
            ]
        });

        // 
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a');
            if(!link) return;
            if (shouldBarbaHandle(link, e) && !preventUrl(link)) {
                document.body.classList.add('starting-themeic-pt');
                emitter.emit('click', e);
                pageLoading = true;
            }
            
        });

        if(!document.querySelector('.circle-loader-wrap')) document.body.insertAdjacentHTML('beforeend', '<div class="circle-loader-wrap"><div class="circle-loader-inner"><div class="circle-spinner-loader"></div></div></div>'); 

        let circle = document.querySelector('.circle-loader-wrap');

        gsap.set(circle, { xPercent: -50, yPercent: -50 });

        document.addEventListener('mousemove', function(e) {
            if(circle) {
                gsap.to(circle, {
                    x: e.clientX, 
                    y: e.clientY,
                    duration: 0.5, // Add a little smoothing for that premium feel
                    ease: "power2.out"
                });
            }
        });
        return{  
            on: (event, callback) => emitter.on(event, callback),
            off: (event, callback) => emitter.off(event, callback),
            destroy:()=>{
                barba.destroy();
                emitter.offAll();
                removeClass(ajaxWrap[0], 'initialized-themeic-ajax-pt');    
                removeClass(document.querySelector('html'), 'has-themeic-pt');
            },
            pt_oject:barba
        }

    }
    return false;
}

function updateeditlink(html){
    const adminBar = document.querySelector('#wpadminbar');

    if (adminBar) {
        // 2. Find the 'Edit' node from the incoming AJAX 'html' object
        const newHeader = html.body.querySelector("#wpadminbar #wp-admin-bar-edit");

        if (newHeader) {
            // 3. Find the target container in the current live document
            const currentEditBar = adminBar.querySelector('#wp-admin-bar-edit');
            
            if (currentEditBar) {
                // Update the HTML content
                currentEditBar.innerHTML = newHeader.innerHTML;
            }

            // 4. Handle the Elementor Edit link update
            const elEditLink = adminBar.querySelector('#wp-admin-bar-elementor_edit_page > a');
            const newAnchor = newHeader.querySelector('a');

            if (elEditLink && newAnchor) {
                const originalHref = newAnchor.getAttribute('href');
                const updatedHref = updateURLParameter(originalHref, 'action', 'elementor');
                const updatedHref2 = updateURLParameter(originalHref, 'action', 'edit');
                
                elEditLink.setAttribute('href', updatedHref);
                newHeader.setAttribute('href', updatedHref2);
            }
        }
    }
}

function updateURLParameter(url, param, value) {
    if (!url) return '';
    const newUrl = new URL(url);
    newUrl.searchParams.set(param, value);
    return newUrl.toString();
}