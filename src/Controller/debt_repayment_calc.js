
// use this to handle avalanche calculation stuff
export function avalancheCalculation(curr_state) {
    // Validate input before proceeding with calculations
    if (!validateInput(curr_state)) return;

    const { debts, moneyAvailable } = curr_state;
  
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
    
  }
  
  
  // use this to handle snowball calculation stuff
  export function snowballCalculation(curr_state) {
   // Validate input before proceeding with calculations
   if (!validateInput()) return;
  
   const { debts, moneyAvailable } = curr_state;
  
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
    return sortedDebts;
  }


  // Return a boolean / print errors if necessary
function validateInput(curr_state) {
    const { moneyAvailable, debts } = curr_state;
  
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