export function pt_fadeInOut(data, callback){
    let currentEl = data.current.container;
    let nextEl = data.next.container;
    gsap.set(nextEl, {
        opacity:0,
        position:'absolute'
    })
    gsap.to(currentEl, {
        opacity:0,
        duration:.5,
        ease:'expo.out',
        onComplete(){ 
            callback();
            gsap.set(nextEl, {
                position:''
            })
            gsap.to(nextEl, {
                opacity:1,
                duration:.5,
                ease:'expo.out'
            })
        }
    })
}