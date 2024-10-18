async function main() {
    const MovieReviewRewards = await ethers.getContractFactory("MovieReviewRewards");
    const movieReviewRewards = await MovieReviewRewards.deploy();
    console.log("Contract deployed to:", movieReviewRewards.address);
  }
  
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  