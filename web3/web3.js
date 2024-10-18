import Web3 from 'web3';

let web3;

if (window.ethereum) {
  web3 = new Web3(window.ethereum);
  window.ethereum.request({ method: "eth_requestAccounts" }); // Request account access
} else {
  console.log("Please install MetaMask or another web3 provider.");
}

export default web3;
