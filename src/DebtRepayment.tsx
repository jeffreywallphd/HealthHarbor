import React, { Component } from "react";

interface DebtRepaymentState {
  moneyAvailable: number;
  // Helpful link for arrays in typescript
  // https://timmousk.com/blog/typescript-array-of-objects/
  debts: Array<{type:string, 
                amount:number, 
                interestRate:number, 
                minPayment:number}>;
  tempAdd: string;
  tempRemove: string;
  tempChange: string; 
}

class DebtRepayment extends Component<{}, DebtRepaymentState> {
  constructor(props) {
    super(props);

    this.state = {
      moneyAvailable: 0, // Default month (e.g., October)
      debts: new Array<{type:"",amount:0,interestRate:0,minPayment:0}>,
      tempAdd: "",
      tempRemove: "",
      tempChange:""
    };

    this.changeMoneyAvailable = this.changeMoneyAvailable.bind(this);
    this.addDebt = this.addDebt.bind(this);
    this.removeDebt = this.removeDebt.bind(this);
    this.changeDebt = this.changeDebt.bind(this);
  }

  changeMoneyAvailable(event){
    const money_str = (document.getElementById("available") as HTMLInputElement).value
    this.setState({moneyAvailable: parseInt(money_str)})
  }

  addDebt(event) {
    
  }

  removeDebt(event) {
    // this.setState({ year: parseInt(event.target.value) });
  }

  changeDebt(event){

  }

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
          <div>
            Available Money: {this.state.moneyAvailable}

          </div>
        </section>
      </div>
    );
  }
}

export default DebtRepayment;
