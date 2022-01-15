import { ethers } from "ethers";
import dotenv from 'dotenv'
dotenv.config()

import abi from "../utils/Keyboards.json"

const contractAddress = process.env.REACT_APP_KEYBOARDS_CONTRACT_ADDRESS;
const contractABI = abi.abi;

export default function getKeyboardsContract(ethereum) {
  if(ethereum) {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, contractABI, signer);
  } else {
    return undefined;
  }
}