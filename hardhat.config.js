require('@nomicfoundation/hardhat-toolbox')

module.exports = {
  defaultNetwork: 'localhost',
  networks: {
    hardhat: {},
    localhost: {
      url: 'https://virtual.gnosis.rpc.tenderly.co/cb2a714f-71b5-4deb-8fda-9c888cda4d47',
    },
    bitfinity: {
      url: 'https://testnet.bitfinity.network',
      accounts: ['0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80'],
      chainId: 355113,
    },
  },
  solidity: {
    version: '0.8.17',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  mocha: {
    timeout: 40000,
  },
}
