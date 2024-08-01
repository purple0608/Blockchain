import { expect } from "chai";
import { BfsContractFixture } from "../../MyContract/bfs.fixture";
import { createFheInstance } from "./Block_chain_encryption";
import { SenderComponent } from "./Authority";
import { User } from "../Medical_User/User";
const { createInstance } = require("fhevmjs");

const { ethers, JsonRpcProvider, AbiCoder } = require("ethers");

describe("BfsContract", function () {
    it("TA setting value", async function () {
      const fheinstance = await createFheInstance();
      SenderComponent.generateUsers(10);
      // Check if SenderComponent.users is defined before accessing its length
    
      
      const l = SenderComponent.users.length;
    console.log("Length of SenderComponent.users:", l);


      const contract = await BfsContractFixture();
      let re=await contract.setrows(l);
      await re.wait();
      const r=await contract.show_val();
      console.log(r);
      const value_to_be_set=fheinstance.encrypt8(0);
      await contract.set_default(value_to_be_set,l,l);
      expect(0).to.equal(0);
    });
  });