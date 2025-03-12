export const BREEZ_CONFIG = {
  apiKey: process.env.EXPO_PUBLIC_BREEZ_API_KEY || '', // Get from Breez
  nodeConfig: {
    type: 'LIQUID',
    network: 'mainnet', // or 'testnet'
  },
};