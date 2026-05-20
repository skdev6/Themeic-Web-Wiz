export function hasThemeicClass(elements) {
  if (!elements) return [];
    let pfx = "dGhlbWVpYy0=";
  const els = elements instanceof Element
    ? [elements]
    : Array.isArray(elements) || elements instanceof NodeList
    ? Array.from(elements)
    : [];
    let as = pfx;
    let prfx = atob(as);
  return els.filter(el =>
    el?.classList &&
    [...el.classList].some(cls => cls.startsWith(prfx))
  ).length ? true : false;
}