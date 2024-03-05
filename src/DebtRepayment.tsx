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
  addDebt(event) {
    var table = document.querySelectorAll("tableID")
    var div_val = document.getElementById("insertTest")
    var input = document.createElement('input')
    var newline = document.createElement('br')
    input.type = "text"
    div_val.appendChild(newline)
    div_val.appendChild(input)
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
