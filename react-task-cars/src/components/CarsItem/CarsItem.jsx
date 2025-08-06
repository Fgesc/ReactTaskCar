import Button from "../Button/Button";
import CarsColorList from "../CarsColorList/CarsColorList";
import './CarsItem.css';

function ListItem({brand, model, year, price, currency, color, isReserved, carIndex}) {

  return (
    <li className='carsItem'>
        <p className="carsItem__brand">{brand} {model}</p>
        <p className="carsItem__price">{price} {currency}</p>
        <p className="carsItem__year">{year}</p>
        <CarsColorList color={color} carIndex={carIndex}/>
        <Button isReserved={isReserved}/>
    </li>
  );
}

export default ListItem;