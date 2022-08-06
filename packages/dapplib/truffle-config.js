require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope arm bubble tooth fan rice night punch hunt prize sudden task'; 
let testAccounts = [
"0x16f221b4e9ae589661a7039d432c6b86792df14ddbb8c7397f30907d40c2a0c6",
"0x1e295fc70b5b54b923737d48f5686ad6775b4a9392d4f6a979146ef770de089c",
"0xb1ab18cc3362b0b7c41fd5211f9e8cf4fde74ccd4c5e566beca898bf47011539",
"0xb31b88c4433423b9375e66bb79f814757d8440a48054da84f33fb520a7d9e476",
"0x4ebc240f19d5373a320566364087ca3ed0a72139e8b0341e86e1bb22cda1287f",
"0x17e4a7d7c5b99e84ac88bed9538b952ee09c7292dacd3015fb0b204ec10605f7",
"0x0e75f4664463bf5efea6a9c0d5866d44c5ea7f0d21f92ebeea0b76557dd292fe",
"0xa2f60c6f439158763e5b6e9021817a8d8012289bf749fe025013af3fb0996563",
"0x09eb42cf04ba533ec184e3fca3bcbe9330b3a1be4377281696290b18ac25c98e",
"0x5061f8ab44ef4ea6d946cee4d8a65ce5d7cd187754f6525524e3887cecfacf10"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

