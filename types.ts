export interface Currency {
    id: string;
    name: string;
    symbol: string;
    cmc_rank: number;
    quote: {
      USD: {
        price: number;
        market_cap: number;
      };
    };
  }