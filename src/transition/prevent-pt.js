import { getElements, hasClass } from "../utils/functions";
import barba from '@barba/core';

export function preventUrl(el) {
    if (!el) return true;

    if (el.closest("#wpadminbar")) {
        barba.destroy();
        return true;
    }

    if (hasClass(el, "prevent-pt")) {
        return true;
    }

    if (hasClass(el, "prevent-transition")) {
        return true;
    }

    if (el.closest(".comments-area")) {
        barba.destroy();
        return true;
    }

    if (hasClass(getElements("body")[0], "elementor-editor-active")) {
        barba.destroy();
        return true;
    }

    return false;
}
