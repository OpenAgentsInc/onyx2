import { BreezSDK, defaultConfig, NodeConfig } from '@breeztech/react-native-breez-sdk';
import { BREEZ_CONFIG } from './config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-get-random-values';

class BreezService {
  private static instance: BreezService;
  private sdk: BreezSDK | null = null;

  private constructor() {}

  static getInstance(): BreezService {
    if (!BreezService.instance) {
      BreezService.instance = new BreezService();
    }
    return BreezService.instance;
  }

  async initialize() {
    try {
      if (!BREEZ_CONFIG.apiKey) {
        throw new Error('Breez API key not configured');
      }

      const config = {
        ...defaultConfig,
        apiKey: BREEZ_CONFIG.apiKey,
        nodeConfig: BREEZ_CONFIG.nodeConfig as NodeConfig,
      };

      this.sdk = await BreezSDK.connect(config);
      return true;
    } catch (error) {
      console.error('Failed to initialize Breez SDK:', error);
      return false;
    }
  }

  async getBalance() {
    try {
      if (!this.sdk) throw new Error('SDK not initialized');
      const balance = await this.sdk.getBalance();
      return balance;
    } catch (error) {
      console.error('Failed to get balance:', error);
      throw error;
    }
  }

  async sendPayment(bolt11: string, amount?: number) {
    try {
      if (!this.sdk) throw new Error('SDK not initialized');
      const payment = await this.sdk.sendPayment(bolt11, amount);
      return payment;
    } catch (error) {
      console.error('Failed to send payment:', error);
      throw error;
    }
  }

  async receivePayment(amountSats: number, description: string) {
    try {
      if (!this.sdk) throw new Error('SDK not initialized');
      const invoice = await this.sdk.receivePayment(amountSats, description);
      return invoice;
    } catch (error) {
      console.error('Failed to create invoice:', error);
      throw error;
    }
  }

  async listPayments() {
    try {
      if (!this.sdk) throw new Error('SDK not initialized');
      const payments = await this.sdk.listPayments();
      return payments;
    } catch (error) {
      console.error('Failed to list payments:', error);
      throw error;
    }
  }
}

export default BreezService;