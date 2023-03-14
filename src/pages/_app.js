
import '@rainbow-me/rainbowkit/styles.css'
import '@/styles/styles.css';
import "@/styles/globals.css"
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, goerli, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum, polygonMumbai } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';



import { Poppins } from "next/font/google"

import { getDefaultProvider } from 'ethers';

const { chains, provider } = configureChains(
  [mainnet, polygonMumbai, polygon, optimism, goerli, arbitrum],
  [
    publicProvider()
  ]
)

const { connectors } = getDefaultWallets({
  appName: "Testing my ReFi App",
  chains,
});

const wagmiClient = createClient({
  autoConnect: false,
  connectors,
  provider
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "500", "700", "900"],
});

export default function App({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <style jsx global>{`
        html {
          font-family: ${poppins.style.fontFamily};
        }
      `}</style>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
