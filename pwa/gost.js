/**
 * GOST R 34.11-2012 Streebog-256 + HMAC + GOST R 34.12-2015 Grasshopper
 * T-tables from gostcrypto -- byte-exact with server_gost.py
 */
const _ST=(()=>{
  const raw=atob("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");
  const b=new Uint8Array(raw.length);
  for(let i=0;i<raw.length;i++)b[i]=raw.charCodeAt(i);
  return b;
})();
function streebogLPS(block){
  const out=new Uint8Array(64);
  for(let col=0;col<8;col++){
    const base=col*8;
    for(let k=0;k<8;k++){
      const t=(k*256+block[col+k*8])*8;
      out[base]^=_ST[t];out[base+1]^=_ST[t+1];out[base+2]^=_ST[t+2];out[base+3]^=_ST[t+3];
      out[base+4]^=_ST[t+4];out[base+5]^=_ST[t+5];out[base+6]^=_ST[t+6];out[base+7]^=_ST[t+7];
    }
  }
  return out;
}
const STREEBOG_C=[
  new Uint8Array([0x07,0x45,0xa6,0xf2,0x59,0x65,0x80,0xdd,0x23,0x4d,0x74,0xcc,0x36,0x74,0x76,0x05,0x15,0xd3,0x60,0xa4,0x08,0x2a,0x42,0xa2,0x01,0x69,0x67,0x92,0x91,0xe0,0x7c,0x4b,0xfc,0xc4,0x85,0x75,0x8d,0xb8,0x4e,0x71,0x16,0xd0,0x45,0x2e,0x43,0x76,0x6a,0x2f,0x1f,0x7c,0x65,0xc0,0x81,0x2f,0xcb,0xeb,0xe9,0xda,0xca,0x1e,0xda,0x5b,0x08,0xb1]),
  new Uint8Array([0xb7,0x9b,0xb1,0x21,0x70,0x04,0x79,0xe6,0x56,0xcd,0xcb,0xd7,0x1b,0xa2,0xdd,0x55,0xca,0xa7,0x0a,0xdb,0xc2,0x61,0xb5,0x5c,0x58,0x99,0xd6,0x12,0x6b,0x17,0xb5,0x9a,0x31,0x01,0xb5,0x16,0x0f,0x5e,0xd5,0x61,0x98,0x2b,0x23,0x0a,0x72,0xea,0xfe,0xf3,0xd7,0xb5,0x70,0x0f,0x46,0x9d,0xe3,0x4f,0x1a,0x2f,0x9d,0xa9,0x8a,0xb5,0xa3,0x6f]),
  new Uint8Array([0xb2,0x0a,0xba,0x0a,0xf5,0x96,0x1e,0x99,0x31,0xdb,0x7a,0x86,0x43,0xf4,0xb6,0xc2,0x09,0xdb,0x62,0x60,0x37,0x3a,0xc9,0xc1,0xb1,0x9e,0x35,0x90,0xe4,0x0f,0xe2,0xd3,0x7b,0x7b,0x29,0xb1,0x14,0x75,0xea,0xf2,0x8b,0x1f,0x9c,0x52,0x5f,0x5e,0xf1,0x06,0x35,0x84,0x3d,0x6a,0x28,0xfc,0x39,0x0a,0xc7,0x2f,0xce,0x2b,0xac,0xdc,0x74,0xf5]),
  new Uint8Array([0x2e,0xd1,0xe3,0x84,0xbc,0xbe,0x0c,0x22,0xf1,0x37,0xe8,0x93,0xa1,0xea,0x53,0x34,0xbe,0x03,0x52,0x93,0x33,0x13,0xb7,0xd8,0x75,0xd6,0x03,0xed,0x82,0x2c,0xd7,0xa9,0x3f,0x35,0x5e,0x68,0xad,0x1c,0x72,0x9d,0x7d,0x3c,0x5c,0x33,0x7e,0x85,0x8e,0x48,0xdd,0xe4,0x71,0x5d,0xa0,0xe1,0x48,0xf9,0xd2,0x66,0x15,0xe8,0xb3,0xdf,0x1f,0xef]),
  new Uint8Array([0x57,0xfe,0x6c,0x7c,0xfd,0x58,0x17,0x60,0xf5,0x63,0xea,0xa9,0x7e,0xa2,0x56,0x7a,0x16,0x1a,0x27,0x23,0xb7,0x00,0xff,0xdf,0xa3,0xf5,0x3a,0x25,0x47,0x17,0xcd,0xbf,0xbd,0xff,0x0f,0x80,0xd7,0x35,0x9e,0x35,0x4a,0x10,0x86,0x16,0x1f,0x1c,0x15,0x7f,0x63,0x23,0xa9,0x6c,0x0c,0x41,0x3f,0x9a,0x99,0x47,0x47,0xad,0xac,0x6b,0xea,0x4b]),
  new Uint8Array([0x6e,0x7d,0x64,0x46,0x7a,0x40,0x68,0xfa,0x35,0x4f,0x90,0x36,0x72,0xc5,0x71,0xbf,0xb6,0xc6,0xbe,0xc2,0x66,0x1f,0xf2,0x0a,0xb4,0xb7,0x9a,0x1c,0xb7,0xa6,0xfa,0xcf,0xc6,0x8e,0xf0,0x9a,0xb4,0x9a,0x7f,0x18,0x6c,0xa4,0x42,0x51,0xf9,0xc4,0x66,0x2d,0xc0,0x39,0x30,0x7a,0x3b,0xc3,0xa4,0x6f,0xd9,0xd3,0x3a,0x1d,0xae,0xae,0x4f,0xae]),
  new Uint8Array([0x93,0xd4,0x14,0x3a,0x4d,0x56,0x86,0x88,0xf3,0x4a,0x3c,0xa2,0x4c,0x45,0x17,0x35,0x04,0x05,0x4a,0x28,0x83,0x69,0x47,0x06,0x37,0x2c,0x82,0x2d,0xc5,0xab,0x92,0x09,0xc9,0x93,0x7a,0x19,0x33,0x3e,0x47,0xd3,0xc9,0x87,0xbf,0xe6,0xc7,0xc6,0x9e,0x39,0x54,0x09,0x24,0xbf,0xfe,0x86,0xac,0x51,0xec,0xc5,0xaa,0xee,0x16,0x0e,0xc7,0xf4]),
  new Uint8Array([0x1e,0xe7,0x02,0xbf,0xd4,0x0d,0x7f,0xa4,0xd9,0xa8,0x51,0x59,0x35,0xc2,0xac,0x36,0x2f,0xc4,0xa5,0xd1,0x2b,0x8d,0xd1,0x69,0x90,0x06,0x9b,0x92,0xcb,0x2b,0x89,0xf4,0x9a,0xc4,0xdb,0x4d,0x3b,0x44,0xb4,0x89,0x1e,0xde,0x36,0x9c,0x71,0xf8,0xb7,0x4e,0x41,0x41,0x6e,0x0c,0x02,0xaa,0xe7,0x03,0xa7,0xc9,0x93,0x4d,0x42,0x5b,0x1f,0x9b]),
  new Uint8Array([0xdb,0x5a,0x23,0x83,0x51,0x44,0x61,0x72,0x60,0x2a,0x1f,0xcb,0x92,0xdc,0x38,0x0e,0x54,0x9c,0x07,0xa6,0x9a,0x8a,0x2b,0x7b,0xb1,0xce,0xb2,0xdb,0x0b,0x44,0x0a,0x80,0x84,0x09,0x0d,0xe0,0xb7,0x55,0xd9,0x3c,0x24,0x42,0x89,0x25,0x1b,0x3a,0x7d,0x3a,0xde,0x5f,0x16,0xec,0xd8,0x9a,0x4c,0x94,0x9b,0x22,0x31,0x16,0x54,0x5a,0x8f,0x37]),
  new Uint8Array([0xed,0x9c,0x45,0x98,0xfb,0xc7,0xb4,0x74,0xc3,0xb6,0x3b,0x15,0xd1,0xfa,0x98,0x36,0xf4,0x52,0x76,0x3b,0x30,0x6c,0x1e,0x7a,0x4b,0x33,0x69,0xaf,0x02,0x67,0xe7,0x9f,0x03,0x61,0x33,0x1b,0x8a,0xe1,0xff,0x1f,0xdb,0x78,0x8a,0xff,0x1c,0xe7,0x41,0x89,0xf3,0xf3,0xe4,0xb2,0x48,0xe5,0x2a,0x38,0x52,0x6f,0x05,0x80,0xa6,0xde,0xbe,0xab]),
  new Uint8Array([0x1b,0x2d,0xf3,0x81,0xcd,0xa4,0xca,0x6b,0x5d,0xd8,0x6f,0xc0,0x4a,0x59,0xa2,0xde,0x98,0x6e,0x47,0x7d,0x1d,0xcd,0xba,0xef,0xca,0xb9,0x48,0xea,0xef,0x71,0x1d,0x8a,0x79,0x66,0x84,0x14,0x21,0x80,0x01,0x20,0x61,0x07,0xab,0xeb,0xbb,0x6b,0xfa,0xd8,0x94,0xfe,0x5a,0x63,0xcd,0xc6,0x02,0x30,0xfb,0x89,0xc8,0xef,0xd0,0x9e,0xcd,0x7b]),
  new Uint8Array([0x20,0xd7,0x1b,0xf1,0x4a,0x92,0xbc,0x48,0x99,0x1b,0xb2,0xd9,0xd5,0x17,0xf4,0xfa,0x52,0x28,0xe1,0x88,0xaa,0xa4,0x1d,0xe7,0x86,0xcc,0x91,0x18,0x9d,0xef,0x80,0x5d,0x9b,0x9f,0x21,0x30,0xd4,0x12,0x20,0xf8,0x77,0x1d,0xdf,0xbc,0x32,0x3c,0xa4,0xcd,0x7a,0xb1,0x49,0x04,0xb0,0x80,0x13,0xd2,0xba,0x31,0x16,0xf1,0x67,0xe7,0x8e,0x37])
];
function _x(a,b){const o=new Uint8Array(64);for(let i=0;i<64;i++)o[i]=a[i]^b[i];return o;}
function _a(a,b){const o=new Uint8Array(64);let c=0;for(let i=0;i<64;i++){const s=a[i]+b[i]+c;o[i]=s&0xff;c=s>>8;}return o;}
function _E(k,m){let s=_x(k,m);for(let i=0;i<12;i++){s=streebogLPS(s);k=streebogLPS(_x(k,STREEBOG_C[i]));s=_x(s,k);}return s;}
function _G(h,n,m){return _x(_x(_E(streebogLPS(_x(h,n)),m),h),m);}
export function streebog256(data){
  let h=new Uint8Array(64).fill(0x01),n=new Uint8Array(64),sigma=new Uint8Array(64);
  const bl=new Uint8Array(64);bl[1]=0x02;
  let off=0;
  while(off+64<=data.length){const m=data.slice(off,off+64);h=_G(h,n,m);n=_a(n,bl);sigma=_a(sigma,m);off+=64;}
  const tail=data.slice(off),pad=new Uint8Array(64);pad.set(tail);pad[tail.length]=0x01;
  const lb=new Uint8Array(64),bc=tail.length*8;lb[0]=bc&0xff;lb[1]=(bc>>8)&0xff;
  h=_G(h,n,pad);n=_a(n,lb);sigma=_a(sigma,pad);
  const z=new Uint8Array(64);h=_G(h,z,n);h=_G(h,z,sigma);
  return h.slice(32);
}
export function hmacStreebog256(key,msg){
  const B=64;let k=key.length>B?streebog256(key):key;
  const kp=new Uint8Array(B);kp.set(k);
  const ki=new Uint8Array(B),ko=new Uint8Array(B);
  for(let i=0;i<B;i++){ki[i]=kp[i]^0x36;ko[i]=kp[i]^0x5c;}
  const inner=new Uint8Array(B+msg.length);inner.set(ki);inner.set(msg,B);
  const outer=new Uint8Array(B+32);outer.set(ko);outer.set(streebog256(inner),B);
  return streebog256(outer);
}
// ─── GOST R 34.12-2015 Grasshopper (Kuznyechik) ───────────────────────────────

// Grasshopper S-box (pi) from RFC 7801
const GH_PI = new Uint8Array([
  0xFC,0xEE,0xDD,0x11,0xCF,0x6E,0x31,0x16,0xFB,0xC4,0xFA,0xDA,0x23,0xC5,0x04,0x4D,
  0xE9,0x77,0xF0,0xDB,0x93,0x2E,0x99,0xBA,0x17,0x36,0xF1,0xBB,0x14,0xCD,0x5F,0xC1,
  0xF9,0x18,0x65,0x5A,0xE2,0x5C,0xEF,0x21,0x81,0x1C,0x3C,0x42,0x8B,0x01,0x8E,0x4F,
  0x05,0x84,0x02,0xAE,0xE3,0x6A,0x8F,0xA0,0x06,0x0B,0xED,0x98,0x7F,0xD4,0xD3,0x1F,
  0xEB,0x34,0x2C,0x51,0xEA,0xC8,0x48,0xAB,0xF2,0x2A,0x68,0xA2,0xFD,0x3A,0xCE,0xCC,
  0xB5,0x70,0x0E,0x56,0x08,0x0C,0x76,0x12,0xBF,0x72,0x13,0x47,0x9C,0xB7,0x5D,0x87,
  0x15,0xA1,0x96,0x29,0x10,0x7B,0x9E,0xC6,0x0F,0xD1,0xCB,0x2B,0xAD,0xA4,0x4B,0xB8,
  0x1A,0xBC,0xB6,0x66,0x80,0x60,0x00,0x3F,0xEC,0xB2,0x78,0xB3,0x74,0x90,0xFE,0x86,
  0xA8,0xD8,0x35,0x25,0xE5,0xA3,0xDB,0xDF,0x94,0x38,0x97,0xE9,0x1E,0x33,0x6B,0xD7,
  0xDE,0xAC,0x4A,0x39,0x52,0x7E,0xA7,0xD0,0x45,0xF3,0x8C,0xB9,0xF8,0xE7,0x75,0xEA,
  0x9F,0x58,0xA6,0x64,0xF4,0xC2,0x1B,0x40,0x53,0x7C,0x3E,0x1D,0x6D,0xD2,0x43,0x9B,
  0x9D,0x30,0x37,0xBE,0x22,0x69,0xD5,0x82,0x67,0xB4,0x32,0xFF,0x19,0x8A,0x8D,0xD6,
  0x9A,0xC9,0x44,0x3B,0x54,0x50,0xA9,0xAF,0xCA,0x6F,0x28,0x07,0x09,0x5E,0x63,0xE1,
  0xE6,0x55,0x71,0x7A,0xB1,0x2D,0xF6,0x7D,0x0D,0x57,0xB2,0x3D,0x46,0x8E,0x03,0xDC,
  0xAE,0xA0,0x41,0x73,0x20,0xE8,0xF5,0x26,0xC3,0x24,0xF7,0x27,0x92,0x5F,0x6C,0xD9,
  0xA5,0xE4,0x79,0xC7,0x88,0x91,0xF6,0xE1,0xAD,0xB0,0x83,0x6C,0x4C,0x2A,0x62,0x89,
]);

const GH_PI_INV = new Uint8Array(256);
for (let i = 0; i < 256; i++) GH_PI_INV[GH_PI[i]] = i;

const GH_GF_MUL = (a, b) => {
  let result = 0, aa = a, bb = b;
  for (let i = 0; i < 8; i++) {
    if (bb & 1) result ^= aa;
    const hi = aa & 0x80;
    aa = (aa << 1) & 0xff;
    if (hi) aa ^= 0xc3;
    bb >>= 1;
  }
  return result;
};

const GH_L_COEF = new Uint8Array([0x94,0x20,0x85,0x10,0xc2,0xc0,0x01,0xfb,0x01,0xc0,0xc2,0x10,0x85,0x20,0x94,0x01]);

function ghR(block) {
  let feedback = 0;
  for (let i = 0; i < 16; i++) feedback ^= GH_GF_MUL(block[i], GH_L_COEF[i]);
  const out = new Uint8Array(16);
  out[0] = feedback;
  for (let i = 1; i < 16; i++) out[i] = block[i - 1];
  return out;
}

function ghRInv(block) {
  const out = new Uint8Array(16);
  for (let i = 0; i < 15; i++) out[i] = block[i + 1];
  out[15] = 0;
  let feedback = 0;
  for (let i = 0; i < 16; i++) feedback ^= GH_GF_MUL(out[i], GH_L_COEF[i]);
  out[15] = feedback ^ block[0];
  return out;
}

function ghL(block) {
  let state = block.slice();
  for (let i = 0; i < 16; i++) state = ghR(state);
  return state;
}

function ghLInv(block) {
  let state = block.slice();
  for (let i = 0; i < 16; i++) state = ghRInv(state);
  return state;
}

function ghS(block) {
  const out = new Uint8Array(16);
  for (let i = 0; i < 16; i++) out[i] = GH_PI[block[i]];
  return out;
}

function ghSInv(block) {
  const out = new Uint8Array(16);
  for (let i = 0; i < 16; i++) out[i] = GH_PI_INV[block[i]];
  return out;
}

function ghX(a, b) {
  const out = new Uint8Array(16);
  for (let i = 0; i < 16; i++) out[i] = a[i] ^ b[i];
  return out;
}

const GH_C = (() => {
  const c = [];
  for (let i = 1; i <= 32; i++) {
    const v = new Uint8Array(16);
    v[15] = i;
    c.push(ghL(v));
  }
  return c;
})();

/**
 * Expand 256-bit key into 10 round keys
 * @param {Uint8Array} key - 32 bytes
 * @returns {Uint8Array[]} 10 round keys, each 16 bytes
 */
export function ghKeySchedule(key) {
  let a = key.slice(0, 16);
  let b = key.slice(16, 32);
  const roundKeys = [a.slice(), b.slice()];
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 8; j++) {
      const t = ghL(ghS(ghX(a, GH_C[8 * i + j])));
      const newA = ghX(t, b);
      b = a;
      a = newA;
    }
    roundKeys.push(a.slice(), b.slice());
  }
  return roundKeys;
}

/**
 * Encrypt one 16-byte block with Grasshopper
 * @param {Uint8Array} block
 * @param {Uint8Array[]} roundKeys
 * @returns {Uint8Array}
 */
export function ghEncryptBlock(block, roundKeys) {
  let state = block.slice();
  for (let i = 0; i < 9; i++) {
    state = ghL(ghS(ghX(state, roundKeys[i])));
  }
  return ghX(state, roundKeys[9]);
}

/**
 * Decrypt one 16-byte block with Grasshopper
 */
export function ghDecryptBlock(block, roundKeys) {
  let state = block.slice();
  for (let i = 9; i > 0; i--) {
    state = ghSInv(ghLInv(ghX(state, roundKeys[i])));
  }
  return ghX(state, roundKeys[0]);
}

// ─── CTR mode — ГОСТ Р 34.13-2015 ────────────────────────────────────────────

/**
 * Grasshopper CTR encrypt/decrypt (symmetric)
 * @param {Uint8Array} data
 * @param {Uint8Array[]} roundKeys
 * @param {Uint8Array} iv - 8 bytes
 * @returns {Uint8Array}
 */
export function ghCTR(data, roundKeys, iv) {
  const counter = new Uint8Array(16);
  counter.set(iv, 0);
  const out = new Uint8Array(data.length);
  let pos = 0;
  while (pos < data.length) {
    const keystream = ghEncryptBlock(counter, roundKeys);
    const blockLen = Math.min(16, data.length - pos);
    for (let i = 0; i < blockLen; i++) out[pos + i] = data[pos + i] ^ keystream[i];
    pos += blockLen;
    for (let i = 15; i >= 8; i--) {
      counter[i] = (counter[i] + 1) & 0xff;
      if (counter[i] !== 0) break;
    }
  }
  return out;
}

// ─── MAC (OMAC/CMAC over Grasshopper) — ГОСТ Р 34.13-2015 ────────────────────

function ghOMAC(data, roundKeys) {
  const zero = new Uint8Array(16);
  const L = ghEncryptBlock(zero, roundKeys);

  const genSubkey = (key) => {
    const out = new Uint8Array(16);
    const msb = (key[0] & 0x80) !== 0;
    for (let i = 0; i < 15; i++) out[i] = ((key[i] << 1) | (key[i + 1] >> 7)) & 0xff;
    out[15] = (key[15] << 1) & 0xff;
    if (msb) out[15] ^= 0x87;
    return out;
  };

  const K1 = genSubkey(L);
  const K2 = genSubkey(K1);

  const n = Math.max(1, Math.ceil(data.length / 16));
  const lastLen = ((data.length - 1) & 15) + 1;
  const flag = data.length % 16 === 0 && data.length > 0;

  const last = new Uint8Array(16);
  last.set(data.slice((n - 1) * 16, (n - 1) * 16 + lastLen));
  if (!flag) last[lastLen] = 0x80;

  const subkey = flag ? K1 : K2;
  for (let i = 0; i < 16; i++) last[i] ^= subkey[i];

  let mac = new Uint8Array(16);
  for (let i = 0; i < n - 1; i++) {
    const block = data.slice(i * 16, (i + 1) * 16);
    for (let j = 0; j < 16; j++) mac[j] ^= block[j];
    mac = ghEncryptBlock(mac, roundKeys);
  }
  for (let j = 0; j < 16; j++) mac[j] ^= last[j];
  return ghEncryptBlock(mac, roundKeys);
}

// ─── High-level API ──────────────────────────────────────────────────────────

const PBKDF2_ITERATIONS = 100000;
const SALT_STATIC = new TextEncoder().encode('gosuslugi-totp-salt-v1-gost');

/**
 * Derive 32-byte key from password using Streebog-256 KDF
 */
export async function deriveKeyGOST(password) {
  const passBytes = new TextEncoder().encode(password);
  const combined = new Uint8Array(passBytes.length + SALT_STATIC.length);
  combined.set(passBytes);
  combined.set(SALT_STATIC, passBytes.length);
  let key = streebog256(combined);

  for (let i = 0; i < PBKDF2_ITERATIONS; i++) {
    const iBytes = new Uint8Array(4);
    iBytes[0] = (i >> 24) & 0xff;
    iBytes[1] = (i >> 16) & 0xff;
    iBytes[2] = (i >> 8) & 0xff;
    iBytes[3] = i & 0xff;
    const round = new Uint8Array(key.length + 4);
    round.set(key);
    round.set(iBytes, key.length);
    key = streebog256(round);
  }
  return key;
}

/**
 * Encrypt plaintext with Grasshopper CTR + OMAC
 * @returns {{ ciphertext, iv, mac, algo }}
 */
export async function gostEncrypt(plaintext, password) {
  const key = await deriveKeyGOST(password);
  const roundKeys = ghKeySchedule(key);
  const iv = crypto.getRandomValues(new Uint8Array(8));
  const data = new TextEncoder().encode(plaintext);
  const ciphertext = ghCTR(data, roundKeys, iv);
  const mac = ghOMAC(ciphertext, roundKeys).slice(0, 8);
  const toB64 = (b) => btoa(String.fromCharCode(...b));
  return { ciphertext: toB64(ciphertext), iv: toB64(iv), mac: toB64(mac), algo: 'GOST-R-34.12-2015' };
}

/**
 * Decrypt and verify OMAC integrity tag
 */
export async function gostDecrypt(ciphertext, iv, mac, password) {
  const fromB64 = (b64) => Uint8Array.from(atob(b64), c => c.charCodeAt(0));
  const key = await deriveKeyGOST(password);
  const roundKeys = ghKeySchedule(key);
  const ct = fromB64(ciphertext);
  const ivB = fromB64(iv);
  const macB = fromB64(mac);
  const expectedMac = ghOMAC(ct, roundKeys).slice(0, 8);
  let ok = true;
  for (let i = 0; i < 8; i++) if (expectedMac[i] !== macB[i]) { ok = false; break; }
  if (!ok) throw new Error('Ошибка целостности: имитовставка не совпадает. Неверный пароль или повреждённые данные.');
  return new TextDecoder().decode(ghCTR(ct, roundKeys, ivB));
}
