import { useLoaderData } from "react-router-dom";
import ComponentConfig from "../../features/componentConfig/ComponentConfig";


const Home = () => {
    const features = useLoaderData() as featureTypes;

    return ( 
        <>
            <ComponentConfig contents={features.contents} />
        </>
     );
}
 
export default Home;