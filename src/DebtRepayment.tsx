import React, { Component } from "react";


interface DebtRepaymentState {
  moneyAvailable: number;

  // Helpful link for arrays in typescript
  // https://timmousk.com/blog/typescript-array-of-objects/
  debts: Array<{type:string, 
                amount:number, 
                interestRate:number, 
                minPayment:number}>;

  // temporary variables for future debugging 
  tempAdd: string;
  tempRemove: string;
  tempChange: string; 
}
class DebtRepayment extends Component<{}, DebtRepaymentState> {
  constructor(props) {
    super(props);

    // set initial state of object
    this.state = {
      moneyAvailable: 0, // Default month (e.g., October)
      debts: new Array<{type:"",amount:0,interestRate:0,minPayment:0}>,
      tempAdd: "",
      tempRemove: "",
      tempChange:""
    };

    // initialize functions
    this.changeMoneyAvailable = this.changeMoneyAvailable.bind(this);
    this.addDebt = this.addDebt.bind(this);
    this.removeDebt = this.removeDebt.bind(this);
    this.changeDebt = this.changeDebt.bind(this);
  }

  // changes how much money is available when the enter button is clicked
  changeMoneyAvailable(event){
    const money_str = (document.getElementById("available") as HTMLInputElement).value
    this.setState({moneyAvailable: parseInt(money_str)})
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
    // Append the cloned row to the table body
    table.querySelector("tbody").appendChild(newRow);
  }

  //not currently implemented
  removeDebt(event) {
    // this.setState({ year: parseInt(event.target.value) });
    
  }

  //not currently implemented
  changeDebt(event){

  }

  //not currently implemented
  async submit() {


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
              <th>Remove</th>
              <th>Debt Name</th>
              <th>Amount</th> 
              <th>Interest Rate</th>
              <th>Minimum Payment</th>
            </thead>
            <tbody>
              <tr>
                <button name="remove" id="remove" onClick={this.removeDebt}>X</button>
                <td><input type="text" id="debtName" name="debtName"/></td>
                <td><input type="number" id="amount" name="amount"/></td>
                <td><input type="number" id="interestRate" name="interestRate"/></td>
                <td><input type="number" id="minPayment" name="minPayment"/></td>
              </tr>
            </tbody>
          </table>

          <div>
            <button name="add" id="add" onClick={this.addDebt}>
              Add Another Debt
            </button>
            <br></br>
            <button name="enter" id="enter" onClick={this.changeMoneyAvailable}>
              Enter
            </button>
          </div>
        </section>
        <br />
        <section>
          <div id="insertTest">
            Available Money: {this.state.moneyAvailable}
          </div>
        </section>
      </div>
    );
  }
}
export default DebtRepayment;
