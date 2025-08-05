// Hackathon Configuration
// Update these values to quickly adapt this repository for different hackathons

export interface TokenConfig {
  symbol: string;
  name: string;
  contractAddress?: string;
  decimals?: number;
  description?: string;
}

export interface ChainConfig {
  id: string;
  name: string;
  chainId: string;
  rpcUrl: string;
}

export interface FaucetConfig {
  url: string;
  name: string;
  description: string;
}

export interface HackathonConfig {
  // Basic Info
  hackathonName: string;
  packageName: string;

  // Chain Configuration
  defaultChain: ChainConfig;

  // Token Configuration
  nativeToken: TokenConfig;
  featuredTokens: TokenConfig[];

  // External Links
  faucets: FaucetConfig[];
  documentation: {
    name: string;
    url: string;
    description: string;
  }[];

  // Funding Configuration
  defaultFundAmount: string;
}

// Current Hackathon: mobil3
export const HACKATHON_CONFIG: HackathonConfig = {
  // Basic Info
  hackathonName: "mobil3",
  packageName: "portal-hackathon-kit-api-mobil3",

  // Chain Configuration
  defaultChain: {
    id: "monad-testnet",
    name: "Monad Testnet",
    chainId: "eip155:10143",
    rpcUrl: "https://testnet-rpc.monad.xyz",
  },

  // Token Configuration
  nativeToken: {
    symbol: "MON",
    name: "Monad",
    description: "The native token of Monad Testnet",
  },

  featuredTokens: [
    {
      symbol: "USDC",
      name: "USD Coin",
      contractAddress: "0xf817257fed379853cDe0fa4F97AB987181B1E5Ea",
      decimals: 6,
      description:
        "USD Coin on Monad Testnet - demonstrates ERC-20 token integration and transfers",
    },
  ],

  // External Links
  faucets: [
    {
      url: "https://faucet.testnet.monad.xyz/",
      name: "Monad Testnet Faucet",
      description: "Get testnet MON tokens",
    },
  ],

  documentation: [
    {
      name: "Monad Docs",
      url: "https://docs.monad.xyz/",
      description: "Official Monad documentation",
    },
  ],

  // Funding Configuration
  defaultFundAmount: "0.01",
};

// Export individual configs for convenience
export const { defaultChain, nativeToken, featuredTokens } = HACKATHON_CONFIG;
