import { URLS } from "../constants/urlConstants"
import { retrieveFromJson } from "./fetchUtils";

export const getFeatures = async (pageURL: string): Promise<featureTypes> => {
    const url = `${URLS.FEATURES}/${pageURL}`;

    const data = await retrieveFromJson(url);
    
    return data;
}