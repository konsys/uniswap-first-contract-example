import { HardhatUserConfig } from "hardhat/config";
import 'hardhat-deploy';
import "@nomicfoundation/hardhat-toolbox";
import 'hardhat-deploy';
import { config as dotEnvConfig } from "dotenv";
dotEnvConfig();
// import 'hardhat-deploy-ethers';

const ARBDEV_PRIVATE_KEY = process.env.ARBDEV_PRIVATE_KEY as string

const config: HardhatUserConfig = {
  solidity: {
    version: '0.7.6',
  },
  paths: {
    sources: 'contracts',
  },
  networks: {
    arbdevLev2: {
      url: 'http://localhost:8547',
      chainId: 412346,
      accounts: [ARBDEV_PRIVATE_KEY],
    },
    arbdevLev1: {
      url: 'http://localhost:8545',
      chainId: 1337,
      accounts: [ARBDEV_PRIVATE_KEY],
    }
  }
};

export default config;
