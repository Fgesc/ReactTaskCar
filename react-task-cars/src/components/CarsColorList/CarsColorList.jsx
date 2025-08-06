import { useState } from 'react';
import './CarsColorList.css';



function CarsColorList({ color, carIndex}) {
  const [selectedColor, setSelectedColor] = useState(color.length > 0 ? color[0] : '');

  const handleChange = event => {
    setSelectedColor(event.target.value);
  };


  return (
    <select className='selectColor' id={carIndex} value={selectedColor} onChange={handleChange}>
      {color.map((item, idx) => (
        <option key={`color-${idx}`} value={item}>{item}</option>
      ))}
    </select>
  );
}

export default CarsColorList;