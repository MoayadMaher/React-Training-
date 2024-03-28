import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store";

interface Car {
  id: string;
  name: string;
  cost: number;
}

function CarList() {
  const dispatch = useDispatch();
  const { cars, name } = useSelector(({ form, cars: { data, searchTerm } }) => {
    const filteredCars = data.filter((car: Car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return {
      cars: filteredCars,
      name: form.name,
    };
  });

  const handleCarDelete = (car: Car) => {
    dispatch(removeCar(car.id));
  };

  const reneredCars = cars.map((car: Car) => {
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());
    return (
      <div key={car.id} className={`panel ${bold && "bold"}`}>
        <p>
          {car.name} - ${car.cost}
        </p>
        <button
          className="button is-danger"
          onClick={() => {
            handleCarDelete(car);
          }}
        >
          Delete
        </button>
      </div>
    );
  });
  return (
    <div className="car-list">
      {reneredCars}
      <hr />
    </div>
  );
}
export default CarList;
