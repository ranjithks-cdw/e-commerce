import { Suspense } from "react";
import { components } from "../dynamicComponent/DynamicComponent";
import Loader from "@/shared/components/loader/Loader";

const JsonContent = async ({contents}: featureTypes) => {
    const data = contents?.map((content, index) => {
        const ComponentToRender = components[content] && components[content].component;
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