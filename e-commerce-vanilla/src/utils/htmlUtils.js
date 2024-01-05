/**
 * create an element with  CSS class
 */
export const createElement = (tag, className) => {
    const el = document.createElement(tag);

    el.className = className;
    return el;
};

/**
 * create an text node element
 */
export const createTextNode = (text) => {
    const el = document.createTextNode(text);
    return el;
};
