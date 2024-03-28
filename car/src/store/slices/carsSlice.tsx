import { createSlice, nanoid } from "@reduxjs/toolkit";

interface data {
  id: string;
  name: string;
  cost: number;
}

export interface CarsState {
  searchTerm: string;
  cars: data[];
}

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    searchTerm: "",
    data: [],
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addCar(
      state: CarsState,
      action: { payload: { name: string; cost: number } }
    ) {
      state.data.push({
        id: nanoid(),
        name: action.payload.name,
        cost: action.payload.cost,
      });
    },
    removeCar(state, action: { payload: string }) {
      // Assumption: action.payload is the id of the car to remove
      state.data = state.data.filter((car) => car.id !== action.payload);
    },
  },
});

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
