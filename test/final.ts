import { expect } from "chai";
import { BfsContractFixture } from "./MyContract/bfs.fixture";
import { createFheInstance } from "./Agencies/Trusted_Authority/Block_chain_encryption";
import { SenderComponent } from "./Agencies/Trusted_Authority/Authority";
const { createInstance } = require("fhevmjs");
import * as readline from "readline";
import { isFunctionExpression } from "typescript";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const { ethers, JsonRpcProvider, AbiCoder } = require("ethers");

describe("BfsContract", function () {
    it("should perform various operations on the contract", async function () {
        const fheinstance = await createFheInstance();
        const contract = await BfsContractFixture();
        const provider = new JsonRpcProvider("http://localhost:8545");
        const gaslimit = 2000000000;

        // Get chain id
        const network = await provider.getNetwork();
        const chainId = +network.chainId.toString();

        // Get blockchain public key
        const ret = await provider.call({
            to: "0x000000000000000000000000000000000000005d",
            data: "0xd9d47bb001",
        });
        const decoded = AbiCoder.defaultAbiCoder().decode(["bytes"], ret);
        const publicKey = decoded[0];

        // TA setting value
        console.log("Setting value by Trusted Authority...");
      //   rl.question("Please the number of medical users: ", (userInput) => {
      //     console.log("User entered:", userInput);
      //     rl.close();
      // });
        SenderComponent.generateUsers(3);
        const l = SenderComponent.users.length;
        console.log("Length of SenderComponent.users:", l);
        let re = await contract.setrows(l);
        await re.wait();
        const r = await contract.show_val();
        console.log("Value after setting rows:", r);
        const value_to_be_set = fheinstance.encrypt8(0);
        await contract.set_default(value_to_be_set, l, l,SenderComponent.A,SenderComponent.B);

        // Miner updating value
        console.log("Updating value by Miner...");
        for (let i = 0; i < SenderComponent.users.length; i++) {
            console.log(`Updating value for user ${i + 1}`);
            const value = SenderComponent.users[i].data_for_miner;
            const decryptedValue = value;
            const newValue = fheinstance.encrypt8(decryptedValue);
            let r = await contract.set_value(newValue, i);
            r.wait();
        }

        // Handshaking done now updating value in blockchain
        console.log("Performing handshaking and updating value in blockchain...");
        for (let i = 0; i < SenderComponent.users.length - 1; i++) {
            for (let j = i + 1; j < SenderComponent.users.length; j++) {
                console.log(`Updating value for users ${i + 1} and ${j + 1}`);
                const encryptedValue = fheinstance.encrypt8(1);
                let r = await contract.set_value_i(encryptedValue, i, j);
                r.wait();
            }
        }

        // querying on the encrypted matrix
        console.log("Querying on the encrypted matrix...");
        const alpha = 10;
        let rer = await contract.set_alpha(alpha);
        rer.wait();
        let ree = await contract.bfs(0);
        let reeee = await contract.calculating(0);
        await reeee.wait();
        const s = await contract.show_cal();
        const X = Number(s);
        let infection = X;
        for (let i = 0; i < SenderComponent.users.length; i++) {
            const Bx = (await contract.query_distance_matrix(i));
            const B=Number(Bx);
            

            if (Math.pow(2, B) !== 0) {
                infection -= Number(SenderComponent.users[i].R )/ Math.pow(2, B);
            } else {
                infection -= 1;
            }
        }
        // const infection=await contract.show_val();
        // console.log(X);
        console.log("Infection factor:", infection);

        // Assertions
        expect(0).to.equal(0); // Modify as needed
    });
});
