// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MovieReviewRewards {
    // Owner of the contract
    address public owner;

    // Structure to store movie review
    struct Review {
        string movieTitle;
        string reviewText;
        address reviewer;
    }

    // Mapping to store reviews by reviewer
    mapping(address => Review[]) public reviews;

    // Event to emit when a review is submitted
    event ReviewSubmitted(address indexed reviewer, string movieTitle, string reviewText);

    // Constructor sets the contract owner
    constructor() {
        owner = msg.sender;
    }

    // Function to submit a review and reward tokens
    function submitReview(string memory _movieTitle, string memory _reviewText) public {
        // Store the review
        reviews[msg.sender].push(Review(_movieTitle, _reviewText, msg.sender));

        // Emit the event
        emit ReviewSubmitted(msg.sender, _movieTitle, _reviewText);

        // Simulate rewarding tokens (In real scenario, you'd interface with a token contract)
        // Example: Reward 10 AIA tokens
    }

    // Function to withdraw rewards (Placeholder)
    function withdrawTokens() public {
        // Simulate withdrawal logic (Interface with a token contract)
    }

    // Function to get reviews submitted by a user
    function getReviewsByUser(address _user) public view returns (Review[] memory) {
        return reviews[_user];
    }
}
