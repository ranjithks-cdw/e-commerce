/**
 * create an element with  CSS class and id
 */
export const createElement = (tag, attributes) => {
    const attr = attributes && attributes;
    const el = Object.assign(
        document.createElement(tag), {...attr}
    );

    return el;
};

/**
 * create an text node element
 */
export const createTextNode = (text) => {
    const el = document.createTextNode(text);
    return el;
};
