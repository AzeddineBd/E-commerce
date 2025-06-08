const Subscription = () => {
  return (
    <div>
      <div className="flex items-center gap-4 p-4">
        <input type="radio" name="purchaseType" defaultChecked />
        <label>One time purchase</label>
      </div>
      <div className="border border-[var(--border-color)] rounded-lg p-4">
        <div className="flex items-center gap-4 mb-2">
          <input type="radio" name="purchaseType" />
          <label>Subscribe and delivery every</label>
          <select className="border border-[var(--border-color)]">
            <option value="4">4 weeks</option>
            <option value="8">8 weeks</option>
            <option value="12">12 weeks</option>
          </select>
        </div>
        <p>
          Subscribe now and get the 10% of discount on every recurring order.
          The discount will be applied at checkout. See details
        </p>
      </div>
    </div>
  );
};

export default Subscription;
