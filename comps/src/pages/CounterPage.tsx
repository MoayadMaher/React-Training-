/* eslint-disable @typescript-eslint/no-explicit-any */
import { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";
import { produce } from "immer";

// For reducer we always dfine the action type as a value to prevent making and typo
const INCREMENT_COUNT: string = "increment";
const SET_VALUE_TO_ADD: string = "change-vlue-to-add";
const DECREMENT_COUNT: string = "decrement";
const ADD_VALUE: string = "add-value";

interface state {
  count: number;
  valueToAdd: number;
}

const reducer = (state: state, action: any) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      state.count++;
      return;
    case DECREMENT_COUNT:
      state.count--;
      return;
    case ADD_VALUE:
      state.count += state.valueToAdd;
      state.valueToAdd = 0;
      return;
    case SET_VALUE_TO_ADD:
      state.valueToAdd = action.payload;
      return;
    default:
      return;
  }
};

function CounterPage({ initialCount }: { initialCount: number }) {
  const [state, dispatch] = useReducer(produce(reducer), {
    count: initialCount,
    valueToAdd: 0,
  });

  const increment = () => {
    dispatch({
      type: INCREMENT_COUNT,
    });
  };

  const decrement = () => {
    dispatch({
      type: DECREMENT_COUNT,
    });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value) || 0;
    dispatch({
      type: SET_VALUE_TO_ADD,
      payload: value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch({
      type: ADD_VALUE,
    });
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {state.count}</h1>
      <div className="flex flex-row">
        <Button primary onClick={increment}>
          Increment
        </Button>
        <Button danger onClick={decrement}>
          decrement
        </Button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          value={state.valueToAdd || ""}
          onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <Button primary>Add it!</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
