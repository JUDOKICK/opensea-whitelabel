import transakSDK from "@transak/transak-sdk";

export async function buyRndr() {
    let walletAdd = '';
    if (window.ethereum.selectedAddress !== null){
        walletAdd = window.ethereum.selectedAddress;
    }
    let transak = new transakSDK({
        apiKey: '590146f9-b285-4567-b36a-64ec1181d8b3',  // Your API Key
        environment: 'STAGING', // STAGING/PRODUCTION
        defaultCryptoCurrency: 'ETH',
        walletAddress: walletAdd, // Your customer's wallet address
        themeColor: '000000', // App theme color
        fiatCurrency: 'USD', // INR/GBP
        email: '', // Your customer's email address
        redirectURL: '',
        hostURL: window.location.origin,
        widgetHeight: '550px',
        widgetWidth: '450px'
    });

    transak.init();

// To get all the events
    transak.on(transak.ALL_EVENTS, (data) => {
        console.log(data)
    });

// This will trigger when the user marks payment is made.
    transak.on(transak.EVENTS.TRANSAK_ORDER_SUCCESSFUL, (orderData) => {
        console.log(orderData);
        transak.close();
    });
}
