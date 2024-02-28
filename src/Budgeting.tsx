import React, { Component } from "react";

/* 
  An interface describes the shape of an object and the properties that
  an object should have. A budget should have a month, year, totalIncome
  totalExpenses and income attributes based on this interface.  
 */
interface BudgetingState {
  month: number;
  year: number;
  totalIncome: number;
  totalExpenses: number;
  income: number;
}


class Budgeting extends Component<{}, BudgetingState> {
  constructor(props) {
    super(props);

    this.state = {
      month: 0, // Default month (e.g., October)
      year: 0, // Default year
      totalIncome: 0.0, // Default total income
      totalExpenses: 0.0, // Default total expenses (calculate as needed)
      income: 0.0,
    };

    // creates a new function that calls the function with its this keyword
    this.handleMonthChange = this.handleMonthChange.bind(this);
    this.handleYearChange = this.handleYearChange.bind(this);
    this.saveBudget = this.saveBudget.bind(this);
  }

  /* The onChange value of the select month section is set to this function so when
   there is a change in the month it calls this function and updates the value of the 
   month for the object */
  handleMonthChange(event) {
    this.setState({ month: parseInt(event.target.value) });
  }

  // same as handle month but for year
  handleYearChange(event) {
    this.setState({ year: parseInt(event.target.value) });
  }

  /*
  link for information on async functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
  used to update the information on the page when the save budget button is clicked
  not sure why they used async function
  */

   // Helpful link for why we have to cast to HTMLInputElement
   // https://stackoverflow.com/questions/12989741/the-property-value-does-not-exist-on-value-of-type-htmlelement
  async saveBudget() {
      const income_string = (document.getElementById("income") as HTMLInputElement).value
      this.setState({totalIncome: parseInt(income_string)})
  }


  render() {
    return (
      <div>
        <h2>Create a Budget</h2>
        <br />
        <section>
          <div>
            <label id="monthLabel" htmlFor="month">
              Month:
            </label>
            <select
              id="month"
              name="month"
              onChange={this.handleMonthChange}
              value={this.state.month}
            >
              {/* Options for months */}
              <option value={0}>--Select Month--</option>
              <option value={1}>January</option>
              <option value={2}>February</option>
              <option value={3}>March</option>
              <option value={4}>April</option>
              <option value={5}>May</option>
              <option value={6}>June</option>
              <option value={7}>July</option>
              <option value={8}>August</option>
              <option value={9}>September</option>
              <option value={10}>October</option>
              <option value={11}>November</option>
              <option value={12}>December</option>
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
            <label id="incomeLabel" htmlFor="income">
              {" "}
              Income:{" "}
            </label>
            <input type="text" id="income" name="Income" />
          </div>
          <br />
          <div>
            <button name="btnSave" id="btnSave" onClick={this.saveBudget}>
              Save Budget
            </button>
          </div>
        </section>
        <br />
        <section>
          <div>
            <strong>Total Income:</strong> ${this.state.totalIncome.toFixed(2)}
          </div>
          <div>
            <strong>Total Expenses:</strong> $
            {this.state.totalExpenses.toFixed(2)}
          </div>
        </section>
        <br />

        <div>
          <p>
            The year you selected is: {this.state.year}
            <br></br>
            The month you selected is: {this.state.month}
            <br></br>
            Arbitrary math: income divided by 3 = {this.state.totalIncome / 3}
          </p>
        </div>
        
      </div>
    );
  }
}

export default Budgeting;
