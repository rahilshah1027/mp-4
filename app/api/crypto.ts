'use server'

export async function fetchCrypto() {
    try {
        const CRYPTO_API_KEY = String(process.env.CRYPTO_API_KEY);
        const response = await fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
            headers: {
                'X-CMC_PRO_API_KEY': CRYPTO_API_KEY,
            },
        });
        const data = await response.json();
        return data; 
    }   
    catch (e) {
        console.log(e)
        return e
    }
}