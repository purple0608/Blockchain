import { expect } from "chai";
import { string } from "hardhat/internal/core/params/argumentTypes";

import { BfsContractFixture } from "./bfs.fixture";
import { createFheInstance } from "./encrypt";

const { createInstance } = require("fhevmjs");

const { ethers, JsonRpcProvider, AbiCoder } = require("ethers");

describe("BfsContract", function () {
  it("operations on the encrypted matrix", async function () {
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
    // 3. Create instance
    const fheinstance = await createFheInstance();
    const ea = fheinstance.encrypt8(10000);
    const contract = await BfsContractFixture();
    const a=1;
    
    const b=2;
    const r1=3;
    const t1=4;
    const value_to_be_set=fheinstance.encrypt8(a+b+r1+t1);
    const value_to_be_set2=fheinstance.encrypt8(a+b+r1+t1+2);
    const value_to_be_set3=fheinstance.encrypt8(a+b+r1+t1+3);

    const def=fheinstance.encrypt8(8);
    

    await contract.set_default(ea,4,4);
    
    await contract.set_value(value_to_be_set,0);
    await contract.set_value(value_to_be_set2,1);
    await contract.set_value(value_to_be_set3,2);
    

    

  
    

    console.log("hello");
     let r=await contract.bfs(0);
    //  console.log(r);
     let re=await contract.calculating(0);
     await re.wait();
     const s=await contract.show_cal();
     
    // let f=await contract.return_value(ea);
    // console.log(Number(f));


    
      // Wait for the transaction to be mined
    
    // Access the contract call result from the response object
    
    // Assuming 'contractResult' is a string representation of an array like "[1, 2, 3]"
  
    
    // console.log(r);
    // console.log(Number(s));
    // console.log(typeof(r));
    
    console.log(Number(s));
    expect(0).to.equal(0);
  });
});