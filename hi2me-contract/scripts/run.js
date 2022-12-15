const hre = require("hardhat")

const main = async () => {
  const [deployed, randomPerson] = await hre.ethers.getSigners()
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
  let waveTxn = await waveContract.wave("A message !")
  await waveTxn.wait()

  contractBalance = await hre.ethers.provider.getBalance(waveContract.address)
  console.log("Contract balance: ", hre.ethers.utils.formatEther(contractBalance))


  // waveTxn = await waveContract.connect(randomPerson).wave("Another message !")
  // await waveTxn.wait()

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
