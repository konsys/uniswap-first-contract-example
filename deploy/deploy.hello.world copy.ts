import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
import { ethers } from 'hardhat';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts } = hre;
  const { deploy } = deployments;

  const { deployer, tokenOwner } = await getNamedAccounts();

  await deploy('HelloWorld', {
    from: deployer,
    args: ['test'],
    log: true,
  });
};  
export default func;
func.tags = ['HelloWorld'];

// await ethers.provider.getStorage('0x5fbdb2315678afecb367f032d93f642f64180aa3', 0)
// ethers.decodeBytes32String('0x7365637265740000000000000000000000000000000000000000000000000000')