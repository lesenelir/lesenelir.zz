require("@nomicfoundation/hardhat-toolbox")
// import dotenv
require("dotenv").config({ path: ".env" })

const ALCHEMY_KEY = process.env.ALCHEMY_KEY
const PRIVATE_KEY = process.env.PRIVATE_KEY


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: ALCHEMY_KEY,
      accounts: [PRIVATE_KEY]
    }
  }
}
