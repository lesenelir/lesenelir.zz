import {useEffect, useState} from "react"
import {ethers} from "ethers"
import Loader from "../Loading/loader"
import abi from '../../lib/WavePortal.json'

import styles from '../../styles/hi.module.css'

const getEthereumObject = () => window.ethereum

function Hi() {
  const [currentAccount, setCurrentAccount] = useState('')
  const [allWaves, setAllWaves] = useState([])
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const contractAddress = '0x65801DE1bD76737e8F683DF6baDE47d25A17ae65'
  const contractABI = abi.abi

  const getAllWaves = async () => {
    try {
      const {ethereum} = window
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum)
        const signer = provider.getSigner()
        const wavePortalContract = new ethers.Contract(contractAddress, contractABI, signer)
        const waves = await wavePortalContract.getAllWaves()

        const wavesCleaned = waves.map(wave => {
          return {
            address: wave.waver,
            timestamp: new Date(wave.timestamp * 1000),
            message: wave.message
          }
        })
        setAllWaves(wavesCleaned)
      } else {
        console.log("Ethereum object doesn't exist!")
      }
    } catch (error) {
      console.log(error)
    }
  }

  const connectWallet = async () => {
    try {
      const ethereum = getEthereumObject()
      if (!ethereum) {
        alert("Please install Metamask!")
        return
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts"
      })

      console.log("Connected", accounts[0])
      setCurrentAccount(accounts[0])

      // getAllWaves after connect wallet
      await getAllWaves()
    } catch (error) {
      console.error(error)
    }
  }

  const checkIfWalletIsConnected = async () => {
    try {
      const {ethereum} = window

      if (!ethereum) {
        console.log("Make sure you have metamask!")
        return
      } else {
        console.log("We have the ethereum object", ethereum)
      }

      const accounts = await ethereum.request({method: 'eth_accounts'})

      if (accounts.length !== 0) {
        const account = accounts[0]
        console.log("Found an authorized account:", account)
        setCurrentAccount(account)
      } else {
        console.log("No authorized account found")
      }
    } catch (error) {
      console.log(error)
    }
  }

  const wave = async () => {
    try {
      const {ethereum} = window
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum)
        const signer = provider.getSigner()
        const wavePortalContract = new ethers.Contract(contractAddress, contractABI, signer)

        let count = await wavePortalContract.getTotalWaves()
        console.log("Retrieved total wave count...", count.toNumber())

        /*
        * Execute the actual wave from your smart contract
        */
        const waveTxn = await wavePortalContract.wave(message, {gasLimit: 300000})
        console.log("Mining...", waveTxn.hash)
        setIsLoading(true)

        await waveTxn.wait()
        console.log("Mined -- ", waveTxn.hash)
        setIsLoading(false)

        count = await wavePortalContract.getTotalWaves()
        console.log("Retrieved total wave count...", count.toNumber())

        // getAllWaves after connect wallet
        await getAllWaves()
      } else {
        console.log("Ethereum object doesn't exist!")
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    (async () => {
      await checkIfWalletIsConnected()
    })()

    // checkIfWalletIsConnected().then(r => console.log(r))
  }, [])

  useEffect(() => {
    (async () => {
      await getAllWaves()
    })()
  }, [])


  return (
    <div className={styles.mainContainer}>
      <div className={styles.dataContainer}>
        <div className={styles.header}>
          ☃️ Leave me a message
        </div>

        <div className={styles.bio}>
          <p>
            Connect your Ethereum wallet and leave me a message!
          </p>
          <p>
            All data will be stored {' '}
            <a
              href="https://goerli.etherscan.io"
              rel='noreferrer'
              target='_blank'
              className={styles.link}
            >
              in the smart contract on goerli network
            </a>
            , inspired by {' '}
            <a
              href="https://buildspace.so/builds/solidity"
              rel='noreferrer'
              target='_blank'
              className={styles.link}
            >
              buildspace tutorial.
            </a>
          </p>
          <p>
            Finally, you will also have the opportunity (50%) to get the goerli ether. Enjoy it! 🎉
          </p>
        </div>

        <span className={styles.spanWord}>Message:</span>
        <textarea name="message" className={styles.area} onChange={(e) => setMessage(e.target.value)}/>

        <button className={styles.button} onClick={wave}>
          Leave a message
        </button>

        {!currentAccount && (
          <button className={styles.button} onClick={connectWallet}>
            Connect Wallet
          </button>
        )}

        {isLoading && <Loader/>}

        {allWaves.map(wave => (
          <div key={wave.timestamp} className={styles.item}>
            <div>
              <span className={styles.spanWord}>Address: </span>
              <span>{wave.address}</span>
            </div>
            <div>
              <span className={styles.spanWord}>Time: </span>
              {wave.timestamp.toString()}
            </div>
            <div>
              <span className={styles.spanWord}>Message: </span>
              <span>{wave.message.slice(0, 50)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Hi
