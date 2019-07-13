"use strict";
// interface Human {
//   name: string;
//   age: number;
//   nationality: string;
// }
Object.defineProperty(exports, "__esModule", { value: true });
/* JS doesn't have interface, so if I want to show in js file, make class instead of interface */
const CryptoJS = require("crypto-js");
class Block {
    constructor(index, hash, previousHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
Block.calculateBlockHash = (index, previousHash, timestamp, data) => {
    return CryptoJS.SHA256(index + previousHash + timestamp + data).toString();
};
Block.validStructure = (aBlock) => typeof aBlock.index === "number" &&
    typeof aBlock.hash === "string" &&
    typeof aBlock.previousHash === "string" &&
    typeof aBlock.timestamp === "number" &&
    typeof aBlock.data === "string";
const firstBlock = new Block(0, "hashFunction", "", "password", 123456);
let blockchain = [firstBlock];
const getBlockChain = () => blockchain;
const getLastestBlock = () => blockchain[blockchain.length - 1];
const getNewTimeStamp = () => Math.round(new Date().getTime() / 1000);
const createNewBlock = (data) => {
    const previousBlock = getLastestBlock();
    const newIndex = previousBlock.index + 1;
    const newTimeStamp = getNewTimeStamp();
    const newHash = Block.calculateBlockHash(newIndex, previousBlock.hash, newTimeStamp, data);
    const newBlock = new Block(newIndex, newHash, previousBlock.hash, data, newTimeStamp);
    addBlock(newBlock);
    return newBlock;
};
const getHashForBlock = (aBlock) => Block.calculateBlockHash(aBlock.index, aBlock.previousHash, aBlock.timestamp, aBlock.data);
const isBlockValid = (candidate, previousBlock) => {
    if (!Block.validStructure(candidate)) {
        return false;
    }
    else if (previousBlock.index + 1 !== candidate.index) {
        return false;
    }
    else if (previousBlock.hash !== candidate.previousHash) {
        return false;
    }
    else if (getHashForBlock(candidate) !== candidate.hash) {
        return false;
    }
    else {
        return true;
    }
};
const addBlock = (candidateBlock) => {
    if (isBlockValid(candidateBlock, getLastestBlock())) {
        blockchain.push(candidateBlock);
    }
};
createNewBlock("second Block");
createNewBlock("Third Block");
createNewBlock("Fourth Block");
console.log(blockchain);
/* Because Node does not know TS, We should compile
 *    TS into JS. "Prestart" will be automatically executeed
 *    before "START"
 */
//# sourceMappingURL=index.js.map