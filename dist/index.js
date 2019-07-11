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
const firstBlock = new Block(0, "hashFunction", "", "password", 123456);
let blockchain = [firstBlock];
const getBlockChain = () => blockchain;
const getLastestBlock = () => blockchain[blockchain.length - 1];
const getNewTimeStamp = () => Math.round(new Date().getTime() / 1000);
/* Because Node does not know TS, We should compile
 *    TS into JS. "Prestart" will be automatically executeed
 *    before "START"
 */
//# sourceMappingURL=index.js.map