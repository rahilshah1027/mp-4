'use client'

import CryptoPreview from "@/components/crypto-preview";
import { fetchCrypto } from "./api/crypto";
import { useEffect, useState } from "react";
import { Currency } from "@/types";

export default function Home() {
  const [data, setData] = useState<Currency[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData(): Promise<void> {
      const rawData = await fetchCrypto();
        if (rawData.status === 429) {
          setError("You have reached the API call limit. Please try again at another time!");
        } 
        else if (rawData.status === 503) {
          setError("There was an issue with the API. Please try again at another time!");        
        } 
        else {
          const { data }: { data: Currency[] } = rawData;
          setData(data);
          setError("");
        }
    }
    fetchData()
      .then(() => console.log("success!"))
      .catch((e: Error) => console.log("error! -> " + e));
  }, [data.length]);


  if (error !== "") {
    return <div>{error}</div>; 
  }

  return (
    <div>
      <CryptoPreview data={data}/> 
    </div>
  );
}
