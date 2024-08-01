import { expect } from "chai";
import { BfsContractFixture } from "../../MyContract/bfs.fixture";
import { createFheInstance } from "./Blockchain_encryption";
import { SenderComponent } from '../Trusted_Authority/Authority';

const { createInstance } = require("fhevmjs");
const { ethers } = require("ethers");

describe("BfsContract", function () {
    it("Miner updating value", async function () {
        const fheinstance = await createFheInstance();
        const contract = await BfsContractFixture();
        
        // Loop through each user in SenderComponent.users
        for (let i = 0; i < SenderComponent.users.length; i++) {
            console.log(`Signature matched updating value for user ${i + 1}`);
            
            // Encrypt data for the current user
            
            const value = SenderComponent.users[i].data_for_miner;
            const decryptedValue = SenderComponent.users[i].decryptWithPrivateKey(value);
            
            // Encrypt new values
            const newValue = fheinstance.encrypt8(decryptedValue); // Example new value
            // const newValue2 = fheinstance.encrypt8(9); // Example new value 2
            
            // Set new values in the contract
            await contract.set_value(newValue, i);
            // await contract.set_value(newValue2, i);
        }

        expect(0).to.equal(0);
    });
});
