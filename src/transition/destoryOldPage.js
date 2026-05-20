export default function destroyOldPage() {
    window.scrollTo(0, 0);
    if (typeof ScrollTrigger !== "undefined") {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    }
    gsap.killTweensOf("*");
}