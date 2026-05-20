import barba from '@barba/core';
import { addClass, getElements, hasClass, removeClass } from '../utils/functions';
import getHtml from './get-html';
import { pt_fadeInOut } from './fade';
import { adjustPageScripts, shouldBarbaHandle, updateHeaderAndFooter } from './helper';
import { preventUrl } from './prevent-pt';
import { initNavAni, updateNavItemsClass } from './navbar';

export default function initAjaxTrnasition() {   
    const ajaxWrap = getElements('[data-themeic-ajax-template="wrap"]');

    if (!ajaxWrap.length) return false;
    if (hasClass(ajaxWrap[0], "initialized-themeic-ajax-pt")) return false;

    addClass(ajaxWrap[0], "initialized-themeic-ajax-pt");
    addClass(document.documentElement, "has-themeic-pt");

    const pt_nav = initNavAni();
    const cleanups = [];   

    const emitter = {
        events: {},
        on(event, callback) {
            if (!event || typeof callback !== "function") return this;
            if (!this.events[event]) this.events[event] = [];
            this.events[event].push(callback);
            return this;
        },
        off(event, callback) {
            if (!this.events[event]) return this;
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
                delete this.events[event];
            } else {
                this.events = {};
            }
            return this;
        }
    };
    
    barba.init({
        debug: true,
        timeout: 5000,
        prevent: data => preventUrl(data.el),
        schema: {
            prefix: "data-themeic-ajax-template",
            wrapper: "wrap",
            container: "container",
            namespace: "name",
        },
        transitions: [
            {
                sync: true,
                name: "default-transition",

                before(data) {
                    const htmlData = getHtml(data);
                    adjustPageScripts(htmlData?.nextHTML);
                    emitter.emit("before", data);
                },
                leave(data) {
                    const done = this.async();
                    pt_fadeInOut(data, done);
                    emitter.emit("leave", data);
                },
                afterEnter(data) {
                    emitter.emit("afterEnter", data);

                    updateHeaderAndFooter(data, null);

                    if (!pt_nav.hasInit) {
                        updateHeaderAndFooter(data);
                        updateHeaderAndFooter(data, ".elementor-location-header", ".elementor-location-footer");
                    }
                },
                after(data) {
                    const htmlData = getHtml(data);

                    emitter.emit("after", data);
                    document.body.classList.remove("starting-themeic-pt");

                    if (typeof elementorFrontend !== "undefined") {
                        elementorFrontend.init();
                    }
                    
                    updateEditLink(htmlData?.nextHTML);

                    if (pt_nav.hasInit) {
                        const nextNavbar = htmlData?.nextHTML?.querySelector(".has-pt-nav-slide");
                        updateNavItemsClass(pt_nav.navbarEl, nextNavbar);
                        pt_nav.nav?.refresh();
                    }
                }
            }
        ]
    });

    const onClick = event => {
        const link = event.target.closest("a");
        if (!link) return;

        if (shouldBarbaHandle(link, event) && !preventUrl(link)) {
            document.body.classList.add("starting-themeic-pt");
            emitter.emit("click", event);
        }
    };

    document.addEventListener("click", onClick);
    cleanups.push(() => document.removeEventListener("click", onClick));

    if (!document.querySelector(".circle-loader-wrap")) {
        document.body.insertAdjacentHTML("beforeend", '<div class="circle-loader-wrap"><div class="circle-loader-inner"><div class="circle-spinner-loader"></div></div></div>');
    }

    const circle = document.querySelector(".circle-loader-wrap");

    if (circle && typeof gsap !== "undefined") {
        gsap.set(circle, { xPercent: -50, yPercent: -50 });
    }

    const onMouseMove = event => {
        if (!circle || typeof gsap === "undefined") return;

        gsap.to(circle, {
            x: event.clientX,
            y: event.clientY,
            duration: 0.5,
            ease: "power2.out"
        });
    };

    document.addEventListener("mousemove", onMouseMove);
    cleanups.push(() => document.removeEventListener("mousemove", onMouseMove));

    return {
        on: (event, callback) => emitter.on(event, callback),
        off: (event, callback) => emitter.off(event, callback),
        destroy: () => {
            barba.destroy();
            pt_nav.nav?.destroy?.();
            cleanups.forEach(cleanup => cleanup());
            emitter.offAll();
            removeClass(ajaxWrap[0], "initialized-themeic-ajax-pt");
            removeClass(document.documentElement, "has-themeic-pt");
        },
        pt_oject: barba
    };
}

function updateEditLink(html) {
    const adminBar = document.querySelector("#wpadminbar");

    if (!adminBar || !html) return;

    const newEditBar = html.body.querySelector("#wpadminbar #wp-admin-bar-edit");
    if (!newEditBar) return;

    const currentEditBar = adminBar.querySelector("#wp-admin-bar-edit");
    if (currentEditBar) {
        currentEditBar.innerHTML = newEditBar.innerHTML;
    }

    const elementorEditLink = adminBar.querySelector("#wp-admin-bar-elementor_edit_page > a");
    const newAnchor = newEditBar.querySelector("a");

    if (elementorEditLink && newAnchor) {
        const originalHref = newAnchor.getAttribute("href");
        const elementorHref = updateURLParameter(originalHref, "action", "elementor");
        const editHref = updateURLParameter(originalHref, "action", "edit");

        if (elementorHref) {
            elementorEditLink.setAttribute("href", elementorHref);
        }

        if (editHref) {
            newAnchor.setAttribute("href", editHref);
        }
    }
}

function updateURLParameter(url, param, value) {
    if (!url || !param) return "";

    try {
        const newUrl = new URL(url, window.location.href);
        newUrl.searchParams.set(param, value);
        return newUrl.toString();
    } catch {
        return "";
    }
}
