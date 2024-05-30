let btcs = document.querySelector(".btcs");
let currs= document.querySelector(".currs");

var flag;
window.onclick= function(){
    currs.addEventListener( "click", ()=>{
        flag="curr";
        console.log(flag)
        currs.style.backgroundColor="blue";
        btcs.style.backgroundColor="transparent";
        let card= document.querySelector(".card");
        card.style.transform='rotateY(180deg)';
    })
    
    btcs.addEventListener( "click", ()=>{
        flag="btc";
        console.log(flag)
        btcs.style.backgroundColor="blue";
        currs.style.backgroundColor="transparent"
        let card= document.querySelector(".card");
        card.style.transform='rotateY(0deg)';
    })
    runcode(flag);
};




function runcode(flag){
    if(flag==="btc"){
        console.log("btc code runs")

           
const fromcurr= document.querySelector(".fromcc select")
const tocurr= document.querySelector(".tocc select")
const messagebox= window.document.querySelector(".mess2");

const btcList = {
    BTC: "Bitcoin",
     ETH: "Ethereum", USDT: "Tether",  ADA: "Cardano", DOGE: "Dogecoin", SOL: "Solana", DOT: "Polkadot", MATIC: "Polygon", TRX: "TRON", LTC: "Litecoin",  AVAX: "Avalanche", DAI: "Dai", LINK: "Chainlink", ATOM: "Cosmos", XLM: "Stellar", UNI: "Uniswap",  ALGO: "Algorand",  VET: "VeChain", FIL: "Filecoin",  APT: "Aptos", QNT: "Quant",  ARB: "Arbitrum",  STX: "Stacks", FTM: "Fantom", MKR: "Maker", EGLD: "Elrond", XCN: "Chain",  RUNE: "THORChain",   CAKE: "PancakeSwap", CHZ: "Chiliz"
  };
  
  const btn=document.querySelector(".getvalue2");

const dropdowns= document.querySelectorAll(".dropdown select");
for(let select of dropdowns){

for(let code in btcList){
{
  
}
select.addEventListener("change",(evt)=>{
    updateflag(evt.target);
})
}};
const updateflag=(element)=>{
    let currcode=element.value;
    console.log(currcode);
    let currcodelc=currcode.toLowerCase();
    console.log(currcodelc);
    let newsrc=`https://assets.coincap.io/assets/icons/${currcodelc}@2x.png`;
    console.log(newsrc);
   let newimg= element.parentElement.querySelector("img");
newimg.src=newsrc;
}



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




    }
    else if(flag==="curr"){
        console.log("curr code will run");

           
const fromcurr= document.querySelector(".from select")
const tocurr= document.querySelector(".to select")
const messagebox= window.document.querySelector(".mess");

const countryList = {
    AED: "AE",
    AFN: "AF",
    XCD: "AG",
    ALL: "AL",
    AMD: "AM",
    ANG: "AN",
    AOA: "AO",
    AQD: "AQ",
    ARS: "AR",
    AUD: "AU",
    AZN: "AZ",
    BAM: "BA",
    BBD: "BB",
    BDT: "BD",
    XOF: "BE",
    BGN: "BG",
    BHD: "BH",
    BIF: "BI",
    BMD: "BM",
    BND: "BN",
    BOB: "BO",
    BRL: "BR",
    BSD: "BS",
    NOK: "BV",
    BWP: "BW",
    BYR: "BY",
    BZD: "BZ",
    CAD: "CA",
    CDF: "CD",
    XAF: "CF",
    CHF: "CH",
    CLP: "CL",
    CNY: "CN",
    COP: "CO",
    CRC: "CR",
    CUP: "CU",
    CVE: "CV",
    CYP: "CY",
    CZK: "CZ",
    DJF: "DJ",
    DKK: "DK",
    DOP: "DO",
    DZD: "DZ",
    ECS: "EC",
    EEK: "EE",
    EGP: "EG",
    ETB: "ET",
    EUR: "FR",
    FJD: "FJ",
    FKP: "FK",
    GBP: "GB",
    GEL: "GE",
    GGP: "GG",
    GHS: "GH",
    GIP: "GI",
    GMD: "GM",
    GNF: "GN",
    GTQ: "GT",
    GYD: "GY",
    HKD: "HK",
    HNL: "HN",
    HRK: "HR",
    HTG: "HT",
    HUF: "HU",
    IDR: "ID",
    ILS: "IL",
    INR: "IN",
    IQD: "IQ",
    IRR: "IR",
    ISK: "IS",
    JMD: "JM",
    JOD: "JO",
    JPY: "JP",
    KES: "KE",
    KGS: "KG",
    KHR: "KH",
    KMF: "KM",
    KPW: "KP",
    KRW: "KR",
    KWD: "KW",
    KYD: "KY",
    KZT: "KZ",
    LAK: "LA",
    LBP: "LB",
    LKR: "LK",
    LRD: "LR",
    LSL: "LS",
    LTL: "LT",
    LVL: "LV",
    LYD: "LY",
    MAD: "MA",
    MDL: "MD",
    MGA: "MG",
    MKD: "MK",
    MMK: "MM",
    MNT: "MN",
    MOP: "MO",
    MRO: "MR",
    MTL: "MT",
    MUR: "MU",
    MVR: "MV",
    MWK: "MW",
    MXN: "MX",
    MYR: "MY",
    MZN: "MZ",
    NAD: "NA",
    XPF: "NC",
    NGN: "NG",
    NIO: "NI",
    NPR: "NP",
    NZD: "NZ",
    OMR: "OM",
    PAB: "PA",
    PEN: "PE",
    PGK: "PG",
    PHP: "PH",
    PKR: "PK",
    PLN: "PL",
    PYG: "PY",
    QAR: "QA",
    RON: "RO",
    RSD: "RS",
    RUB: "RU",
    RWF: "RW",
    SAR: "SA",
    SBD: "SB",
    SCR: "SC",
    SDG: "SD",
    SEK: "SE",
    SGD: "SG",
    SKK: "SK",
    SLL: "SL",
    SOS: "SO",
    SRD: "SR",
    STD: "ST",
    SVC: "SV",
    SYP: "SY",
    SZL: "SZ",
    THB: "TH",
    TJS: "TJ",
    TMT: "TM",
    TND: "TN",
    TOP: "TO",
    TRY: "TR",
    TTD: "TT",
    TWD: "TW",
    TZS: "TZ",
    UAH: "UA",
    UGX: "UG",
    USD: "US",
    UYU: "UY",
    UZS: "UZ",
    VEF: "VE",
    VND: "VN",
    VUV: "VU",
    YER: "YE",
    ZAR: "ZA",
    ZMK: "ZM",
    ZWD: "ZW",
  };
  
  const btn=document.querySelector(".getvalue");

const dropdowns= document.querySelectorAll(".dropdown select");
for(let select of dropdowns){

for(let code in countryList){
{

}
select.addEventListener("change",(evt)=>{
    updateflag(evt.target);
})
}};


const updateflag=(element)=>{
    let currcode=element.value;
    console.log(currcode)
    let countrycode=countryList[currcode];
    let newsrc=`https://flagsapi.com/${countrycode}/flat/64.png`;
   let newimg= element.parentElement.querySelector("img");
newimg.src=newsrc;
}

btn.addEventListener("click", async(evt) => {
    evt.preventDefault();

    const amount=document.querySelector(".amount input");
const amtvalcc=amount.value;

const url= `https://v6.exchangerate-api.com/v6/0c99edeee1375187ae59fdbe/pair/${fromcurr.value}/${tocurr.value}`;
let response = await fetch(url);
//console.log(response);
let data = await response.json();
console.log(data);
let exchangevalue=  data.conversion_rate;
console.log(exchangevalue);

    let totalamt =  amount.value*exchangevalue;
    console.log(totalamt);
     messagebox.innerHTML= `${amount.value} ${fromcurr.value} = ${totalamt} ${tocurr.value}`;  
   
     if(data.result="success"){
        let buttonclr= document.querySelector("button");
    buttonclr.innerHTML=" Exchange More";
    buttonclr.style.backgroundColor="green";
     }    

});



    }



    else{
        console.log("default btc code will run");

        
           
const fromcurrbtc= document.querySelector(".frombtc select")
const tocurrbtc= document.querySelector(".tobtc select")
const messageboxbtc= window.document.querySelector(".mess2");

const btcList = {
    BTC: "Bitcoin",
     ETH: "Ethereum", USDT: "Tether",  ADA: "Cardano", DOGE: "Dogecoin", SOL: "Solana", DOT: "Polkadot", MATIC: "Polygon", TRX: "TRON", LTC: "Litecoin",  AVAX: "Avalanche", DAI: "Dai", LINK: "Chainlink", ATOM: "Cosmos", XLM: "Stellar", UNI: "Uniswap", ALGO: "Algorand", VET: "VeChain", FIL: "Filecoin", APT: "Aptos", QNT: "Quant",  ARB: "Arbitrum", STX: "Stacks", FTM: "Fantom", MKR: "Maker", EGLD: "Elrond", XCN: "Chain",  RUNE: "THORChain", CAKE: "PancakeSwap", CHZ: "Chiliz"
  };
  
  const btn=document.querySelector(".getvalue2");

const dropdowns= document.querySelectorAll(".dropdown select");
for(let select of dropdowns){

for(let code in btcList){
{
}
    select.addEventListener("change",(evt)=>{
        updateflag(evt.target);
    })
    }};
    const updateflag=(element)=>{
        let currcode=element.value;
        console.log(currcode);
        let currcodelc=currcode.toLowerCase();
        console.log(currcodelc);
        let newsrc=`https://assets.coincap.io/assets/icons/${currcodelc}@2x.png`;
        console.log(newsrc);
       let newimg= element.parentElement.querySelector("img");
    newimg.src=newsrc;
    }
    


btn.addEventListener("click", async(evt) => {
    evt.preventDefault();
    const amount=document.querySelector(".amount2 input");
const amtval2=amount.value;
console.log(amtval2);



let chfrom=`${fromcurrbtc.value}`;
console.log(chfrom);
let keyfrom= btcList[chfrom];
console.log(keyfrom);


let chto= `${tocurrbtc.value}`;
console.log(chto);
let keyto= btcList[chto];
console.log(keyto);
const url=`https://api.coinpaprika.com/v1/price-converter?base_currency_id=${fromcurrbtc.value}-${keyfrom}&quote_currency_id=${tocurrbtc.value}-${keyto}&amount=1`;
let response = await fetch(url);
console.log(response);
let data = await response.json();
console.log(data);
let exchangevalue=  data.price;
console.log(exchangevalue);

    let totalamt =  amtval2*exchangevalue;
    console.log(totalamt);
    let finalmessagebtc= messageboxbtc.innerHTML= `${amtval2} ${fromcurrbtc.value} = ${totalamt} ${tocurrbtc.value}`;  
   console.log(finalmessagebtc);
     if(data.result="success"){
        let buttonclr= document.querySelector(".getvalue2");
    buttonclr.innerHTML=" Exchange More";
    buttonclr.style.backgroundColor="green";
     }

});


    }
    };
    