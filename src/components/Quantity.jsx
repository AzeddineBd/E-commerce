const Quantity = () => {
  return (
    <div>
      <div>
        <h1>Quantity</h1>
        <div className="flex justify-between p-1 w-20 border border-[var(--primary-color)]">
          <button className="px-2 cursor-pointer">-</button>
          <span className="px-2">1</span>
          <button className="px-2 cursor-pointer">+</button>
        </div>
      </div>
    </div>
  );
};

export default Quantity;
