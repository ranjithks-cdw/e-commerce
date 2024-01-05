import { createElement } from "../../../utils/htmlUtils";
import Header from "../header/Header";

const Layout = {
    create: () => createLayout(),
    show: () => showLayout(),
};

const createLayout = () => {
    Header.navigation.create();
    
    const root = document.querySelector('#root');
    const main = createElement('main');
    root.appendChild(main);
};

const showLayout = () => {
    createLayout();
};
 
export default Layout;