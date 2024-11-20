import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import { ethers } from 'hardhat';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;

  const { deployer } = await getNamedAccounts();

  await deploy('SimpleSwap', {
    from: deployer,
    args: ['0xE592427A0AEce92De3Edee1F18E0157C05861564'],
    log: true,
  });
};  
export default func;
func.tags = ['SimpleSwap'];

// await ethers.provider.getStorage('0x5fbdb2315678afecb367f032d93f642f64180aa3', 0)
// ethers.decodeBytes32String('0x7365637265740000000000000000000000000000000000000000000000000000')