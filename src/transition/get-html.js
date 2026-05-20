export default function getHtml(data = false){
    if(!data) return;
    let parser = new DOMParser();
    let nextHTML = parser.parseFromString(data.next.html, "text/html");
    let currentHTML = parser.parseFromString(data.current.html, "text/html");
    return{nextHTML,currentHTML}
}