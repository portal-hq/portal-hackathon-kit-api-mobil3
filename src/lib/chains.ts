import { HACKATHON_CONFIG, type ChainConfig } from "@/config";

export type { ChainConfig };

export const CHAIN_CONFIGS: ChainConfig[] = [HACKATHON_CONFIG.defaultChain];

// Helper function to get RPC URL by chain ID
export function getRpcUrlByChainId(chainId: string): string | undefined {
  return CHAIN_CONFIGS.find((config) => config.chainId === chainId)?.rpcUrl;
}
