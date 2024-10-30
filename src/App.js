import React, {useState,useRef,useEffect} from 'react'
import {QRCodeCanvas} from 'qrcode.react';
import {QRCodeSVG} from 'qrcode.react';
import { v4 as uuidv4 } from 'uuid';
//import ApexCharts from 'apexcharts'
import './App.css';
import axios from "axios";
//import chart from "chart.js";
//import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import userimg from './assets/user-account.svg';
import codeimg from './assets/security-code.svg';
import preload from './assets/preloader.svg';
import arrowleft from './assets/arrowleft.svg';
import arrowup from './assets/arrowup.svg';
import arrowdown from './assets/arrowdown.svg';
import security from './assets/security-svgrepo.svg';
import logo from './assets/binarylogo.svg';
import bt from './assets/BT.svg';
import Widgets from './widgets.js';
import menu2 from './assets/menu-svgrepo.svg';
import back from './assets/left-arrow-svgrepo.svg';
import user from './assets/bx-user.svg';
import trade from './assets/bx-stats.svg';
import money from './assets/money.svg';
import cart from './assets/bx-cart-alt.svg';
import signup from './assets/bx-log-in-circle.svg';
import logout from './assets/bx-log-out.svg';
import settings from './assets/settings-svgrepo-com.svg';
import siup from './assets/user-check-svgrepo-com.svg';
import money2 from './assets/money-svgrepo-com.svg';
import tether from './assets/tether.svg';
import menu from './assets/menu-svgrepo-com.svg';
import down from './assets/down-svgrepo-com.svg';
import circle from './assets/circle.svg';
import drop from './assets/drop-svgrepo-com.svg';
import stock from './assets/stock-earnings-svgrepo-com.svg';
import stock2 from './assets/stock.svg';
import list from './assets/list-svgrepo-com.svg';
import bitcoin from './assets/bitcoin-simple-svgrepo-com.svg';
import dollar from './assets/dollar-svgrepo-com.svg';
import history from './assets/history.svg';
import arocycle from './assets/arrow-c.svg';
import dollart from './assets/dollar-t.svg';
import bot from './assets/bot.svg';
import promo from './assets/promo.svg';
import cashback from './assets/cashback.svg';
import deposit from './assets/deposit.svg';
import safe from './assets/safe.svg';
import social from './assets/social.svg';
import gems from './assets/gems.svg';
import mine from './assets/mine.svg';
import help from './assets/help.svg';
import Purchase from './assets/Purchase.svg';
import guide from './assets/guide.svg';
import chartnw from './assets/chart.svg';
import reviwe from './assets/reviwe.svg';
import support from './assets/support.svg';
import application from './assets/application.svg';
import affiliate from './assets/affiliate.svg';
import signalimg from './assets/signal.svg';
import loginimg from './assets/login.svg';
import Referral from './assets/Referral.svg';
import demosignal from './assets/signal-demo.svg';


import stop from './assets/stop.svg';
import copy from './assets/copy.svg';
import tooltip from './assets/tooltip.svg';
import sound from './assets/sound.svg';
import language from './assets/language.svg';
import indicators from './assets/indicators.svg';


import eu from './assets/pairs/eu.svg';
import jp from './assets/pairs/jp.svg';
import ch from './assets/pairs/ch.svg';
import us from './assets/pairs/us.svg';
import au from './assets/pairs/au.svg';
import ca from './assets/pairs/ca.svg';

import bitcoin_l from './assets/pairs/bitcoin.svg';
import ethereum from './assets/pairs/ethereum.svg';

import gas from './assets/oil-gas.svg';
import brent from './assets/oil-brent.svg';
import platinum from './assets/platinum.svg';
import gold from './assets/gold.svg';
import crude from './assets/oil-crude.svg';
import silver from './assets/silver.svg';


import apple from './assets/apple.svg';
import amazon from './assets/amazon.svg';
import microsoft from './assets/microsoft.svg';
import fedex from './assets/fedex.svg';
import mcdonald from './assets/mcdonald.svg';
import Netflix from './assets/Netflix.svg';
import visa from './assets/visa.svg';
import facebook from './assets/facebook.svg';
import tesla from './assets/tesla.svg';
import Indices from './assets/Indices.svg';
import wallet from './assets/wallet.svg';


import usericon from './assets/user.svg';
import close from './assets/close.svg';

import usa from './assets/png_48/united-states-of-america.png';
//import Cun from "./cuntry_flude.js"
import Ore from "./cuntry_select.js"

//import widget from './widgets/widget.html';
//import { AdvancedChart } from "react-tradingview-embed";
//import { Chart, registerables } from 'chart.js';
//import Binance from 'binance-api-react-native'
//mport { toBeInvalid } from '@testing-library/jest-dom/dist/matchers';


function App() {

  const EUR_JPY = "https://s.tradingview.com/widgetembed/?frameElementId=tradingview_77a82&symbol=FX%3AEURJPY&interval=1&hidesidetoolbar=0&saveimage=0&toolbarbg=f1f3f6&studies=%5B%5D&hideideas=1&theme=dark&style=1&timezone=Etc%2FUTC&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en&utm_source=www.livecharts.co.uk&utm_medium=widget&utm_campaign=chart&utm_term=FX%3AEURJPY"
  const CFD_GOLD= "https://s.tradingview.com/widgetembed/?frameElementId=tradingview_e3d3a&symbol=TVC%3AGOLD&interval=1&hidesidetoolbar=0&saveimage=0&toolbarbg=f1f3f6&studies=%5B%5D&hideideas=1&theme=dark&style=1&timezone=Etc%2FUTC&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en&utm_source=www.livecharts.co.uk&utm_medium=widget&utm_campaign=chart&utm_term=TVC%3AGOLD&page-uri=https://www.livecharts.co.uk/MarketCharts/gold.php"
  const USD_CHF = "https://s.tradingview.com/widgetembed/?frameElementId=tradingview_e5b39&symbol=FX%3AUSDCHF&interval=1&hidesidetoolbar=0&saveimage=0&toolbarbg=f1f3f6&studies=%5B%5D&hideideas=1&theme=dark&style=1&timezone=Etc%2FUTC&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en&utm_source=www.livecharts.co.uk&utm_medium=widget&utm_campaign=chart&utm_term=FX%3AUSDCHF"
  const EUR_USD = "https://s.tradingview.com/widgetembed/?frameElementId=tradingview_428dc&symbol=FX%3AEURUSD&interval=1&hidesidetoolbar=0&saveimage=0&toolbarbg=f1f3f6&studies=%5B%5D&hideideas=1&theme=dark&style=1&timezone=Etc%2FUTC&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en&utm_source=www.livecharts.co.uk&utm_medium=widget&utm_campaign=chart&utm_term=FX%3AEURUSD"
  const CGB_JPY = "https://s.tradingview.com/widgetembed/?frameElementId=tradingview_52866&symbol=FX%3AGBPJPY&interval=1&hidesidetoolbar=0&saveimage=0&toolbarbg=f1f3f6&studies=%5B%5D&hideideas=1&theme=dark&style=1&timezone=Etc%2FUTC&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en&utm_source=www.livecharts.co.uk&utm_medium=widget&utm_campaign=chart&utm_term=FX%3AGBPJPY"
  const CHF_YEN = "https://s.tradingview.com/widgetembed/?frameElementId=tradingview_d726b&symbol=FX%3AGBPCHF&interval=1&hidesidetoolbar=0&saveimage=0&toolbarbg=f1f3f6&studies=%5B%5D&hideideas=1&theme=dark&style=1&timezone=Etc%2FUTC&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en&utm_source=www.livecharts.co.uk&utm_medium=widget&utm_campaign=chart&utm_term=FX%3AGBPCHF"
  const AUD_USD = "https://s.tradingview.com/widgetembed/?frameElementId=tradingview_b1af3&symbol=FX%3AAUDUSD&interval=1&hidesidetoolbar=0&saveimage=0&toolbarbg=f1f3f6&studies=%5B%5D&hideideas=1&theme=White&style=1&timezone=Etc%2FUTC&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en&utm_source=www.livecharts.co.uk&utm_medium=widget&utm_campaign=chart&utm_term=FX%3AAUDUSD"

  const Bitcoin = "https://s.tradingview.com/widgetembed/?frameElementId=tradingview_ca5ce&symbol=COINBASE%3ABTCUSD&interval=1&hidesidetoolbar=0&saveimage=0&toolbarbg=f1f3f6&studies=%5B%5D&hideideas=1&theme=White&style=1&timezone=Etc%2FUTC&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en&utm_source=www.livecharts.co.uk&utm_medium=widget&utm_campaign=chart&utm_term=COINBASE%3ABTCUSD"
  const Ethereum = "https://s.tradingview.com/widgetembed/?frameElementId=tradingview_75942&symbol=COINBASE%3AETHUSD&interval=1&hidesidetoolbar=0&saveimage=0&toolbarbg=f1f3f6&studies=%5B%5D&hideideas=1&theme=White&style=1&timezone=Etc%2FUTC&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en&utm_source=www.livecharts.co.uk&utm_medium=widget&utm_campaign=chart&utm_term=COINBASE%3AETHUSD"

  const NaturalGas = "https://s.tradingview.com/widgetembed/?frameElementId=tradingview_d914e&symbol=CURRENCYCOM%3ANATURALGAS&interval=5&hidesidetoolbar=0&saveimage=0&toolbarbg=f1f3f6&studies=%5B%5D&hideideas=1&theme=White&style=1&timezone=Etc%2FUTC&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en&utm_source=www.livecharts.co.uk&utm_medium=widget&utm_campaign=chart&utm_term=CURRENCYCOM%3ANATURALGAS"
  const WTICrudeOil = "https://s.tradingview.com/widgetembed/?frameElementId=tradingview_ddfd7&symbol=EASYMARKETS%3AOILUSD&interval=1&hidesidetoolbar=0&saveimage=0&toolbarbg=f1f3f6&studies=%5B%5D&hideideas=1&theme=White&style=1&timezone=Etc%2FUTC&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en&utm_source=www.livecharts.co.uk&utm_medium=widget&utm_campaign=chart&utm_term=EASYMARKETS%3AOILUSD"
  const BrentOil = "https://s.tradingview.com/widgetembed/?frameElementId=tradingview_de029&symbol=TVC%3AUKOIL&interval=1&hidesidetoolbar=0&saveimage=0&toolbarbg=f1f3f6&studies=%5B%5D&hideideas=1&theme=White&style=1&timezone=Etc%2FUTC&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en&utm_source=www.livecharts.co.uk&utm_medium=widget&utm_campaign=chart&utm_term=TVC%3AUKOIL"
  const Silver = "https://s.tradingview.com/widgetembed/?frameElementId=tradingview_986a2&symbol=TVC%3ASILVER&interval=5&hidesidetoolbar=0&saveimage=0&toolbarbg=f1f3f6&studies=%5B%5D&hideideas=1&theme=White&style=1&timezone=Etc%2FUTC&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en&utm_source=www.livecharts.co.uk&utm_medium=widget&utm_campaign=chart&utm_term=TVC%3ASILVER"
  const Gold = "https://s.tradingview.com/widgetembed/?frameElementId=tradingview_c8465&symbol=TVC%3AGOLD&interval=5&hidesidetoolbar=0&saveimage=0&toolbarbg=f1f3f6&studies=%5B%5D&hideideas=1&theme=White&style=1&timezone=Etc%2FUTC&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en&utm_source=www.livecharts.co.uk&utm_medium=widget&utm_campaign=chart&utm_term=TVC%3AGOLD"
  const Platinum = "https://s.tradingview.com/widgetembed/?frameElementId=tradingview_8d47b&symbol=OANDA%3AXPTUSD&interval=5&hidesidetoolbar=0&saveimage=0&toolbarbg=f1f3f6&studies=%5B%5D&hideideas=1&theme=White&style=1&timezone=Etc%2FUTC&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en&utm_source=www.livecharts.co.uk&utm_medium=widget&utm_campaign=chart&utm_term=OANDA%3AXPTUSD"

  const DPG="Our Data protection policies are automatically and uniformly enforced, and built-in audit and reporting functionality provides traceability and alerting to assure that data is secured, privacy is protected, and Data protection compliance is met. Support for a variety of interfaces, from Recovery Key to Quick link Address, Web API Encryption allows end to end security using the interfaces with which they are most com[liant, and out-of-the-box functionality for every common enterprise operating system. we use a unique Data-Centric Security Architecture allows information security teams to comprehensively define an Data Protection Policy (DPP) and to bind the policy to data itself, protecting it regardless of where the data is used, moved or stored. Access controls are applied to unsecure data in the exact format authorized for specific applications or users – fully restricted, unrestricted or partially concealed with the appropriate data mask dynamically applied. Managing cryptographic keys in and across applications can be very complicated, but our Encryption model centralizes and automates cryptographic key management."
  const Terms="Please read the terms carefully as they govern your use of BINARY-TRADEZ Services.THESE TERMS CONTAIN IMPORTANT PROVISIONS INCLUDING AN ARBITRATION PROVISION THAT REQUIRES ALL CLAIMS TO BE RESOLVED BY WAY OF LEGALLY BINDING ARBITRATION.The terms of the arbitration provision are set forth in Article 10, “Resolving Disputes: Forum, Arbitration, Class Action Waiver”, hereunder. As with any asset, the values of Digital Currencies (as defined below) may fluctuate significantly and there is a substantial risk of economic losses when purchasing, selling, holding or investing in forex and or Digital Currencies and their derivatives.BY MAKING USE OF BINARY-TRADEZ SERVICES, YOU ACKNOWLEDGE AND AGREE THAT: (1) YOU ARE AWARE OF THE RISKS ASSOCIATED WITH TRANSACTIONS OF DIGITAL CURRENCIES AND THEIR DERIVATIVES; (2) YOU SHALL ASSUME ALL RISKS RELATED TO THE USE OF BINARY-TRADEZ SERVICES AND TRANSACTIONS OF DIGITAL CURRENCIES AND THEIR DERIVATIVES; AND (3) BINARY-TRADEZ SHALL NOT BE LIABLE FOR ANY SUCH RISKS OR ADVERSE OUTCOMES. By accessing, using or attempting to use BINARY-TRADEZ Services in any capacity, you acknowledge that you accept and agree to be bound by these Terms. If you do not agree, do not access BINARY-TRADEZ or utilize BINARY-TRADEZ services."

  const [balance, setbalance] = useState("1000.00")
  const [initialbal, setinitialbal] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [passwordR, setpasswordR] = useState("")
  const [firstname, setfirstname] = useState("")
  const [lastname, setlastname] = useState("")
  const [reff, setreff] = useState("")
  const [key, setkey] = useState("")
  const [_email, set_email] = useState("")
  const [_password, set_password] = useState("")
  const [box, setbox] = useState(1)
  const [navi, setnavi] = useState(0)
  const [load, setload] = useState(0)
  const [er, seter] = useState("")
  const [er2, seter2] = useState("")
  const [ds, setds] = useState("")
  const [qlink, setqlink] = useState("")
  const [pin, setpin] = useState("")
  const [view, setview] = useState(1)
  const [hip, sethip] = useState(0)
  const [L, setL] = useState(0)
  const [slide, setslide] = useState("slidein")
  const [tradecolor, settradecolor] = useState("tranparent")
  const [tradecolorX, settradecolorX] = useState("tranparent")
  const [country, setcountry] = useState("")
  const [Data, setData] = useState([])
  const [_pro, set_pro] = useState([])
  const [exlog, setexlog] = useState(false)
  const [signalis, setsignalis] = useState([])
  const [allusers, setallusers] = useState([])
  const [refbalance, setrefbalance] = useState("0")

  const [_tab, set_tab] = useState(1)
  const [_pop, set_pop] = useState("")
  const [cpass, setcpass] = useState("")
  const [staticid, setstaticid] = useState("")
  const [tradetype, settradetype] = useState("DEMO")
  const [tradeamount, settradeamount] = useState("1000.00")
  const [tradesize, settradesize] = useState("")
  const [pair, setpair] = useState("EUR/JPY")
  const [curse, setcurse] = useState("Currencies")
  const [status, setstatus] = useState("STRANGER")
  const [topup, settopup] = useState("")
  const [payout, setpayout] = useState(87)
  const [_ct, set_ct] = useState(1)
  const [_ed, set_ed] = useState(0)
  const [_ms, set_ms] = useState(1)
  const [_slo, set_slo] = useState(1)
  const [_ts, set_ts] = useState(0)
  const [_tran, set_tran] = useState("")
  const [_witd, set_witd] = useState(1)
  const [H, setH] = useState("00")
  const [M, setM] = useState("00")
  const [S, setS] = useState("00")
  const [LT, setLT] = useState("")
  const [forcast, setforcast] = useState("")
  const [intrest, setintrest] = useState("")
  const [flashtrade, setflashtrade] = useState(0)
  const [flashtradeC, setflashtradeC] = useState(0)
  const [Admin, setAdmin] = useState(false)

  const [newpass, setnewpass] = useState("")
  const [transID, settransID] = useState("0x0000000000000000000000000000000000000000")
  const [trAmount, settrAmount] = useState("")
  const _emailr = useRef("")
  const _passwordr = useRef("")
  const [div, setdiv] = useState(<div></div>)
  const [tradeduration, settradeduration] = useState(0)
  const [sopay, setopay] = useState("")
  const [sbtc, setbtc] = useState("")
  const [seth, seteth] = useState("")
  const [USDT, setUSDT] = useState("")
  const [numbuffer, setnumbuffer] = useState("")

const [signal, setsignal] = useState(" ")  
const [s_Bitcoin, setBitcoin] = useState(" ")
const [s_Ethereum, setEthereum] = useState(" ")
const [s_eur_jpy, seteur_jpy] = useState(" ")
const [s_usd_chf, setusd_chf] = useState(" ")
const [s_aud_cad, setaud_cad] = useState(" ")
const [s_eur_usd, seteur_usd] = useState(" ")
const [s_chf_jpy, setchf_jpy] = useState(" ")
const [s_NG, setNG] = useState(" ")
const [s_WCO, setWCO] = useState(" ")
const [s_BO, setBO] = useState(" ")
const [s_Platinum, setPlatinum] = useState(" ")
const [s_Silver, setSilver] = useState(" ")
const [s_Gold, setGold] = useState(" ")
//--------------------------------------------------------------Demo

const [dsignal, setdsignal] = useState(" ")  
const [d_Bitcoin, setdBitcoin] = useState(" ")
const [d_Ethereum, setdEthereum] = useState(" ")
const [d_eur_jpy, setdeur_jpy] = useState(" ")
const [d_usd_chf, setdusd_chf] = useState(" ")
const [d_aud_cad, setdaud_cad] = useState(" ")
const [d_eur_usd, setdeur_usd] = useState(" ")
const [d_chf_jpy, setdchf_jpy] = useState(" ")
const [d_NG, setdNG] = useState(" ")
const [d_WCO, setdWCO] = useState(" ")
const [d_BO, setdBO] = useState(" ")
const [d_Platinum, setdPlatinum] = useState(" ")
const [d_Silver, setdSilver] = useState(" ")
const [d_Gold, setdGold] = useState(" ")

//--------------------------------------------------------------Demo
const [WTD, setWTD] = useState(" ")
const [Debit, setDebit] = useState([])
const [Credit, setCredit] = useState([])
const [creditamount, setcreditamount] = useState("")
const [Tempdata, setTempdata] = useState("")
const [popo, setpopo] = useState(0)
const [walletadress, setwalletadress] = useState()
const [Withdrawlamount, setWithdrawlamount] = useState("")
const [vi, setvi] = useState({})
const [dpass, setdpass] = useState()
const [tt, settt] = useState("0")
const [pendingtransaction, setpendingtransaction] = useState([])
const [poptext, setpoptext] = useState("")


  const pu1 = useRef("")
  const pu2 = useRef("")
  const _wallad = useRef("")

  const cheksign =  JSON.stringify(_pro)
  
  const [basescreen, setbasescreen] = useState(0)
  const [bgs2, setbgs2] = useState(0)
  const [trading, settrading] = useState(false)
  const [D, setD] = useState({
    transitionProperty:"width",
    transitionDuration:"0s",
    height:"100%",
    width:"100%"})
 
const [defultfl,defultfl2]= useState(<img alt="img" id="iclip" src={usa} />) 

  const [winheight, setwinheight] = useState(document.documentElement.clientHeight)
  const [winwidth, setwinwidth] = useState(document.documentElement.clientWidth)
 
  const h = "Higher"
  const l = "Lower"
  const o = " "


  /* useEffect RUN-----------------------------------------------------------------------------------------------*/
  const [pa, setpa] = useState(1)
 useEffect(() => { 
  //initialize() 
  pro_signout()
  seter("Auto login is temporarily disabled")
  freezer()

}, [])

function freezer(){
  

  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 1);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 2);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 3);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 4);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 5);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 6);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 7);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 8);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 9);
  
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 10);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 11);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 12);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 13);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 14);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 15);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 16);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 17);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 18);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 19);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 20);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 21);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 22);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 23);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 24);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 25);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 26);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 27);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 28);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 29);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 30);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 31);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 32);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 33);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 34);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 35);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 36);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 37);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 38);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 39);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 40);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 41);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 42);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 43);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 44);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 45);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 46);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 47);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 48);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 49);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 50);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 51);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 52);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 53);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 54);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 55);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 56);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 57);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 58);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 59);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 60);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 61);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 62);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 63);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 64);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 65);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 66);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 67);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 68);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 69);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 70);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 71);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 72);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 73);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 74);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 75);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 76);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 77);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 78);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 79);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 80);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 81);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 82);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 83);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 84);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 85);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 86);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 87);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 88);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 89);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 90);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 91);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 92);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 93);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 94);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 95);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 96);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 97);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 98);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 99);
  setTimeout(() => {window.history.pushState("object or string", "Title",)}, 100);
 
 
   }

  /* useEffect RUN-----------------------------------------------------------------------------------------------*/


  useEffect(() => {

    initialize();
  
  }, [])
  
  
  function initialize() {
   const logstate = localStorage.getItem("LOGSTATE")
   const userstate = localStorage.getItem("Bintrade")
   setnavi("T");
   
    if(logstate==="true"){freezer();getref(userstate); setTimeout(() => {inlog();}, 2000)  }else{setTimeout(() => {setnavi(1);}, 2000)}
    
    function inlog() { 
      axios.post("https://binarytradeszdb.glitch.me/account/find",{"email":userstate},{timeout:1500000})
     .then(function (res){ if(JSON.stringify(res.data)!=="[]"){grab_pending(logstate);setexlog(true);setload(0);setnavi(2);logDispose();set_pro(res.data);getUSDT()} })
     .catch(function (error) { seter("Please check network connection")});
     }

  }

  function pro_signin(i) {
    localStorage.setItem("LOGSTATE","true")
    localStorage.setItem("Bintrade",i)
  }

  function pro_signout() {
    localStorage.setItem("LOGSTATE","false")
    localStorage.setItem("Bintrade","")
  }
  
  
function navDispose() {
  setslide("slidein");sethip(0)
}
  window.addEventListener('resize', function() {
   setwinheight(document.documentElement.clientHeight);
   setwinwidth(document.documentElement.clientWidth)
 }, true);
 
 document.addEventListener('scroll', function() {
   setbasescreen(document.getElementById("screencheker1").getBoundingClientRect().top);
   setbgs2(document.getElementById("screencheker2").getBoundingClientRect().top);
 }, true);
  


function skipchild(e) {
  if(e.nativeEvent) {
    e.nativeEvent.preventDefault();
    e.nativeEvent.stopPropagation();
  }else
  e.preventDefault();
  e.stopPropagation();
}


function skteing() {
  set_ms(0);set_slo(2)
}


  function lbox(i) {if(box==i){return({display:'block'})}else{return({display:'none'})}}
  function nav(i) {if(navi==i){return({display:'block'})}else{return({display:'none'})}}
  function lld(i) {if(load==i){return({display:'block'})}else{return({display:'none'})}}
  function hold(i,s) {
    if(s===1){setload(1);setTimeout(() => {setload(0)}, 1000);setTimeout(() => {setbox(i)}, 1000)}
    if(s===1.5){setload(1);setTimeout(() => {setload(0)}, 1500);setTimeout(() => {setbox(i)}, 1500)}
    if(s===2){setload(1);setTimeout(() => {setload(0)}, 2000);setTimeout(() => {setbox(i)}, 2000)}
    if(s===2.5){setload(1);setTimeout(() => {setload(0)}, 2500);setTimeout(() => {setbox(i)}, 2500)}
    if(s===3){setload(1);setTimeout(() => {setload(0)}, 3000);setTimeout(() => {setbox(i)}, 3000)}
  }



  function keypress(e,i) {
    if(i===1){if(e.key === "Enter"){chkemail()}}
    if(i===2){if(e.key === "Enter"){login()}}
  }


  const flt = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
  const vmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const pwd=/^[A-Za-z]\w{7,14}$/
  const pwdF=/[A-Z]/
  function Erronote(i) {
    if(i===1){
      setload(0);
      if(email===""){seter("Enter Email")}else{
      if(vmail.test(email).toString()!=="true"){seter("Invalid Email")}else{
      if(password===""){seter("Enter password")}else{
      if(password.length<8){seter("password must be upto 8 characters")}else{}
      if(pwdF.test(password).toString()!=="true"){seter("password must contain uppercase")}else{hold(6,1)}}}}
      //if(password===""){ }else{}
    }
    if(i===4){
      if(firstname.length<1/*&&lastname.length <1*/){seter("Enter valid Name")}else
      if(country===""){seter("Select Country")}else{hold(3,1.5)}
    }
    if(i===2){if(pin.length<4){seter("Enter four digit pin")}else{qlrun()}}
    if(i===3){if(1===1){seter("invalid username or password")}else{qlrun()}}
  }

  function err() { if(er!==""){return({display:"block"})}else{return({display:'none'})}}
  function err2() { if(er!==""){return({display:"block"})}else{return({display:'none'})}}
  function dis() { if(ds!==""){return({display:"block"})}else{return({display:'none'})} }
  
  function skey(i) { if(i>=key.length){return({display:"block"})}else{return({display:'none'})} }
  function lig(i) { if(L===1){return({display:"block"})}else{return({display:'none'})} }
  function lou(i) { if(L!==1){return({display:"block"})}else{return({display:'none'})} }
  
  function runpin(i) { if(pin.length<4){setpin(pin+i)} }
  function qlrun() {hold(7,3);setqlink(uuidv4())}
  function viewstyle (i) { if(i>=key.length){return({display:"block"})}else{return({display:'none'})} }


  
  function viewframe() {
    if(view===1){ return(<iframe id="ifr" width="100%" marginTop="200px" height="100%" src={EUR_JPY} ></iframe>)}
    if(view===2){ return(<iframe id="ifr" width="100%" marginTop="200px" height="100%" src={USD_CHF} ></iframe>)}
    if(view===3){ return(<iframe id="ifr" width="100%" marginTop="200px" height="100%" src={EUR_USD} ></iframe>)}
    if(view===4){ return(<iframe id="ifr" width="100%" marginTop="200px" height="100%" src={CGB_JPY} ></iframe>)}
    if(view===5){ return(<iframe id="ifr" width="100%" marginTop="200px" height="100%" src={AUD_USD} ></iframe>)}

    
    if(view===6){ return(<iframe id="ifr" width="100%" marginTop="200px" height="100%" src={Bitcoin} ></iframe>)}
    if(view===7){ return(<iframe id="ifr" width="100%" marginTop="200px" height="100%" src={Ethereum} ></iframe>)}
    if(view===8){ return(<iframe id="ifr" width="100%" marginTop="200px" height="100%" src={NaturalGas} ></iframe>)}
    if(view===9){ return(<iframe id="ifr" width="100%" marginTop="200px" height="100%" src={WTICrudeOil} ></iframe>)}
    if(view===10){ return(<iframe id="ifr" width="100%" marginTop="200px" height="100%" src={BrentOil} ></iframe>)}
    if(view===11){ return(<iframe id="ifr" width="100%" marginTop="200px" height="100%" src={Platinum} ></iframe>)}
    if(view===12){ return(<iframe id="ifr" width="100%" marginTop="200px" height="100%" src={Silver} ></iframe>)}
    if(view===13){ return(<iframe id="ifr" width="100%" marginTop="200px" height="100%" src={Gold} ></iframe>)}
  }


  function hipop() {
    if(hip===1){ return({display:"block"})}else{return({display:'none'})}
  }
  


function vfunc(i,a,x) {
  setview(i);setpair(a);sethip(0);setpayout(x)
}
function demo() {
  setload(1);setTimeout(() => {setload(0)}, 3000);setTimeout(() => {setnavi(2)}, 3000)
}
function oprun(i) {
  setslide("slidein");
  if(i===1){setnavi(1);setbox(0);hold(2,1)}
  if(i===5){setnavi(1);setbox(0);hold(1,1)}
  if(i===6){setnavi(1);setbox(0);hold(1,1)}
}

async function prid(){setstaticid(uuidv4())}
function sid() { 
  const retry = document.getElementById("cll")
  if(staticid===""){setTimeout(() => {retry.click()}, 500);}else{return(staticid)} }
  


  function chkemail(){ if(reff!==""){clo1()}else{clo2()} 

    function clo1(){
      axios.post("https://binarytradeszdb.glitch.me/ref/r",{"ref":reff})
      .then(function (res){
         if(JSON.stringify(res.data)!=="[]"){
            if(password!==passwordR){seter("Passwords do not match.")}else{
      setload(1)
      axios.post("https://binarytradeszdb.glitch.me/account/find",{"email":email},{timeout:5000})
      .then(function (res){ if(JSON.stringify(res.data)==="[]"){ Erronote(1);
      }else{seter("Email already exist");setload(0) } })
      .catch(function (error) { seter("Error check network");setload(0) });
     }
      }else{seter("Invalid Referral")}  })
      .catch(function (error) { seter(error.toString()) });
  }

    function clo2(){
            if(password!==passwordR){seter("Passwords do not match.")}else{
      setload(1)
      axios.post("https://binarytradeszdb.glitch.me/account/find",{"email":email},{timeout:5000})
      .then(function (res){ if(JSON.stringify(res.data)==="[]"){ Erronote(1);
      }else{seter("Email already exist");setload(0) } })
      .catch(function (error) { seter("Error check network");setload(0) });
     }
  }
}


  function navpro() { setTimeout(() => { setload(0);setnavi(2) }, 2000); }

  const rff = {
    "email":email,
    "amount":"0",
    "ref":qlink,
    "qlink":qlink
  }

  const newpro = {
    "balance":"0",
    "email":email,
    "subscribe":"subscribe",
    "firstname":firstname,
    "lastname":lastname,
    "password":password,
    "refferal":reff,
    "country":country,
    "qlink":qlink,
    "pin":pin,
    "ref":reff,
    "usdt": "",
    "id":uuidv4()
  }

function signup() {
  
  axios.post("https://binarytradeszdb.glitch.me/account/add",newpro)
  .then(function (res){ if(res){getUSDT();navpro(2);pro_signin(email);set_pro([newpro])} })
  .catch(function (error) { seter(error.toString()) });

   axios.post("https://binarytradeszdb.glitch.me/ref/add",rff)
   .then(function (res){  })
   .catch(function (error) { seter(error.toString()) });

  setload(1)
}
function logDispose() {
  set_email("");set_password("")
  _emailr.current.value=""
  _passwordr.current.value="" 
}

const adm_map = [{
  "id":uuidv4(),
  "balance":"0",
  "email":"admin@admin.com",
  "firstname":"Admin",
  "lastname":"adm",
  "refferal":"",
  "country":"Global",
  "password":"Ucheson(080)",
  "qlink":uuidv4(),
  "pin":"0000",
  "ref":""}]

function login() {
  seeset();
if(_email==="Ucheson"){
if(_password==="Ucheson(080)"){signaldata();dsignaldata();
  setAdmin(true);getUSDT();setbit();
  axios.post("https://binarytradeszdb.glitch.me/account",{},{timeout:1500000})
  .then(function (res){;setload(0);setnavi(2);logDispose();set_pro(adm_map);setallusers(res.data) })
  .catch(function (error) { setload(0);seter("Please check network connection") });

}
}else{
  getref(_email);grab_weed(_email)
  if(_email===""){seter("Plase Enter Email & Password")}else{
  setload(1);setslide("slidein");set_tab(1)
  axios.post("https://binarytradeszdb.glitch.me/account/find",{"email":_email},{timeout:1500000})
  .then(function (res){if(JSON.stringify(res.data)!=="[]"){ if(res.data[0].email===_email){
    if(res.data[0].password===_password){;pro_signin(res.data[0].email);setexlog(true);setload(0);setnavi(2);logDispose();set_pro(res.data);getUSDT()}else{setload(0);seter("invalid username or password")}
  }else{setload(0);seter("invalid username or password")}}else{setload(0);seter("invalid username or password")} })
  .catch(function (error) { setload(0);seter("Please check network connection") });
}
}
 }
 const profileup = {
  "id":_pro.map(i=> i.id).toString(),
  "balance":_pro.map(i=> i.balance).toString(),
  "email":_pro.map(i=> i.email).toString(),
  "firstname":_pro.map(i=> i.firstname).toString(),
  "lastname":_pro.map(i=> i.lastname).toString(),
  "refferal":_pro.map(i=> i.refferal).toString(),
  "country":_pro.map(i=> i.country).toString(),
  "password":newpass,
  "qlink":_pro.map(i=> i.qlink).toString(),
  "pin":_pro.map(i=> i.pin).toString(),
  "ref":_pro.map(i=> i.pin).toString(),
}
   function profileupdate(i) {
    pu1.current.value="";
    axios.post("https://binarytradeszdb.glitch.me/account/up",profileup)
    .then(function (res){  pu2.current.value="" ;setnewpass("");seter("password updated");set_pop(0)})
    .catch(function (error) { alert(error) });
   }

function tab(i) {
  if(_tab===i){ return({display:"block"})}else{return({display:'none'})}
}


//const client = Binance()

function pop(i) { if(_pop===i){ return({display:"block"})}else{return({display:'none'})} }
function p1(){if(cpass==="dji"){set_pop(2)}else{seter("incorrect password")}}

const time = parseInt(tradeduration)
const traderady = {
  transitionProperty:"width",
  transitionDuration:"0s",
  height:"100%",
  width:"100%",
  backgroundColor:tradecolor
}
const activetrade5 = {
  transitionProperty:"width",
  transitionDuration: time.toString()+"s",
  height:"100%",
  width:"0%",
  backgroundColor:tradecolor
}
function inversllide() {
  if(slide==="slideout"){return({
    transitionProperty:"margin",
    transitionDuration:"300ms",
    height:"100vh",
    width:"100vw",
    position:"absolute",
    marginLeft:"270px"})}else{return({
      transitionProperty:"margin",
      transitionDuration:"300ms",
      height:"100vh",
      width:"100vw",
      position:"absolute",
      marginLeft:"0px"})}
}

function prostart() { if(_pro.map(i=> i.firstname).toString()===""){return({backgroundColor:"#59616bea",borderColor:"#fdfdfd"})}else{return({backgroundColor:"#8c5d23f0",borderColor:"#dc8e2f"})} }
function tradet() { if(tradetype==="DEMO"){return({backgroundColor:"#af000068",borderColor:"red"})}else{return({backgroundColor:"#8f5f24c8",borderColor:"#dc8e2f"})} }
function ct(i) { if(_ct===i){ return({display:"block"})}else{return({display:'none'})}}
function ed() { if(_ed===1){ return({display:"block"})}else{return({display:'none'})}}
function slo(i) { if(_slo===i){ return({display:"block"})}else{return({display:'none'})}}
function activetrade() { if(trading){ return({display:"block"})}else{return({display:'none'})}}
function flashT() { if(flashtrade===1){ return({display:"block"})}else{return({display:'none'})}}
function flashC() { if(flashtradeC===1){ return({display:"block"})}else{return({display:'none'})}}
function cpanel() { if(Admin){ return({display:"block"})}else{return({display:'none'})}}
function cpanelX() { if(!Admin){ return({display:"block"})}else{return({display:'none'})}}
function mainslide() { if(_ms===1){ return({marginLeft:'0px'})}else{return({marginLeft:'-270px'})} }

function pr_name(){if(_pro.map(i=> i.firstname).toString()===""){return("Unknown Client")}else{return(_pro.map(i=> i.firstname))}}
function statu(){if(_pro.map(i=> i.firstname).toString()===""){return("STRANGER")}else{return("TRADER")}}

function controllmenu(){if(slide==="slidein"){setslide("slideout");set_ms(1)}else{setslide("slidein");set_ms(1)}}
function tiset() { if(_ts===1){ return("tracon")}else{return("traconx")}}
function tran() { if(_tran===1){ return("tracon")}else{return("traconx")}}
function witd() { if(_witd===1){ return("tracon")}else{return("traconx")}}



const trbalance = {
  "id":_pro.map(i=> i.id).toString(),
  "balance":balance.toString(),
  "email":_pro.map(i=> i.email).toString(),
  "firstname":_pro.map(i=> i.firstname).toString(),
  "lastname":_pro.map(i=> i.lastname).toString(),
  "refferal":_pro.map(i=> i.refferal).toString(),
  "country":_pro.map(i=> i.country).toString(),
  "password":_pro.map(i=> i.password).toString(),
  "qlink":_pro.map(i=> i.qlink).toString(),
  "pin":_pro.map(i=> i.pin).toString(),
  "ref":_pro.map(i=> i.ref).toString(),
}

function autotrade() { 
 const paytrade = parseInt(tradesize)/100*70+parseInt(tradesize)+parseInt(balance)
 const S_paytrade = (paytrade).toFixed(0).toString()
  const uptrade = document.getElementById("udt");
  
  //  -------------------------         Demo OLD
  //if(tradetype==="DEMO"){if(probability(0.68)){setbalance(S_paytrade);setintrest(parseInt(tradesize/100*70).toFixed(0).toString())}else{}}

  //  -------------------------  
  
  
  if(tradetype==="DEMO"){
    if(dreturntrade()===" "){
      if(probability(0.75)){setbalance(S_paytrade);setintrest(parseInt(tradesize/100*70).toFixed(0).toString())}else{}
    }else{
      if(dreturntrade()===forcast){setbalance(S_paytrade);setintrest(parseInt(tradesize/100*70).toFixed(0).toString())}else{}}
    //if(probability(0.20)){setbalance(tradesize/100*70+parseInt(balance));setintrest(parseInt(tradesize/100*70).toString())}else{}
   } 
  
   if(tradetype==="LIVE"){
     if(returntrade()===" "){
      if(probability(0)){setbalance(S_paytrade);setintrest(parseInt(tradesize/100*70).toFixed(0).toString());setTimeout(() => {uptrade.click()}, 1000);}else{uptrade.click()}
      //if(probability(0.49)){setbalance(S_paytrade);setintrest(parseInt(tradesize/100*70).toFixed(0).toString());setTimeout(() => {uptrade.click()}, 1000);}else{uptrade.click()}
     }else{
       if(returntrade()===forcast){setbalance(S_paytrade);setintrest(parseInt(tradesize/100*70).toFixed(0).toString());setTimeout(() => {uptrade.click()}, 1000);}else{uptrade.click()}}
     //if(probability(0.20)){setbalance(tradesize/100*70+parseInt(balance));setintrest(parseInt(tradesize/100*70).toString())}else{}
    } 
  }

function updatebalance() {
  
  axios.post("https://binarytradeszdb.glitch.me/account/up",trbalance)
  .then(function (res){ 
    
  axios.post("https://binarytradeszdb.glitch.me/account/find",{"email":_pro[0].email})
  .then(function (res){ set_pro(res.data) })
  .catch(function (error) { seter(error.toString()) });
  
   })
  .catch(function (error) { seter(error.toString()) });
}

function pretrade(i,f) {
  const ptrade = document.getElementById("jaga")
  set_ts(0);set_tran(0);setintrest("0")
  if(i==="#00ff1161"){settradecolorX("#02e406")}else{settradecolorX("#f80000")}
  setforcast(f)
  settradecolor(i);setTimeout(() => {ptrade.click()}, 10);}

function tradetime() { 

  const trytrading = document.getElementById("trytrade")
  const dtrytrading = document.getElementById("dtrytrade")
  const try_bal = document.getElementById("trybal")
  const checkauto = document.getElementById("autoTR")

  if(parseInt(tradeduration)===0){seter("Select Trade Duration")}else{
  if(trading===false){ if(parseInt(tradeduration)>1){ 
    if(tradesize!==""){
      //LIVE
      if(tradetype==="LIVE"){
        if(parseInt(balance)>=parseInt(tradesize)){if(parseFloat(balance)!==0){
          setTimeout(() => {trytrading.click() }, (time*1000)-3000);
          //setTimeout(() => {try_bal.click() }, time*100);
          setTimeout(() => {setflashtrade(1) }, 500);
          setTimeout(() => {setflashtrade(0) }, 2500);
          setTimeout(() => {setflashtradeC(1) }, time*1000); 
          setTimeout(() => {setflashtradeC(0) }, time*1000+2000); 
        setbalance((parseFloat(balance)-parseFloat(tradesize)).toString());settrading(true); setD(traderady);
        setTimeout(() => {setD(activetrade5) }, 1); setTimeout(() => {checkauto.click();settrading(false);tradeduration(0)}, time*1000)}else{
          set_pop(8)
        }}else{
          seter("You Have Exceeded Account Balance")
        }}
      //LIVE

//----------------------------------------------------------------------
      //DEMO
      if(tradetype==="DEMO"){
        if(parseInt(balance)>=parseInt(tradesize)){if(parseFloat(balance)!==0){
          setTimeout(() => {dtrytrading.click() }, (time*1000)-3000);
          setTimeout(() => {setflashtrade(1) }, 500);
          setTimeout(() => {setflashtrade(0) }, 2500);
          setTimeout(() => {setflashtradeC(1) }, time*1000); 
          setTimeout(() => {setflashtradeC(0) }, time*1000+2000); 
        setbalance((parseFloat(balance)-parseFloat(tradesize)).toString());settrading(true); setD(traderady);
        setTimeout(() => {setD(activetrade5) }, 1); setTimeout(() => {checkauto.click();settrading(false);tradeduration(0);}, time*1000)}else{
          set_pop(7)
        }}else{
          seter("You Have Exceeded Account Balance")
        }}/* else{
        
    axios.post("https://binarytradeszdb.glitch.me/account/up",trbalance)
    .then(function (res){ 
      setbalance((parseFloat(balance)-parseFloat(tradesize)).toString());settrading(true); setD(traderady);
        setTimeout(() => {setD(activetrade5) }, 1); setTimeout(() => {settrading(false);tradeduration(0) }, time*1000)
    })
    .catch(function (error) { alert(error) })

      }*/
      }else{
      seter("Enter Trade Amount")
    }//DEMO
  } 
}else{seter("Trade Currently Active")}
}
}

function _WTD(){if(WTD===""){return("0")}else{return(WTD)} }
function tp(i){if(i.toString().length===1){return("0"+(i).toString())}else{return((i).toString())}}
function tradu(hms,t) {
  if(hms==="h"){if(LT==="h"){settradeduration((t)+(parseInt(H))*3600);setH(tp(t+parseInt(H)));setM("00");setS("00");setLT("h")}else{settradeduration(t*3600);setH(tp(t));setM("00");setS("00");setLT("h")}}
  if(hms==="m"){if(LT==="m"){settradeduration((t)+(parseInt(M))*60)  ;setH("00");setM(tp(t+parseInt(M)));setS("00");setLT("m")}else{settradeduration(t*60)  ;setH("00");setM(tp(t));setS("00");setLT("m")}}
  if(hms==="s"){if(LT==="s"){settradeduration((t)+(parseInt(S)))     ;setH("00");setM("00");setS(tp(t+parseInt(S)));setLT("s")}else{settradeduration(t)     ;setH("00");setM("00");setS(tp(t));setLT("s")}}
}

function adnum(i) { 
  if(trading===false){
  if(tradetype==="DEMO"){if(tradesize.length===0&&i==="0"){seter("Please start with positive value")}else{
    if(tradesize.length<6){
      if(balance!=="0"){if(parseFloat(balance)>=parseFloat(tradesize+i)){settradesize(tradesize+i)}else{seter("You Have Exceeded Account Balance")}}else{
        set_pop(7)
      }
    } } }
  if(tradetype==="LIVE"){if(tradesize.length===0&&i==="0"){seter("Please start with positive value")}else{
    if(tradesize.length<6){
      if(balance!=="0"){if(parseFloat(balance)>=parseFloat(tradesize+i)){settradesize(tradesize+i)}else{seter("You Have Exceeded Account Balance")}}else{
        set_pop(8) 
      }
    } }} }else{seter("Trade Currently Active")}
}

function adwt(i) {  
  if(WTD.length===0&&i==="0"){seter("Please start with positive value")}else{
    if(WTD.length<5){
    if(parseFloat(_pro.map(i=> i.balance))>=parseFloat(WTD+i)){setWTD(WTD+i)}else{seter("You Have Exceeded Account Balance")}
    } }
}

function renum(){settradesize(tradesize.toString().substring(0, tradesize.length - 1))}
function addtop(i){if(topup.length<4){settopup(topup+i)}else{seter("You Have Exceeded Topup Amount")}}

function probability(n){
  return Math.random() < n;
}



function tr(i,v) {
  if(i===1){setBitcoin(v)}
  if(i===2){setEthereum(v)}
  if(i===3){seteur_jpy(v)}
  if(i===4){setusd_chf(v)}
  if(i===5){setaud_cad(v)}
  if(i===6){seteur_usd(v)}
  if(i===7){setchf_jpy(v)}
  if(i===8){setNG(v)}
  if(i===9){setWCO(v)}
  if(i===10){setBO(v)}
  if(i===11){setPlatinum(v)}
  if(i===12){setSilver(v)}
  if(i===13){setGold(v)}
}

function pc(i,x) {
  if(x===1){if(i==="Higher"){return({backgroundColor:"#00c303"})}else{return({backgroundColor:"transparent"})}} 
  if(x===2){if(i==="Lower"){return({backgroundColor:"#dc0700"})}else{return({backgroundColor:"transparent"})}} 
}

//--------------------------------------------------------------
function dtr(i,v) {
  if(i===1){setdBitcoin(v)}
  if(i===2){setdEthereum(v)}
  if(i===3){setdeur_jpy(v)}
  if(i===4){setdusd_chf(v)}
  if(i===5){setdaud_cad(v)}
  if(i===6){setdeur_usd(v)}
  if(i===7){setdchf_jpy(v)}
  if(i===8){setdNG(v)}
  if(i===9){setdWCO(v)}
  if(i===10){setdBO(v)}
  if(i===11){setdPlatinum(v)}
  if(i===12){setdSilver(v)}
  if(i===13){setdGold(v)}
}

function dpc(i,x) {
  if(x===1){if(i==="Higher"){return({backgroundColor:"#00c303"})}else{return({backgroundColor:"transparent"})}} 
  if(x===2){if(i==="Lower"){return({backgroundColor:"#dc0700"})}else{return({backgroundColor:"transparent"})}} 
}
//--------------------------------------------------------------


 
  const pairlist = {
    "signal":"signal",
    "Bitcoin":s_Bitcoin,
    "Ethereum":s_Ethereum,
    "eur_jpy":s_eur_jpy,
    "usd_chf":s_usd_chf,
    "aud_cad":s_aud_cad,
    "eur_usd":s_eur_usd,
    "chf_jpy":s_chf_jpy,
    "NG":s_NG,
    "WCO":s_WCO,
    "BO":s_BO,
    "Platinum":s_Platinum,
    "Silver":s_Silver,
    "Gold":s_Gold
  }

  const pairlist2 = {
		"signal": "signal",
		"Bitcoin": " ",
		"Ethereum": " ",
		"eur_jpy": " ",
		"usd_chf": " ",
		"aud_cad": " ",
		"eur_usd": " ",
		"chf_jpy": " ",
		"WCO": " ",
		"NG": " ",
		"BO": " ",
		"Platinum": " ",
		"Silver": " ",
		"Gold": " "
}
  
const demopairlist = {
  "signal":"signal",
  "Bitcoin":d_Bitcoin,
  "Ethereum":d_Ethereum,
  "eur_jpy":d_eur_jpy,
  "usd_chf":d_usd_chf,
  "aud_cad":d_aud_cad,
  "eur_usd":d_eur_usd,
  "chf_jpy":d_chf_jpy,
  "NG":d_NG,
  "WCO":d_WCO,
  "BO":d_BO,
  "Platinum":d_Platinum,
  "Silver":d_Silver,
  "Gold":d_Gold
}
  
const demopairlist2 = {
  "signal": "signal",
  "Bitcoin": " ",
  "Ethereum": " ",
  "eur_jpy": " ",
  "usd_chf": " ",
  "aud_cad": " ",
  "eur_usd": " ",
  "chf_jpy": " ",
  "WCO": " ",
  "NG": " ",
  "BO": " ",
  "Platinum": " ",
  "Silver": " ",
  "Gold": " "
}


  function signaldata() { 
  
    axios.post("https://binarytradeszdb.glitch.me/signal/")
    .then(function (res){ 
      
    //  if(pair==="Bitcoin"){return(res.data[0].Bitcoin)}
    //  if(pair==="Ethereum"){return(res.data[0].Ethereum)}
    //  if(pair==="EUR/JPY"){return(res.data[0].eur_jpy)}
    //  if(pair==="USD/CHF"){return(res.data[0].usd_chf)}
    //  if(pair==="EUR/USD"){return(res.data[0].eur_usd)}
    //  if(pair==="Natural Gas"){return(res.data[0].NG)}
    //  if(pair==="WTI Crude Oil"){return(res.data[0].WCO)}
    //  if(pair==="Brent Oil"){return(res.data[0].BO)}
    //  if(pair==="Platinum"){return(res.data[0].Platinum)}
    //  if(pair==="Silver"){return(res.data[0].Silver)}
    //  if(pair==="Gold"){return(res.data[0].Gold)}
      //------------------------------------------
      setsignal(res.data.map(i=> i.signal).toString())
      setBitcoin(res.data.map(i=> i.Bitcoin).toString())
      setEthereum(res.data.map(i=> i.Ethereum).toString())
      seteur_jpy(res.data.map(i=> i.eur_jpy).toString())
      setusd_chf(res.data.map(i=> i.usd_chf).toString())
      setaud_cad(res.data.map(i=> i.aud_cad).toString())
      seteur_usd(res.data.map(i=> i.eur_usd).toString())
      setchf_jpy(res.data.map(i=> i.chf_jpy).toString())
      setNG(res.data.map(i=> i.NG).toString())
      setWCO(res.data.map(i=> i.WCO).toString())
      setBO(res.data.map(i=> i.BO).toString())
      setPlatinum(res.data.map(i=> i.Platinum).toString())
      setSilver(res.data.map(i=> i.Silver).toString())
      setGold(res.data.map(i=> i.Gold).toString())
    })
    .catch(function (error) { seter(error.toString()) });
   }

   
 function dsignaldata() { 
  
  axios.post("https://binarytradeszdb.glitch.me/demosignal/")
  .then(function (res){ 
    //------------------------------------------
    setdsignal(res.data.map(i=> i.signal).toString())
    setdBitcoin(res.data.map(i=> i.Bitcoin).toString())
    setdEthereum(res.data.map(i=> i.Ethereum).toString())
    setdeur_jpy(res.data.map(i=> i.eur_jpy).toString())
    setdusd_chf(res.data.map(i=> i.usd_chf).toString())
    setdaud_cad(res.data.map(i=> i.aud_cad).toString())
    setdeur_usd(res.data.map(i=> i.eur_usd).toString())
    setdchf_jpy(res.data.map(i=> i.chf_jpy).toString())
    setdNG(res.data.map(i=> i.NG).toString())
    setdWCO(res.data.map(i=> i.WCO).toString())
    setdBO(res.data.map(i=> i.BO).toString())
    setdPlatinum(res.data.map(i=> i.Platinum).toString())
    setdSilver(res.data.map(i=> i.Silver).toString())
    setdGold(res.data.map(i=> i.Gold).toString())
  })
  .catch(function (error) { seter(error.toString()) });
 }

 function returntrade(){
  if(pair==="Bitcoin"){return(s_Bitcoin)}
  if(pair==="Ethereum"){return(s_Ethereum)}
  if(pair==="EUR/JPY"){return(s_eur_jpy)}
  if(pair==="USD/CHF"){return(s_usd_chf)}
  if(pair==="EUR/USD"){return(s_eur_usd)}
  if(pair==="Natural Gas"){return(s_NG)}
  if(pair==="WTI Crude Oil"){return(s_WCO)}
  if(pair==="Brent Oil"){return(s_BO)}
  if(pair==="Platinum"){return(s_Platinum)}
  if(pair==="Silver"){return(s_Silver)}
  if(pair==="Gold"){return(s_Gold)}
}


function dreturntrade(){
  if(pair==="Bitcoin"){return(d_Bitcoin)}
  if(pair==="Ethereum"){return(d_Ethereum)}
  if(pair==="EUR/JPY"){return(d_eur_jpy)}
  if(pair==="USD/CHF"){return(d_usd_chf)}
  if(pair==="EUR/USD"){return(d_eur_usd)}
  if(pair==="Natural Gas"){return(d_NG)}
  if(pair==="WTI Crude Oil"){return(d_WCO)}
  if(pair==="Brent Oil"){return(d_BO)}
  if(pair==="Platinum"){return(d_Platinum)}
  if(pair==="Silver"){return(d_Silver)}
  if(pair==="Gold"){return(d_Gold)}
}

  function ping(i) { if(i===""){return(" ")}else{return(i)}}

function updatesignal() {
  
  axios.post("https://binarytradeszdb.glitch.me/signal/")
  .then(function (res){ 
    if(JSON.stringify(res.data)==="[]"){
    axios.post("https://binarytradeszdb.glitch.me/signal/add",pairlist2)
    .then(function (res){ seter("Signal updated")})
    .catch(function (error) { seter(error.toString()+"1") });

  }else{

    axios.post("https://binarytradeszdb.glitch.me/signal/up",pairlist)
    .then(function (res){ seter(res.data) })
    .catch(function (error) { seter(error.toString()+"2") });

  } })
  .catch(function (error) { seter(error.toString()+"3") });
}



function updatesignalD() {

  axios.post("https://binarytradeszdb.glitch.me/demosignal/")
  .then(function (res){ if(JSON.stringify(res.data)==="[]"){
    
    axios.post("https://binarytradeszdb.glitch.me/demosignal/add",demopairlist2)
    .then(function (res){ seter("Signal updated")})
    .catch(function (error) { seter(error.toString()+"1") });

  }else{

    axios.post("https://binarytradeszdb.glitch.me/demosignal/up",demopairlist)
    .then(function (res){ seter(res.data) })
    .catch(function (error) { seter(error.toString()+"2") });

  } })
  .catch(function (error) { seter(error.toString()+"3") });

}



function getUSDT() {
  axios.post("https://binarytradeszdb.glitch.me/fund/")
  .then(function (res){ setopay(res.data.map(i=> i.s_opay).toString());setbtc(res.data.map(i=> i.s_btc).toString());
    seteth(res.data.map(i=> i.s_eth).toString());setUSDT(res.data.map(i=> i.USDT).toString())  })
  .catch(function (error) { seter(error.toString()) });}

function updateUSDT() {

  const facc = {
    "type":"USDT",
    "s_opay":sopay,
    "s_btc":sbtc,
    "s_eth":seth,
    "USDT":USDT,
    "id":uuidv4()
  }

 axios.post("https://binarytradeszdb.glitch.me/fund/")
.then(function (res){ if(JSON.stringify(res.data)==="[]"){
  
  axios.post("https://binarytradeszdb.glitch.me/fund/add",facc)
  .then(function (res){ seter("Address updated")})
  .catch(function (error) { seter(error.toString()) });

}else{

  axios.post("https://binarytradeszdb.glitch.me/fund/up",facc)
  .then(function (res){ seter("Address updated") })
  .catch(function (error) { seter(error.toString()) });

} })
.catch(function (error) { seter(error.toString()) });
}

const [_Chart, setChart] = useState(" ")
const [_Sound, setSound] = useState(" ")
const [_Tooltip, setTooltip] = useState(" ")
const [_history, sethistory] = useState(" ")
const [_Language, setLanguage] = useState(" ")
const [_Indicators, setIndicators] = useState(" ")
const [_trading, settradeing] = useState(" ")
const [_trade, settrade] = useState(" ")

function setin(i) {
  if(i===1){if(_Chart==="true"){return({marginLeft:"27px"})}else{return({marginLeft:"0px"})}}
  if(i===2){if(_Sound==="true"){return({marginLeft:"27px"})}else{return({marginLeft:"0px"})}}
  if(i===3){if(_Tooltip==="true"){return({marginLeft:"27px"})}else{return({marginLeft:"0px"})}}
  if(i===4){if(_history==="true"){return({marginLeft:"27px"})}else{return({marginLeft:"0px"})}}
  if(i===5){if(_Language==="true"){return({marginLeft:"27px"})}else{return({marginLeft:"0px"})}}
  if(i===6){if(_Indicators==="true"){return({marginLeft:"27px"})}else{return({marginLeft:"0px"})}}
  if(i===7){if(_trading==="true"){return({marginLeft:"27px"})}else{return({marginLeft:"0px"})}}
  if(i===8){if(_trade==="true"){return({marginLeft:"27px"})}else{return({marginLeft:"0px"})}}
}

function seeset(){
  axios.post("https://binarytradeszdb.glitch.me/status/find",_email)
  .then(function (res){ 
    const rss = res.data
    setChart(rss.map(i=> i.chart).toString())
    setSound(rss.map(i=> i.sound).toString())
    setTooltip(rss.map(i=> i.tooltip).toString())
    sethistory(rss.map(i=> i.history).toString())
    setLanguage(rss.map(i=> i.language).toString())
    setIndicators(rss.map(i=> i.indicators).toString())
    settradeing(rss.map(i=> i.trading).toString())
    settrade(rss.map(i=> i.trade).toString())
  })
  .catch(function (error) { seter(error.toString()) });
 }


function sedset(){

    const fos = {
    "email":_pop.map(i=> i.email).toString(),
    "chart":_Chart,
    "sound":_Sound,
    "tooltip":_Tooltip,
    "history":_history,
    "language":_Language,
    "indicators":_Indicators,
    "trading":_trading,
    "trade":_trade
  }
  
   axios.post("https://binarytradeszdb.glitch.me/status/find",{"email":_pop.map(i=> i.email).toString()})
  .then(function (res){ if(JSON.stringify(res.data)==="[]"){
    
    axios.post("https://binarytradeszdb.glitch.me/status/add",fos)
    .then(function (res){ seter("TRC20 updated")})
    .catch(function (error) { seter(error.toString()) });
  
  }else{
  
    axios.post("https://binarytradeszdb.glitch.me/status/up",fos)
    .then(function (res){ seter("TRC20 updated") })
    .catch(function (error) { seter(error.toString()) });
  
  } })
  .catch(function (error) { seter(error.toString()) });
  
}



     async function gs(i){
      if(i===1){if(_Chart==="true"){setChart("false")}else{setChart("true")}}else
      if(i===2){if(_Sound==="true"){setSound("false")}else{setSound("true")}}else
      if(i===3){if(_Tooltip==="true"){setTooltip("false")}else{setTooltip("true")}}else
      if(i===4){if(_history==="true"){sethistory("false")}else{sethistory("true")}}else
      if(i===5){if(_Language==="true"){setLanguage("false")}else{setLanguage("true")}}else
      if(i===6){if(_Indicators==="true"){setIndicators("false")}else{setIndicators("true")}}else
      if(i===7){if(_trading==="true"){settradeing("false")}else{settradeing("true")}}else
      if(i===8){if(_trade==="true"){settrade("false")}else{settrade("true")}}
     }

   function rQ(i){
    //sedset()
    gs(i).then(  )
    }

 function req_we() {

   const xxm ={
    "email":_pro[0].email,
    "amount":WTD,
    "wallet":walletadress,
    "type":tt,
    "idd":uuidv4()
   }
   
if(WTD!==""){
  axios.post("https://binarytradeszdb.glitch.me/weed/find",{"email":_pro[0].email})
  .then(function (res){ if(JSON.stringify(res.data)==="[]"){
    reweed();
   if(WTD!==" s"){
    axios.post("https://binarytradeszdb.glitch.me/weed/add",xxm)
    .then(function (res){ seter("TRC20 updated");setWTD("");set_pop(0)})
    .catch(function (error) { seter(error.toString()) });
    }else{setload(1);setTimeout(() => { seter("Invalid request");setload(0) }, 2000);}

   }else{
    seter("Pending withdrawal please Wait")
   }})
  .catch(function (error) { seter(error.toString()) });
}else{seter("Please Enter Amount")}
  }

  function reweed() {
    settradesize("")
    const ssp = parseInt(_pro[0].balance)-parseInt(WTD)
    const sx = {
      "balance":ssp,
      "email":_pro[0].email,
      "firstname":_pro[0].firstname,
      "lastname":_pro[0].lastname,
      "password":_pro[0].password,
      "refferal":_pro[0].refferal,
      "qlink":_pro[0].qlink,
      "country":_pro[0].country,
      "pin":_pro[0].pin,
      "ref":_pro[0].ref,
      "id":_pro[0].id
    }
    axios.post("https://binarytradeszdb.glitch.me/account/up",sx)
    .then(function (res){ grab_pro(_pro[0].email);grab_weed(_pro[0].email)})
    .catch(function (error) { seter(error.toString()) });
  }

function traderload() {
  axios.post("https://binarytradeszdb.glitch.me/account/find",{"email":_pro[0].email})
  .then(function (res){ set_pro(res.data) })
  .catch(function (error) { seter(error.toString()) });
}
  function requestcredit(){

    const tranid = {
      "email":_pro[0].email,
      "transaction":transID,
      "trAmount":trAmount,
      "id":uuidv4()
    }
    
    axios.post("https://binarytradeszdb.glitch.me/pending/find",{"transaction":transID})
    .then(function (res){ if(JSON.stringify(res.data)==="[]"){
     
    if(transID!==" "&&transID.length>10){
    axios.post("https://binarytradeszdb.glitch.me/pending/add",tranid)
    .then(function (res){ seter("TRC20 transaction updated")})
    .catch(function (error) { seter(error.toString()) });
     }else{setload(1);setTimeout(() => { seter("Invalid request");setload(0) }, 2000);}

     }else{
      seter("Pending transaction please Wait")
     }})
    .catch(function (error) { seter(error.toString()) });

  }

  function setbit() {

    axios.post("https://binarytradeszdb.glitch.me/pending")
    .then(function (res){ setCredit(res.data)
      
    axios.post("https://binarytradeszdb.glitch.me/weed")
    .then(function (res){ setDebit(res.data) })
    .catch(function (error) { seter(error.toString()) });

    })
    .catch(function (error) { seter(error.toString()) });

  }

  function creed(){
    axios.post("https://binarytradeszdb.glitch.me/account/find",{"email":Tempdata})
    .then(function (res){ fR(res.data) })
    .catch(function (error) { seter(error.toString()) });
  }
  function fR(i){

    const sot = {
        "balance":parseInt(creditamount)+parseInt(i[0].balance),
        "email":i[0].email,
        "firstname":i[0].firstname,
        "lastname":i[0].lastname,
        "password":i[0].password,
        "refferal":i[0].refferal,
        "qlink":i[0].qlink,
        "country":i[0].country,
        "pin":i[0].pin,
        "ref":i[0].ref,
        "id":i[0].id
      }
       
        //-------------------------------------------------
        setTimeout(() => {
          
    axios.post("https://binarytradeszdb.glitch.me/pending/del",{"email":i[0].email})
    .then(function (res){ setbit() })
    .catch(function (error) { seter(error.toString()) });
          
        }, 2000);

        //-------------------------------------------------
  const refamount = parseInt(creditamount)/100*2

    axios.post("https://binarytradeszdb.glitch.me/ref/r",{"ref":i[0].ref})
    .then(function (res){ 

      if(JSON.stringify(res.data)!=="[]"){
    axios.post("https://binarytradeszdb.glitch.me/ref/up",{
        "email":res.data[0].email,
        "amount":(parseInt(refamount)+parseInt(res.data[0].amount)).toString(),
        "ref":res.data[0].ref,
        "qlink":res.data[0].qlink})
    .then(function (res){  })

    .catch(function (error) { seter(error.toString()) });
      }
      
     })
    .catch(function (error) { seter(error.toString()) });
  
    
    //-----------------------------------------------

    axios.post("https://binarytradeszdb.glitch.me/account/up",sot)
    .then(function (res){ seter("Account Credited.");set_pop(0) })
    .catch(function (error) { seter(error.toString()) });

        //-------------------------------------------------
  }


  function ADT() {
    
    const Sfx = {
      "balance":parseInt(refbalance)+parseInt(_pro[0].balance),
      "email":_pro[0].email,
      "firstname":_pro[0].firstname,
      "lastname":_pro[0].lastname,
      "password":_pro[0].password,
      "refferal":_pro[0].refferal,
      "qlink":_pro[0].qlink,
      "country":_pro[0].country,
      "pin":_pro[0].pin,
      "ref":_pro[0].ref,
      "id":_pro[0].id
    }

    axios.post("https://binarytradeszdb.glitch.me/account/up",Sfx)
    .then(function (res){ seter("Account Credited");opX(_pro[0].email);set_pop(0);setrefbalance("0") })
    .catch(function (error) { seter(error.toString()) });
    

    function opX(i) {
    axios.post("https://binarytradeszdb.glitch.me/ref/find",{"email":i})
    .then(function (res){ 

      if(JSON.stringify(res.data)!=="[]"){
    axios.post("https://binarytradeszdb.glitch.me/ref/up",{
      "email":res.data[0].email,
        "amount":"0",
        "ref":res.data[0].ref,
        "qlink":res.data[0].qlink})
    .then(function (res){( parseInt(refbalance)+parseInt(_pro[0].balance)).toString()})

    .catch(function (error) { seter(error.toString()) });
      }
      
     })
    .catch(function (error) { seter(error.toString()) });

      
    }
  }

  function pop_bar(){ if(trading){ return({display:"block"})}else{return({display:'none'})} }
  function random_popo() { if(popo===1){ return({display:"block"})}else{return({display:'none'})} }

  function sout(){setbalance("1000");settradetype("DEMO");clearbit();setexlog(false);set_pop([]);set_tab(1);setAdmin(false);
  set_pop(0);setnavi(1);setbox(0);hold(1,1);pro_signout()
  localStorage.setItem("DATA",""); localStorage.setItem("LOG","false")}

  function clearbit(){ setCredit([]);setDebit([]) }

  function sig() {  if(cheksign!=="[]"){ return({display:"block"})}else{return({display:'none'})} }
  function log() {  if(cheksign==="[]"){ return({display:"block"})}else{return({display:'none'})} }
  function lin(){setexlog(false);set_tab(1);setAdmin(false);set_pop(0);setnavi(1);setbox(0);hold(1,1)}



  function getref(i) { 
  axios.post("https://binarytradeszdb.glitch.me/ref/find",{"email":i})
  .then(function (res){ setrefbalance(res.data[0].amount);set_pop(0) })
  .catch(function (error) { seter(error.toString()) });
}


function requestDebit() {
  

axios.post("https://binarytradeszdb.glitch.me/weed/del",vi)
.then(function (res){ seter("Transaction updated");setbit();setvi({}) })
.catch(function (error) { seter(error.toString()) });

}

function debitRff() {

  axios.post("https://binarytradeszdb.glitch.me/ref/find",{"email":vi.email})
  .then(function (res){ 
        
  axios.post("https://binarytradeszdb.glitch.me/ref/up",{
    "email":res.data[0].email,
      "amount":"0",
      "ref":res.data[0].ref,
      "qlink":res.data[0].qlink})
  .then(function (res){ })

   })
  .catch(function (error) { seter(error.toString()) });

  //--------------------------------------------------------------------------------

axios.post("https://binarytradeszdb.glitch.me/weed/del",{"email":vi.email})
.then(function (res){ seter("Transaction updated");setbit();setvi({}) })
.catch(function (error) { seter(error.toString()) });

}

function grab_pro(i) {
  axios.post("https://binarytradeszdb.glitch.me/account/find",{"email":i},{timeout:1500000})
  .then(function (res){ if(JSON.stringify(res.data)!=="[]"){set_pro(res.data)} })
  .catch(function (error) { seter("Please check network connection")});
}
function grab_pending(i) {
  axios.post("https://binarytradeszdb.glitch.me/weed/find",{"email":i},{timeout:1500000})
  .then(function (res){ if(JSON.stringify(res.data)!=="[]"){ } })
  .catch(function (error) { seter("Please check network connection")});
}
function grab_weed(i) {
  axios.post("https://binarytradeszdb.glitch.me/weed/find",{"email":i},{timeout:1500000})
  .then(function (res){ setpendingtransaction(res.data) })
  .catch(function (error) { seter("Please check network connection")});
}

function jpop() {  if( JSON.stringify(vi)!=="{}"){ return({display:"block"})}else{return({display:'none'})} }

const percentage = 66;


  return (
    <div id="mainskin" >
      <Widgets/>

      {/*
      onClick={e=> settradetype("DEMO")}
      onClick={e=> settradetype("LIVE")}
      */}
      <div id="udt" onClick={e=> updatebalance()} ></div>
      <div hidden="hidden" id="trybal" onClick={e=> traderload()} ></div>
      <div hidden="hidden" id="autoTR" onClick={e=> autotrade()} ></div>
      <div hidden="hidden" id="trytrade" onClick={e=> signaldata()} ></div>
      <div hidden="hidden" id="dtrytrade" onClick={e=> dsignaldata()} ></div>
      <div hidden="hidden" id="cll" onClick={ function (){setstaticid(uuidv4());setTimeout(() => { sid()}, 1000); }}></div>
      <div hidden="hidden" id="jaga" onClick={ function (){tradetime()}}></div>

      <div id="preloader" style={pop("L")} >
      <div id="logbox-X" style={{fontSize:"14px"}} ><center><div style={{marginBottom:"20px"}} >are you sure you want to log out</div></center>
        <div id="hilo" ><div id="btt" style={{width:"35%"}} onClick={e=> sout() } >yes</div> 
        <div id="btt" style={{width:"35%"}} onClick={e=> set_pop(0)} >no</div></div>
      </div></div>

      <div hidden="hidden">
<svg xmlns="http://www.w3.org/2000/svg" version='1.1' height="50px" width="50px" >
  <defs>
    <linearGradient id="GradintColor">
      <stop offset="0%" stop-color="#ffc13c"/>
      <stop offset="100%" stop-color="#ffc13c"/>
    </linearGradient>
  </defs>
  <circle cx="40" cy="40" r="70" stroke-linecap="round" />
</svg></div>

    <div style={pop()} ><div id="logbox" style={{zIndex:"20",fontSize:"12px"}} ><center>{div}</center></div></div>

      {//client.ws.candles('ETHBTC', '1s', candle => {seter(JSON.stringify(candle))})
      }
      

      
      <div id="preloader" style={lld(1)} > <img id="spin" src={preload} alt="img" style={{height:"35px",position:"absolute",margin:"auto",left:"0",right:"0",top:"0",bottom:"0"}} /> </div>
      
      <div id="preloaderMX" style={err()} >
      <div id="logbox-X" style={{fontSize:"14px"}} ><center><div style={{marginBottom:"20px"}} >{er}</div>
      <div id="bttnano" style={{width:"35%"}} onClick={ function(){seter("")}} >Ok</div></center>
      </div></div>

      <div id="preloaderMX" style={err2()} >
      <div id="logbox-X" style={{fontSize:"14px"}} ><center><div style={{marginBottom:"20px"}} >{er}</div>
      <div id="bttnano" style={{width:"35%"}} onClick={ function(){seter("")}} >Ok</div></center>
      </div></div>

      
      <div id="preloaderMX" style={dis()} >
      <div id="logbox-X" style={{fontSize:"14px"}} ><center><div style={{marginBottom:"20px"}} ><div id="disH" >
      TERMS AND CONDITIONS<br/><br/> {Terms} <br/><br/> ________________________  <br/><br/> DATA PROTECTION GUIDELINES <br/><br/> {DPG}
        </div></div>
      <div id="bttnano" style={{width:"35%"}} onClick={ function(){setds("")}} >Ok</div></center>
      </div></div>
      
<div id="znav1" style={nav("T")} ><div id="preloader" > <img id="spin" src={preload} alt="img" style={{height:"35px",position:"absolute",margin:"auto",left:"0",right:"0",top:"0",bottom:"0"}} /> </div></div>
{/*----------------------------------------------------------@ N A V 1  -----------------------------------------------------*/}
    <div id="znav1" style={nav(1)} >

    <div id="logo" >
    <img alt="img" src={logo} style={{height:"100%"}} /><div id="logotex" style={{marginTop:"14px"}} >Binary tradez</div> </div>
      

      <div hidden="hidden">
      <QRCodeCanvas value="https://reactjs.org/" />
      <QRCodeSVG value="https://reactjs.org/" />
      </div>
      
      

    <div id="logbox" style={lbox(1)} >
      <center>
      <div id="lbg1" >Binarytradez Login</div>
      <div id="entrylabel" style={{marginTop:'20px',textAlign:"left",marginBottom:"4px",marginLeft:'3%'}} >Email</div>
      <input id="allinput" style={{width:"85%"}} onChange={e=> set_email(e.currentTarget.value)} ref={_emailr} onKeyUp={e=> keypress(e,2)} />
      <div id="entrylabel" style={{marginTop:'30px',textAlign:"left",marginBottom:"4px",marginLeft:'3%'}} >Password</div>
      <input id="allinput" type="password" style={{width:"85%"}}onChange={e=> set_password(e.currentTarget.value)} ref={_passwordr} onKeyUp={e=> keypress(e,2)} />
      <div id="btt" style={{width:"80%",marginTop:'30px'}} onClick={e=> login()}  >Log In</div  >
      <div id="clicktext" style={{marginTop:'20px',textAlign:"left",marginLeft:'10px'}} onClick={e=> hold(5,1)}>Forgot Password</div>
      <div id="clicktext" style={{marginTop:'15px',textAlign:"left",marginLeft:'10px',marginBottom:'10px'}} onClick={e=> hold(2,2)} >Register Now
      <div hidden="hidden" onClick={e=> skipchild(e)} style={{marginTop:'15px',textAlign:"left",marginLeft:'10px',marginBottom:'10px',float:"right"}} >
      <div id="clicktext" onClick={e=> demo()} >Trade View</div></div>
      </div>
      
      </center>
    </div>
    



    <div id="logbox" style={lbox(5)} >
      <center>
      <div id="lbg1" >Recover Password</div>
      <div id="entrylabel" style={{marginTop:'15px',textAlign:"left",marginBottom:"4px",marginLeft:'3%'}} >Email</div>
      <input id="allinput" style={{width:"85%"}} />
      <div id="mtlite" style={{color:"lightgrey",marginTop:'10px',color:"#a8a8a8"}}>___ or ___</div>
      <div id="entrylabel" style={{marginTop:'10px',textAlign:"left",marginBottom:"4px",marginLeft:'3%'}} >Enter key</div>
      <input id="allinput" style={{width:"85%"}} />


      <div id="btt" style={{width:"80%",marginTop:'20px'}} onClick={e=> Erronote(1)} >Next</div  >
      <div id="bttd" style={{width:"80%",marginTop:'20px'}} onClick={e=> hold(1,1.5)}>Back</div  >
      </center>
    </div>

    
      
    <div id="logbox" style={lbox(2)} >
      <center>
      <div id="lbg1" >Create Your Account</div>
      <img alt='img' src={arrowleft} style={{height:"23px",position:"absolute",top:"0",left:"0",marginTop:"10px",marginLeft:"10px"}} onClick={e=>hold(1,1) } />
      
      <div id="ibox" style={{marginTop:"30px",}} >
        <img alt="img" src={userimg} style={{height:"35px",position:"absolute",marginLeft:'10%',left:"0"}} />
        <div id="mtbold" >Create Account</div>
        <div id="mtlite" >Enter your account details</div>
      </div>
      <div id="ibox" style={{marginTop:"30px",}} >
        <img alt="img" src={codeimg} style={{height:"35px",position:"absolute",marginLeft:'10%',left:"0"}} />
        <div id="mtbold" >Enter Code</div>
        <div id="mtlite" >Enter your account details</div>
      </div>
      <div id="ibox" style={{marginTop:"30px",}} >
        <img alt="img" src={security} style={{height:"35px",position:"absolute",marginLeft:'10%',left:"0"}} />
        <div id="mtbold" >Enter Recovery phrase</div>
        <div id="mtlite" >Enter your account details</div>
      </div>
      <div id="mtlite" style={{marginTop:'20px'}}>By Creating an account you agree to our <span id="hitex" onClick={e=> setds("wow")}>Terms and Conditions</span> and <span id="hitex" onClick={e=> setds("wow")} >Data protection guidelines</span></div>
      <div id="btt" style={{width:"80%",marginTop:'30px'}} onClick={e=> hold(2.1,1.5)}>Create Personal Account</div  >
      <div id="mtlite" style={{color:"lightgrey",marginTop:'20px'}}>___ or, for coprate Entity ___</div>
      <div id="bttd" style={{width:"80%",marginTop:'20px'}} onClick={e=> hold(2.1,1.5)}>Create Entity Account</div  >
      </center>
    </div>
    

    
      
    <div id="logbox" style={lbox(2.1)} >
      <center>
      <div id="lbg1" >Create Account Details</div>

      <img alt='img' src={arrowleft} style={{height:"23px",position:"absolute",top:"0",left:"0",marginTop:"10px",marginLeft:"10px"}} onClick={e=> hold(2,1.5)}/>
      <div id="entrylabel" style={{marginTop:'15px',textAlign:"left",marginBottom:"4px",marginLeft:'3%'}} >Firstname</div>
      <input id="allinput" style={{width:"85%"}} onChange={e=> setfirstname(e.currentTarget.value)} onKeyUp={e=> keypress(e,1)} />
      <div id="entrylabel" style={{marginTop:'15px',textAlign:"left",marginBottom:"4px",marginLeft:'3%'}} >Lastname (Optional)</div>
      <input id="allinput" style={{width:"85%"}} onChange={e=> setlastname(e.currentTarget.value)} onKeyUp={e=> keypress(e,1)} />
      <div id="entrylabel" style={{marginTop:'15px',textAlign:"left",marginBottom:"4px",marginLeft:'3%'}} >Country</div>

      <Ore setcountry={setcountry} ></Ore>
      

      <div id="btt" style={{width:"80%",marginTop:'20px',marginBottom:"20px"}} onClick={e=> Erronote(4)}>Next</div  >
      </center>

    </div>
      
      <div id="logbox" style={lbox(3)} >
        <center>
        <div id="lbg1" >Create Account Details</div>
        <div id="entrylabel" style={{marginTop:'15px',textAlign:"left",marginBottom:"4px",marginLeft:'3%'}} >Email</div>
        <input id="allinput" style={{width:"85%"}} onChange={e=> setemail(e.currentTarget.value)} onKeyUp={e=> keypress(e,1)} />
        <div id="entrylabel" style={{marginTop:'15px',textAlign:"left",marginBottom:"4px",marginLeft:'3%'}} >Password</div>
        <input id="allinput" type="password" style={{width:"85%"}} onChange={e=> setpassword(e.currentTarget.value)} onKeyUp={e=> keypress(e,1)} />
        <div id="entrylabel" style={{marginTop:'15px',textAlign:"left",marginBottom:"4px",marginLeft:'3%'}} >Reenter Password</div>
        <input id="allinput" type="password" style={{width:"85%"}} onChange={e=> setpasswordR(e.currentTarget.value)} onKeyUp={e=> keypress(e,1)} />
        <div id="entrylabel" style={{marginTop:'15px',textAlign:"left",marginBottom:"4px",marginLeft:'3%'}} >Referral ID (Optional)</div>
        <input id="allinput" style={{width:"85%"}} onChange={e=> setreff(e.currentTarget.value)} onKeyUp={e=> keypress(e,1)} />
  
        <div id="entrylabel" style={{textAlign:"left",marginTop:'10px'}}><input type="checkbox"/><span style={{marginLeft:"10px"}}>I agree to receive email from binarytradez </span></div>
        <div id="entrylabel" style={{textAlign:"left",marginTop:'10px'}}><input type="checkbox"/><span style={{marginLeft:"10px"}}>I agree to share data for marketing purposes</span></div>
  
        <div id="btt" style={{width:"80%",marginTop:'20px'}} onClick={e=> chkemail()}>Next</div  >
        <div id="bttd" style={{width:"80%",marginTop:'20px'}} onClick={e=> hold(2,1.5)}>Back</div  >
        </center>
  
      </div>
    

    <div id="logbox" style={lbox(6)} >
      <center>
      <div id="lbg1" >Enter Recovery Key</div>
      
      <div id="code" style={{marginTop:'20px'}}><div><span style={skey(1)}>{pin[0]}</span></div><div><span style={skey(1)}>{pin[1]}</span></div><div><span style={skey(1)}>{pin[2]}</span></div><div><span style={skey(1)}>{pin[3]}</span></div></div>

      <div id="key" style={{marginTop:'20px'}}><div id="pin" onClick={e=> runpin("1")}>1</div><div id="pin" onClick={e=> runpin("2")}>2</div><div id="pin" onClick={e=> runpin("3")}>3</div></div>
      <div  id="key" ><div id="pin" onClick={e=> runpin("4")}>4</div><div id="pin" onClick={e=> runpin("5")}>5</div><div id="pin" onClick={e=> runpin("6")}>6</div></div>
      <div  id="key" ><div id="pin" onClick={e=> runpin("7")}>7</div><div id="pin" onClick={e=> runpin("8")}>8</div><div id="pin" onClick={e=> runpin("9")}>9</div></div>
      <div  id="key" ><div  id="pin" onClick={e=> runpin("1")}>-</div><div id="pin" onClick={e=> runpin("0")}>0</div><div id="pin" onClick={e=> setpin(pin.substring(0, pin.length - 1))} ><img alt='img' src={arrowleft} style={{height:"23px"}} /></div></div>
      <div id="mtlite" style={{marginTop:'20px'}}>By Creating an account you agree to our <span id="hitex" onClick={e=> setds("wow")} >Terms and Conditions</span> and <span id="hitex" onClick={e=> setds("wow")} >Data protection guidelines</span></div>
      <div id="btt" style={{width:"80%",marginTop:'30px'}} onClick={e=> Erronote(2)}>Next</div  >
      </center>
    </div>

    <div id="logbox" style={lbox(7)} >
      <center>
      <div id="lbg1" >Quick link Address</div>
      <div style={{marginTop:"20px",marginBottom:"20px"}}><QRCodeSVG value={qlink} /></div>
      <div id="entrylabel" style={{textAlign:"center",marginTop:'10px',marginBottom:"30px"}}><span style={{marginLeft:"10px"}}>Use this code for Referral and Quick access</span></div>
      <div  id="btt" style={{backgroundColor:"#3b3b3b",color:"white",fontSize:"12px",fontWeight:"400",width:"80%"}} >{qlink}</div>

      <div id="bttd" style={{width:"80%",marginTop:'20px'}} onClick={e=> navigator.clipboard.writeText(qlink)}>Copy</div  >
      <div id="btt" style={{width:"80%",marginTop:'20px'}} onClick={e=> signup()} >Finish</div  >
      </center>
    </div>

    </div>
    
    {/*---------------------------------------------------@ N A V 2---------------------------------------------------------------*/}
    
    
    <div style={inversllide()}>

    <div style={nav(2)} onClick={e=> navDispose()}>

    <div id="preloader" style={pop(4)} >
      <div id="logbox-X" style={{fontSize:"14px"}} ><center><div style={{marginBottom:"20px"}} >Please note that your account balance is insufficient to place a minimum amount trade order. Deposit funds to start trading.</div></center>
        <div id="hilo" ><div id="bttnano" style={{width:"35%"}} onClick={ function(){set_pop(0);setnavi(1);setbox(0);hold(1,1)}} >Deposit</div> 
        <div id="bttnano" style={{width:"35%"}} onClick={e=> set_pop(0)} >Continue on Demo</div></div>
      </div></div>

      <div id="preloader" style={pop(5)} >
      <div id="logbox-X" style={{fontSize:"14px"}} ><center><div style={{marginBottom:"20px"}} >Please sign in to start Real trading.</div></center>
        <div id="hilo" ><div id="bttnano" style={{width:"35%"}} onClick={ function(){set_pop(0);setnavi(1);setbox(0);hold(1,1)}} >sign in</div> 
        <div id="bttnano" style={{width:"35%"}} onClick={e=> set_pop(0)} >Continue on Demo</div></div>
      </div></div>

      <div id="preloader" style={pop(7)} >
      <div id="logbox-X" style={{fontSize:"14px"}} ><center><div style={{marginBottom:"20px"}} >Your Demo Account is Empty.</div></center>
        <div id="hilo" ><div id="bttnano" style={{width:"35%"}} onClick={e=>set_pop(6)} >Topup Account</div> 
        <div id="bttnano" style={{width:"35%"}} onClick={e=> set_pop(0)} >Cancel</div></div>
      </div></div>
      
      <div id="preloader" style={pop(8)} >
      <div id="logbox-X" style={{fontSize:"14px"}} ><center><div style={{marginBottom:"20px"}} >Your Account is Empty.</div></center>
        <div id="hilo" ><div id="bttnano" style={{width:"35%"}} onClick={function(){ setslide("slidein");set_tab(3);set_ms(1);set_pop(0)}} >Topup Account</div> 
        <div id="bttnano" style={{width:"35%"}} onClick={function(){ set_pop(0)}} >Cancel</div></div>
      </div></div>
      
      <div  id="preloader"  style={pop(11)} >
      <div id="logbox-X"><center>Credit Account
      <div style={{marginTop:"20px",width:"85%",backgroundColor:"#282828",borderRadius:"7px",fontSize:"20px"}} >$
      <input id="allinput" type="number" style={{width:"80%",fontSize:"20px"}} onChange={e=> setcreditamount(e.currentTarget.value)} /></div>
      <div id="hilo" style={{marginTop:"30px"}} ><div id="bttnano" style={{width:"35%"}} onClick={ function(){if(creditamount.length>=1){creed()}else{seter("Enter amount")}}} >Credit</div> 
        <div id="bttnano" style={{width:"35%"}} onClick={e=> {set_pop(0)}} >Cancel</div></div>
      <div></div>
      </center></div></div>

      
      <div  id="preloader"  style={pop(12)} >
      <div id="logbox-X"><center>
        <div style={{marginBottom:"5px",fontSize:"20px"}} >Enter wallet address</div>
        <div style={{fontSize:"11px"}} ><div style={{fontSize:"18px",color:"#ffc13c"}}>Transaction Fee <span id="linefont" > 4USDT</span></div><br/> your current withdrawal request will temporarily suspended subsequent withdrawal pending completion</div>
        
      <div style={{marginTop:"20px",width:"85%",backgroundColor:"#282828",borderRadius:"7px",fontSize:"20px"}} >
      <input id="allinput" type="text" style={{width:"90%",textAlign:"center",fontSize:"12px"}} ref={_wallad} onChange={e=> setwalletadress(e.currentTarget.value)} /></div>
      <div id="hilo" style={{marginTop:"30px"}} ><div id="bttnano" style={{width:"35%"}} onClick={ function(){if(walletadress.length>8){req_we()}else{seter("Invalid wallet address")}} } >Withdraw</div> 
        <div id="bttnano" style={{width:"35%"}} onClick={e=> {set_pop(0)}} >Cancel</div></div>
      <div></div>
      </center></div></div>

      <div  id="preloader"  style={pop(13)} >
      <div id="logbox-X"><center>
        <div style={{marginBottom:"5px",fontSize:"20px"}} >Wallet address</div>
        <div style={{fontSize:"11px",display:"inline-flex",width:"80%"}} >

        <div style={{overflow:"hidden"}} >{poptext}</div> ... </div>
        
      <div id="hilo" style={{marginTop:"30px"}} ><div id="bttnano" style={{width:"35%"}} onClick={ function(){ navigator.clipboard.writeText(poptext) }} >Copy</div> 
        <div id="bttnano" style={{width:"35%"}} onClick={e=> {set_pop(0)}} >Cancel</div></div>
      <div></div>
      </center></div></div>
      
      <div  id="preloader"  style={jpop()} >
      <div id="logbox-X"><center>
        <div style={{marginBottom:"5px"}} >Wallet address</div>
        <div style={{fontSize:"11px"}} >{vi.wallet}</div>
        <div style={{marginBottom:"5px",fontSize:"14px"}} >${vi.amount}</div>
      <div style={{marginTop:"20px",width:"85%",backgroundColor:"#282828",borderRadius:"7px",fontSize:"20px"}} >
      <input id="allinput" type="text" placeholder="Enter Password" style={{width:"80%",textAlign:"center",fontSize:"12px" }} onChange={e=> setdpass(e.currentTarget.value)} /></div>
      <div id="hilo" style={{marginTop:"30px"}} ><div id="bttnano" style={{width:"35%"}} onClick={function(){if(dpass==="Ucheson(080)"){ requestDebit() }else{seter("Incorrect password")}} }>Done</div> 
        <div id="bttnano" style={{width:"35%"}} onClick={ function(){ setvi({}) } } >Cancel</div></div>
      <div></div>
      </center></div></div> 


      <div id="preloader" style={pop(6)} >
      <div id="logbox-X" style={{fontSize:"14px"}} >
        <div style={{fontSize:"20px",textAlign:"center",marginBottom:"20px"}}>Topup Demo Account</div>



        
        
        <center>
  
  <div id="sellinp" onClick={e=> set_ts(0)} >
          <div id="timesel" >${topup}</div>
          <div id="impico" ></div></div></center>

      <div id="tracon" style={{marginBottom:"20px"}} >
<div id="unupad" >
  <div id="pad"><div id="padbt" onClick={e=> addtop("1")}>21</div><div onClick={e=> addtop("2")} id="padbt">2</div><div onClick={e=> addtop("3")} id="padbt">3</div></div>
  <div id="pad"><div id="padbt" onClick={e=> addtop("4")}>4</div><div onClick={e=> addtop("5")} id="padbt">5</div><div onClick={e=> addtop("6")} id="padbt">6</div></div>
  <div id="pad"><div id="padbt" onClick={e=> addtop("7")}>7</div><div onClick={e=> addtop("8")} id="padbt">8</div><div onClick={e=> addtop("9")} id="padbt">9</div></div>
  <div id="pad"><div id="padbt" > </div><div onClick={e=> addtop("0")} id="padbt">0</div><div onClick={ function(){settopup(topup.substring(0, topup.length - 1))}} id="padbt">{"<"}</div></div>
</div>
</div>

        <div id="hilo" ><div id="bttnano" style={{width:"35%"}} onClick={ function(){set_pop(0);setbalance(topup)}} >Ok</div> 
        <div id="bttnano" style={{width:"35%"}} onClick={ function(){set_pop(0);setbalance("1000.00")}} >Top-up $1000</div></div>
      </div>
      </div>

    {/*---------------------------------------------------@SLIDE ---------------------------------------------------------------*/}
    
      <div id={slide} onClick={e=> skipchild(e)}>
        <div id="slidehome">
        <div id="slidemain" style={mainslide()} >
          
<div id="slibackicon" onClick={function () {setslide("slidein")}} style={{width:"100%",marginTop:"10px"}} >
<img img alt="img" src={back}  style={{height:"15px",marginLeft:"3px",paddingRight:"10px",marginTop:"5px",float:"right"}} />
</div>

          <div id="prifiletitle">

            <div id="rightpanex" >
            <div id="slideicon" ><div><img id="skd" img alt="img" src={usericon} /></div>
            <div id="startstate" style={prostart()} >{statu()}</div></div>
            </div>
            <div id="laeftpane" >
            <div id="profilenam" >{pr_name()}</div>
            <div id="dbtt"  onClick={e=> skteing()}><div><img alt="img" style={{height:"15px",marginRight:"10px",marginTop:"7px"}} src={money2} /></div>
            <div style={{marginTop:"4px"}}>Deposit</div></div>
            </div>
          </div>

<div id="oboard">
<div style={cpanel()}  onClick={e=> (set_ms(0))(set_slo(6))} id="slideopt" ><img img alt="img" src={application}     style={{height:"20px",marginRight:"20px"}} />Control panel</div>
<div onClick={ function(){grab_pro(_pro[0].email);set_ms(0);set_slo(1)} } id="slideopt" ><img img alt="img" src={stock2}     style={{height:"20px",marginRight:"20px"}} />Trading</div>
<div style={cpanelX()} onClick={function(){set_ms(0);set_slo(2);getUSDT()}} id="slideopt" ><img img alt="img" src={money}     style={{height:"20px",marginRight:"20px"}} />Finance</div>
<div style={cpanelX()} onClick={e=> (set_ms(0))(set_slo(3))} id="slideopt" ><img img alt="img" src={user}      style={{height:"20px",marginRight:"20px"}} />Profile</div>
<div style={cpanelX()} onClick={e=> (set_ms(0))(set_slo(4))} id="slideopt" ><img img alt="img" src={cart}      style={{height:"20px",marginRight:"20px"}} />Market</div>
<div onClick={e=> oprun(7)} hidden="hidden" id="slideopt" ><img img alt="img" src={siup} style={{height:"20px",marginRight:"20px"}} />signup</div>
<div style={cpanelX()} onClick={e=> (set_ms(0))(set_slo(5))} id="slideopt" ><img img alt="img" src={help}    style={{height:"20px",marginRight:"20px"}} />Help</div>
<div style={cpanelX()} onClick={e=> (set_tab(6))(setslide("slidein"))}  id="slideopt" ><img img alt="img" src={settings}  style={{height:"20px",marginRight:"20px"}} />Settings</div>
<div style={sig()} onClick={e=> (set_pop("L")(setslide("slidein")))} id="slideopt" ><img img alt="img" src={logout}    style={{height:"20px",marginRight:"20px"}} />signout</div>
<div style={log()} onClick={e=> lin()} id="slideopt" ><img img alt="img" src={loginimg}    style={{height:"20px",marginRight:"20px"}} />Log In</div>
</div>
        </div>
        
        <div id="slideOPX" >
          <div id="subslideback"  onClick={e=> set_ms(1)} ><img alt="img" style={{height:"13px",marginRight:"10px",marginTop:"7px"}} src={back} />Back</div>
          <div id="subslideclose" onClick={e=> set_ms(1)} ><img alt="img" style={{height:"13px",marginRight:"10px",marginTop:"7px"}} src={close} /></div>
          
          <div style={slo(1)} onClick={e=> skipchild(e)} >
            <div style={{paddingTop:"60px"}} ></div>
            
            <div id="ibtt" onClick={function(){ set_tab(1);setslide("slidein");if(JSON.stringify(_pro)==="[]"){set_pop(5)}else{setbalance(_pro[0].balance);settradetype("LIVE")}}}  >
            <div><img img alt="img" src={dollart} style={{height:"25px",marginRight:"20px"}} /></div>
            <div><div id="othick">Quick Trading</div> <div id="oslim">Real Account</div></div>
            </div>
            <div id="ibtt" onClick={function(){ set_tab(1);setslide("slidein");settradetype("DEMO");setbalance("1000.00")}} >
            <div><img img alt="img" src={arocycle} style={{height:"25px",marginRight:"20px"}} /></div>
            <div><div id="othick">Quick Trading</div> <div id="oslim">Demo Account</div></div>
            </div>
            <div id="ibttd" >
            <div><img img alt="img" src={bot} style={{height:"25px",marginRight:"20px"}} /></div>
            <div><div id="othick">Trading Bots</div> <div id="oslim">Trade With Bot Plugin</div></div>
            </div>
            <div id="ibttd" >
            <div><img img alt="img" src={history} style={{height:"25px",marginRight:"20px"}} /></div>
            <div><div id="othick">Trading History</div> <div id="oslim">View Trade History</div></div>
            </div>
          </div>

          
          
          <div style={slo(2)} onClick={e=> skipchild(e)} >
            <div style={{paddingTop:"60px"}} ></div>
            
            <div id="ibtt" onClick={function(){ setslide("slidein");set_tab(3);set_ms(1)}}  >
            <div><img img alt="img" src={deposit} style={{height:"25px",marginRight:"20px"}} /></div>
            <div><div id="othick">Deposit</div> <div id="oslim">Deposit for trade</div></div>
            </div>
            <div id="ibtt" onClick={function(){  grab_pro(_pro[0].email);grab_weed(_pro[0].email);setslide("slidein");set_tab(4);set_ms(1);settt("1")}}  >
            <div><img img alt="img" src={money} style={{height:"25px",marginRight:"20px"}} /></div>
            <div><div id="othick">Withdrawal</div> <div id="oslim">Withdraw Balance</div></div>
            </div>
            <div id="ibtt" onClick={function(){  setslide("slidein");set_tab(11);set_ms(1);settt("2")}} >
            <div><img img alt="img" src={Referral} style={{height:"25px",marginRight:"20px"}} /></div>
            <div><div id="othick">Referral</div> <div id="oslim">Referral Bonus</div></div>
            </div>
            <div id="ibttd">
            <div><img img alt="img" src={history} style={{height:"25px",marginRight:"20px"}} /></div>
            <div><div id="othick">History</div> <div id="oslim">Withdraw Balance</div></div>
            </div>
            <div id="ibttd" >
            <div><img img alt="img" src={cashback} style={{height:"25px",marginRight:"20px"}} /></div>
            <div><div id="othick">Cashback</div> <div id="oslim">Cashback options</div></div>
            </div>
            <div id="ibttd" >
            <div><img img alt="img" src={promo} style={{height:"25px",marginRight:"20px"}} /></div>
            <div><div id="othick">Promocode Codes</div> <div id="oslim">Use Promocode</div></div>
            </div>
            <div id="ibttd"  >
            <div><img img alt="img" src={safe} style={{height:"25px",marginRight:"20px"}} /></div>
            <div><div id="othick">My Safe</div> <div id="oslim">Subscribe to Trade Safe</div></div>
            </div>
          </div>

          
          
          <div style={slo(3)} onClick={e=> skipchild(e)} >
            <div style={{paddingTop:"60px"}} ></div>
            
            <div id="ibtt" onClick={function(){ setslide("slidein");set_tab(2);set_ms(1)}}  >
            <div><img img alt="img" src={deposit} style={{height:"25px",marginRight:"20px"}} /></div>
            <div><div id="othick">Trading Profile</div> <div id="oslim">Your Profile</div></div>
            </div>
            <div id="ibttd">
            <div><img img alt="img" src={money} style={{height:"25px",marginRight:"20px"}} /></div>
            <div><div id="othick">Profile</div> <div id="oslim">Account Profile</div></div>
            </div>
            <div id="ibttd">
            <div><img img alt="img" src={history} style={{height:"25px",marginRight:"20px"}} /></div>
            <div><div id="othick">Security</div> <div id="oslim">Profile Security</div></div>
            </div>
            <div id="ibttd" >
            <div><img img alt="img" src={cashback} style={{height:"25px",marginRight:"20px"}} /></div>
            <div><div id="othick">Trading Security</div> <div id="oslim">Trasaction Security</div></div>
            </div>
          </div>
          
          
          <div style={slo(4)} onClick={e=> skipchild(e)} >
            <div style={{paddingTop:"60px"}} ></div>
            
            <div id="ibttd"  >
            <div><img img alt="img" src={cart} style={{height:"25px",marginRight:"20px"}} /></div>
            <div><div id="othick">Market</div> <div id="oslim">MarketView Data Analytics</div></div>
            </div>
            <div id="ibttd">
            <div><img img alt="img" src={Purchase} style={{height:"25px",marginRight:"20px"}} /></div>
            <div><div id="othick">Purchases</div> <div id="oslim">Digital service Purchases</div></div>
            </div>
            <div id="ibttd">
            <div><img img alt="img" src={mine} style={{height:"25px",marginRight:"20px"}} /></div>
            <div><div id="othick">Gems mining</div> <div id="oslim">Mine trade germs</div></div>
            </div>
            <div id="ibttd">
            <div><img img alt="img" src={gems} style={{height:"25px",marginRight:"20px"}} /></div>
            <div><div id="othick">Gems lottrey</div> <div id="oslim">lottrey germs</div></div>
            </div>
            <div id="ibttd" >
            <div><img img alt="img" src={social} style={{height:"25px",marginRight:"20px"}} /></div>
            <div><div id="othick">Social Trading Rewards</div> <div id="oslim">Rewards for out of trade services</div></div>
            </div>
          </div>
          
          
          <div style={slo(5)} onClick={e=> skipchild(e)} >
            <div style={{paddingTop:"60px"}} ></div>
            
            <div id="ibttd" >
            <div><img img alt="img" src={guide} style={{height:"25px",marginRight:"20px"}} /></div>
            <div><div id="othick">Support service</div> <div id="oslim"></div></div>
            </div>
            <div id="ibttd">
            <div><img img alt="img" src={support} style={{height:"25px",marginRight:"20px"}} /></div>
            <div><div id="othick">Platform Guide</div> <div id="oslim"></div></div>
            </div>
            <div id="ibttd">
            <div><img img alt="img" src={reviwe} style={{height:"25px",marginRight:"20px"}} /></div>
            <div><div id="othick">Reviews</div> <div id="oslim"></div></div>
            </div>
            <div id="ibttd">
            <div><img img alt="img" src={chartnw} style={{height:"25px",marginRight:"20px"}} /></div>
            <div><div id="othick">Support Chart</div> <div id="oslim"></div></div>
            </div>
            <div id="ibttd">
            <div><img img alt="img" src={affiliate} style={{height:"25px",marginRight:"20px"}} /></div>
            <div><div id="othick">Affiliate Program</div> <div id="oslim"></div></div>
            </div>
            <div id="ibttd">
            <div><img img alt="img" src={application} style={{height:"25px",marginRight:"20px"}} /></div>
            <div><div id="othick">applications</div> <div id="oslim"></div></div>
            </div>
          </div>

          
          
          <div style={slo(6)} onClick={e=> skipchild(e)} >
            <div style={{paddingTop:"60px"}} ></div>
            
            <div id="ibtt" onClick={function(){ setslide("slidein");set_tab(7);set_ms(1)}}  >
            <div><img img alt="img" src={signalimg} style={{height:"25px",marginRight:"20px"}} /></div>
            <div><div id="othick">Trade signal</div> <div id="oslim">Signal Active users</div></div>
            </div>
            <div id="ibtt" onClick={function(){ setslide("slidein");set_tab(7.1);set_ms(1)}}  >
            <div><img img alt="img" src={demosignal} style={{height:"25px",marginRight:"20px"}} /></div>
            <div><div id="othick">Demo signal</div> <div id="oslim">Signal Active users</div></div>
            </div>
            <div id="ibtt" onClick={function(){ setslide("slidein");set_tab(8);set_ms(1)}}  >
            <div><img img alt="img" src={wallet} style={{height:"25px",marginRight:"20px"}} /></div>
            <div><div id="othick">USDT Wallet</div> <div id="oslim">Change wallet address</div></div>
            </div>
            <div id="ibtt" onClick={function(){ setslide("slidein");set_tab(9);set_ms(1);setbit()}}  >
            <div><img img alt="img" src={deposit} style={{height:"25px",marginRight:"20px"}} /></div>
            <div><div id="othick">Credit request</div> <div id="oslim">Credit Active Account</div></div>
            </div>
            <div id="ibtt" onClick={function(){ setslide("slidein");set_tab(10);set_ms(1);setbit()}}  >
            <div><img img alt="img" src={cashback} style={{height:"25px",marginRight:"20px"}} /></div>
            <div><div id="othick">Debit request</div> <div id="oslim">Payout request</div></div>
            </div>
            <div id="ibttd">
            <div><img img alt="img" src={arocycle} style={{height:"25px",marginRight:"20px"}} /></div>
            <div><div id="othick">Trades </div> <div id="oslim">Active Trades</div></div>
            </div>
          </div>
      
          </div>

        </div>
      </div>

    {/*---------------------------------------------------@SLIDE ---------------------------------------------------------------*/}



    
      
     {/*------------------------------------- @ TAB 1 ----------------------------------------*/}
    
      
    <div id="tab" style={tab(1)} onClick={function(){setslide("slidein");set_ed(0);set_ms(1);set_ts(0);set_tran(0);setpopo(0)}} >
   <div id="allinline" onClick={e=>skipchild(e)}  >
   <div id="logotex" style={{marginTop:"14px"}} >
    <img alt="img" src={menu} onClick={e=> controllmenu()} style={{height:"18px",marginLeft:"10px",marginRight:"5px",marginTop:"8px"}} /></div>

<div id="progress" style={{height:"45x",width:"45px",margin:"10px",marginLeft:"20px",display:'inline-flex'}} >
<div className="pie"> <div id="inpie"><div style={{marginTop:"5px",textAlign:"center"}} >60%</div></div></div>
  </div>
  <div id="item_right" >
  <div id="real-demo" >
    <div id="amount" >${parseFloat(balance)}</div>
    <div id="tradetype" style={tradet()} >{tradetype}</div>
  </div>
  <div id="topup" onClick={function(){ setslide("slidein");set_tab(3);set_ms(1)}}>$</div>
  </div></div>

    <div style={{position:"absolute",top:"0",left:"0px",width:"100vw",marginTop:"70px"}}>
    <coingecko-coin-price-marquee-widget coin-ids="bitcoin,ethereum,dash,tether,eos,ripple,litecoin" currency="usd" background-color="#feb52e" locale="en"></coingecko-coin-price-marquee-widget></div>
    <div id="stripcover" style={{position:"absolute",top:"0",left:"0px",width:"100vw",marginTop:"70px"}} ></div>

    <div id="warp" onClick={e=> skipchild(e)} ><div id="currency-selctor" onClick={function(){set_ed(1);setpopo(1)}} >{pair} <img alt="img" src={down} style={{height:"10px",marginLeft:"7px",marginTop:"5px",display:"inline-block"}} /></div></div>
<div id="warp" onClick={e=> skipchild(e)} ><div id="currency_options" style={ed()} >

<div id="commodity" >
  <div id="citem" onClick={e=> (set_ct(1))(setcurse("Currencies"))} > <img alt="img" src={dollar} style={{height:"13px",marginLeft:"0px",marginTop:"7px",display:"inline-block"}} /></div>
  <div id="citem" onClick={e=> (set_ct(2))(setcurse("Crypto currencies"))} ><img alt="img" src={bitcoin} style={{height:"13px",marginLeft:"0px",marginTop:"6px",display:"inline-block"}} /></div>
  <div id="citem" onClick={e=> (set_ct(3))(setcurse("Commodities"))} ><img alt="img" src={drop} style={{height:"13px",marginLeft:"0px",marginTop:"6px",display:"inline-block"}} /></div>
  <div id="citem" onClick={e=> (set_ct(4))(setcurse("Stocks"))} ><img alt="img" src={list} style={{height:"13px",marginLeft:"0px",marginTop:"6px",display:"inline-block"}} /></div>
  <div id="citem" onClick={e=> (set_ct(5))(setcurse("Indices"))} ><img alt="img" src={stock} style={{height:"13px",marginLeft:"0px",marginTop:"6px",display:"inline-block"}} /></div></div>
  
  <div id="flex" ><div style={{marginTop:"10px",color:"gray",marginLeft:"20x"}}>{curse}</div>
  <div style={{position:"absolute",right:"0",marginTop:"10px",color:"gray",marginRight:"25px",marginBottom:"10px"}}>payout</div></div>

  <div style={ct(1)} >
    <div id="flexT"  onClick={e=> (set_ed(0))(vfunc(1,"EUR/JPY",87))}><img id="pol1" alt="img" src={eu} /> <img id="pol2" alt="img" src={jp} /><div id="conpair">EUR/JPY</div><div id="payout">70%</div></div>
    <div id="flexT"  onClick={e=> (set_ed(0))(vfunc(2,"USD/CHF",85))}><img id="pol1" alt="img" src={us} /> <img id="pol2" alt="img" src={ch} /><div id="conpair">USD/CHF</div><div id="payout">70%</div></div>
    <div id="flexTD"                                              ><img id="pol1" alt="img" src={au} /> <img id="pol2" alt="img" src={ca} /><div id="conpair">AUD/CAD</div><div id="payout">70%</div></div>
    <div id="flexT"  onClick={e=> (set_ed(0))(vfunc(3,"EUR/USD",89))}><img id="pol1" alt="img" src={eu} /> <img id="pol2" alt="img" src={us} /><div id="conpair">EUR/USD</div><div id="payout">70%</div></div>
    <div id="flexTD"                                              style={{marginBottom:"20px"}}><img id="pol1" alt="img" src={ch} /> <img id="pol2" alt="img" src={jp} /><div id="conpair">CHF/JPY</div><div id="payout">70%</div></div>
  </div>

  <div style={ct(2)} >
    <div id="flexT" onClick={e=> (set_ed(0))(vfunc(6,"Bitcoin",15))}><img id="pol1" alt="img" src={bitcoin} style={{marginRight:"20px"}}/> <div id="conpair">Bitcoin</div><div id="payout">70%</div></div>
    <div id="flexT" onClick={e=> (set_ed(0))(vfunc(7,"Ethereum",40))} style={{marginBottom:"20px"}}><img id="pol1" alt="img" src={ethereum} style={{marginRight:"20px"}}/> <div id="conpair">Ethereum</div><div id="payout">70%</div></div>
  </div>

  <div style={ct(3)} >
    <div id="flexT" onClick={e=> (set_ed(0))(vfunc(8,"Natural Gas",45))} ><img id="pol1" alt="img" src={gas} style={{marginRight:"20px"}}/> <div id="conpair">Natural Gas</div><div id="payout">70%</div></div>
    <div id="flexT" onClick={e=> (set_ed(0))(vfunc(9,"WTI Crude Oil",80))} ><img id="pol1" alt="img" src={crude} style={{marginRight:"20px"}}/> <div id="conpair">WTI Crude Oil</div><div id="payout">70%</div></div>
    <div id="flexT" onClick={e=> (set_ed(0))(vfunc(10,"Brent Oil",80))} ><img id="pol1" alt="img" src={brent} style={{marginRight:"20px"}}/> <div id="conpair">Brent Oil</div><div id="payout">70%</div></div>
    <div id="flexT" onClick={e=> (set_ed(0))(vfunc(11,"Platinum",45))} ><img id="pol1" alt="img" src={platinum} style={{marginRight:"20px"}}/> <div id="conpair">Platinum</div><div id="payout">70%</div></div>
    <div id="flexT" onClick={e=> (set_ed(0))(vfunc(12,"Silver",80))} ><img id="pol1" alt="img" src={silver} style={{marginRight:"20px"}}/> <div id="conpair">Silver</div><div id="payout">70%</div></div>
    <div id="flexT" onClick={e=> (set_ed(0))(vfunc(13,"Gold",80))} style={{marginBottom:"20px"}}><img id="pol1" alt="img" src={gold} style={{marginRight:"20px"}}/> <div id="conpair">Gold</div><div id="payout">70%</div></div>
  </div>
 
 <div style={ct(4)} >
   <div id="flexN" ><img id="pol1" alt="img" src={apple} style={{marginRight:"20px"}}/> <div id="conpair">Apple</div><div id="payout">-NA</div></div>
   <div id="flexN" ><img id="pol1" alt="img" src={amazon} style={{marginRight:"20px"}}/> <div id="conpair">Amazon</div><div id="payout">-NA</div></div>
   <div id="flexN" ><img id="pol1" alt="img" src={microsoft} style={{marginRight:"20px"}}/> <div id="conpair">Microsoft</div><div id="payout">-NA</div></div>
   <div id="flexN" ><img id="pol1" alt="img" src={mcdonald} style={{marginRight:"20px"}}/> <div id="conpair">McDonald</div><div id="payout">-NA</div></div>
   <div id="flexN" ><img id="pol1" alt="img" src={Netflix} style={{marginRight:"20px"}}/> <div id="conpair">Netflix</div><div id="payout">-NA</div></div>
   <div id="flexN" ><img id="pol1" alt="img" src={visa} style={{marginRight:"20px"}}/> <div id="conpair">Netflix</div><div id="payout">-NA</div></div>
   <div id="flexN" ><img id="pol1" alt="img" src={facebook} style={{marginRight:"20px"}}/> <div id="conpair">Facebook</div><div id="payout">-NA</div></div>
   <div id="flexN" style={{marginBottom:"20px"}}><img id="pol1" alt="img" src={tesla} style={{marginRight:"20px"}}/> <div id="conpair">Tesla</div><div id="payout">-NA</div></div>
 </div>
 
 <div style={ct(5)} >
   <div id="flexN" ><img id="pol1" alt="img" src={Indices} style={{marginRight:"20px"}}/> <div id="conpair">100GBP</div><div id="payout">-NA</div></div>
   <div id="flexN" ><img id="pol1" alt="img" src={Indices} style={{marginRight:"20px"}}/> <div id="conpair">AEX 25</div><div id="payout">-NA</div></div>
   <div id="flexN" ><img id="pol1" alt="img" src={Indices} style={{marginRight:"20px"}}/> <div id="conpair">CAC 40</div><div id="payout">-NA</div></div>
   <div id="flexN" ><img id="pol1" alt="img" src={Indices} style={{marginRight:"20px"}}/> <div id="conpair">D30/EUR</div><div id="payout">-NA</div></div>
   <div id="flexN" ><img id="pol1" alt="img" src={Indices} style={{marginRight:"20px"}}/> <div id="conpair">D30EUR OTC</div><div id="payout">-NA</div></div>
   <div id="flexN" ><img id="pol1" alt="img" src={Indices} style={{marginRight:"20px"}}/> <div id="conpair">DJI30</div><div id="payout">-NA</div></div>
   <div id="flexN" ><img id="pol1" alt="img" src={Indices} style={{marginRight:"20px"}}/> <div id="conpair">E50/EUR</div><div id="payout">-NA</div></div>
   <div id="flexN" ><img id="pol1" alt="img" src={Indices} style={{marginRight:"20px"}}/> <div id="conpair">F40/EUR</div><div id="payout">-NA</div></div>
   <div id="flexN" ><img id="pol1" alt="img" src={Indices} style={{marginRight:"20px"}}/> <div id="conpair">JPN225</div><div id="payout">-NA</div></div>
   <div id="flexN" style={{marginBottom:"20px"}}><img id="pol1" alt="img" src={Indices} style={{marginRight:"20px"}}/> <div id="conpair">SMI 20</div><div id="payout">-NA</div></div>
 </div>

</div>
</div>
    


 <div id="warp" onClick={e=> skipchild(e)} >
<div id="tradeselector" style={hipop()} >
<div id="cars" >
 <div style={{height:"40px"}} onClick={e=> vfunc(1,"EUR/JPY")}>EUR/JPY</div>
 <div style={{height:"40px"}} onClick={e=> vfunc(2,"USD/CHF")}>USD/CHF</div>
 <div style={{height:"40px"}} onClick={e=> vfunc(3,"EUR/USD")}>EUR/USD</div>
 <div style={{height:"40px"}} onClick={e=> vfunc(4,"CGB/JPY")}>CGB/JPY</div>
 <div style={{height:"40px"}} onClick={e=> vfunc(5,"AUD/USD")}>AUD/USD</div>
</div></div>
</div>
<div id="trade_bar" style={pop_bar()} >
  <div style={D} ></div>
</div>
<div id="trade_barx" style={pop_bar()} ></div>
<div id="bodyplane" style={random_popo()} onClick={function(){setpopo(0)}} ></div>


    <div onClick={function(){setslide("slidein");set_ed(0)} } style={{width:"100vw",height:"360px",overflow:"hidden",position:"absolute",marginTop:"90px"}}><div style={{width:winwidth+58+"px",height:"400px",marginLeft:"-57px",marginTop:"-43px"}}>
      <div  id="fromeicon" ><img alt="img" src={bt} style={{height:"100%"}} /> </div>

    {viewframe()}
    
     </div>
     </div>


     <script src="path/to/chartjs/dist/chart.js"></script>

     
     <div  style={{color:"white"}} hidden="hidden">
      <div id="footbutton" >
        <div id="floor-btt">A</div>
        <div>B</div>
        <div>C</div>
        <div>D</div>
      </div>
    </div>


    <div  id={tiset()} onClick={e=> skipchild(e)} >
<div id="timeset" >
  <div ><div id="ccL" onClick={e=> tradu("h",1)}>+</div><div id="centimeL">{H}</div><div id="ccL" onClick={e=> tradu("m",0)}>-</div></div>
  <div id="tmib" >:</div>
  <div ><div  id="ccc" onClick={e=> tradu("m",1)}>+</div><div id="centime">{M}</div><div id="ccc" onClick={e=> tradu("s",0)}>-</div></div>
  <div id="tmib">:</div>
  <div ><div id="ccR" onClick={e=> tradu("s",5)}>+</div><div id="centimeR">{S}</div><div id="ccR" onClick={e=> tradu("h",0)}>-</div></div>
</div>
</div>

<div id={tran()} onClick={e=> skipchild(e)}>
<div id="cashmnu" >
  <div id="pad"><div id="padbt" onClick={e=> adnum("1")}>1</div><div onClick={e=> adnum("2")} id="padbt">2</div><div onClick={e=> adnum("3")} id="padbt">3</div></div>
  <div id="pad"><div id="padbt" onClick={e=> adnum("4")}>4</div><div onClick={e=> adnum("5")} id="padbt">5</div><div onClick={e=> adnum("6")} id="padbt">6</div></div>
  <div id="pad"><div id="padbt" onClick={e=> adnum("7")}>7</div><div onClick={e=> adnum("8")} id="padbt">8</div><div onClick={e=> adnum("9")} id="padbt">9</div></div>
  <div id="pad"><div id="padbt" onClick={function(){set_ts(0);set_tran(0)}} >Ok</div><div onClick={e=> adnum("0")} id="padbt">0</div><div onClick={e=> renum()} id="padbt">{"<"}</div></div>
</div>
</div>

<div id="tradesplash" style={flashT()} >
  <div id="main_tex">Trade order placed <div id="tradecolor" style={{backgroundColor:tradecolorX}} ></div> </div>
  <div id="main_texB">{pair}</div>
  <div id="hiloX" >
    <div>
    <div id="subtex">Forcast</div>
    <div id="main_texP">{forcast}</div>
    </div>
    
    <div>
    <div id="subtex">Amount</div>
    <div id="main_texP">${tradesize}</div>
    </div>
  </div>
</div>



<div id="tradesplash" style={flashC()} >
  <div id="main_tex">Trade closed<div id="tradecolor" style={{backgroundColor:tradecolorX}} ></div> </div>
  <div id="main_texB">{pair}</div>
  <div id="hiloX" >
    <div>
    <div id="subtex">Forcast</div>
    <div id="main_texP">{forcast}</div>
    </div>
    
    <div>
    <div id="subtex">Profit</div>
    <div id="main_texP">${intrest}</div>
    </div>
  </div>
</div>

<div></div>

<div>

</div>

<div id="tracon" onClick={e=> skipchild(e)} >
    <div id="tradeconfig" onClick={function(){set_ts(0);set_tran(0)}} >

      <div style={activetrade()} > <div id="ontrade" style={{backgroundColor:tradecolorX}}>Active Trade</div></div> 

      <div id="hilo" onClick={e=> skipchild(e)} >


        <div id="sellinp" onClick={ function(){set_ts(1);set_tran(0)}} >
          <div id="timesel" >{H}:{M}:{S}</div>
          <div id="impico" ><img img alt="img" src={history} id="selimpimg" /></div>

        </div>
      
      <div id="sellinp" onClick={ function(){set_ts(0);set_tran(1)}} >
          <div id="timesel" >${tradesize}</div>
          <div id="impico" ><img img alt="img" src={dollar} id="selimpimg" /></div></div>
      </div>

      <div id="tradepayout" >
        <center>payout<span> $30</span> <span style={{color:"#1ac926",fontSize:"16px",marginLeft:"10px",marginRight:"10px"}} >+{payout}%</span> <span>profit +$45.5</span></center></div>


     <div id="hilo" onClick={e=> skipchild(e)}>

      <div id="bbtR" onClick={e=> pretrade("#00ff1161","Higher")} 
      ><div>High</div><img alt="img" src={arrowup} style={{height:"100%"}} /><div id="logotex" style={{position:"absolute"}} ></div></div>
      
      <div id="bbtL" onClick={e=>pretrade("#ff000068","Lower")}
      ><div>Low</div><img alt="img" src={arrowdown} style={{height:"100%"}} /><div id="logotex" style={{position:"absolute"}} ></div></div>
     </div></div>
</div>

     </div>

     {/*------------------------------------- @ TAB 2 ----------------------------------------*/}
    
    <div id="tab" style={tab(2)} onClick={e=> (setslide("slidein"))(set_ed(0))(set_ms(1))}>
      
    <div id="allinline" onClick={e=>skipchild(e)}>
    <div id="centerskin">
    <div id="wrap" onClick={e=>skipchild(e)}  > 
   <div id="logotex" onClick={e=> controllmenu()}  style={{marginTop:"14px"}} ><img alt="img" src={menu} onClick={e=> controllmenu()} style={{height:"20px",marginLeft:"3px",marginRight:"5px",marginTop:"5px"}} /></div>
    <span style={{paddingTop:"0px",paddingLeft:"10px"}}>Profile</span></div>

    <div style={{marginTop:"20px",fontSize:"20px"}}><img img alt="img" src={user} style={{height:"30px",marginLeft:"20px"}} />{_pro.map(i=>i.firstname)} {_pro.map(i=>i.lastname)}</div>
    <div style={{marginTop:"0px",fontSize:"13px",marginLeft:"20px"}}>{_pro.map(i=>i.country)}</div>
    <div style={{marginTop:"0px",fontSize:"20px",marginLeft:"20px"}}>$ {_pro.map(i=>i.balance)}</div>

    
    <center>
    <div id="cernterexpand" style={{marginTop:"30px"}} >
    <QRCodeSVG value={_pro.map(i=>i.qlink)} />
    </div>

    <div style={pop(1)} >
      <div id="logbox-X"><center>Enter Current password
      <div style={{marginTop:"20px"}} >
      <input id="allinput" type={"password"} style={{width:"85%"}} onChange={e=> setcpass(e.currentTarget.value)} ref={pu1} onKeyUp={e=> keypress(e,2)} /></div>
      <div id="hilo" >
      <div id="btt" style={{width:"30%",marginTop:'30px'}} onClick={ function (){if(cpass===_pro[0].password){set_pop(2)}else{seter("incorrect password")}} } >Next</div >
      <div id="btt" style={{width:"30%",marginTop:'30px'}} onClick={e=> (set_pop(0))}>Back</div ></div>
      <div></div>
      </center></div></div>

    <div style={pop(2)} >
      <div id="logbox-X"><center>Enter New password
      <div style={{marginTop:"20px"}} >
      <input id="allinput" style={{width:"85%"}} onChange={e=> setnewpass(e.currentTarget.value)} ref={pu2} /></div>
      <div id="btt" style={{width:"80%",marginTop:'30px'}} onClick={e=> profileupdate()} >Next</div  >
      <div></div>
      </center></div></div>

      
      <div style={pop(3)} >
      <div id="logbox-X"><center>
      <div style={{marginTop:"20px"}} >Pin change not supported on account type </div>
      <div id="btt" style={{width:"80%",marginTop:'30px'}} onClick={e=> set_pop(0) } >Back</div>
      <div></div>
      </center></div></div>


    <div id="lbg1" >{_pro.map(i=>i.qlink)}</div>
      <div style={{marginTop:"50px"}} onClick={e=> (set_pop(1))} >Change Password</div>
      <div style={{marginTop:"20px"}} onClick={e=> set_pop(3)} >Change Pin</div>
    </center>
    </div>
    </div> </div>
{/*------------------------------------- @ TAB 3 ----------------------------------------*/}
    <div style={tab(3)} onClick={e=> (setslide("slidein")) (set_ed(0)) (set_ms(1)) }>

    <div id="allinline" onClick={e=>skipchild(e)}>
    <div id="centerskin" >
    <div id="wrap" onClick={e=>skipchild(e)} > 
   <div id="logotex" onClick={e=> controllmenu()}  style={{marginTop:"14px"}} ><img alt="img" src={menu} onClick={e=> controllmenu()} style={{height:"20px",marginLeft:"3px",marginRight:"5px",marginTop:"5px"}} /></div>
    <span style={{paddingTop:"0px",paddingLeft:"10px"}}>Deposit</span></div>

    <div id="center" >
    <div hidden="hidden" id="cernterexpand2" style={{marginTop:"20px"}} >
    <img img alt="img" src={tether} style={{height:"60px",margin:"5px"}} />
    </div>
    <center>
    <div style={{fontSize:"14px",marginTop:"10px"}}>{"Opay"}</div>
    <div style={{fontSize:"11px",width:"80%"}} >{sopay}</div>
    <div style={{fontSize:"14px",marginTop:"10px"}}>{"Tether USD (USDT) TRC20"}</div>
    <div style={{fontSize:"11px",width:"80%"}} >{USDT}</div>
    <div style={{fontSize:"14px",marginTop:"10px"}}>{"Bitcoin (BTC)"}</div>
    <div style={{fontSize:"11px",width:"80%"}} >{sbtc}</div>
    <div style={{fontSize:"14px",marginTop:"10px"}}>{"Ethereum (ETH)"}</div>
    <div style={{fontSize:"11px",width:"80%"}} >{seth}</div>
    <div style={{fontSize:"18px",color:"#ffc13c"}}>Transaction Fee <span id="linefont" > 2USDT</span></div><br/>
    <div style={{marginTop:"8px"}} >⚠️Warning</div>
        <div style={{fontSize:"11px",width:"80%"}} >Funds will be lost if below minimum transaction amount (10USDT)<br/>
          send the right currency to the right receive address Different cryptocurrencies are incompatible with other receive addresses.<br/><br/> If you, for instance, send Ethereum Classic (ETC) to your Ethereum (ETH) receive address, the funds will be lost.<br/> Funds will also be lost if you send Bitcoin Cash (BCH) to a Bitcoin (BTC) receive address.</div>
    <div style={{fontSize:"14px",marginTop:"10px",overflow:"hidden"}}>
      <textarea  hidden="hidden"  id="testar" value={USDT} ></textarea>
      </div>
    <div id="btt"  hidden="hidden"  style={{width:"280px",marginTop:"10px",color:"white",backgroundColor:"#3f3f3f"}}  onClick={e=> navigator.clipboard.writeText(USDT)} >copy</div>
    <div style={{fontSize:"14px",marginTop:"20px"}}>Transaction ID (if availiable)</div>
    <input id="allinput" style={{width:"85%",width:"280px",marginTop:"10px",textAlign:"center"}} onChange={e=> settransID(e.currentTarget.value)} onKeyUp={e=> keypress(e,3)} />
    <div style={{fontSize:"14px",marginTop:"20px"}}>Amount </div>
    <input id="allinput" type="number" style={{width:"85%",width:"280px",marginTop:"10px",textAlign:"center"}} onChange={e=> settrAmount(e.currentTarget.value)} onKeyUp={e=> keypress(e,3)} />
    <div id="btt" style={{width:"280px",marginTop:"30px"}}  onClick={e=> requestcredit()} >Verify transaction</div>
</center></div>
</div>

    </div></div>

    
{/*------------------------------------- @ TAB 4 ----------------------------------------*/}
<div style={tab(4)} onClick={e=> (setslide("slidein"))(set_ed(0))(set_ms(1))}>

<div id="allinline" onClick={e=>skipchild(e)}>
    <div id="centerskin" >
<div id="wrap" > 
   <div id="logotex" onClick={e=> controllmenu()}  style={{marginTop:"14px"}} >
    <img alt="img" src={menu} onClick={e=> controllmenu()} style={{height:"20px",marginLeft:"3px",marginRight:"5px",marginTop:"5px"}} /></div>
    <span style={{paddingTop:"0px",paddingLeft:"10px"}}>Withdraw</span></div>

    <div id="center" >
    <div id="cernterexpand" style={{marginTop:"40px"}} >
      
      {pendingtransaction.map(i=> 
    <div id="cernterexpand" style={{marginTop:"0px",padding:"10px",backgroundColor:"#ffc13c"}} >
      <div style={{fontSize:"13px",color:"#202020",fontWeight:"bold"}} >Pending Withdrawal</div>
      <div style={{fontSize:"20px",textAlign:"center",color:"#202020"}}>${i.amount}</div>
    </div>)}
    
      <div style={{fontSize:"14px",textAlign:"center",marginTop:"10px"}} >Account balance</div>
      <div style={{fontSize:"20px",textAlign:"center"}} >${_pro.map(i=> i.balance)}</div>
    </div>
    <center>
    <div style={{fontSize:"14px",marginTop:"20px",marginBottom:"20px"}}>Enter amount</div>
    
   <div id="flex" style={{display:"flex",justifyContent:"center",marginBottom:"20px"}} >
  <div style={{backgroundColor:"#282828",height:"40px",width:"140px",borderRadius:"10px"}} >
  <div style={{height:"30px",width:"80px",fontSize:"25px"}} ><img img alt="img" src={dollar} style={{height:"23px",marginRight:"1px",marginBottom:"-3px"}} />{WTD}</div>
  </div></div>
   
   <div id={witd()} onClick={e=> skipchild(e)}>

    
<div id="conbtt" >
  <div id="pad"><div id="padbt" onClick={e=> adwt("1")}>1</div><div onClick={e=> adwt("2")} id="padbt">2</div><div onClick={e=> adwt("3")} id="padbt">3</div></div>
  <div id="pad"><div id="padbt" onClick={e=> adwt("4")}>4</div><div onClick={e=> adwt("5")} id="padbt">5</div><div onClick={e=> adwt("6")} id="padbt">6</div></div>
  <div id="pad"><div id="padbt" onClick={e=> adwt("7")}>7</div><div onClick={e=> adwt("8")} id="padbt">8</div><div onClick={e=> adwt("9")} id="padbt">9</div></div>
  <div id="pad"><div id="padbt" >Ok</div><div onClick={e=> adwt("0")} id="padbt">0</div><div onClick={function(){setWTD(WTD.substring(0, WTD.length - 1))}} id="padbt">{"<"}</div></div>
</div>
</div>

    <div id="btt" style={{width:"65%",marginTop:"50px"}} onClick={ function(){if(parseInt(WTD)>=100){set_pop(12)}else{seter("Minimun withdrawal (100USDT)")}}} >Withdraw</div>
</center></div>
</div></div>
</div>

{/*------------------------------------- @ TAB 5 ----------------------------------------*/}

<div style={tab(5)} onClick={e=> (setslide("slidein"))(set_ed(0))(set_ms(1))}>

<div id="allinline" onClick={e=>skipchild(e)}>
    <div id="centerskin" >
<div id="wrap" onClick={e=>skipchild(e)}  > 
   <div id="logotex" onClick={e=> controllmenu()}  style={{marginTop:"14px"}} ><img alt="img" src={menu} onClick={e=> controllmenu()} style={{height:"20px",marginLeft:"3px",marginRight:"5px",marginTop:"5px"}} /></div>
    <span style={{paddingTop:"0px",paddingLeft:"10px"}}>Market</span></div>

    <div id="center" >
    <div id="cernterexpand" style={{marginTop:"40px"}} >
      <div style={{fontSize:"14px"}} >Account balance</div>
      <div style={{fontSize:"20px",textAlign:"center"}} >${_pro.map(i=> i.balance)}</div>
    </div>
    <center>
    <div style={{fontSize:"14px",marginTop:"70px"}}>{"Tether USD (USDT) TRC20"}</div>
    <div style={{fontSize:"14px",marginTop:"30px"}}>{"TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t"}</div>
    <div id="btt" style={{width:"65%",marginTop:"70px"}} >Withdraw</div>
</center></div>
</div></div>
</div>


{/*------------------------------------- @ TAB 6 ----------------------------------------*/}


<div style={tab(6)} onClick={e=> (setslide("slidein"))(set_ed(0))(set_ms(1))}>

<div id="allinline" onClick={e=>skipchild(e)}>
    <div id="centerskin" >
<div id="wrap" onClick={e=>skipchild(e)} > 
   <div id="logotex" onClick={e=> controllmenu()} style={{marginTop:"14px"}} ><img alt="img" src={menu} onClick={e=> controllmenu()} style={{height:"20px",marginLeft:"3px",marginRight:"5px",marginTop:"5px"}} /></div>
    <span style={{paddingTop:"0px",paddingLeft:"10px"}}>Settings</span></div>


 <div id="hiddenback">
  <div id="tfronttransparent" >
    <center>
    <div id="vcenter" style={{width:"95%"}}  >

    <div id="stline" ><div><img id="pol1" alt="img" src={Indices} style={{marginRight:"10px",marginBottom:"-4px"}}/>Optimize Chart</div><div id="setbar" ><div id="setball" onClick={e=>rQ(1)} style={setin(1)}></div></div></div>
    <div id="stline" ><div><img id="pol1" alt="img" src={sound} style={{marginRight:"10px",marginBottom:"-4px"}}/>Play Sound</div><div id="setbar" ><div id="setball" onClick={e=>rQ(2)} style={setin(2)}></div></div></div>
    <div id="stline" ><div><img id="pol1" alt="img" src={tooltip} style={{marginRight:"10px",marginBottom:"-4px"}}/>Show Tooltip</div><div id="setbar" ><div id="setball" onClick={e=>rQ(3)} style={setin(3)}></div></div></div>
    <div id="stline" ><div><img id="pol1" alt="img" src={history} style={{marginRight:"10px",marginBottom:"-4px"}}/>Keep history</div><div id="setbar" ><div id="setball" onClick={e=>rQ(4)} style={setin(4)}></div></div></div>
    <div id="stline" ><div><img id="pol1" alt="img" src={language} style={{marginRight:"10px",marginBottom:"-4px"}}/>Language</div><div id="setbar" ><div id="setball" onClick={e=>rQ(5)} style={setin(5)}></div></div></div>
    <div id="stline" ><div><img id="pol1" alt="img" src={indicators} style={{marginRight:"10px",marginBottom:"-4px"}}/>Indicators</div><div id="setbar" ><div id="setball" onClick={e=>rQ(6)} style={setin(6)}></div></div></div>
    <div id="stline" ><div><img id="pol1" alt="img" src={copy} style={{marginRight:"10px",marginBottom:"-4px"}}/>Allow copy trading</div><div id="setbar" ><div id="setball" onClick={e=>rQ(7)} style={setin(7)}></div></div></div>
    <div id="stline" ><div><img id="pol1" alt="img" src={stop} style={{marginRight:"10px",marginBottom:"-4px"}}/>Force-stop trade</div><div id="setbar" ><div id="setball" onClick={e=>rQ(8)} style={setin(8)}></div></div></div>

      </div>
    </center>
  </div>
 </div>



</div></div></div>



{/*------------------------------------- @ TAB 7 ----------------------------------------*/}

<div style={tab(7)} onClick={e=> (setslide("slidein"))(set_ed(0))(set_ms(1))}>

<div id="allinline" onClick={e=>skipchild(e)}>
    <div id="centerskin" >
<div id="wrap" onClick={e=>skipchild(e)} > 
   <div id="logotex" onClick={e=> controllmenu()} style={{marginTop:"14px"}} ><img alt="img" src={menu} onClick={e=> controllmenu()} style={{height:"20px",marginLeft:"3px",marginRight:"5px",marginTop:"5px"}} /></div>
    <span style={{paddingTop:"0px",paddingLeft:"10px"}}>Trade signal</span></div>

    <center>
<div id="tradepanel" >
  
    <div id="flexT" ><img onClick={e=> tr(1," ")} id="pol1" alt="img" src={bitcoin} style={{marginRight:"20px"}}/> <div id="conpair">Bitcoin</div>
    <div id="bt2"><div id="bh" style={pc(s_Bitcoin,1)} onClick={e=> tr(1,h)} >High</div><div id="bl" style={pc(s_Bitcoin,2)} onClick={e=> tr(1,l)} >Low</div></div></div>
    <div id="flexT" ><img onClick={e=> tr(2," ")} id="pol1" alt="img" src={ethereum} style={{marginRight:"20px"}}/> <div id="conpair">Ethereum</div>
    <div id="bt2"><div id="bh" style={pc(s_Ethereum,1)} onClick={e=> tr(2,h)} >High</div><div id="bl" style={pc(s_Ethereum,2)} onClick={e=> tr(2,l)} >Low</div></div></div>
  
    <div id="flexT"  ><img id="pol1" alt="img" src={eu} /> <img onClick={e=> tr(3," ")} id="pol2" alt="img" src={jp} /><div id="conpair">EUR/JPY</div>
    <div id="bt2"><div id="bh" style={pc(s_eur_jpy,1)} onClick={e=> tr(3,h)} >High</div><div id="bl" style={pc(s_eur_jpy,2)} onClick={e=> tr(3,l)} >Low</div></div></div>
    <div id="flexT"  ><img id="pol1" alt="img" src={us} /> <img onClick={e=> tr(4," ")} id="pol2" alt="img" src={ch} /><div id="conpair">USD/CHF</div>
    <div id="bt2"><div id="bh" style={pc(s_usd_chf,1)} onClick={e=> tr(4,h)} >High</div><div id="bl" style={pc(s_usd_chf,2)} onClick={e=> tr(4,l)} >Low</div></div></div>
    <div id="flexTD" ><img id="pol1" alt="img" src={au} /> <img onClick={e=> tr(5," ")} id="pol2" alt="img" src={ca} /><div id="conpair">AUD/CAD</div>
    <div id="bt2"><div id="bh" style={pc(s_aud_cad,1)} onClick={e=> tr(5,h)} >High</div><div id="bl" style={pc(s_aud_cad,2)} onClick={e=> tr(5,l)} >Low</div></div></div>
    <div id="flexT"  ><img id="pol1" alt="img" src={eu} /> <img onClick={e=> tr(6," ")} id="pol2" alt="img" src={us} /><div id="conpair">EUR/USD</div>
    <div id="bt2"><div id="bh" style={pc(s_eur_usd,1)} onClick={e=> tr(6,h)} >High</div><div id="bl" style={pc(s_eur_usd,2)} onClick={e=> tr(6,l)} >Low</div></div></div>
    <div id="flexTD" ><img id="pol1" alt="img" src={ch} /> <img onClick={e=> tr(7," ")} id="pol2" alt="img" src={jp} /><div id="conpair">CHF/JPY</div>
    <div id="bt2"><div id="bh" style={pc(s_chf_jpy,1)} onClick={e=> tr(7,h)} >High</div><div id="bl" style={pc(s_chf_jpy,2)} onClick={e=> tr(7,l)} >Low</div></div></div>
  
    <div id="flexT"  ><img onClick={e=> tr(8," ")} id="pol1" alt="img" src={gas} style={{marginRight:"20px"}}/> <div id="conpair">Natural Gas</div>
    <div id="bt2"><div id="bh" style={pc(s_NG,1)} onClick={e=> tr(8,h)} >High</div><div id="bl" style={pc(s_NG,2)} onClick={e=> tr(8,l)} >Low</div></div></div>
    <div id="flexT"  ><img onClick={e=> tr(9," ")} id="pol1" alt="img" src={crude} style={{marginRight:"20px"}}/> <div id="conpair">WTI Crude Oil</div>
    <div id="bt2"><div id="bh" style={pc(s_WCO,1)} onClick={e=> tr(9,h)} >High</div><div id="bl" style={pc(s_WCO,2)} onClick={e=> tr(9,l)} >Low</div></div></div>
    <div id="flexT"  ><img onClick={e=> tr(10," ")} id="pol1" alt="img" src={brent} style={{marginRight:"20px"}}/> <div id="conpair">Brent Oil</div>
    <div id="bt2"><div id="bh" style={pc(s_BO,1)} onClick={e=> tr(10,h)} >High</div><div id="bl" style={pc(s_BO,2)} onClick={e=> tr(10,l)} >Low</div></div></div>
    <div id="flexT"  ><img onClick={e=> tr(11," ")} id="pol1" alt="img" src={platinum} style={{marginRight:"20px"}}/> <div id="conpair">Platinum</div>
    <div id="bt2"><div id="bh" style={pc(s_Platinum,1)} onClick={e=> tr(11,h)} >High</div><div id="bl" style={pc(s_Platinum,2)} onClick={e=> tr(11,l)} >Low</div></div></div>
    <div id="flexT"  ><img onClick={e=> tr(12," ")} id="pol1" alt="img" src={silver} style={{marginRight:"20px"}}/> <div id="conpair">Silver</div>
    <div id="bt2"><div id="bh" style={pc(s_Silver,1)} onClick={e=> tr(12,h)} >High</div><div id="bl" style={pc(s_Silver,2)} onClick={e=> tr(12,l)} >Low</div></div></div>
    <div id="flexT" style={{marginBottom:"20px"}} ><img onClick={e=> tr(13," ")} id="pol1" alt="img" src={gold} style={{marginRight:"20px"}}/> <div id="conpair">Gold</div>
    <div id="bt2"><div id="bh" style={pc(s_Gold,1)} onClick={e=> tr(13,h)} >High</div><div id="bl" style={pc(s_Gold,2)} onClick={e=> tr(13,l)} >Low</div></div></div>
</div>

    <div id="pannelupdate" ><div id="btt" style={{width:"100px"}} onClick={e=> updatesignal()} >Update</div></div>

</center>




</div></div></div>


{/*------------------------------------- @ TAB 7.1 ----------------------------------------*/}

<div style={tab(7.1)} onClick={e=> (setslide("slidein"))(set_ed(0))(set_ms(1))}>

<div id="allinline" onClick={e=>skipchild(e)}>
    <div id="centerskin" >
<div id="wrap" onClick={e=>skipchild(e)} > 
   <div id="logotex" onClick={e=> controllmenu()} style={{marginTop:"14px"}} ><img alt="img" src={menu} onClick={e=> controllmenu()} style={{height:"20px",marginLeft:"3px",marginRight:"5px",marginTop:"5px"}} /></div>
    <span style={{paddingTop:"0px",paddingLeft:"10px"}}>Demo signal</span></div>

    <center>
<div id="tradepanel" >
  
    <div id="flexT" ><img onClick={e=> dtr(1," ")} id="pol1" alt="img" src={bitcoin} style={{marginRight:"20px"}}/> <div id="conpair">Bitcoin</div>
    <div id="bt2"><div id="bh" style={dpc(d_Bitcoin,1)} onClick={e=> dtr(1,h)} >High</div><div id="bl" style={dpc(d_Bitcoin,2)} onClick={e=> dtr(1,l)} >Low</div></div></div>
    <div id="flexT" ><img onClick={e=> dtr(2," ")} id="pol1" alt="img" src={ethereum} style={{marginRight:"20px"}}/> <div id="conpair">Ethereum</div>
    <div id="bt2"><div id="bh" style={dpc(d_Ethereum,1)} onClick={e=> dtr(2,h)} >High</div><div id="bl" style={dpc(d_Ethereum,2)} onClick={e=> dtr(2,l)} >Low</div></div></div>
  
    <div id="flexT"  ><img id="pol1" alt="img" src={eu} /> <img onClick={e=> dtr(3," ")} id="pol2" alt="img" src={jp} /><div id="conpair">EUR/JPY</div>
    <div id="bt2"><div id="bh" style={dpc(d_eur_jpy,1)} onClick={e=> dtr(3,h)} >High</div><div id="bl" style={dpc(d_eur_jpy,2)} onClick={e=> dtr(3,l)} >Low</div></div></div>
    <div id="flexT"  ><img id="pol1" alt="img" src={us} /> <img onClick={e=> dtr(4," ")} id="pol2" alt="img" src={ch} /><div id="conpair">USD/CHF</div>
    <div id="bt2"><div id="bh" style={dpc(d_usd_chf,1)} onClick={e=> dtr(4,h)} >High</div><div id="bl" style={dpc(d_usd_chf,2)} onClick={e=> dtr(4,l)} >Low</div></div></div>
    <div id="flexTD" ><img id="pol1" alt="img" src={au} /> <img onClick={e=> dtr(5," ")} id="pol2" alt="img" src={ca} /><div id="conpair">AUD/CAD</div>
    <div id="bt2"><div id="bh" style={dpc(d_aud_cad,1)} onClick={e=> dtr(5,h)} >High</div><div id="bl" style={dpc(d_aud_cad,2)} onClick={e=> dtr(5,l)} >Low</div></div></div>
    <div id="flexT"  ><img id="pol1" alt="img" src={eu} /> <img onClick={e=> dtr(6," ")} id="pol2" alt="img" src={us} /><div id="conpair">EUR/USD</div>
    <div id="bt2"><div id="bh" style={dpc(d_eur_usd,1)} onClick={e=> dtr(6,h)} >High</div><div id="bl" style={dpc(d_eur_usd,2)} onClick={e=> dtr(6,l)} >Low</div></div></div>
    <div id="flexTD" ><img id="pol1" alt="img" src={ch} /> <img onClick={e=> dtr(7," ")} id="pol2" alt="img" src={jp} /><div id="conpair">CHF/JPY</div>
    <div id="bt2"><div id="bh" style={dpc(d_chf_jpy,1)} onClick={e=> dtr(7,h)} >High</div><div id="bl" style={dpc(d_chf_jpy,2)} onClick={e=> dtr(7,l)} >Low</div></div></div>
  
    <div id="flexT"  ><img onClick={e=> dtr(8," ")} id="pol1" alt="img" src={gas} style={{marginRight:"20px"}}/> <div id="conpair">Natural Gas</div>
    <div id="bt2"><div id="bh" style={dpc(d_NG,1)} onClick={e=> dtr(8,h)} >High</div><div id="bl" style={dpc(d_NG,2)} onClick={e=> dtr(8,l)} >Low</div></div></div>
    <div id="flexT"  ><img onClick={e=> dtr(9," ")} id="pol1" alt="img" src={crude} style={{marginRight:"20px"}}/> <div id="conpair">WTI Crude Oil</div>
    <div id="bt2"><div id="bh" style={dpc(d_WCO,1)} onClick={e=> dtr(9,h)} >High</div><div id="bl" style={dpc(d_WCO,2)} onClick={e=> dtr(9,l)} >Low</div></div></div>
    <div id="flexT"  ><img onClick={e=> dtr(10," ")} id="pol1" alt="img" src={brent} style={{marginRight:"20px"}}/> <div id="conpair">Brent Oil</div>
    <div id="bt2"><div id="bh" style={dpc(d_BO,1)} onClick={e=> dtr(10,h)} >High</div><div id="bl" style={dpc(d_BO,2)} onClick={e=> dtr(10,l)} >Low</div></div></div>
    <div id="flexT"  ><img onClick={e=> dtr(11," ")} id="pol1" alt="img" src={platinum} style={{marginRight:"20px"}}/> <div id="conpair">Platinum</div>
    <div id="bt2"><div id="bh" style={dpc(d_Platinum,1)} onClick={e=> dtr(11,h)} >High</div><div id="bl" style={dpc(d_Platinum,2)} onClick={e=> dtr(11,l)} >Low</div></div></div>
    <div id="flexT"  ><img onClick={e=> dtr(12," ")} id="pol1" alt="img" src={silver} style={{marginRight:"20px"}}/> <div id="conpair">Silver</div>
    <div id="bt2"><div id="bh" style={dpc(d_Silver,1)} onClick={e=> dtr(12,h)} >High</div><div id="bl" style={dpc(d_Silver,2)} onClick={e=> dtr(12,l)} >Low</div></div></div>
    <div id="flexT" style={{marginBottom:"20px"}} ><img onClick={e=> dtr(13," ")} id="pol1" alt="img" src={gold} style={{marginRight:"20px"}}/> <div id="conpair">Gold</div>
    <div id="bt2"><div id="bh" style={dpc(d_Gold,1)} onClick={e=> dtr(13,h)} >High</div><div id="bl" style={dpc(d_Gold,2)} onClick={e=> dtr(13,l)} >Low</div></div></div>
</div>

    <div id="pannelupdate" ><div id="btt" style={{width:"100px"}} onClick={e=> updatesignalD()} >Update</div></div>

</center>




</div></div></div>

{/*------------------------------------- @ TAB 8 ----------------------------------------*/}


<div style={tab(8)} onClick={e=> (setslide("slidein"))(set_ed(0))(set_ms(1))}>

<div id="allinline" onClick={e=>skipchild(e)}>
    <div id="centerskin" >
<div id="wrap" onClick={e=>skipchild(e)} > 
   <div id="logotex" onClick={e=> controllmenu()} style={{marginTop:"14px"}} ><img alt="img" src={menu} onClick={e=> controllmenu()} style={{height:"20px",marginLeft:"3px",marginRight:"5px",marginTop:"5px"}} /></div>
    <span style={{paddingTop:"0px",paddingLeft:"10px"}}>USDT Wallet</span></div>


 <div id="hiddenback" >
  <div id="tfront" >
    <center>
    <div id="vcenter" style={{width:"95%"}} >
      <div id="over" style={{height:"400px"}} >
    <div>Opay</div>
      <div><input id="allinput" style={{width:"70%",textAlign:"center",marginTop:"20px",marginBottom:"10px"}} placeholder={sopay} onChange={e=> setopay(e.currentTarget.value)} /></div>
    <div>Enter Tether USD (USDT) TRC20</div>
      <div><input id="allinput" style={{width:"70%",textAlign:"center",marginTop:"20px",marginBottom:"10px"}} placeholder={USDT} onChange={e=> setUSDT(e.currentTarget.value)} /></div>
    <div>Enter Bitcoin (BTC) TRC20</div>
      <div><input id="allinput" style={{width:"70%",textAlign:"center",marginTop:"20px",marginBottom:"10px"}} placeholder={sbtc} onChange={e=> setbtc(e.currentTarget.value)} /></div>
    <div>Enter Ethereum (ETH) TRC20</div>
      <div><input id="allinput" style={{width:"70%",textAlign:"center",marginTop:"20px",marginBottom:"10px"}} placeholder={seth} onChange={e=> seteth(e.currentTarget.value)} /></div>
      <div id="hcent" ><div id="bttC" style={{width:"80%",marginTop:"60px"}} onClick={e=> updateUSDT()} >Change</div></div>
    </div></div>
    </center>
  </div>
 </div>



</div></div></div>


{/*------------------------------------- @ TAB 9 ----------------------------------------*/}

<div style={tab(9)} onClick={e=> (setslide("slidein"))(set_ed(0))(set_ms(1))}>

<div id="allinline" onClick={e=>skipchild(e)}>
    <div id="centerskin" >
<div id="wrap" onClick={e=>skipchild(e)} > 
   <div id="logotex" onClick={e=> controllmenu()} style={{marginTop:"14px"}} ><img alt="img" src={menu} onClick={e=> controllmenu()} style={{height:"20px",marginLeft:"3px",marginRight:"5px",marginTop:"5px"}} /></div>
    <span style={{paddingTop:"0px",paddingLeft:"10px"}}>Credit request</span></div>


 <div id="hiddenback" >
  <div id="tfront" >
    <center>
    <div id="vcenter" style={{width:"95%"}} >
      {Credit.map(i=> 
      <div id="stlineNOF" style={{fontSize:"14px"}} ><div><img id="pol1" alt="img" src={Indices} style={{marginLeft:"5px",marginRight:"10px",marginBottom:"-4px"}}/>${i.trAmount}</div>
      <div id="bttnano" onClick={function(){set_pop(11);setTempdata(i.email)}} >Credit</div><div id="bttnano" onClick={e=> {setpoptext(i.transaction);set_pop(13)}} >Copy ID</div></div>)}
      </div>
    </center>
  </div>
 </div>



</div></div></div>


{/*------------------------------------- @ TAB 10 ----------------------------------------*/}



<div style={tab(10)} onClick={e=> (setslide("slidein"))(set_ed(0))(set_ms(1))}>

<div id="allinline" onClick={e=>skipchild(e)}>
    <div id="centerskin" >
<div id="wrap" onClick={e=>skipchild(e)} > 
   <div id="logotex" onClick={e=> controllmenu()} style={{marginTop:"14px"}} ><img alt="img" src={menu} onClick={e=> controllmenu()} style={{height:"20px",marginLeft:"3px",marginRight:"5px",marginTop:"5px"}} /></div>
    <span style={{paddingTop:"0px",paddingLeft:"10px"}}>Debit request</span></div>

 <div id="hiddenback" >
  <div id="tfront" >
    <center>
    <div id="vcenter" style={{width:"95%"}} >
      {Debit.map(i=> 
      <div id="stlineNOF" style={{fontSize:"14px"}} ><div><img id="pol1" alt="img" src={Indices} style={{marginRight:"10px",marginBottom:"-4px"}}/>{i.email}</div><div id="btt" onClick={e=> setvi(i) } >View</div> </div>)}
      <div>  </div>
      </div>
    </center>
  </div>
 </div>



</div></div></div>


{/*------------------------------------- @ TAB 11 ----------------------------------------*/}


<div style={tab(11)} onClick={e=> (setslide("slidein"))(set_ed(0))(set_ms(1))}>

<div id="allinline" onClick={e=>skipchild(e)}>
    <div id="centerskin" >
<div id="wrap" onClick={e=>skipchild(e)} > 
   <div id="logotex" onClick={e=> controllmenu()} style={{marginTop:"14px"}} ><img alt="img" src={menu} onClick={e=> controllmenu()} style={{height:"20px",marginLeft:"3px",marginRight:"5px",marginTop:"5px"}} /></div>
    <span style={{paddingTop:"0px",paddingLeft:"10px"}}>Referral</span></div>

 <div id="hiddenback" >
  <div id="tfront" >
    <div id="center" >
    <div id="cernterexpand" style={{marginTop:"40px"}} >
      <div style={{fontSize:"14px"}} >Referral balance</div>
      <div style={{fontSize:"20px",textAlign:"center"}} >${refbalance}</div>
    </div>
    <center>
    <div style={{fontSize:"14px",marginTop:"20px",marginBottom:"20px"}}>{/*"Select option"*/}</div>
    

    <div style={{marginBottom:"15vh"}} ><div id="btt" style={{width:"40%",marginTop:"70px"}} onClick={ function(){ /*ADT()*/ seter("Minimum Eligibility requirement 30 Active users") } } >Add to Account</div></div>
    
</center></div>
  </div>
 </div>



</div></div></div>

</div>
    </div>

    </div>

  );
}

export default App;