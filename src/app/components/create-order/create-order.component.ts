import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {

  numberValue!: string;
  wordValue!: string;
  isOldItemExchange = false;

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../assets/js/main.js";
    this.elementRef.nativeElement.appendChild(s);
  }


  newItemRows: {
    code: string,
    name: string,
    goldType: string,
    totalWeight: any,
    gemWeight: any,
    realWeight: any
  }[] = [];

  oldItemGoldType = '';
  oldItemExchangePrice = '';
  oldItemBuyPrice = '';
  oldItemTotalWeight = '';
  oldItemGemWeight = '';

  oldItemRows: {
    goldType: string,
    exchangePrice: string,
    buyPrice: string,
    isExchange: boolean,
    totalWeight: any,
    gemWeight: any,
    realWeight: any
  }[] = [];

  changeOldItemFunction() {
    this.isOldItemExchange = !this.isOldItemExchange;
  }

  addOldItemToRows() {
    if (this.isOldItemExchange) {
      const row = {
        goldType: this.oldItemGoldType,
        exchangePrice: this.oldItemExchangePrice,
        buyPrice: '',
        isExchange: this.isOldItemExchange,
        totalWeight: this.oldItemTotalWeight,
        gemWeight: this.oldItemGemWeight,
        realWeight: (parseFloat(this.oldItemTotalWeight) - parseFloat(this.oldItemGemWeight))
      };
      this.oldItemRows.push(row);
    } else {
      const row = {
        goldType: this.oldItemGoldType,
        exchangePrice: '',
        buyPrice: this.oldItemBuyPrice,
        isExchange: this.isOldItemExchange,
        totalWeight: this.oldItemTotalWeight,
        gemWeight: this.oldItemGemWeight,
        realWeight: (parseFloat(this.oldItemTotalWeight) - parseFloat(this.oldItemGemWeight))
      };
      this.oldItemRows.push(row);
    }
  }

}
