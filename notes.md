### Statements

- Each instruction inside a program is called a statement. A program will be made up of a series of these statements.

<hr>

### Execution Flow

- When a program is executed, the statements in it are “read” sequentially. It’s the combination of these individual results that produce the final result of the program.

<hr>

### Expressions

- An expression is a piece of code that produces a value.
- Every expression has a value and thus a type.
- Calculating an expression’s value is called **evaluation**. During evaluation, variables are replaced by their values.
- It is possible to include expressions in a string by using backticks (`) (_string template literals_) expressions are identified by the **\${expression}** syntax.

<hr>

### Operators

- You can also increase the value (by 1) of a number with += and ++ (increment operator).

<hr>

### Variables

- A variable is an information storage area.
- It has three properties, it's name, it's value and it's type.
- Declaring a variable means the computer reserves memory in which to store the variable.
- Naming variables is an important for code readability.
- Assign a value to a varible with the = (assignment operator) operator.
- **_const_** - is a variable declaration that you can’t reassign within the context of the block. That doesn’t mean it’s immutable. For example, array values can be changed.
- **_let_** - is similar to var because it can be reassigned, but unlike var, which is lexically scoped, let is block scoped.

<hr>

### Scope

- The scope of a variable is the part of the program where the variable is visible and usable. Variables declared with **let** or **const** are block-scoped: their visibility is limited to the block where they are declared (and every sub-block, if any).

```JAVASCRIPT
  let num1 = 0;
  {
    num1 = 1; // OK : num1 is declared in the parent block
    const num2 = 0;
  }
  console.log(num1); // OK : num1 is declared in the current block
  console.log(num2); // Error! num2 is not visible here
```

<hr>

### Type Conversions

- **_Implicit_** conversions happen automatically.

```javascript
const f = 100;
// Show "Variable f contains the value 100"
console.log("Variable f contains the value " + f);
```

- **_Explicit_** conversions happen when you want to convert the value of another type.

```javascript
const h = "5";
console.log(h + 1); // Concatenation: show the string "51"
const i = Number("5");
console.log(i + 1); // Numerical addition: show the number 6
```

<hr>

### Doing basic math

```javascript
const rawPrice = 20;
// tax rate = 7.85%
// divide the tax rate percentage by 100 to get a decimal (0.0785)
const taxRate = 7.85 / 100;
// First add 1 to the tax rate (1.0785)
// If you don't do that - you will just get the result of how much tax is added
// We want the total
// So you have to add 1 to the taxRate (1.0785)
// This will give us the result of the taxRate + the rawPrice
const finalPrice = rawPrice * (1 + taxRate);
// Without adding the one - the result is 1.57
// With the 1 - the final price is 21.57
console.log(finalPrice);
```

```javascript
// convert celsius to farhenheit
const celsius = 40;
// The conversion between scales is given by the formula: [°F] = ([°C] x 9/5) + 32.
const farhenheit = (celsius * 9) / 5 + 32;

console.log(farhenheit); // answer 104
```

<hr>

### Conditionals

- The **_if_** statement represents a test.
- A **_condition_** is an expression that evaluates as a value either true or false: it’s called a **_boolean_** value.
- If the condition is true, then execute the instructions contained in the code block.

```javascript
if (true) {
  // The condition for this if is always true
  // This block of code will always be executed
}
if (false) {
  // The condition for this if is always false
  // This block of code will never be executed
}
```

- You’ll often want to have your code execute one way when something’s true and another way when something’s false.

```javascript
if (condition) {
  // Code to run when the condition is true
} else {
  // Code to run when the condition is false
}
```

- The execution flow for the previous program can be expressed graphically using a **flow diagram**.
  [flow diagram](./images/flow-diagram.PNG)

- The **&&** operator (“logical and”) can apply to both types of boolean values. true will only be the result of the statement if both conditions are true.
- The **||** operator (“logical or”) makes statements true if at least one of the statements is true.
- There’s another operator for when you know what you don’t want: the not operator! You’ll use a **!** for this.

#### Operator Meaning

- === Equal
- !== Not Equal to
- < Less than
- <= Less than or equal to
- \> Greater than
- \>= Greater than or equal to
- && Logical and
- || Logical Or
- ! Logical not

### Looping

```javascript
// While loop
let i = 1;
while (i <= 10) {
  console.log(`Turn number: ${i}`);
  i++;
}

// For loop
for (let i = 1; i <= 10; i++) {
  console.log(`Turn Number ${i}`);
}
```
