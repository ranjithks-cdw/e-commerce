import { APP_PATHS } from "../../../constants/routeConstants.js";
import { createElement } from "../../../utils/htmlUtils.js";

const Header =  {
    addComponent: () => createNavigation(),
};

const createNavigation = () => {
    const root = document.querySelector('#root');
    const header = createHeader();
    root.appendChild(header);
}

const createHeader = () =>{
    const header = createElement("header", { 
        classname : "app-header"
    });
    const headerContainer = createElement("div",{
        className : "header-container"
    });
    const appLogo = createElement("div",{
        className: "app-logo",
    });
    const appLogoContent = createElement("a",{
        textContent : APP_PATHS.HOME.TITLE
    });
    const mainMenu = createElement("div",{
        className: "main-menu",
    });
    const mainMenuContent = createElement("a",{
        textContent : APP_PATHS.PRODUCTS.TITLE
    });
    const userMenu = createElement("div",{
        className: "user-menu",
    });
    const userCartTitle = createElement("a",{
        textContent : APP_PATHS.CART.TITLE
    });
    const userOrderTitle = createElement("a",{
        textContent : APP_PATHS.ORDERS.TITLE
    });
    const userLoginTitle = createElement("a",{
        textContent : APP_PATHS.LOGIN.TITLE
    });
    appLogo.append(appLogoContent);

    mainMenu.append(mainMenuContent);

    userMenu.append(userCartTitle);
    userMenu.append(userOrderTitle);
    userMenu.append(userLoginTitle);

    headerContainer.append(appLogo);
    headerContainer.append(mainMenu);
    headerContainer.append(userMenu);
    header.append(headerContainer);

    return header;
}
export default Header;