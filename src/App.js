import './App.css';
import { useEffect, useState } from 'react';
import NavBar from './components/nav-bar/nav-bar.component';
import CoinListing from './components/CoinListing/coinListing.component';
import {Route, Routes } from 'react-router-dom'
import CoinPage from './rutes/coin-page.component';
import {motion,AnimatePresence} from 'framer-motion'
function App() {

  const [coinList, setCoinList ] = useState([]);
  const url=`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false`

  
  useEffect(() => {
    fetch(url)
    .then((res) => res.json())
    .then((user) => {
      setCoinList(user)
      // console.log(coinList)
    })
  }
  ,[])
  return (
    <div className="App">
      <AnimatePresence>
        <motion.div
        initial={{y:'-40'}}
        animate={{y:0}}
        exit={{y:'-40'}}
        transition={{duration:0.7 , type:'spring',stiffness:200}}
        >
      <NavBar/>

        </motion.div>
      <Routes>
        <Route path='/' element={<CoinListing coins={coinList}/>}/>
        <Route path='/coin' element={<CoinPage/>}>
          <Route path=':coinId' element={<CoinPage/>}/>
        </Route>
      </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
