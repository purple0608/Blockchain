// import { expect } from "chai";
// import { string } from "hardhat/internal/core/params/argumentTypes";

// import { MyContractFixture } from "./MyContract.fixture";
// import { createFheInstance } from "./encrypt";

// const { createInstance } = require("fhevmjs");

// const { ethers, JsonRpcProvider, AbiCoder } = require("ethers");

// describe("MyContract", function () {
//   it("add two encrypted numbers", async function () {
//     const provider = new JsonRpcProvider("http://localhost:8545");

//     // 1. Get chain id
//     const network = await provider.getNetwork();
//     const chainId = +network.chainId.toString();

//     // 2. Get blockchain public key
//     const ret = await provider.call({
//       to: "0x000000000000000000000000000000000000005d",
//       data: "0xd9d47bb001",
//     });
//     const decoded = AbiCoder.defaultAbiCoder().decode(["bytes"], ret);
//     const publicKey = decoded[0];
//     // 3. Create instance
//     const fheinstance = await createFheInstance();
//     const contract = await MyContractFixture();
//     const e1 = fheinstance.encrypt32(1);
//     const e2 = fheinstance.encrypt32(2);
//     const er = fheinstance.encrypt32(3);
//     const r = await contract.add_encry(e1, e2);
//     console.log(r);
//     const tx = await contract.perform(); // Set value to 9
//     await tx.wait(); // Wait for transaction confirmation
//     const value = await contract.print();
//     console.log("Updated value:", value);
//     console.log(value);
//     const address = await contract.getAddress();
//     expect(r).to.equal(3);
//   });
// });

// // describe("MyContract", function () {
// //   it("add one encrypted and normal number", async function () {
// //     const provider = new JsonRpcProvider("http://localhost:8545");

// //     // 1. Get chain id
// //     const network = await provider.getNetwork();
// //     const chainId = +network.chainId.toString();

// //     // 2. Get blockchain public key
// //     const ret = await provider.call({
// //       to: "0x000000000000000000000000000000000000005d",
// //       data: "0xd9d47bb001",
// //     });
// //     const decoded = AbiCoder.defaultAbiCoder().decode(["bytes"], ret);
// //     const publicKey = decoded[0];
// //     // 3. Create instance
// //     const fheinstance = await createFheInstance();
// //     const contract = await MyContractFixture();
// //     const e2 = fheinstance.encrypt32(2);
// //     const er = fheinstance.encrypt32(3);
// //     const r = await contract.add_en(5, e2);
// //     const address = await contract.getAddress();
// //     expect(r).to.equal(r);
// //   });
// // });

// // describe("MyContract", function () {
// //   it("add two numbers", async function () {
// //     const provider = new JsonRpcProvider("http://localhost:8545");

// //     // 1. Get chain id
// //     const network = await provider.getNetwork();
// //     const chainId = +network.chainId.toString();

// //     // 2. Get blockchain public key
// //     const ret = await provider.call({
// //       to: "0x000000000000000000000000000000000000005d",
// //       data: "0xd9d47bb001",
// //     });
// //     const decoded = AbiCoder.defaultAbiCoder().decode(["bytes"], ret);
// //     const publicKey = decoded[0];
// //     // 3. Create instance
// //     const fheinstance = await createFheInstance();
// //     const contract = await MyContractFixture();
// //     const e1 = fheinstance.encrypt32(1);
// //     const e2 = fheinstance.encrypt32(2);
// //     const er = fheinstance.encrypt32(3);
// //     const r = await contract.add(1, 2);
// //     console.log(r);
// //     const address = await contract.getAddress();
// //     expect(r).to.equal(3);
// //   });
// // });

// // describe("MyContract", function () {
// //   it("multiply two  encrypted numbers", async function () {
// //     const provider = new JsonRpcProvider("http://localhost:8545");

// //     // 1. Get chain id
// //     const network = await provider.getNetwork();
// //     const chainId = +network.chainId.toString();

// //     // 2. Get blockchain public key
// //     const ret = await provider.call({
// //       to: "0x000000000000000000000000000000000000005d",
// //       data: "0xd9d47bb001",
// //     });
// //     const decoded = AbiCoder.defaultAbiCoder().decode(["bytes"], ret);
// //     const publicKey = decoded[0];
// //     // 3. Create instance
// //     const fheinstance = await createFheInstance();
// //     const contract = await MyContractFixture();
// //     const e1 = fheinstance.encrypt32(1);
// //     const e2 = fheinstance.encrypt32(2);
// //     const er = fheinstance.encrypt32(3);
// //     const r = await contract.mul_encry(e1, e2);
// //     expect(r).to.equal(r);
// //   });
// // });

// // describe("MyContract", function () {
// //   it("multiply a encrypted  and normal  numbers", async function () {
// //     const provider = new JsonRpcProvider("http://localhost:8545");

// //     // 1. Get chain id
// //     const network = await provider.getNetwork();
// //     const chainId = +network.chainId.toString();

// //     // 2. Get blockchain public key
// //     const ret = await provider.call({
// //       to: "0x000000000000000000000000000000000000005d",
// //       data: "0xd9d47bb001",
// //     });
// //     const decoded = AbiCoder.defaultAbiCoder().decode(["bytes"], ret);
// //     const publicKey = decoded[0];
// //     // 3. Create instance
// //     const fheinstance = await createFheInstance();
// //     const contract = await MyContractFixture();
// //     const e1 = fheinstance.encrypt32(1);
// //     const e2 = fheinstance.encrypt32(2);
// //     const r = await contract.mul_en(4,e1);
// //     console.log(r);
// //     expect(r).to.equal(r);
// //   });
// // });

// // describe("MyContract", function () {
// //   it("mul two numbers", async function () {
// //     const provider = new JsonRpcProvider("http://localhost:8545");

// //     // 1. Get chain id
// //     const network = await provider.getNetwork();
// //     const chainId = +network.chainId.toString();

// //     // 2. Get blockchain public key
// //     const ret = await provider.call({
// //       to: "0x000000000000000000000000000000000000005d",
// //       data: "0xd9d47bb001",
// //     });
// //     const decoded = AbiCoder.defaultAbiCoder().decode(["bytes"], ret);
// //     const publicKey = decoded[0];
// //     // 3. Create instance
// //     const fheinstance = await createFheInstance();
// //     const contract = await MyContractFixture();
// //     const e1 = fheinstance.encrypt32(1);
// //     const e2 = fheinstance.encrypt32(2);
// //     const er = fheinstance.encrypt32(3);
// //     const r = await contract.mul(1, 2);
// //     console.log(r);
// //     const address = await contract.getAddress();
// //     expect(r).to.equal(2);
// //   });
// // });



// // describe("MyContract", function () {
// //   it("subtract two  encrypted numbers", async function () {
// //     const provider = new JsonRpcProvider("http://localhost:8545");

// //     // 1. Get chain id
// //     const network = await provider.getNetwork();
// //     const chainId = +network.chainId.toString();

// //     // 2. Get blockchain public key
// //     const ret = await provider.call({
// //       to: "0x000000000000000000000000000000000000005d",
// //       data: "0xd9d47bb001",
// //     });
// //     const decoded = AbiCoder.defaultAbiCoder().decode(["bytes"], ret);
// //     const publicKey = decoded[0];
// //     // 3. Create instance
// //     const fheinstance = await createFheInstance();
// //     const contract = await MyContractFixture();
// //     const e1 = fheinstance.encrypt32(1);
// //     const e2 = fheinstance.encrypt32(2);
// //     const er = fheinstance.encrypt32(3);
// //     const r = await contract.sub_encry(e1, e2);
// //     expect(r).to.equal(r);
// //   });
// // });

// // describe("MyContract", function () {
// //   it("subtract a encrypted  and normal  numbers", async function () {
// //     const provider = new JsonRpcProvider("http://localhost:8545");

// //     // 1. Get chain id
// //     const network = await provider.getNetwork();
// //     const chainId = +network.chainId.toString();

// //     // 2. Get blockchain public key
// //     const ret = await provider.call({
// //       to: "0x000000000000000000000000000000000000005d",
// //       data: "0xd9d47bb001",
// //     });
// //     const decoded = AbiCoder.defaultAbiCoder().decode(["bytes"], ret);
// //     const publicKey = decoded[0];
// //     // 3. Create instance
// //     const fheinstance = await createFheInstance();
// //     const contract = await MyContractFixture();
// //     const e1 = fheinstance.encrypt32(1);
// //     const e2 = fheinstance.encrypt32(2);
// //     const r = await contract.sub_en(4,e1);
// //     console.log(r);
// //     expect(r).to.equal(r);
// //   });
// // });

// // describe("MyContract", function () {
// //   it("sub two numbers", async function () {
// //     const provider = new JsonRpcProvider("http://localhost:8545");

// //     // 1. Get chain id
// //     const network = await provider.getNetwork();
// //     const chainId = +network.chainId.toString();

// //     // 2. Get blockchain public key
// //     const ret = await provider.call({
// //       to: "0x000000000000000000000000000000000000005d",
// //       data: "0xd9d47bb001",
// //     });
// //     const decoded = AbiCoder.defaultAbiCoder().decode(["bytes"], ret);
// //     const publicKey = decoded[0];
// //     // 3. Create instance
// //     const fheinstance = await createFheInstance();
// //     const contract = await MyContractFixture();
// //     const e1 = fheinstance.encrypt32(1);
// //     const e2 = fheinstance.encrypt32(2);
// //     const er = fheinstance.encrypt32(3);
// //     const r = await contract.sub(4, 2);
// //     console.log(r);
// //     const address = await contract.getAddress();
// //     expect(r).to.equal(2);
// //   });
// // });




// // describe("MyContract", function () {
// //   it("divide two  encrypted numbers", async function () {
// //     const provider = new JsonRpcProvider("http://localhost:8545");

// //     // 1. Get chain id
// //     const network = await provider.getNetwork();
// //     const chainId = +network.chainId.toString();

// //     // 2. Get blockchain public key
// //     const ret = await provider.call({
// //       to: "0x000000000000000000000000000000000000005d",
// //       data: "0xd9d47bb001",
// //     });
// //     const decoded = AbiCoder.defaultAbiCoder().decode(["bytes"], ret);
// //     const publicKey = decoded[0];
// //     // 3. Create instance
// //     const fheinstance = await createFheInstance();
// //     const contract = await MyContractFixture();
// //     const e1 = fheinstance.encrypt32(4);
// //     const e2 = fheinstance.encrypt32(1/2);
// //     const er = fheinstance.encrypt32(3);
// //     const r = await contract.div_encry(e1, e2);
// //     expect(r).to.equal(r);
// //   });
// // });

// // describe("MyContract", function () {
// //   it("divide a encrypted  and normal  numbers", async function () {
// //     const provider = new JsonRpcProvider("http://localhost:8545");

// //     // 1. Get chain id
// //     const network = await provider.getNetwork();
// //     const chainId = +network.chainId.toString();

// //     // 2. Get blockchain public key
// //     const ret = await provider.call({
// //       to: "0x000000000000000000000000000000000000005d",
// //       data: "0xd9d47bb001",
// //     });
// //     const decoded = AbiCoder.defaultAbiCoder().decode(["bytes"], ret);
// //     const publicKey = decoded[0];
// //     // 3. Create instance
// //     const fheinstance = await createFheInstance();
// //     const contract = await MyContractFixture();
// //     const e1 = fheinstance.encrypt32(1);
// //     const e2 = fheinstance.encrypt32(1/2);
// //     const r = await contract.div_en(4,e1);
// //     console.log(r);
// //     expect(r).to.equal(r);
// //   });
// // });

// // describe("MyContract", function () {
// //   it("div two numbers", async function () {
// //     const provider = new JsonRpcProvider("http://localhost:8545");

// //     // 1. Get chain id
// //     const network = await provider.getNetwork();
// //     const chainId = +network.chainId.toString();

// //     // 2. Get blockchain public key
// //     const ret = await provider.call({
// //       to: "0x000000000000000000000000000000000000005d",
// //       data: "0xd9d47bb001",
// //     });
// //     const decoded = AbiCoder.defaultAbiCoder().decode(["bytes"], ret);
// //     const publicKey = decoded[0];
// //     // 3. Create instance
// //     const fheinstance = await createFheInstance();
// //     const contract = await MyContractFixture();
// //     const e1 = fheinstance.encrypt32(1);
// //     const e2 = fheinstance.encrypt32(2);
// //     const er = fheinstance.encrypt32(3);
// //     const r = await contract.div(4, 2);
// //     console.log(r);
// //     const address = await contract.getAddress();
// //     expect(r).to.equal(2);
// //   });
// // });