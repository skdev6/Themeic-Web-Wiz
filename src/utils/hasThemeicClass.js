export function hasThemeicClass(elements) {
  if (!elements) return false;

  const list =
    elements instanceof Element
      ? [elements]
      : elements instanceof NodeList ||
        elements instanceof HTMLCollection ||
        Array.isArray(elements)
      ? Array.from(elements)
      : [];

  return list.some(element =>
    element instanceof Element &&
    Array.from(element.classList).some(className => className.startsWith("themeic-"))
  );
}
