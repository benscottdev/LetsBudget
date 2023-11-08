import { useState, useEffect } from "react";
import ExpensesItem from "./ExpensesItem";
import ExpensesTotal from "./ExpensesTotal";
import { v4 as uuidv4 } from "uuid";

function ExpensesContainer() {
  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState([]);
  const [expenseCostArray, setExpenseCostArray] = useState([]);
  const [expensesTotal, setExpensesTotal] = useState(0);

  useEffect(() => {
    // Calculate the total expenses
    const total = expenseCostArray.reduce((total, cost) => total + cost, 0);
    setExpensesTotal(total);
  }, [expenseCostArray]);

  const createExpense = (e) => {
    e.preventDefault();
    const newExpense = { id: uuidv4(), cost: 0 };
    setExpenses([...expenses, newExpense]);
    setExpenseCostArray([...expenseCostArray, 0]); // Initialize the cost to 0 in the array
  };

  const handleIncomeChange = (e) => {
    setIncome(e.target.value);
  };

  const handleExpenseCost = (e, index) => {
    const updatedExpenseCostArray = [...expenseCostArray];
    updatedExpenseCostArray[index] = parseFloat(e.target.value); // Update the cost in the array
    setExpenseCostArray(updatedExpenseCostArray);
  };

  return (
    <div>
      <div className="expenses-container">
        <h1>Let's Budget!</h1>

        <form onSubmit={createExpense} onChange={handleIncomeChange}>
          <div className="weekly-income">
            <input
              type="number"
              name="income"
              id="income"
              placeholder="Weekly Income"
            />
          </div>
          <div className="num-of-expenses">
            <button id="create-expenses">Add Expense</button>
          </div>
        </form>
        <div className="expenses-input">
          {expenses.map((expense, index) => {
            return (
              <ExpensesItem
                key={expense.id}
                onChange={(e) => handleExpenseCost(e, index)}
              />
            );
          })}
        </div>
      </div>
      <ExpensesTotal incomeTotal={income} expensesTotal={expensesTotal} />
    </div>
  );
}

export default ExpensesContainer;
