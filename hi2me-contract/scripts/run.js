const hre = require("hardhat")

const main = async () => {
  const [deployed] = await hre.ethers.getSigners()
  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal")
  const waveContract = await waveContractFactory.deploy(
    {value: hre.ethers.utils.parseEther("0.1")}
  )
  await waveContract.deployed();

  console.log("Contract deployed to:", waveContract.address)
  console.log("Contract deployed by:", deployed.address)

  /**
   * get contract balance
   */
  let contractBalance = await hre.ethers.provider.getBalance(waveContract.address)
  console.log("Contract balance: ", hre.ethers.utils.formatEther(contractBalance))

  // records wave count
  let waveCount
  waveCount = await  waveContract.getTotalWaves()
  console.log(waveCount.toString())

  /**
   * send a few waves
   */
  const waveTxn = await waveContract.wave("This is wave #1")
  await waveTxn.wait()

  const waveTxn2 = await waveContract.wave("This is wave #2")
  await waveTxn2.wait()

  contractBalance = await hre.ethers.provider.getBalance(waveContract.address)
  console.log("Contract balance: ", hre.ethers.utils.formatEther(contractBalance))

  let allWaves = await waveContract.getAllWaves()
  console.log(allWaves)
}

const runMain = async () => {
  try {
    await main()
    process.exit(0)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

runMain().then(r => console.log(r))
