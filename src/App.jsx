import React, { useState } from 'react';
import ExpensesTable from '/home/jesse/Development/code/Phase-2/code-challenges/expense-tracker/src/components/ExpenseTable.jsx';
import ExpenseForm from '/home/jesse/Development/code/Phase-2/code-challenges/expense-tracker/src/components/ExpenseForm.jsx';
import SearchBar from '/home/jesse/Development/code/Phase-2/code-challenges/expense-tracker/src/components/SearchBar.jsx';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  const filteredExpenses = expenses.filter(
    (expense) =>
      expense.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      expense.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Expense Tracker</h1>
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <ExpenseForm onAddExpense={handleAddExpense} />
      <ExpensesTable expenses={filteredExpenses} />
    </div>
  );
}

export default App;
