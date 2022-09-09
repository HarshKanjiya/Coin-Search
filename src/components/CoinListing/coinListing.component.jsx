import CoinItem from '../coin-item/coin-item.component';
import './coinListing.styles.css'
import {motion,AnimatePresence} from 'framer-motion'
const CoinListing = ({coins}) => {
    return ( 
        <AnimatePresence>
        <motion.div className="coinList-master"
        initial={{x:30,opacity:0}}
        animate={{x:0,opacity:1}}
        exit={{x:-30,opacity:0}}
        transition={{duration:1 , type:'spring',stiffness:200}}
        >

            <div className="headings">
                <p>#</p>
                <p className='coin-name'>coin</p>
                <p>price</p>
                <p>24h</p>
                <p className='hide-in-small-screen'>Volume</p>
                <p className='hide-in-small-screen'>Market Cap</p>
            </div>
            <div className='coinList-coinItem'>
                {
                    coins.map((coin) => <CoinItem key={coin.id}  coins={coin}/>)
                }
            </div>
        </motion.div>
    </AnimatePresence>
     );
}
 
export default CoinListing;