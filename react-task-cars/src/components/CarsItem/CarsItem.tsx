// import { ListItemType } from "../../interface";
import { Car } from "../../cars.const";
import Button from "../Button/Button";
import CarsColorList from "../CarsColorList/CarsColorList";
import './CarsItem.css';

type ListItemType = Car & {
  carIndex: number;
};

function ListItem({brand, model, year, price, currency, color, isReserved, carIndex} : ListItemType) {

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