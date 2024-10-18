async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
  
    const MovieReviewRewards = await ethers.getContractFactory("MovieReviewRewards");
    const contract = await MovieReviewRewards.deploy();
  
    console.log("MovieReviewRewards deployed to:", contract.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  