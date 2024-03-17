import React, { Component } from "react";


interface DebtRepaymentState {
  moneyAvailable: number;

  // Helpful link for arrays in typescript
  // https://timmousk.com/blog/typescript-array-of-objects/
  debts: Array<{
    id:number
    type:string, 
    amount:number, 
    interestRate:number, 
    minPayment:number}>;

  nextId: number;
  repaymentMethod: string;
}

class DebtRepayment extends Component<{}, DebtRepaymentState> {
  constructor(props) {
    super(props);

    // set initial state of object
    this.state = {
      moneyAvailable: 0, // Default month (e.g., October)
      debts: new Array<{id:-1, type:"",amount:0,interestRate:0,minPayment:0}>,
      nextId:1,
      repaymentMethod:"Avalanche"
    };

    // initialize functions
    this.changeMoneyAvailable = this.changeMoneyAvailable.bind(this);
    this.addDebt = this.addDebt.bind(this);
    this.removeDebt = this.removeDebt.bind(this);
    this.avalancheCalculation = this.avalancheCalculation.bind(this);
    this.snowballCalculation = this.snowballCalculation.bind(this);
    this.submit = this.submit.bind(this);
  }

  // changes how much money is available when the enter button is clicked
  changeMoneyAvailable(event){
    const money_str = (document.getElementById("available") as HTMLInputElement).value;
    this.setState({moneyAvailable: parseInt(money_str)});
  }

  // function in progress - goal is to add a row to the table
  // source:https://stackoverflow.com/questions/1728284/create-clone-of-table-row-and-append-to-table-in-javascript
  addDebt(event) {
    // retrieve the table element
    var table = document.getElementById("tableID") as HTMLTableElement;
    // select the table row from the table body which will be cloned
    // only works of the table already exists
    var tempRow = table.querySelector("tbody tr") as HTMLTableRowElement;
    // clones the previous row tempRow
    var newRow = tempRow.cloneNode(true) as HTMLTableRowElement; 
    // Reset input values in the cloned row so you can type in new values in the new row
    newRow.querySelectorAll('input').forEach(input => input.value = '');
    // get the button in the new row
    var newButton = newRow.querySelector("button");
    // set the id of the new row based on the current ids being tracked
    newRow.id = "row"+this.state.nextId.toString();
    // get the new button and set the id so it is identifiable
    newButton.id = this.state.nextId.toString();
    // when the remove button is clicked we want to remove the correct row so we associate the 
    // removeDebt function with the id of the row
    newButton.onclick = () => this.removeDebt(newButton.id);
    // append the cloned row to the table body
    table.querySelector("tbody").appendChild(newRow);
    // since we added a new row with a new id we want to increment the value of nextId
    this.setState({nextId: this.state.nextId+1});
  }
  

  removeDebt(id) {
    // retrieve the table element
    var table = document.getElementById("tableID") as HTMLTableElement;
    var numRows = table.rows.length;
    // we never want to have less than 1 and header
    if (numRows > 2){
      // set index to -1 as an indicator of no row to remove / something wrong
      var rowIndexToRemove = -1;
      // iterate through the rows in the table in order checking the ids
      for(var i=0; i < table.rows.length;i++){
        // if we find a row with the id we want to use that value as the index 
        // of the row to remove
        if (table.rows[i].id == "row"+id){
          rowIndexToRemove = i;
          break; // once found we can break
        }
      }
      // should hopefully never hit this block but alert if something breaks
      // and the rows aren't indexing correctly
      if(rowIndexToRemove == -1){
        alert("Oh No! Something Went Wrong!");
      }
      // if we found the row index we can sucessfully delete the row
      else{
        table.deleteRow(rowIndexToRemove);
      }
    }
  }
  
 // use this to handle avalanche calculation stuff
avalancheCalculation() {
  // Validate input before proceeding with calculations
  if (!this.validateInput()) return;

  const { debts, moneyAvailable } = this.state;

  // Sort debts by interest rate in descending order
  const sortedDebts = debts.slice().sort((a, b) => b.interestRate - a.interestRate);

  let remainingMoney = moneyAvailable;

  // Calculate Minimum Payments for each debt
  const minimumPayments = sortedDebts.map(debt => Math.min(debt.minPayment, debt.amount * debt.interestRate / 100));

  // Pay Minimum Payments
  minimumPayments.forEach((minPayment, index) => {
    const debt = sortedDebts[index];
    debt.amount -= minPayment;
    remainingMoney -= minPayment;
  });

  // Pay Remaining Money to Debts with Highest Interest Rate
  sortedDebts.forEach(debt => {
    if (remainingMoney <= 0) return;
    const interestPayment = Math.min(remainingMoney, debt.amount * debt.interestRate / 100);
    debt.amount -= interestPayment;
    remainingMoney -= interestPayment;
  });

  // Update state with modified debts
  this.setState({ debts: sortedDebts });
}


// use this to handle snowball calculation stuff
snowballCalculation() {
 // Validate input before proceeding with calculations
 if (!this.validateInput()) return;

 const { debts, moneyAvailable } = this.state;

 // Sort debts by amount in ascending order
 const sortedDebts = debts.slice().sort((a, b) => a.amount - b.amount);

 let remainingMoney = moneyAvailable;

 // Calculate Minimum Payments for each debt
 const minimumPayments = sortedDebts.map(debt => Math.min(debt.minPayment, debt.amount));

 // Pay Minimum Payments
 minimumPayments.forEach((minPayment, index) => {
   const debt = sortedDebts[index];
   debt.amount -= minPayment;
   remainingMoney -= minPayment;
 });

 // Pay Remaining Money to Smallest Debts
 sortedDebts.forEach(debt => {
   if (remainingMoney <= 0) return;
   const payment = Math.min(remainingMoney, debt.amount);
   debt.amount -= payment;
   remainingMoney -= payment;
 });

 // Update state with modified debts
 this.setState({ debts: sortedDebts });
}


// TODO: modify this function to actually validate the inputs
// Return a boolean / print errors if necessary
validateInput() {
  const { moneyAvailable, debts } = this.state;

  // Check if money available is a positive number
  if (isNaN(moneyAvailable) || moneyAvailable <= 0) {
    alert("Please enter a valid positive number for available money.");
    return false;
  }

  // Check if any debt amount or minimum payment is not a positive number
  for (const debt of debts) {
    if (isNaN(debt.amount) || debt.amount <= 0 || isNaN(debt.minPayment) || debt.minPayment <= 0) {
      alert("Please enter valid positive numbers for debt amounts and minimum payments.");
      return false;
    }
  }

  return true;
}


  submit(event) {
    // on submit get the table
    var table = document.getElementById("tableID") as HTMLTableElement;
    // use only the current debts - reset on submit and then fill based on the rows in the table
    var currDebts = [];
    // iterate through the rows ignoring the header row
    for(var i=1; i < table.rows.length;i++){
      // get the data for each row from the table
      var rowCells = table.rows[i].cells;
      var rowId = rowCells[0].children[0].id;
      var rowDebtName = (rowCells[1].children[0] as HTMLInputElement).value;
      var rowDebtAmount = (rowCells[2].children[0] as HTMLInputElement).value;
      var rowInterestRate = (rowCells[3].children[0] as HTMLInputElement).value;
      var rowMinPayment = (rowCells[4].children[0] as HTMLInputElement).value;
      // add the data for each row to the array of debts
      currDebts.push({id:parseInt(rowId),
                      type:rowDebtName, 
                      amount:parseInt(rowDebtAmount), 
                      interestRate:parseInt(rowInterestRate), 
                      minPayment:parseInt(rowMinPayment)})
    }
    // check if the user inputs are valid and if so proceed to calcuations
    var inputValid = this.validateInput()
    if(inputValid){
      // set the users debts to the current array of debts
      this.setState({debts:currDebts});
      if (this.state.repaymentMethod == "Avalanche"){
        this.avalancheCalculation()
      } 
      else{
        this.snowballCalculation()
      }
    }
    else{
      
    }
  }
  render() {
    return (
      <div>
        <h2>Calculate Debt Repayment Strategy</h2>
        <br />
        <section>
          <div>
          </div>
          <div>
            <label id="AvailableMoney" htmlFor="available">
              {" "}
              Available Money:{" "}
            </label>
            <input type="text" id="available" name="Money Availble"/>
          </div>
          <br />
          
          <table id="tableID">
            <thead>
              <tr>
                <th>Remove</th>
                <th>Debt Name</th>
                <th>Amount</th> 
                <th>Interest Rate</th>
                <th>Minimum Payment</th>
              </tr>
            </thead>
            <tbody>
              <tr id="row0">
                <td><button name="remove" id="0" onClick={() => this.removeDebt(0)}>x</button></td>
                <td><input type="text" id="debtName" name="debtName"/></td>
                <td><input type="number" id="amount" name="amount"/></td>
                <td><input type="number" id="interestRate" name="interestRate"/></td>
                <td><input type="number" id="minPayment" name="minPayment"/></td>
              </tr>
            </tbody>
          </table>

          <div>
            <br></br>
            <button name="add" id="add" onClick={this.addDebt}>
              Add Another Debt
            </button>
            <br></br>
            <br></br>
            <input type="radio" id="Avalanche" checked={this.state.repaymentMethod == 'Avalanche'}  onChange={() => this.setState({repaymentMethod: "Avalanche"})}/>
            <label htmlFor="Avalanche"> Avalanche </label>
            <input type="radio" value="Snowball" checked={this.state.repaymentMethod == 'Snowball'} onChange={() => this.setState({repaymentMethod: "Snowball"})}/>
            <label htmlFor="Snowball"> Snowball </label>
            <br></br>           
            <br></br>
            <button name="enter" id="enter" onClick={this.submit}>
              Enter
            </button>
          </div>
        </section>
        <br />
      </div>
    );
  }
}
export default DebtRepayment;
