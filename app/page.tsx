import CryptoPreview from "@/components/crypto-preview";
import { fetchCrypto } from "./api/crypto";
import { Currency } from "@/types";

export default async function Home() {
  const rawData = await fetchCrypto();
    if (rawData.status === 429) {
      return <div>{"You have reached the API call limit. Please try again at another time!"}</div>; 
    } 
    else if (rawData.status === 503) {
      return <div>{"There was an issue with the API. Please try again at another time!"}</div>; 
    } 
    else {
      const { data } : { data: Currency[] } = rawData;
      return (
        <div>
          <CryptoPreview data={data}/> 
        </div>
      );
    }
}
