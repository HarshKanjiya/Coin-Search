import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import './coin-page.styles.css';
import {motion,AnimatePresence} from 'framer-motion'


const CoinPage = () => {
    const [coinData, setCoinData ] = useState([]);
    const params = useParams();
    const url2 = `https://api.coingecko.com/api/v3/coins/${params.coinId}`

    useEffect(() => {
        fetch(url2)
        .then((res) => res.json())
        .then((user) => {setCoinData(user)})
    },[])
    console.log('coinData', coinData)

    const greenOrred = (x) => {

        if((x) < 0){
            return(<p className='red-color'> {x} </p>)
        }
        else if(x > 0){
            return(<p className='green-color'> {x} </p>  )
        }
        else{
            return(<p> {x} </p>  )
        }

    }
    return ( 
        <AnimatePresence>
            <motion.div className='coin-container'
             initial={{x:30,opacity:0}}
             animate={{x:0,opacity:1}}
             exit={{x:-30,opacity:0}}
             transition={{duration:1.3 , type:'spring',stiffness:200}}
     
            >
                <motion.div className='content coin-name'
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration:1.3}}>
                    <motion.h1
                    
                    >{coinData.name}</motion.h1>
                </motion.div>
                <div className='content'>
                    
                    <div className='rank'>
                        <span> #{coinData.market_cap_rank} </span>
                    </div>
                    <div className='info'>
                        <div className='coin-heading'>
                            {coinData.image && <img src={coinData.image.small}/>}

                            <p> {coinData.symbol} </p>
                        </div>
                        <span>price :</span>
                        <div className='coin-price'>
                            
                            {coinData.market_data ? <h1>${coinData.market_data.current_price.usd} </h1>: null}
                        </div>
                    </div>
                </div>
                <div className='content'>
                    <table>
                        <thead>
                            <tr>
                                <th>1h</th>
                                <th>24h</th>
                                <th>7d</th>
                                <th>14d</th>
                                <th>30d</th>
                                <th>1y</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td> {coinData.market_data ? greenOrred(coinData.market_data.price_change_percentage_1h_in_currency.usd) : null} </td>
                                <td> {coinData.market_data ? greenOrred(coinData.market_data.price_change_percentage_24h_in_currency.usd) : null} </td>
                                <td> {coinData.market_data ? greenOrred(coinData.market_data.price_change_percentage_7d_in_currency.usd) : null} </td>
                                <td> {coinData.market_data ? greenOrred(coinData.market_data.price_change_percentage_14d_in_currency.usd) : null} </td>
                                <td> {coinData.market_data ? greenOrred(coinData.market_data.price_change_percentage_30d_in_currency.usd) : null} </td>
                                <td> {coinData.market_data ? greenOrred(coinData.market_data.price_change_percentage_1y_in_currency.usd) : null} </td>
                        
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='content'>
                    <div className='stats'>
                        <div className='left'>
                            <div className="row">
                            <h4>24 Hour Low</h4>
                            <p className='space-for-4values'>{coinData.market_data ? coinData.market_data.low_24h.usd : null}</p>
                            <h4>24 Hour High</h4>
                            <p>{coinData.market_data ? coinData.market_data.high_24h.usd : null}</p>
                            </div>
                        </div>
                        <div className='right'>
                            <div className="row">
                            <h4>Market Cap</h4>
                            <p className='space-for-4values'>{coinData.market_data ? coinData.market_data.market_cap.usd :null}</p>
                            <h4>Circulating Supply</h4>
                            <p>{coinData.market_data ? coinData.market_data.circulating_supply : null}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <h3>About</h3>
                    <p> {coinData.market_data ? coinData.description.en : null} </p>
                </div>
            </motion.div>

        </AnimatePresence>
     );
}
 
export default CoinPage;