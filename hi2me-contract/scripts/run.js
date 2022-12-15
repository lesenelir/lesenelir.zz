const hre = require("hardhat")

const main = async () => {
  const [deployed, randomPerson] = await hre.ethers.getSigners()
  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal")
  const waveContract = await waveContractFactory.deploy()
  await waveContract.deployed();

  console.log("Contract deployed to:", waveContract.address)
  console.log("Contract deployed by:", deployed.address)

  let waveCount
  waveCount = await  waveContract.getTotalWaves()
  console.log(waveCount.toString())

  /**
   * send a few waves
   */
  let waveTxn = await waveContract.wave("A message !")
  await waveTxn.wait()

  waveTxn = await waveContract.connect(randomPerson).wave("Another message !")
  await waveTxn.wait()

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
