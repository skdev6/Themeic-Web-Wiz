import { addClass, removeClass } from "../utils/functions";

function get_current_menu_item_info(nav, items, default_first = true) {
    const activeItems = nav.querySelectorAll(':scope > .current-menu-parent, :scope > .current-menu-item, :scope > .active');
    
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
        hasActive:activeItems.length ? true : false
    };
}

function add_pt_navbar_slide(nav) {
    let navbar = nav;
    let navItems = nav.querySelectorAll(':scope > li');

    // Fallback to internal UL if the parent is just a wrapper
    if (!navItems.length) {
        let newUl = nav.querySelector('ul');
        if (newUl) {
            navbar = newUl;
            navItems = newUl.querySelectorAll(':scope > li');
        } else {
            return false;
        }
    }
    addClass(navbar, 'has-nav-slide-ind');
    // Fix: Added dots to selectors
    if (!navbar.querySelector('.nav-indicator-back')) {  
        let indicator = document.createElement('span');
        let indicator2 = document.createElement('span');
        indicator.classList.add('nav-indicator-back');
        indicator2.classList.add('nav-indicator-front');
        
        navbar.appendChild(indicator);
        navbar.appendChild(indicator2);
    }

    let indicatorBack = navbar.querySelector('.nav-indicator-back');
    let indicatorFront = navbar.querySelector('.nav-indicator-front');  

    function int_ind(back = true, front = true, duration = .4) {
        // Assuming this helper function exists in your project
        const currentInfo = get_current_menu_item_info(navbar, navItems, true);
        let items = [];
        if (back) items.push(indicatorBack);
        if (front) items.push(indicatorFront);

        gsap.to(items, { // Use .to for a smooth reset
            duration,
            ease: "power2.out",
            position: 'absolute',
            'pointer-events': 'none',
            left: currentInfo.left,
            top: currentInfo.top,
            width: currentInfo.width,
            height: currentInfo.height,
            '--opacity':currentInfo.hasActive ? 1 : 0
        });
    }

    // Initial position
    int_ind(true, true, 0);  

    let navTimeout;
    navItems.forEach(item => { 
        item.addEventListener('mouseenter', () => {
            // 1. Cancel any pending reset to the "current" item
            if (navTimeout) clearTimeout(navTimeout);

            gsap.killTweensOf(indicatorBack);

            gsap.to(indicatorBack, {
                duration: 0.35,
                ease: "power2.out",
                left: item.offsetLeft,
                top: item.offsetTop,
                width: item.offsetWidth,
                height: item.offsetHeight,
                overwrite: true // Ensure this animation wins
            });
            indicatorBack.classList.add('active');
        });
        item.addEventListener('mouseleave', () => {
            navTimeout = setTimeout(() => {
                int_ind(true, false); // Returns to current active item
                indicatorBack.classList.remove('active');
            }, 80); // 80ms is the "sweet spot" for human eye persistence
        });
    });

    window.addEventListener('resize', () => int_ind(true, true));  

    return {   
        refreshBack() { int_ind(true, false); },
        refreshFront() { int_ind(false, true); },
        refresh() { int_ind(true, true); },
    };
}

export function initNavAni(selector = '.has-pt-nav-slide') {   
    let navbarEl = document.querySelector(selector);
    let nav = false;
    if (navbarEl) {
        nav = add_pt_navbar_slide(navbarEl);
    }
    return{
        hasInit:navbarEl ? true : false,
        navbarEl,
        nav,
        add_pt_navbar_slide,
        get_current_menu_item_info
    };  
}

export function updateNavItemsClass(oldNavbar, newNavbar) {
    // 1. Target direct LI items
    if(!oldNavbar || !newNavbar) return;  

    const oldItems = oldNavbar.querySelectorAll('li');
    const newItems = newNavbar.querySelectorAll('li');

    oldItems.forEach((oldItem, index) => {
        const newItem = newItems[index];
        
        if (newItem) {
            // 2. Clear existing classes on the item we want to update
            oldItem.className = '';

            // 3. Convert oldItem classList to an array and apply to newItem
            const classesToAdd = Array.from(newItem.classList);
            
            if (classesToAdd.length > 0) {
                oldItem.classList.add(...classesToAdd);
            }
        }
    });
}