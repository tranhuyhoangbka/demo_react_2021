import React, {useContext} from 'react';
import FoodContext from './FoodContext';

const FoodForm = () => {
  const food = useContext(FoodContext);

  return (
    <div>
      <dl>
        <dt>Name: </dt>
        <dd><input type="text" name="name" onChange={(e) => food.setName(e.target.value)} /></dd>
        <dt>Location: </dt>
        <dd><input type="text" name="location" onChange={(e) => food.setLocation(e.target.value)} /></dd>
      </dl>
    </div>
  );
}

export default FoodForm;