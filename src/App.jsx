import React, { useState } from 'react';
import ExpensesTable from '/home/jesse/Development/code/Phase-2/code-challenges/expense-tracker/src/components/ExpenseTable.jsx';
import ExpenseForm from '/home/jesse/Development/code/Phase-2/code-challenges/expense-tracker/src/components/ExpenseForm.jsx';
import SearchBar from '/home/jesse/Development/code/Phase-2/code-challenges/expense-tracker/src/components/SearchBar.jsx';
import '/home/jesse/Development/code/Phase-2/code-challenges/expense-tracker/src/App.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  const handleDeleteExpense = (indexToDelete) => {
    setExpenses(expenses.filter((_, index) => index !== indexToDelete));
  };

  const filteredExpenses = expenses.filter(
    (expense) =>
      expense.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      expense.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      <header>
        <h1>Expense Tracker</h1>
        <p>Start taking control of your finances and life. Record, categorize, and analyze your spending.</p>
      </header>
      <main>
        <div className="form-and-search">
          <ExpenseForm onAddExpense={handleAddExpense} />
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        </div>
        <ExpensesTable expenses={filteredExpenses} onDeleteExpense={handleDeleteExpense} />
      </main>
    </div>
  );
}

export default App;
