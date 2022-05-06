import Big from "big.js";

import operate from "./operate";
import isNumber from "./isNumber";

/**
 * Given a button name and a calculator data object, return an updated
 * calculator data object.
 *
 * Calculator data object contains:
 *   total:String      the running total
 *   next:String       the next number to be operated on with the total
 *   operation:String  +, -, etc.
 */
export default function calculate(total, next, operation, buttonName) {
  if (buttonName === "AC") {
    return {
      total: "0",
      next: "",
      operation: "",
    };
  }

  if (isNumber(buttonName)) {
    if (buttonName === "0" && next === "0") {
      return { total, next, operation };
    }
    // If there is an operation, update next
    if (operation) {
      if (next) {
        return { total, operation, next: next + buttonName };
      }
      return { total, operation, next: buttonName };
    }
    // If there is no operation, update next and clear the value
    if (next) {
      return {
        operation,
        next: next === "0" ? buttonName : next + buttonName,
        total: "0",
      };
    }
    return {
      operation,
      next: buttonName,
      total: "0",
    };
  }

  if (buttonName === "%") {
    if (operation && next) {
      const result = operate(total, next, operation);
      return {
        total: Big(result)
          .div(Big("100"))
          .toString(),
        next: "",
        operation: "",
      };
    }
    if (next) {
      return {
        total,
        operation,
        next: Big(next)
          .div(Big("100"))
          .toString(),
      };
    }
    return { total, next, operation };
  }

  if (buttonName === ".") {
    if (next) {
      // ignore a . if the next number already has one
      if (next.includes(".")) {
        return { total, next, operation };
      }
      return { total, operation, next: next + "." };
    }
    return { total, operation, next: "0." };
  }

  if (buttonName === "=") {
    if (next && operation) {
      return {
        total: operate(total, next, operation),
        next: "",
        operation: "",
      };
    } else {
      // '=' with no operation, nothing to do
      return { total, next, operation };
    }
  }

  if (buttonName === "+/-") {
    if (next) {
      return { total, operation, next: (-1 * parseFloat(next)).toString() };
    }
    if (total) {
      return {
        operation,
        next,
        total: (-1 * parseFloat(total)).toString(),
      };
    }
    return { total, next, operation };
  }

  // Button must be an operation

  // When the user presses an operation button without having entered
  // a number first, do nothing.
  // if (!obj.next && !obj.total) {
  //   return {};
  // }

  // User pressed an operation button and there is an existing operation
  if (operation) {
    return {
      total: operate(total, next, operation),
      next: "",
      operation: buttonName,
    };
  }

  // no operation yet, but the user typed one

  // The user hasn't typed a number yet, just save the operation
  if (!next) {
    return { total, next, operation: buttonName };
  }

  // save the operation and shift 'next' into 'total'
  return {
    total: next,
    next: "",
    operation: buttonName,
  };
}
