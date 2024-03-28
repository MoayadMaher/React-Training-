import { useSelector } from "react-redux";

interface RootState {
  cars: {
    data: { name: string; cost: number }[];
    searchTerm: string;
  };
}

function CarValue() {
  const totalCost = useSelector((state: RootState) =>
    state.cars.data
      .filter((car) =>
        car.name.toLowerCase().includes(state.cars.searchTerm.toLowerCase())
      )
      .reduce((acc, car) => acc + car.cost, 0)
  );

  return <div className="car-value">Total Cost: ${totalCost}</div>;
}
export default CarValue;
