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

  const encryptedParam8 = instance.encrypt8(14);
  const encryptedParam16 = instance.encrypt16(1234);
  const encryptedParam32 = instance.encrypt32(71721075);
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

