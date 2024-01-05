import { createElement } from "../../../utils/htmlUtils.js";
import Header from "../header/Header.js";
import Home from '../../../pages/home/Home.js';

export const Layout = {
    create: async () => await createLayout(),
    show: async () => await showLayout(),
};

const createLayout = async () => {
    Header.addComponent();
    
    const root = document.querySelector('#root');
    const main = createElement('main');
    root.appendChild(main);
    await Home();
};

const showLayout = async () => {
    await createLayout();
};