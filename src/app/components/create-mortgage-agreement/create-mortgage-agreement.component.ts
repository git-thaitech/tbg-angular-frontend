import { Component, OnInit } from '@angular/core';
import { NumberToWordsPipe } from 'src/app/pipes/number-to-words.pipe';

@Component({
  selector: 'app-create-mortgage-agreement',
  templateUrl: './create-mortgage-agreement.component.html',
  styleUrls: ['./create-mortgage-agreement.component.css']
})
export class CreateMortgageAgreementComponent implements OnInit {
  
  number!: number;
  convertedMoneyString!: string;
  convertedGoldWeightUnit!: string;
  showExtendedCustomerInfo = false;
  customerName!: string;

  constructor(private numberToWordsPipe: NumberToWordsPipe) { }

  ngOnInit(): void {
  }

  convertToWords(event: any): void {
    const value = event.target.value;
    const number = parseFloat(value.replace(/[^0-9]/g, ''));
    this.convertedMoneyString = this.numberToWordsPipe.transform(number);
    console.log(this.convertedMoneyString);
  }


}
