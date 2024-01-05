import { Suspense } from "react";
import { components } from "../dynamicComponent/DynamicComponent";
import Loader from "../../shared/components/loader/Loader";

const JsonContent = ({contents}: featureTypes) => {
    const data = contents?.map((content, index) => {
        const ComponentToRender = (components as any)[content] && (components as any)[content].component;
        return (
                <Suspense fallback={<Loader />} key={index}>
                    {ComponentToRender && <ComponentToRender />}
                </Suspense>
            );
    });

    return ( 
        <>
            {data}
        </>
     );
};

export default JsonContent;