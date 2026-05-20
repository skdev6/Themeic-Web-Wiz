import destroyOldPage from "./destoryOldPage";

export function pt_fadeInOut(data, callback = () => {}) {
    const currentEl = data?.current?.container;
    const nextEl = data?.next?.container;

    if (!currentEl || !nextEl || typeof gsap === "undefined") {
        callback();
        return;
    }

    gsap.set(nextEl, { opacity: 0, position: "absolute" });

    gsap.to(currentEl, {
        opacity: 0,
        duration: 0.5,
        ease: "expo.out",
        onComplete() {  
            destroyOldPage();
            gsap.to(nextEl, {
                opacity: 1,
                delay:.1,
                duration: 0.5,
                ease: "expo.out",
                onStart: ()=>{
                    callback();
                    gsap.set(nextEl, { clearProps: "position, opacity" });
                }
            });
        }
    });
}  