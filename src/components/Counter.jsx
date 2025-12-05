import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/features/counter/counterSlice";

const Counter = () => {
  const { total } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    value_one: "",
    value_two: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: Number(e.target.value) });
  };

  const handleIncrement = () => {
    dispatch(increment(values));
    setValues({ value_one: "", value_two: "" });
  };

  const handleDecrement = () => {
    dispatch(decrement(values));
    setValues({ value_one: "", value_two: "" });
  };

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl space-y-4">
      <h2 className="text-xl font-semibold text-center">Redux Calculator</h2>

      <input
        type="number"
        name="value_one"
        placeholder="Enter first value"
        value={values.value_one}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="number"
        name="value_two"
        placeholder="Enter second value"
        value={values.value_two}
        onChange={handleChange}
        className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className="flex justify-between gap-4">
        <button
          onClick={handleIncrement}
          className="w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
          Add
        </button>

        <button
          onClick={handleDecrement}
          className="w-full py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
        >
          Subtract
        </button>
      </div>

      <h1 className="text-center text-2xl font-bold">Total: {total}</h1>
    </div>
  );
};

export default Counter;
