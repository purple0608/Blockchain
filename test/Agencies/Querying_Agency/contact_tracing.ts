import { expect } from "chai";
import { SenderComponent } from '../Trusted_Authority/Authority';
import { BfsContractFixture } from "../../MyContract/bfs.fixture";

const { JsonRpcProvider, AbiCoder } = require("ethers");

describe("BfsContract", function () {
  it("querying on the encrypted matrix", async function () {
    const provider = new JsonRpcProvider("http://localhost:8545");
    const gaslimit=2000000000;
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

    // Create instance of contract
    const contract = await BfsContractFixture();
    const alpha = 10;
    await contract.set_alpha(alpha);

    // Perform operations to obtain necessary values
    // let r = await contract.bfs(0);
    // let re = await contract.calculating(0);
    // await re.wait();
    // const s = await contract.show_cal();
    let s=await contract.show_val();
    s.wait();
    const X = Number(s);
    
    // Calculate infection factor
    let infection = X;
    for (let i = 0; i < SenderComponent.users.length; i++) {
      const B = Number(await contract.query_distance_matrix(i)); 
      // Assuming B values are based on user index
      if (Math.pow(2, B) !== 0) {
        infection -= SenderComponent.users[i].R / Math.pow(2, B);
      } else {
        // Handle division by zero or other error cases
        infection -= 1;
      }
    }
    console.log(X);
    console.log("Infection factor:", infection);

    // Assertion example (modify as needed)
    expect(infection).to.be.a("number");

    // Add more assertions or code logic as needed
  });
});
