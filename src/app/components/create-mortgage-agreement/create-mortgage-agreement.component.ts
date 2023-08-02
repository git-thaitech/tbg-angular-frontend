import { Component, OnInit, ViewChild } from '@angular/core';
import { NumberToWordsPipe } from 'src/app/pipes/number-to-words.pipe';
import { NumberToGoldWeightUnitPipe } from 'src/app/pipes/number-to-gold-weight-unit.pipe';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-create-mortgage-agreement',
  templateUrl: './create-mortgage-agreement.component.html',
  styleUrls: ['./create-mortgage-agreement.component.css']
})
export class CreateMortgageAgreementComponent implements OnInit {

  number!: number;
  convertedMoneyString!: string;
  convertedMoneyNumber!: string;
  convertedGoldWeightUnitString!: string;
  showExtendedCustomerInfo = false;
  customerName!: string;


  constructor(private numberToWordsPipe: NumberToWordsPipe, private numberToGoldWeightUnitPipe: NumberToGoldWeightUnitPipe) { }

  ngOnInit(): void {
  }

  convertToWords(event: any): void {
    const value = event.target.value;
    this.convertedMoneyNumber = event.target.value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');;
    const number = parseFloat(value.replace(/[^0-9]/g, ''));
    const result = this.numberToWordsPipe.transform(number);
    console.log(result + result.length);
    this.convertedMoneyString = (result.length > 6) ? result : "";
  }

  convertToWeightUnit(event: any): void {
    const value = event.target.value;
    this.convertedGoldWeightUnitString = this.numberToGoldWeightUnitPipe.transform(value);
  }

  itemName = '';
  goldType = '';
  itemRealWeight = '';
  itemRows: { itemNameRow: string, goldTypeRow: string, itemRealWeightRow: any }[] = [];
  emptyItemInputError = '';

  onSubmitItemForm(form: NgForm) {
    const { 'item-name': itemName, 'gold-type': goldType, 'item-real-weight': itemRealWeight } = form.value;
    let row = {
      itemNameRow: itemName,
      goldTypeRow: goldType,
      itemRealWeightRow: itemRealWeight
    };
    this.itemRows.push(row);
    this.convertedGoldWeightUnitString = '';
    form.resetForm();
    console.log(form);
  }

  addItemToRows() {
    this.emptyItemInputError = '';
    if (this.itemName === '' || this.goldType === '' || this.itemRealWeight === '') {
      this.emptyItemInputError = "Không được bỏ trống các trường thông tin!";
      return;
    } else {
      const row = {
        itemNameRow: this.itemName,
        goldTypeRow: this.goldType,
        itemRealWeightRow: this.itemRealWeight
      };

      this.itemRows.push(row);

      this.convertedGoldWeightUnitString = '';
      this.itemName = '';
      this.goldType = '';
      this.itemRealWeight = '';
    }
  }

  removeRow(row: any) {
    const index = this.itemRows.indexOf(row);
    if (index > -1) {
      this.itemRows.splice(index, 1);
    }
  }

  reload() {
    window.location.reload();
  }

  interestRate!: any;

}
