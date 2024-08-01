import { ethers } from "hardhat";
import { BfsContract } from "../../examples/BfsContract";

export async function BfsContractFixture(): Promise<BfsContract> {
  const contractFactory = await ethers.getContractFactory("BfsContract");
  const contract = await contractFactory.deploy(); // City of Zama's battle
  await contract.waitForDeployment();

  return contract;
}
