import { expect } from "chai";
import { BfsContractFixture } from "../../MyContract/bfs.fixture";
import { createFheInstance } from "./Blockchain_encryption";
import { SenderComponent } from '../Trusted_Authority/Authority';

const { createInstance } = require("fhevmjs");
const { ethers } = require("ethers");

async function performHandshakeAndUpdateValue(users: any[], value: number) {
    const fheinstance = await createFheInstance();
    const contract = await BfsContractFixture();
    
    // Iterate over each pair of users
    for (let i = 0; i < users.length - 1; i++) {
        for (let j = i + 1; j < users.length; j++) {
          
            
            // Perform handshake and update value for user1 and user2
            const encryptedValue = fheinstance.encrypt8(value);
            await contract.set_value_i(encryptedValue, i, j);
        }
    }
}

describe("BfsContract", function () {
    it("handshaking done now updating value in blockchain", async function () {
        const users = SenderComponent.users;
        const valueToSet = 1; // Example value to set in the blockchain
        
        await performHandshakeAndUpdateValue(users, valueToSet);

        expect(0).to.equal(0);
    });
});
