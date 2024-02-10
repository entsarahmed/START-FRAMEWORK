import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  status1: string = 'Your Status 1';
  showLabel1: boolean = false;

  status2: string = 'Your Status 2';
  showLabel2: boolean = false;

  status3: string = 'Your Status 3';
  showLabel3: boolean = false;

  status4: string = 'Your Status 4';
  showLabel4: boolean = false;

  onInputChange(event: any, inputNumber: number) {
    const inputValue = event.target.value;
    if (inputNumber === 1) {
      this.status1 = inputValue;
      this.showLabel1 = inputValue.trim() !== '';
    } else if (inputNumber === 2) {
      this.status2 = inputValue;
      this.showLabel2 = inputValue.trim() !== '';
    } else if (inputNumber === 3) {
      this.status3 = inputValue;
      this.showLabel3 = inputValue.trim() !== '';
    } else if (inputNumber === 4) {
      this.status4 = inputValue;
      this.showLabel4 = inputValue.trim() !== '';
    }
  }
}
