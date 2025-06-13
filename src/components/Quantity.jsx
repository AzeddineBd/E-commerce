import { useState } from "react";

const Quantity = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div>
      <div>
        <h1>Quantity</h1>
        <div className="flex justify-between p-1 w-20 border border-[var(--primary-color)]">
          <button onClick={decrement} className="px-2 cursor-pointer">
            -
          </button>
          <span className="px-2">{count}</span>
          <button onClick={increment} className="px-2 cursor-pointer">
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quantity;
