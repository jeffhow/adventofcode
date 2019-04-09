const input = "165,1,255,31,87,52,24,113,0,91,148,254,158,2,73,153";
let lengths = [...input].map(x => x.charCodeAt(0));
let numbers = [...Array(256).keys()];
let pos = 0, skip = 0;
let denseHash = [];

lengths.push(17, 31, 73, 47, 23);

for (let i = 0; i < 64; i++) {
    for (const len of lengths) {
        if (len > 1) {
            numbers = [...numbers.slice(pos), ...numbers.slice(0, pos)];
            numbers = [...numbers.slice(0, len).reverse(), ...numbers.slice(len)];
            numbers = [...numbers.slice(-pos), ...numbers.slice(0, -pos)];
        }
        pos = (pos + len + skip++) % 256;
    }
}

for (let i = 0; i < 16; i++) {
    const o = numbers.slice(i * 16, i * 16 + 16).reduce((a, b) => a ^ b);
    denseHash.push(o);
}

const zeropad = n => ("0" + n).substr(-2);
const result = denseHash.map(n => zeropad(n.toString(16))).join("");
console.log(result);