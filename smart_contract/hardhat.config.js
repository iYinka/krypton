require('@nomiclabs/hardhat-waffle');

module.exports = {
    solidity: "0.8.0",
    networks: {
        kovan: {
            url: "https://eth-kovan.alchemyapi.io/v2/NfrAP6Q_HAMtqctG0KcoTVbsUw8jII6_",
            accounts: [
                "7c35b3fc1dae54c7c7922aa53edd00e43d1a9ee89996853c99ea9dadf45b9868",
            ],
        },
    },
};