function ExpensesItem(props) {
  return (
    <div className="expenses-item">
      <h1>- </h1>
      <input
        type="text"
        name="expense-type"
        id="expense-type"
        placeholder="Expense Name"
      />
      <input
        type="number"
        name="expense-price"
        id="expense-price"
        placeholder="Weekly Price"
        onChange={props.onChange}
      />
    </div>
  );
}

export default ExpensesItem;
