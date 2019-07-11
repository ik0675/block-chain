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

export {};

/* Because Node does not know TS, We should compile
 *    TS into JS. "Prestart" will be automatically executeed
 *    before "START"
 */
