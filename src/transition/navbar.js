import { addClass, removeClass } from "../utils/functions";

function get_current_menu_item_info(nav, items, default_first = true) {
    const activeItems = nav.querySelectorAll(":scope > .current-menu-parent, :scope > .current-menu-item, :scope > .active");
    let menu_item = activeItems.length > 0 ? activeItems[0] : null;

    if (!menu_item && default_first && items.length > 0) {
        menu_item = items[0];
    }
    if (!menu_item) {
        return { width: 0, height: 0, left: 0, top: 0, current: null };
    }
    return {   
        width: menu_item.offsetWidth,
        height: menu_item.offsetHeight,
        left: menu_item.offsetLeft,
        top: menu_item.offsetTop,
        current: menu_item,
        hasActive: Boolean(activeItems.length)
    };
}

function add_pt_navbar_slide(nav) {
    let navbar = nav;
    let navItems = nav.querySelectorAll(":scope > li");

    if (!navItems.length) {
        const newUl = nav.querySelector("ul");
        if (newUl) {
            navbar = newUl;
            navItems = newUl.querySelectorAll(":scope > li");
        } else {
            return false;
        }
    }

    addClass(navbar, "has-nav-slide-ind");

    if (!navbar.querySelector(".nav-indicator-back")) {
        const indicator = document.createElement("span");
        const indicator2 = document.createElement("span");
        indicator.classList.add("nav-indicator-back");
        indicator2.classList.add("nav-indicator-front");
        
        navbar.appendChild(indicator);
        navbar.appendChild(indicator2);
    }

    const indicatorBack = navbar.querySelector(".nav-indicator-back");
    const indicatorFront = navbar.querySelector(".nav-indicator-front");
    const cleanups = [];

    function int_ind(back = true, front = true, duration = 0.4) {
        if (typeof gsap === "undefined") return;

        const currentInfo = get_current_menu_item_info(navbar, navItems, true);
        const items = [];
        if (back) items.push(indicatorBack);
        if (front) items.push(indicatorFront);

        gsap.to(items, {
            duration,
            ease: "power2.out",
            position: "absolute",
            "pointer-events": "none",
            left: currentInfo.left,
            top: currentInfo.top,
            width: currentInfo.width,
            height: currentInfo.height,
            "--opacity": currentInfo.hasActive ? 1 : 0
        });
    }

    int_ind(true, true, 0);  

    let navTimeout;
    navItems.forEach(item => {
        const onMouseEnter = () => {
            if (navTimeout) clearTimeout(navTimeout);

            if (typeof gsap === "undefined") return;

            gsap.killTweensOf(indicatorBack);
            gsap.to(indicatorBack, {
                duration: 0.35,
                ease: "power2.out",
                left: item.offsetLeft,
                top: item.offsetTop,
                width: item.offsetWidth,
                height: item.offsetHeight,
                overwrite: true
            });
            indicatorBack.classList.add("active");
        };
        const onMouseLeave = () => {
            navTimeout = setTimeout(() => {
                int_ind(true, false);
                indicatorBack.classList.remove("active");
            }, 80);
        };

        item.addEventListener("mouseenter", onMouseEnter);
        item.addEventListener("mouseleave", onMouseLeave);
        cleanups.push(() => item.removeEventListener("mouseenter", onMouseEnter));
        cleanups.push(() => item.removeEventListener("mouseleave", onMouseLeave));
    });

    const onResize = () => int_ind(true, true);
    window.addEventListener("resize", onResize);
    cleanups.push(() => window.removeEventListener("resize", onResize));

    return {
        refreshBack() { int_ind(true, false); },
        refreshFront() { int_ind(false, true); },
        refresh() { int_ind(true, true); },
        destroy() {
            if (navTimeout) clearTimeout(navTimeout);
            cleanups.forEach(cleanup => cleanup());
            removeClass(navbar, "has-nav-slide-ind");
        },
    };
}

export function initNavAni(selector = ".has-pt-nav-slide") {
    const navbarEl = document.querySelector(selector);
    let nav = false;

    if (navbarEl) {
        nav = add_pt_navbar_slide(navbarEl);
    }

    return {
        hasInit: Boolean(navbarEl && nav),
        navbarEl,
        nav,
        add_pt_navbar_slide,
        get_current_menu_item_info
    };
}

export function updateNavItemsClass(oldNavbar, newNavbar) {
    if (!oldNavbar || !newNavbar) return;

    const oldItems = oldNavbar.querySelectorAll("li");
    const newItems = newNavbar.querySelectorAll("li");

    oldItems.forEach((oldItem, index) => {
        const newItem = newItems[index];
        
        if (newItem) {
            oldItem.className = "";
            const classesToAdd = Array.from(newItem.classList);
            
            if (classesToAdd.length > 0) {
                oldItem.classList.add(...classesToAdd);
            }
        }
    });
}
