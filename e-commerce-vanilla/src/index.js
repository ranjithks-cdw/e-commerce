// import {Layout} from "../src/shared/components/layout/Layout.js";
const {Layout} = await import('../src/shared/components/layout/Layout.js');

const startApp = () => {
    Layout.show();
    console.log(Layout)
};

startApp();