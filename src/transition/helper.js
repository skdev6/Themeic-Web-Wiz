import getHtml from "./get-html";

/**
 * Determines if Barba.js should handle the link click.
 * @param {HTMLAnchorElement} link - The clicked anchor element.
 * @param {MouseEvent} event - The click event (to check for modifier keys).
 * @returns {boolean}
 */
export function shouldBarbaHandle(link, event) {
  const href = link.getAttribute('href');
  if (!link || !href) return false;

  if (event && (event.which > 1 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)) {
    return false;
  }

  if (link.target === '_blank' || link.hasAttribute('download') || link.rel === 'external') {
    return false;
  }

  if (!href.startsWith('/') && !href.startsWith(window.location.origin)) {
    if (href.startsWith('#') || /^(mailto|tel|sms|file):/.test(href)) {
      return false;
    }
  }

  const url = new URL(href, window.location.href);
  if (url.pathname === window.location.pathname && url.search === window.location.search && url.hash !== '') {
    return false;
  }

  if (url.hostname !== window.location.hostname) {
    return false;
  }

  return true;
}

export function adjustPageScripts(newHtml) { 
    const newHeadLinks = newHtml.querySelectorAll('link[rel="stylesheet"]');
    const scripts = newHtml.querySelectorAll('script[src]');
    const currentHead = document.head;
    
    newHeadLinks.forEach((newLink) => { 
        const id = newLink.getAttribute('id');
        const href = newLink.getAttribute('href');

        if (id) {
            if (!document.getElementById(id)) {
                const clone = newLink.cloneNode(true);
                currentHead.appendChild(clone);
            }
        } 
        else if (href) {
            const exists = Array.from(currentHead.querySelectorAll('link[rel="stylesheet"]'))
                              .some(link => link.getAttribute('href') === href);
            
            if (!exists) {
                const clone = newLink.cloneNode(true);
                currentHead.appendChild(clone);
            }
        }
    });
    
    scripts.forEach(oldScript => {
        const src = oldScript.getAttribute('src');
        const id = oldScript.getAttribute('id'); // Corrected

        const alreadyExists = (id && document.getElementById(id)) || 
                            (src && document.querySelector(`script[src="${src}"]`));

        if (!alreadyExists) {
            const newScript = document.createElement('script');
            
            Array.from(oldScript.attributes).forEach(attr => {
                newScript.setAttribute(attr.name, attr.value);
            });

            newScript.async = false; 

            document.head.appendChild(newScript);
        }
    });
}

export function updateHeaderAndFooter(data, header = '.header-content-area', footer = '.footer-content-area') {
    const htmlData = getHtml(data); 

    const nextHeader = htmlData.nextHTML.querySelector(header);
    const nextFooter = htmlData.nextHTML.querySelector(footer);

    const currentHeader = document.querySelector(header);
    const currentFooter = document.querySelector(footer);

    if (nextHeader && currentHeader) {
        currentHeader.innerHTML = nextHeader.innerHTML;
    }

    if (nextFooter && currentFooter) {
        currentFooter.innerHTML = nextFooter.innerHTML;
    }
}