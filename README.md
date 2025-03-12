# Onyx2 - Lightning-Enabled Mobile Wallet

A React Native Expo app implementing the Breez SDK for Lightning Network functionality.

## About

This app uses the Breez SDK Nodeless (Liquid Implementation) to provide:

- Self-custodial Lightning payments
- On-chain interoperability 
- LNURL & Lightning address support
- Multi-asset support (BTC, USDT)
- Fiat on-ramps
- Real-time state backup

## Features

- Send/receive Lightning payments via:
  - BOLT11 invoices
  - LNURL-pay
  - Lightning addresses
  - BTC addresses
- Wallet functionality:
  - Balance checking
  - Payment limits
  - Transaction history
- Push notifications for payments
- Multi-device support
- User-held keys

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the app:
```bash
npx expo start
```

The app will be available on:
- [Development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go)

## Development

This project uses:
- [Expo](https://expo.dev) with file-based routing
- [Breez SDK](https://sdk-doc-liquid.breez.technology/) for Lightning functionality
- React Native for cross-platform mobile development

## Learn More

- [Expo Documentation](https://docs.expo.dev/)
- [Breez SDK Documentation](https://sdk-doc-liquid.breez.technology/)
- [React Native](https://reactnative.dev/)