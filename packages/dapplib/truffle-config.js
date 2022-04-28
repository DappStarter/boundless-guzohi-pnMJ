require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give knife fortune silver shock rifle smile provide install square sure split'; 
let testAccounts = [
"0xe93072e7c5a69961a2100d8b32064c3b0ff67b9231a4c4ed11eb007974df5d12",
"0x3d141394f8fe2e95c009f30eed5291e4dfecef39dc6f0895720272e60f3e9dd6",
"0xdb74ef6db7b6b513b58e97d7d564459417a2b8f8e7320f9790e45f8f3b5b540f",
"0x1b234cf6b5a69be1581e77217dc5468b8cf1d83102e59b7083d6cc70db67be98",
"0x481ab7233c80d9f87d1be4f9bd4de5576836ee3b9d6fb48b691d905b6d811774",
"0xd54db981d565205cc1e6be5af189c77aed39739e3dbc64282ca1f5244c6f2581",
"0x533e3d47931e45c275457b22bac51fd7cf5b246e09801a6f9df806eb8363aab5",
"0x1e81effd11fc540fa7e839b5c6775a8d8eac1ab854e838f815084bc394f01124",
"0xe50a799031df1fad194e88f9991431f9e5b390af73d9d7ed0a05e82ca0cb50ea",
"0x5457508520b2cdbca8b9d769cc8d92f1df7f7c1b79091e3a5558cf169c9f000f"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


