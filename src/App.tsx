import { useAccount } from 'wagmi'
import { Home } from './Pages/Home'

// import { Account } from './components/Account'
// import { Balance } from './components/Balance'
// import { BlockNumber } from './components/BlockNumber'
// import { Connect } from './components/Connect'
// import { NetworkSwitcher } from './components/NetworkSwitcher'
// import { ReadContract } from './components/ReadContract'
// import { ReadContracts } from './components/ReadContracts'
// import { ReadContractsInfinite } from './components/ReadContractsInfinite'
// import { SendTransaction } from './components/SendTransaction'
// import { SendTransactionPrepared } from './components/SendTransactionPrepared'
// import { SignMessage } from './components/SignMessage'
// import { SignTypedData } from './components/SignTypedData'
// import { Token } from './components/Token'
// import { WatchContractEvents } from './components/WatchContractEvents'
// import { WatchPendingTransactions } from './components/WatchPendingTransactions'
// import { WriteContract } from './components/WriteContract'
// import { WriteContractPrepared } from './components/WriteContractPrepared'

export function App() {
  const { isConnected } = useAccount()

  return (
    <>
      <h1>Bvote</h1>
      <Home/>

    </>
  )
}
