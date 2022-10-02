const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
    'post release arrange tape error remind cactus net ivory industry merit knock',
    'https://rinkeby.infura.io/v3/1c262b3bbb7f4626a66efc12bbe97d5d'
);
const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account: ', accounts[0]);

    const result = await new web3.eth.Contract(compiledFactory.abi)
                    .deploy({data: '0x' + compiledFactory.evm.bytecode.object })
                    .send({gas: '10000000', from: accounts[0]});

    console.log('Contract deployed to: ', result.options.address);
    provider.engine.stop();
};
deploy();