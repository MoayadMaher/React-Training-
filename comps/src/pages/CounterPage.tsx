/* eslint-disable @typescript-eslint/no-explicit-any */
import { useReducer } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";

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
      return { ...state, count: state.count + 1 };
    case DECREMENT_COUNT:
      return { ...state, count: state.count - 1 };
    case ADD_VALUE:
      return { ...state, count: state.count + state.valueToAdd, valueToAdd: 0 };
    case SET_VALUE_TO_ADD:
      return { ...state, valueToAdd: action.payload };
    default:
      return state;
  }
};

function CounterPage({ initialCount }: { initialCount: number }) {
  const [state, dispatch] = useReducer(reducer, {
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
          Increment
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
