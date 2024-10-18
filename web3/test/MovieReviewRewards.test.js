const { expect } = require("chai");

describe("MovieReviewRewards", function () {
  let MovieReviewRewards;
  let movieReviewRewards;
  let owner;

  beforeEach(async function () {
    [owner] = await ethers.getSigners();
    MovieReviewRewards = await ethers.getContractFactory("MovieReviewRewards");
    movieReviewRewards = await MovieReviewRewards.deploy();
  });

  it("Should deploy the contract", async function () {
    expect(movieReviewRewards.address).to.properAddress;
  });

  it("Should allow users to submit reviews and earn AIA tokens", async function () {
    const reviewTx = await movieReviewRewards.submitReview("Movie Title", "This is a review.", { from: owner.address });
    await reviewTx.wait();
    // Further assertions on token rewards, etc.
  });
});
