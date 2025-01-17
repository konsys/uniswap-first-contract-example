import { expect } from "chai";
import { ethers } from "hardhat";

describe("HelloWorld", function () {
    it("Should print a hello world greeting", async function () {
        /* Deploy the helloWorld contract */
        const helloWorldFactory = await ethers.getContractFactory("HelloWorld");
        const helloWorld = await helloWorldFactory.deploy("World!");
        await helloWorld.waitForDeployment();

        const greeting = await helloWorld.greet();
        expect(greeting).is.equal("Hello World!")
    });
});