export default function headerAni(h = '.elementor-location-header, .header-content-area'){
    let header = document.querySelectorAll(h);
    return{
        start(duration = .5){
            gsap.set(header, {transition:'none'})
            gsap.to(header, {
                ...document.querySelectorAll('#wpadminbar').length ?  {} :{y:-20},
                opacity:0,
                duration,
                ease:'expo.out'
            })
        },
        end(duration = .5, delay = 0){  
            gsap.to(header, {
                ...document.querySelectorAll('#wpadminbar').length ?  {} : {y:0}, 
                delay,
                opacity:1,
                duration,
                ease:'expo.out',
                onComplete(){
                    header.forEach(e=>e.setAttribute('style', ''));
                }
            })
        }
    }
}

