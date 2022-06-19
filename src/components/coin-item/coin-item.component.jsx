import './coin-item.styles.scss'
import {Link} from'react-router-dom';
const CoinItem = (props) => {
    const { market_cap_rank, name, image, symbol, current_price, price_change_percentage_24h, total_volume, market_cap, id } = props.coins;
    return ( 
        <Link to={`/coin/${id}`} className='coinItem-master'>
            <p> { market_cap_rank } </p>
            <div className='img-symbol'>
                <img className='coin-item-image' src={image}/>
                <span className='item-name'>{symbol.toUpperCase()}</span>
            </div>
            <p> {current_price} </p>
            <p> {price_change_percentage_24h.toFixed(2)} </p>
            <p className='hide-in-small-screen'> {total_volume} </p>
            <p className='hide-in-small-screen'> {market_cap} </p>
        </Link>
     );
}
 
export default CoinItem;
