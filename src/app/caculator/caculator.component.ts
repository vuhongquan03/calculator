import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caculator',
  templateUrl: './caculator.component.html',
  styleUrls: ['./caculator.component.scss']
})
export class CaculatorComponent implements OnInit {
  // Khai bao cac bien
  subText = '';
  mainText = '';
  operand1: number;
  operand2: number;
  operator = '';
  calculationString = '';


  answered = false;

  operatorSet = false;
  // xu ly nhan phim 
  pressKey(key: string) {
    // kiem tra xem input co phai toan tu hay khong
    if (key === '/' || key === 'x' || key === '-' || key === '+') {
       const lastKey = this.mainText[this.mainText.length - 1];
       // kiem tra xem key dau tien la toan tu hay khong , neu phai dat no lam toan tu, bien dau vao truoc no la toan hang 1.
       if (lastKey === '/' || lastKey === 'x' || lastKey === '-' || lastKey === '+')  {
            // () kiem tra toan tu nay duoc nhap hay chua
        this.operatorSet = true;
       }
       //
       if ((this.operatorSet) || (this.mainText === '')) {
         return;
       }
       this.operand1 = parseFloat(this.mainText);
       this.operator = key;
       this.operatorSet = true;
    }
    if (this.mainText.length === 10) {
      return;
    }
    this.mainText += key;
 }
 getAnswer() {
   // dat mainText thanh calulatorString
  this.calculationString = this.mainText;
  this.operand2 = parseFloat(this.mainText.split(this.operator)[1]);
  if (this.operator === '/') {
    this.subText = this.mainText;
    this.mainText = (this.operand1 / this.operand2).toString();
    this.subText = this.calculationString;
    if (this.mainText.length > 9) {
      this.mainText = this.mainText.substr(0, 9);
    }
  } else if (this.operator === 'x') {
    this.subText = this.mainText;
    this.mainText = (this.operand1 * this.operand2).toString();
    this.subText = this.calculationString;
    if (this.mainText.length > 9) {
      this.mainText = 'ERROR';
      this.subText = 'Range Exceeded';
    }
  } else if (this.operator === '-') {
    this.subText = this.mainText;
    this.mainText = (this.operand1 - this.operand2).toString();
    this.subText = this.calculationString;
  } else if (this.operator === '+') {
    this.subText = this.mainText;
    this.mainText = (this.operand1 + this.operand2).toString();
    this.subText = this.calculationString;
    if (this.mainText.length > 9) {
      this.mainText = 'ERROR';
      this.subText = 'Range Exceeded';
    }
  } else {
    this.subText = 'ERROR: Invalid Operation';
  }
  this.answered = true;
}
allClear() {
  this.operator = '';
}
  constructor() { }

  ngOnInit() {
  }

}
