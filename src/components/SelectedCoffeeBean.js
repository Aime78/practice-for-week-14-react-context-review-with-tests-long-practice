import { useCoffeeBean } from "../context/CoffeeContext";

const SelectedCoffeeBean = () => {
  const { coffeeBean } = useCoffeeBean();
  // console.log(coffeeBean);
  return (
    <div className="selected-coffee">
      <h2>{coffeeBean.name}</h2>
    </div>
  );
};

export default SelectedCoffeeBean;
