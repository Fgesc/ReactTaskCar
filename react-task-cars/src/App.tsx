import { carsList } from './cars.const';
import ListItem from './components/CarsItem/CarsItem';
import './App.css';

function App() {
  return (
<>
    <h1 className='carsListTitle'>
        <span className='carsListTitle__item carsListTitle__model'>Марка</span>
        <span className='carsListTitle__item carsListTitle__price'>Цена</span>
        <span className='carsListTitle__item carsListTitle__year'>Год</span>
        <span className='carsListTitle__item carsListTitle__color'>Цвет</span>
        <span className='carsListTitle__item carsListTitle__buy'>Заказать</span>
    </h1>
    <ul className='carsList'>
        {carsList.map((car, index) => (
            <ListItem key={String(index)} carIndex = {index} {...car} />
        ))}
    </ul>
</>
  );
}

export default App;