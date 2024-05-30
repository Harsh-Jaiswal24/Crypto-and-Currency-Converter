
           
const fromcurr= document.querySelector(".fromcc select")
const tocurr= document.querySelector(".tocc select")
const messagebox= window.document.querySelector(".mess2");

const btcList = {
    BTC: "Bitcoin",
     ETH: "Ethereum", USDT: "Tether", BNB: "Binance Coin", USDC: "USD Coin", XRP: "XRP (Ripple)", ADA: "Cardano", DOGE: "Dogecoin", SOL: "Solana", DOT: "Polkadot", MATIC: "Polygon", TRX: "TRON", LTC: "Litecoin", SHIB: "Shiba Inu", AVAX: "Avalanche", DAI: "Dai", LINK: "Chainlink", ATOM: "Cosmos", XLM: "Stellar", UNI: "Uniswap", WBTC: "Wrapped Bitcoin", BCH: "Bitcoin Cash", LEO: "UNUS SED LEO", ALGO: "Algorand", ETC: "Ethereum Classic", VET: "VeChain", ICP: "Internet Computer", FIL: "Filecoin", HBAR: "Hedera Hashgraph", APT: "Aptos", QNT: "Quant", NEAR: "NEAR Protocol", ARB: "Arbitrum", GRT: "The Graph", AAVE: "Aave", STX: "Stacks", FTM: "Fantom", MKR: "Maker", EGLD: "Elrond", XCN: "Chain", SAND: "The Sandbox", IMX: "Immutable", RUNE: "THORChain", KCS: "KuCoin Token", CRV: "Curve DAO Token", LDO: "Lido DAO", SNX: "Synthetix", CAKE: "PancakeSwap", CHZ: "Chiliz", ENJ: "Enjin Coin"
  };
  
  const btn=document.querySelector(".getvalue2");

const dropdowns= document.querySelectorAll(".dropdown select");
for(let select of dropdowns){

for(let code in btcList){
{
    let newoption= document.createElement("option");
    newoption.innerHTML=code;
    newoption.value=code;
    select.append(newoption);
}
}};


btn.addEventListener("click", async(evt) => {
    evt.preventDefault();

    const amount=document.querySelector(".amount2 input");
const amtval2=amount.value;
console.log(amtval2);



let chfrom=`${fromcurr.value}`;
console.log(chfrom);
let keyfrom= btcList[chfrom];
console.log(keyfrom);


let chto= `${tocurr.value}`;
console.log(chto);
let keyto= btcList[chto];
console.log(keyto);
const url=`https://api.coinpaprika.com/v1/price-converter?base_currency_id=${fromcurr.value}-${keyfrom}&quote_currency_id=${tocurr.value}-${keyto}&amount=1`;
let response = await fetch(url);
console.log(response);
let data = await response.json();
console.log(data);
let exchangevalue=  data.price;
console.log(exchangevalue);

    let totalamt =  amtval2*exchangevalue;
    console.log(totalamt);
    let finalmessagebtc= messagebox.innerHTML= `${amtval2} ${fromcurr.value} = ${totalamt} ${tocurr.value}`;  
   console.log(finalmessagebtc);
     if(data.result="success"){
        let buttonclr= document.querySelector(".getvalue2");
    buttonclr.innerHTML=" Exchange More";
    buttonclr.style.backgroundColor="green";
     }
  

});

