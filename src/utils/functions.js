export function find(selector, context = document) {
  if (!selector) return null;
  return context.querySelector(selector);
}

export function findAll(selector, context = document) {
  if (!selector) return [];
  return Array.from(context.querySelectorAll(selector));
}

export function findClosest(el, selector) {
  if (!el || !selector) return null;
  return el.closest(selector);
}

export function on(el, event, handler, options) {
  if (!el) return;

  el.addEventListener(event, handler, options);

  return () => el.removeEventListener(event, handler);
}

export function addClass(el, className) {
  if (!el) return;
  el.classList.add(className);
}

export function removeClass(el, className) {
  if (!el) return;
  el.classList.remove(className);
}

export function toggleClass(el, className) {
  if (!el) return;
  el.classList.toggle(className);
}

export function getElements(target, context = document) {

  if (!target) return [];

  if (typeof target === "string") {
    return Array.from(context.querySelectorAll(target));
  }
  if (target instanceof Element) {
    return [target];
  }
  if (target instanceof NodeList || target instanceof HTMLCollection) {
    return Array.from(target);
  }
  if (Array.isArray(target)) {
    return target.filter(el => el instanceof Element);
  }

  return [];
}
export function hasClass(elements, className) {

  if (!elements || !className) return false;

  const list =
    elements instanceof Element
      ? [elements]
      : elements instanceof NodeList ||
        elements instanceof HTMLCollection ||
        Array.isArray(elements)
      ? Array.from(elements)
      : [];

  return list.some(el =>
    el?.classList?.contains(className)
  );
}