import React, { Component } from "react";

/* 
  An interface describes the shape of an object and the properties that
  an object should have. A budget should have a month, year, totalIncome
  totalExpenses and income attributes based on this interface.  
 */
interface BudgetingState {
  month: string;
  year: number;
  totalIncome: number;
  totalExpenses: number;
  totalSavings: number;
  expenses: number,
  income: number;
  needs: string;
}


class Budgeting extends Component<{}, BudgetingState> {
  constructor(props) {
    super(props);
    this.state = {
      // set defaults
      month: '', 
      year: 0, 
      totalIncome: 0.0, 
      totalExpenses: 0.0, 
      totalSavings: 0.0,
      income: 0.0,
      expenses: 0.0,
      needs: ""
    };

    // creates a new function that calls the function with its this keyword
    this.handleMonthChange = this.handleMonthChange.bind(this);
    this.handleYearChange = this.handleYearChange.bind(this);
    this.handleNeedsChange = this.handleNeedsChange.bind(this)
    this.handleExpensesChange = this.handleExpensesChange.bind(this)
    this.handleIncomeChange = this.handleIncomeChange.bind(this)
    this.saveBudget = this.saveBudget.bind(this);
    
  }

  /* The onChange value of the select month section is set to this function so when
   there is a change in the month it calls this function and updates the value of the 
   month for the object */
  handleMonthChange(event) {
    this.setState({ month: event.target.value});
  }

  // same as handle month but for year
  handleYearChange(event) {
    this.setState({ year: parseInt(event.target.value) });
  }
  
  // user selects the type needs
  handleNeedsChange(event) {
    this.setState({needs: event.target.value})
  }
  // handle expenses
  handleExpensesChange = (event) => {
    const expenses = parseFloat(event.target.value);
    // Recalculate total savings
    const totalSavings = this.state.totalIncome - expenses; 
    this.setState({ expenses, totalSavings });
}
// handle income
handleIncomeChange = (event) => {
  const income = parseFloat(event.target.value);
   // Recalculate total savings
  const totalSavings = income - this.state.totalExpenses;
  this.setState({ income, totalSavings });
}
  /*
  link for information on async functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
  used to update the information on the page when the save budget button is clicked
  not sure why they used async function
  */

   // Helpful link for why we have to cast to HTMLInputElement
   // https://stackoverflow.com/questions/12989741/the-property-value-does-not-exist-on-value-of-type-htmlelement
saveBudget=(event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const { month, year, income, needs, expenses } = this.state;
    // user has to input all the fields in the form before saving
    if (!month || !year || income === null || !needs || !expenses) {
      alert("Please fill in all fields.");
      return;
    }
    
    const newRow = document.createElement('tr');

    const monthCell = document.createElement('td');
    monthCell.textContent = month;

    const yearCell = document.createElement('td');
    yearCell.textContent = String(year);

    const needsCell = document.createElement('td');
    needsCell.textContent = needs;

    const expensesCell = document.createElement('td');
    expensesCell.textContent = String(expenses);
    // delete rows using the delete button
    const deleteCell = document.createElement('td');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    // delete button function
    deleteButton.onclick = () => {
      newRow.remove();
    
    const tableBody = document.getElementById('budgetTableId').getElementsByTagName('tbody')[0];
    const rows = tableBody.getElementsByTagName('tr');
    // hold total expenses from the expense column
    var totalExpenses = 0;
    // calculates total expenses from the expense column
    for (let i = 0; i < rows.length; i++) {
      // expenses are in the 4th column
        const expenseCell = rows[i].getElementsByTagName('td')[3]; 
        if (expenseCell) {
            totalExpenses += parseFloat(expenseCell.textContent || '0');
        }
    }

    const totalSavings = this.state.income - totalExpenses;
    this.setState({ totalExpenses, totalSavings });
    };
    deleteCell.appendChild(deleteButton);

    newRow.appendChild(monthCell);
    newRow.appendChild(yearCell);
    newRow.appendChild(needsCell);
    newRow.appendChild(expensesCell);
    newRow.appendChild(deleteCell);

    const tableBody = document.getElementById('budgetTableId').getElementsByTagName('tbody')[0];
    tableBody.appendChild(newRow);

    // recalculate total expenses and total savings based on current values
    const totalExpenses = this.state.totalExpenses + expenses;
    const totalSavings = income - totalExpenses;
    // update component's state
    this.setState({
      // resets month,year needs and expenses
      month: '',
      year: 0,
      needs: "",
      expenses: 0,
      // update expenses and savings with new calculations
      totalExpenses,
      totalSavings
    });
}



  render() {
    return (
      <div>
        <h2>Create a Budget</h2>
        <br />
        <form>
          <div>
            <div>
                <label id="monthLabel" htmlFor="month">Month:</label>
                <select
                  id="month"
                  name="month"
                  onChange={this.handleMonthChange}
                  value={this.state.month}
                >
                  {/* Options for months */}
                  <option value={0}>--Select Month--</option>
                  <option value={'January'}>January</option>
                  <option value={'February'}>February</option>
                  <option value={'March'}>March</option>
                  <option value={'April'}>April</option>
                  <option value={'May'}>May</option>
                  <option value={'June'}>June</option>
                  <option value={'July'}>July</option>
                  <option value={'August'}>August</option>
                  <option value={'September'}>September</option>
                  <option value={'October'}>October</option>
                  <option value={'November'}>November</option>
                  <option value={'December'}>December</option>
                </select>
              
            </div>
            <div>
              <label id="yearLabel" htmlFor="year">
                Year:
              </label>
              <select
                id="year"
                name="year"
                onChange={this.handleYearChange}
                value={this.state.year}
              >
                {/* Options for years */}
                <option value={0}>--Select Year--</option>
                <option value={2023}>2023</option>
                <option value={2024}>2024</option>
                <option value={2025}>2025</option>
                <option value={2026}>2026</option>
                <option value={2027}>2027</option>
                <option value={2028}>2028</option>
                <option value={2029}>2029</option>
                <option value={2030}>2030</option>
                <option value={2031}>2031</option>
              </select>
            </div>
            <div>
              <label id="needsLabel" htmlFor="needs">
                Needs:
              </label>
              <select
                id="needs"
                name="needs"
                onChange={this.handleNeedsChange}
                value={this.state.needs}
              >
                {/* Needs options: follwed guide from Nerd wallet */}
                <option value={0}>--Select Your Needs--</option>
                <option value={'Groceries'}>Groceries</option>
                <option value={'Housing'}>Housing</option>
                <option value={'Utilities'}>Utilities</option>
                <option value={'Transportation'}>Transportation</option>
                <option value={'Insurance'}>Insurance</option>
                <option value={'Debt'}>Debt</option>
                <option value={'Child Care'}>Child care</option>
                <option value={'Other Expenses'}>Other expenses you need so you can work</option>
              </select>
            </div>
            <div>
              <label id="expensesLabel" htmlFor="expenses">
                {" "}
                Expenses:{" "}
              </label>
              <input type="number" id="expenses" name="Expenses" 
                value={this.state.expenses} onChange={this.handleExpensesChange} />
            </div>
            <br />
            <div>
              <button name="btnSave" id="btnSave" onClick={this.saveBudget}>
                Save Budget
              </button>
            </div>
          </div>
        </form>
        <br/>
        <div>
        <label id="incomeLabel" htmlFor="income">
            {" "}
            Income:{" "}
          </label>
        <input
          type="number" id="income" name="Income" value={this.state.income} onChange={this.handleIncomeChange}
          placeholder="Enter income"
        />
        </div>
        <hr/>
        
        {/* table to append needs after clicking the save button */}
        <table id="budgetTableId" className="budgetTable">
            <thead>
              <tr>
                <th>Month</th>
                <th>Year</th>
                <th>Needs</th> 
                <th>Expenses</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
             {/* inputs added dynamically to the table */}
            </tbody>
          </table>
          <hr/>
        <section>
          <div>
            <strong>Total Expenses:</strong> ${this.state.totalExpenses.toFixed(2)}
          </div>
          <div>
            <strong>Total Savings:</strong> ${this.state.totalSavings.toFixed(2)}
          </div>
        </section>
        
      </div>
    );
  }
}
export default Budgeting;
