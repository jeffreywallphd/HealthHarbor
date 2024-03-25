**How To Add New Card to Your Team's Section of the Website**

**Step 1:**

Make a new .tsx file in HealthHarbor/src

If the tsx file is completely blank it will error when you try and go to
the card. It seems like at a minimum the tsx file should have the import
statement, define a class with the same name as the file, and export the
class.

Import:

import React, { Component } from \"react\";

Class:

class DebtRepayment{}

Export:

export default DebtRepayment;

Example: DebtRepayment.tsx

**Step 2:**

Add an import statement near the top of
HealthHarbor/src/App.jsx - there are many other import statements
and it should be pretty clear where to put it

Example:

import DebtRepayment from \"./DebtRepayment\"

**Step 3:**

Add a "Route" to \<Routes\> near the bottom of
HealthHarbor/src/App.jsx - the element name should match your
previous import and you will want to remember your path name for the
next step.

Example:

\<Route path=\"/debt-repayment\" element={\<DebtRepayment /\>}

**Step 4:**

Go to the tsx file for your feature. For Debt Repayment I use the
Finance.tsx file and in it there are the cards that are visible when you
click on the Finance card on the website. Add a \<NavLink\> with the
same path as your \<Route\>.

Example:

\<NavLink to=\"/debt-repayment\"\>

\<div className=\"card\"\>

\<div className=\"cardHeader\"\>

\<h3\>Debt Repayment Calculator\</h3\>

\</div\>

\<div className=\"cardContainer\"\>

\<p\>Determine strategies for paying off debts\</p\>

\</div\>

\</div\>

\</NavLink\>

The only things you should need to change will be to=
"\_\_\_\_\_\_\_\_\_\_\_" where you put your path from route in it, h3
where you put the name you want on the card, and p where you put your
own description of the feature.
