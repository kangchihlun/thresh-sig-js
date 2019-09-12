export class BigInt extends String {
    public static fromNumber(n: number) {
        return JSON.stringify(n.toString(16));
    }
}

export type FE = BigInt;
export const FE_BYTES_SIZE = 32;

export interface GE {
    x: BigInt,
    y: BigInt
}

export interface EncryptionKey {
    n: BigInt;
}

export function toLittleEndian(buffer: Buffer) {
    if (buffer.length < 1) {
        return buffer;
    }
    let j = buffer.length - 1;
    let tmp = 0;
    for (let i = 0; i < buffer.length / 2; i++) {
        tmp = buffer[i];
        buffer[i] = buffer[j];
        buffer[j] = tmp;
        j--;
    }

    return buffer;
}