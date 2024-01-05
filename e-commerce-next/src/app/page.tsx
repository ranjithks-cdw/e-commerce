import { URLS } from '@/constants/urlConstants';
import JsonContent from '@/features/jsonContent/JsonContent';
import { retrieveFromJson } from '@/utils/fetchUtils';

const Home = async () => {
  const features: featureTypes = await getFeatures();
  return (
    <>
      <JsonContent contents={features?.contents} />
    </>
  );
};

const getFeatures = async () => {
  const homeURL = `${URLS.FEATURES}/home`;
  const features = await retrieveFromJson(homeURL);
  
  return {contents: features?.contents};
}

export default Home;
