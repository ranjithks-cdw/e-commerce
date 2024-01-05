export const retrieveFromJson: any = async (url: string) => {
    let data;
    try {
        const response = await fetch(url);
        const stream = await response.text();
        data = JSON.parse(stream);
    }
    catch(error) {
        console.error(error);
    }
    finally {
        return data;
    }
};