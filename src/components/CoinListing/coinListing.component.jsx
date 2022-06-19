import CoinItem from '../coin-item/coin-item.component';
import './coinListing.styles.scss'

const CoinListing = ({coins}) => {
    return ( 
        <div className="coinList-master">
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
        </div>
     );
}
 
export default CoinListing;