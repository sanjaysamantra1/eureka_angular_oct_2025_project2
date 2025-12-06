import { Component, signal } from '@angular/core';
import { MaterialDemo } from './components/material-demo/material-demo';
import { UserList } from './components/user-list/user-list';
import { Counter } from './components/counter/counter';
import { TodoCrud } from './components/todo-crud/todo-crud';
import { EmployeeCrud } from './components/employee-crud/employee-crud';

@Component({
  selector: 'app-root',
  imports: [
    // MaterialDemo,
    // UserList
    // Counter
    // TodoCrud
    EmployeeCrud
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('eureka_angular_oct_2025_project2');

  add(a: number, b: number) {
    return a + b;
  }

  // 1. Sum of Digits
  sumOfDigits(num: number) {
    return Math.abs(num)
      .toString()
      .split('')
      .reduce((sum, digit) => sum + Number(digit), 0);
  }

  // 2. Factorial
  factorial(n: number) {
    if (n < 0) return null;
    let result = 1;
    for (let i = 2; i <= n; i++) result *= i;
    return result;
  }


  // 3. Check Prime
  isPrime(n: number) {
    if (n <= 1) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(n); i += 2) {
      if (n % i === 0) return false;
    }
    return true;
  }

  // 4. GCD (Greatest Common Divisor)
  gcd(a: number, b: number) {
    while (b !== 0) {
      [a, b] = [b, a % b];
    }
    return Math.abs(a);
  }



  // 5. LCM (Least Common Multiple)
  lcm(a: number, b: number) {
    return Math.abs(a * b) / this.gcd(a, b);
  }



  // 6. Reverse a Number
  reverseNumber(num: number) {
    const sign = Math.sign(num);
    const reversed = parseInt(
      Math.abs(num).toString().split('').reverse().join('')
    );
    return sign * reversed;
  }


}
