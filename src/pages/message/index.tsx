import Head from "next/head"
import {ChangeEvent, useCallback, useEffect, useState} from "react"
import {BigNumber, ethers} from "ethers"

import {IWave} from "../../libs/types"
import Cd from "../../components/utils/Cd"
import Footer from "../../components/utils/Footer"
import Loader from "../../components/utils/Loader"
import abi from '../../libs/WavePortal.json'

declare global {
  interface Window {
    ethereum: any
  }
}

const getEthereumObject = () => window.ethereum

function MessagePage() {
  const [message, setMessage] = useState<string>('')
  const [currentAccount, setCurrentAccount] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [allWaves, setAllWaves] = useState<IWave[]>([])

  const contractAddress = '0x52c9c95F4B239B6F818a0C7ECA5fcB650D859299'
  const contractABI = abi.abi

  const getAllWaves = useCallback(async () => {
    try {
      const {ethereum} = window
      if (ethereum) {
        const provider: ethers.providers.Web3Provider = new ethers.providers.Web3Provider(ethereum)
        const signer: ethers.providers.JsonRpcSigner = provider.getSigner()
        const wavePortalContract: ethers.Contract = new ethers.Contract(contractAddress, contractABI, signer)
        const waves = await wavePortalContract.getAllWaves()
        console.log('1', waves)

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
  }, [contractABI])

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
      if (!currentAccount) {
        alert('pls connect wallet first')
        return
      }

      if (message === '') {
        alert('pls input value first')
        return
      }

      const {ethereum} = window
      if (ethereum) {
        const provider: ethers.providers.Web3Provider = new ethers.providers.Web3Provider(ethereum)
        const signer: ethers.providers.JsonRpcSigner = provider.getSigner()
        const wavePortalContract: ethers.Contract = new ethers.Contract(contractAddress, contractABI, signer)

        // count is BigNumber
        let count: BigNumber = await wavePortalContract.getTotalWaves()
        console.log('count: ', count, 'typeof count: ', typeof count)
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

        // setMessage empty
        setMessage('')
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
  }, [getAllWaves])

  return (
    <>
      <Head>
        <title>Message - Lesenelir Zhou</title>
        <meta name="description" content="Lesenelir's Blog built by Next.js"/>
        <link rel="icon" href={`/favicon.ico`}/>
      </Head>

      <div className={'flex flex-row justify-center'}>
        <div className={'p-6 max-w-3xl'}>
          <p className={'text-3xl font-bold flex justify-center mb-4 text-textLightStrong dark:text-textDarkStrong'}>☃️ Leave me a message</p>

          {/* Content */}
          <article className={'flex flex-col items-center leading-8 mb-4'}>
            <p>
              Connect your Ethereum wallet and leave me a message!
            </p>
            <p>
              All data will be stored {' '}
              <a
                href="https://goerli.etherscan.io/address/0x52c9c95F4B239B6F818a0C7ECA5fcB650D859299"
                rel='noreferrer'
                target='_blank'
                className={
                  'text-black dark:text-white border-solid border-b-[1px] ' +
                  'transition-colors duration-300 ease-in ' +
                  'border-b-borderUnderline border-opacity-30 hover:border-opacity-100 ' +
                  'dark:border-opacity-50 dark:hover:border-opacity-100'
                }
              >
                in the smart contract on goerli network
              </a>
              , inspired by {' '}
              <a
                href="https://buildspace.so/builds/solidity"
                rel='noreferrer'
                target='_blank'
                className={
                  'text-black dark:text-white border-solid border-b-[1px] ' +
                  'transition-colors duration-300 ease-in ' +
                  'border-b-borderUnderline border-opacity-30 hover:border-opacity-100 ' +
                  'dark:border-opacity-50 dark:hover:border-opacity-100'
                }
              >
                buildspace tutorial.
              </a>
            </p>
            <p>
              Finally, you will also have the opportunity (50%) to get the goerli ether. Enjoy it! 🎉
            </p>
          </article>

          <p className={'text-textLightStrong dark:text-textDarkStrong mb-2'}>Message:</p>
          <textarea
            rows={5}
            cols={5}
            value={message}
            placeholder={'leave your message here'}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
            className={
              'p-4 border w-full rounded-lg mt-1 resize-none focus-visible:outline-none ' +
              'transition-colors duration-300 ease-in ' +
              'text-textLight dark:text-textDark bg-bgLight dark:bg-bgDark '
            }
          />

          <button
            className={
              'w-full p-2 rounded-lg my-4 bg-buttonLightColor dark:bg-buttonDarkColor opacity-90 ' +
              'transition-colors duration-300 ease-in ' +
              'hover:text-textLightStrong dark:hover:text-textDarkStrong hover:opacity-100 '
            }
            onClick={wave}
          >
            Leave a message
          </button>
          <br/>

          {!currentAccount && (
            <button
              className={
                'w-full p-2 rounded-lg bg-buttonLightColor dark:bg-buttonDarkColor opacity-90 ' +
                'transition-colors duration-300 ease-in ' +
                'hover:text-textLightStrong dark:hover:text-textDarkStrong hover:opacity-100 '
              }
              onClick={connectWallet}
            >
              Connect Wallet
            </button>
          )}

          {isLoading && <Loader/>}

          {allWaves.map((wave: IWave) => (
            <div key={wave.timestamp.getTime()} className={'mt-4'}>
              <div>
                <span className={'text-textLightStrong dark:text-textDarkStrong'}>Address: </span>
                <span>{wave.address}</span>
              </div>
              <div>
                <span className={'text-textLightStrong dark:text-textDarkStrong'}>Time: </span>
                {wave.timestamp.toString()}
              </div>
              <div>
                <span className={'text-textLightStrong dark:text-textDarkStrong'}>Message: </span>
                <span>{wave.message.slice(0, 50)}</span>
              </div>
            </div>
          ))}

          <div className={'mt-8'}>
            <Cd/>
            <Footer/>
          </div>
        </div>
      </div>
    </>
  )
}

export default MessagePage
