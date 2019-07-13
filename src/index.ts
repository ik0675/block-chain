// interface Human {
//   name: string;
//   age: number;
//   nationality: string;
// }

/* JS doesn't have interface, so if I want to show in js file, make class instead of interface */

import * as CryptoJS from "crypto-js";

class Block {
  public index: number;
  public hash: string;
  public previousHash: string;
  public data: string;
  public timestamp: number;

  static calculateBlockHash = (
    index: number,
    previousHash: string,
    timestamp: number,
    data: string
  ): string => {
    return CryptoJS.SHA256(index + previousHash + timestamp + data).toString();
  };

  static validStructure = (aBlock: Block): boolean =>
    typeof aBlock.index === "number" &&
    typeof aBlock.hash === "string" &&
    typeof aBlock.previousHash === "string" &&
    typeof aBlock.timestamp === "number" &&
    typeof aBlock.data === "string";

  constructor(
    index: number,
    hash: string,
    previousHash: string,
    data: string,
    timestamp: number
  ) {
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.data = data;
    this.timestamp = timestamp;
  }
}

const firstBlock: Block = new Block(0, "hashFunction", "", "password", 123456);

let blockchain: Block[] = [firstBlock];

const getBlockChain = (): Block[] => blockchain;

const getLastestBlock = (): Block => blockchain[blockchain.length - 1];

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

const createNewBlock = (data: string): Block => {
  const previousBlock: Block = getLastestBlock();
  const newIndex: number = previousBlock.index + 1;
  const newTimeStamp: number = getNewTimeStamp();
  const newHash: string = Block.calculateBlockHash(
    newIndex,
    previousBlock.hash,
    newTimeStamp,
    data
  );

  const newBlock: Block = new Block(
    newIndex,
    newHash,
    previousBlock.hash,
    data,
    newTimeStamp
  );
  addBlock(newBlock);
  return newBlock;
};

const getHashForBlock = (aBlock: Block): string =>
  Block.calculateBlockHash(
    aBlock.index,
    aBlock.previousHash,
    aBlock.timestamp,
    aBlock.data
  );

const isBlockValid = (candidate: Block, previousBlock: Block): boolean => {
  if (!Block.validStructure(candidate)) {
    return false;
  } else if (previousBlock.index + 1 !== candidate.index) {
    return false;
  } else if (previousBlock.hash !== candidate.previousHash) {
    return false;
  } else if (getHashForBlock(candidate) !== candidate.hash) {
    return false;
  } else {
    return true;
  }
};

const addBlock = (candidateBlock: Block): void => {
  if (isBlockValid(candidateBlock, getLastestBlock())) {
    blockchain.push(candidateBlock);
  }
};

createNewBlock("second Block");
createNewBlock("Third Block");
createNewBlock("Fourth Block");

console.log(blockchain);

export {};

/* Because Node does not know TS, We should compile
 *    TS into JS. "Prestart" will be automatically executeed
 *    before "START"
 */
