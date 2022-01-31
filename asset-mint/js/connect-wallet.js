var account = null;
var contract = null;
const ABI=[];
const ADDRESS="";

(async () => {
    if (window.ethereum) {
        await window.ethereum.send('eth_requestAccounts');
        window.web3 = new Web3(window.ethereum);

        var accounts = await web3.eth.getAccounts();
        account = accounts[0];
        document.getElementById('wallet-address').textContent = account;
    }
})();