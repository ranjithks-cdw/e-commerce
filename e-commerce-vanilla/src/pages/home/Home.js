import ComponentConfig from "../../features/componentConfig/ComponentConfig.js";

const getFeatures = async () => {
    let data;
    try {
        const response = await fetch("https://ecomm.free.beeceptor.com/home");
        const stream = await response.text();
        data = JSON.parse(stream);
    }
    catch(error) {
        console.error(error);
    }
    finally {
        return data;
    }
}

const Home = async () => {
    const data = await getFeatures();
    ComponentConfig.showComponents(data);
};

export default Home;