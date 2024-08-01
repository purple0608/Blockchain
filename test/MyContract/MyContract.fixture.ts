import { ethers } from "hardhat";

import type { MyContract } from "../../types";

export async function MyContractFixture(): Promise<MyContract> {
  const contractFactory = await ethers.getContractFactory("MyContract");
  const contract = await contractFactory.deploy(); 
  await contract.waitForDeployment();

  return contract;
}
