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
