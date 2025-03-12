import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { useBreez } from '../hooks/useBreez';

export default function WalletScreen() {
  const { breezService, isInitialized, error } = useBreez();
  const [balance, setBalance] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBalance = async () => {
      if (!isInitialized) return;
      
      try {
        const walletBalance = await breezService.getBalance();
        setBalance(walletBalance.liquid);
      } catch (err) {
        console.error('Error fetching balance:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchBalance();
  }, [isInitialized]);

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>Error: {error}</Text>
      </View>
    );
  }

  if (!isInitialized || loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
        <Text>Initializing wallet...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Wallet</Text>
      <Text style={styles.balance}>Balance: {balance ?? 0} L-BTC</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  balance: {
    fontSize: 18,
  },
  error: {
    color: 'red',
    textAlign: 'center',
  },
});