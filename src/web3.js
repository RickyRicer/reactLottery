import Web3 from "web3";
 
window.ethereum.request({ method: "eth_requestAccounts" });

// Injects the metamask web3 service
const web3 = new Web3(window.ethereum);
 
export default web3;