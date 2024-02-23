import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.css'],
})
export class FibonacciComponent implements OnInit {
  constructor() {}

  isError = '';
  inputValue: any = '';
  fibonacciPositionValue: number = 0;

  handleChangeValue(event: any) {
    this.isError = '';
    this.inputValue = event.target.value;
  }

  generateFibonacci() {
    if (this.inputValue == '') {
      this.isError = 'Please inter value.';
      return;
    } else if (isNaN(this.inputValue)) {
      this.isError = 'Please integer value.';
      return;
    }
    this.fibonacciPositionValue = this.fibonacci(this.inputValue);
  }

  fibonacci(startFrom: number, holder: any = []): number {
    if (startFrom <= 1) {
      return startFrom;
    }
    if (!holder[startFrom]) {
      holder[startFrom] = this.fibonacci(startFrom - 1, holder) + this.fibonacci(startFrom - 2, holder);
    }

    return holder[startFrom];
  }

  ngOnInit(): void {}
}
