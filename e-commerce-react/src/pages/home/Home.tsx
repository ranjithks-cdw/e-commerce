import { useLoaderData } from "react-router-dom";
import JsonContent from "../../features/jsonContent/JsonContent";


const Home = () => {
    const features = useLoaderData() as featureTypes;

    return ( 
        <>
            <JsonContent contents={features.contents} />
        </>
     );
}
 
export default Home;