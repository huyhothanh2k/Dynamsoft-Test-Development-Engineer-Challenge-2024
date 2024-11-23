class Calculator {
    constructor() {
      this.currentExpression = '';
      this.history = [];
    }
  
    addChar(char) {
      this.currentExpression += char;
    }
  
    calculate() {
      try {
        // Replace '×' and '÷' with '*' and '/' for evaluation
        const expression = this.currentExpression
          .replace(/×/g, '*')
          .replace(/÷/g, '/');
        const result = eval(expression); // Evaluate the mathematical expression
        this.addToHistory(this.currentExpression, result);
        this.currentExpression = result.toString(); // Update the current expression with the result
        return result;
      } catch {
        throw new Error('Invalid Expression');
      }
    }
  
    addToHistory(expression, result) {
      this.history.push({ expression, result });
    }
  }
  
  module.exports = { Calculator };
  