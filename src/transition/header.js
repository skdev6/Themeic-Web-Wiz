export default function headerAni(selector = ".elementor-location-header, .header-content-area") {
    const header = document.querySelectorAll(selector);
    const hasAdminBar = () => document.querySelector("#wpadminbar");

    return {
        start(duration = 0.5) {
            if (!header.length || typeof gsap === "undefined") return;

            gsap.set(header, { transition: "none" });
            gsap.to(header, {
                ...(hasAdminBar() ? {} : { y: -20 }),
                opacity: 0,
                duration,
                ease: "expo.out"
            });
        },
        end(duration = 0.5, delay = 0) {
            if (!header.length || typeof gsap === "undefined") return;

            gsap.to(header, {
                ...(hasAdminBar() ? {} : { y: 0 }),
                delay,
                opacity: 1,
                duration,
                ease: "expo.out",
                onComplete() {
                    header.forEach(element => element.removeAttribute("style"));
                }
            });
        }
    };
}
