//import React from 'react'
import React, {useState,useRef,useEffect} from 'react'

export default function Widgets() {

    useEffect(() => {
        const script = document.createElement('script');
      
        script.src = "https://widgets.coingecko.com/coingecko-coin-price-marquee-widget.js";
        script.async = true;
      
        document.body.appendChild(script);
      
       //return () => {  document.body.removeChild(script); }
      }, []);
        
 //   useEffect(() => {
 //       const script = document.createElement('script');
 //       script.src = "https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js";
 //       script.async = true;
 //       document.body.appendChild(script);
 //   
 //     return () => { }
 //   }, [])
}
