import { AbiCoder, JsonRpcProvider, ethers } from "ethers";
import { createInstance } from "fhevmjs";

const createFhevmInstance = async () => {
  const provider = new JsonRpcProvider("http://localhost:8545");

  // 1. Get chain id
  const network = await provider.getNetwork();
  const chainId = +network.chainId.toString();

  // 2. Get blockchain public key
  const ret = await provider.call({
    to: "0x000000000000000000000000000000000000005d",
    data: "0xd9d47bb001",
  });
  const decoded = AbiCoder.defaultAbiCoder().decode(["bytes"], ret);
  const publicKey = decoded[0];

  // 3. Create instanced
  const instance = await createInstance({ chainId, publicKey });

  // console.log(encryptedParam16);
  
  

  // Return the created instance
  return instance;
};

const createFheInstance = async () => {
  const fheInstance = await createFhevmInstance();
  return fheInstance;
};

// createFheInstance();
export { createFheInstance };

