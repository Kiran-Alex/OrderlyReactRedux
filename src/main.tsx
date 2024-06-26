import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThirdwebProvider,  metamaskWallet,
  zerionWallet,
  walletConnect, } from '@thirdweb-dev/react'
import { store } from './app/store/store.ts'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
    <ThirdwebProvider
     supportedWallets={[
      metamaskWallet({
        recommended: true,
      }),
      zerionWallet({
        recommended: true,
      }),
      walletConnect(),
    ]}
    activeChain={"arbitrum-sepolia"}
    
    clientId={import.meta.env.VITE_THIRD_WEB_CLIENT_ID}
    >
    <App />
    </ThirdwebProvider>
    </Provider>
  </React.StrictMode>,
)
