async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    // Fetch the contract
    const MyContract = await ethers.getContractFactory("TodoList");

    // Deploy the contract
    const myContract = await MyContract.deploy();

    console.log("Contract deployed to:", myContract.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });