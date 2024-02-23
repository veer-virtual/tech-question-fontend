import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-balancestring',
  templateUrl: './balancestring.component.html',
  styleUrls: ['./balancestring.component.css'],
})
export class BalancestringComponent implements OnInit {
  constructor() {}

  isError = '';
  inputValue: any = '';
  balanceString: any = [];
  initialMessate: string = '';

  handleChangeValue(event: any) {
    this.isError = '';
    this.inputValue = event.target.value;
  }

  getBalancedSubstring() {
    if (this.inputValue == '') {
      this.isError = 'Please inter string.';
      return;
    }
    
    for (let i = this.inputValue.length; i > 2; i--) {
      let differce = this.inputValue.length - i;
      if (differce) {
        for (let j = 0; j <= differce; j++) {
          let subString = this.inputValue.substring(j, i + j);
          let uniqueString = this.getUniqueString(subString);
          if (
            uniqueString.length == 2 &&
            subString.split(uniqueString[0]).length - 1 ==
              subString.split(uniqueString[1]).length - 1
          ) {
            this.balanceString.push(subString);
          }
        }
        if (this.balanceString.length) {
          return this.balanceString;
        }
      } else {
        let uniqueString = this.getUniqueString(this.inputValue);
        if (
          uniqueString.length == 2 &&
          this.inputValue.split(uniqueString[0]).length - 1 ==
            this.inputValue.split(uniqueString[1]).length - 1
        ) {
          this.balanceString.push(this.inputValue);
          return this.balanceString;
        }
      }
    }

    this.initialMessate = 'true';
    return this.balanceString;
  }

  getUniqueString(str: string) {
    let unique: string = '';

    for (let i = 0; i < str.length; i++) {
      if (unique.includes(str[i]) === false) {
        unique += str[i];
      }
    }
    return unique;
  }

  ngOnInit(): void {
  }
}
