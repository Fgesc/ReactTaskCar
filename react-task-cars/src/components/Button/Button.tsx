import './Button.css';

type IsReservedType = {
  isReserved: boolean;
};


export default function Button({isReserved} : IsReservedType){
    const reserve = isReserved ? "Забронировано":"Забронировать";
    return <button className="button" disabled={isReserved}>{reserve}</button>
}