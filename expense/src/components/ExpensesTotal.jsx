function ExpensesTotal(props) {
  return (
    <div className="expenses-total">
      <p>Weekly Income: ${props.incomeTotal}</p>
      <p>Weekly Expenses: ${props.expensesTotal}</p>
      <p id="cash-available">
        Cash Available: ${props.incomeTotal - props.expensesTotal}
      </p>
    </div>
  );
}
export default ExpensesTotal;
