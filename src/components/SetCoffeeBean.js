import { useState } from "react";
import { useCoffeeBean } from "../context/CoffeeContext";

const SetCoffeeBean = ({ coffeeBeans }) => {
  const { coffeeBean, setCoffeeBeanId } = useCoffeeBean();
  return (
    <div className="set-coffee-bean">
      <h2>Select a Coffee Bean</h2>
      <select
        name="coffee-bean"
        value={coffeeBean.id}
        onChange={(e) => setCoffeeBeanId(e.target.value)}
      >
        {coffeeBeans.map((bean) => (
          <option key={bean.id} value={bean.id}>
            {bean.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SetCoffeeBean;
