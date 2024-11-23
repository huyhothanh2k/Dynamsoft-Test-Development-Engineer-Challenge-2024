const { Calculator } = require('../calculator-class.js');

describe('Calculator Tests', () => {
  test('Addition: 1 + 2 = 3', () => {
    const calculator = new Calculator();
    calculator.addChar('1');
    calculator.addChar('+');
    calculator.addChar('2');
    const result = calculator.calculate(); // Get the result directly
    expect(result).toBe(3); // Assert that the result is 3
  });

  test('Complex Calculation: (2 + 3) * 4 = 20', () => {
    const calculator = new Calculator();
    calculator.addChar('(');
    calculator.addChar('2');
    calculator.addChar('+');
    calculator.addChar('3');
    calculator.addChar(')');
    calculator.addChar('*');
    calculator.addChar('4');
    const result = calculator.calculate(); // Get the result directly
    expect(result).toBe(20); // Assert that the result is 20
  });

  test('Division by Zero: 5 / 0', () => {
    const calculator = new Calculator();
    calculator.addChar('5');
    calculator.addChar('÷');
    calculator.addChar('0');
    expect(() => calculator.calculate()).toThrow('Invalid Expression'); // Expect the method to throw
  });

  test('Invalid Input: 5 + * 3', () => {
    const calculator = new Calculator();
    calculator.addChar('5');
    calculator.addChar('+');
    calculator.addChar('*');
    calculator.addChar('3');
    expect(() => calculator.calculate()).toThrow('Invalid Expression'); // Expect the method to throw
  });

  test('History: Add and Verify History Items', () => {
    const calculator = new Calculator();
    calculator.addChar('2');
    calculator.addChar('+');
    calculator.addChar('2');
    calculator.calculate(); // Result: 4
    expect(calculator.history[0]).toEqual({ expression: '2+2', result: 4 }); // Assert the correct history entry
  });

  test('History Item Click: Reuse Previous Expression', () => {
    const calculator = new Calculator();
    calculator.addChar('3');
    calculator.addChar('*');
    calculator.addChar('3');
    calculator.calculate(); // Result: 9
    const firstHistoryItem = calculator.history[0];
    calculator.currentExpression = firstHistoryItem.expression; // Simulate history reuse
    expect(calculator.currentExpression).toBe('3*3'); // Assert that the expression is reused correctly
  });
});
