import { components } from "../dynamicComponent/DynamicComponent.js";

const ComponentConfig = {
    showComponents: ({contents}) => showComponents({contents}),
};

const showComponents = ({contents}) => {
    const main = document.querySelector('main');

    contents.forEach(async(content) => {
        const componentToRender = components[content] && components[content];
        if(componentToRender)
            main.append(await componentToRender.addComponent())
    });
    // main.appendChild(fragment);
}
 
export default ComponentConfig;