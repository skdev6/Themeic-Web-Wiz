export default function getHtml(data = null) {
    const next = data?.next?.html;
    const current = data?.current?.html;

    if (!next && !current) return null;

    const parser = new DOMParser();

    return {
        nextHTML: next ? parser.parseFromString(next, "text/html") : null,
        currentHTML: current ? parser.parseFromString(current, "text/html") : null
    };
}
