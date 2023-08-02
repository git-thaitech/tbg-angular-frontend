import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {

  numberValue!: string;
  wordValue!: string;
  isExchangeItem = false;

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../assets/js/main.js";
    this.elementRef.nativeElement.appendChild(s);
  }

  oldItemRows: { 
    oldItemType: string, 
    oldItemExPrice: string, 
    oldItemBuyPrice: string,
    isExchangeItem: boolean,
    itemTotalWeight: number,
    itemGemWeight: number,
    itemRealWeight: any }[] = [];

  changeOldItemFunction() {
    console.log("how are you");
    this.isExchangeItem = !this.isExchangeItem;
    console.log(this.isExchangeItem);
  }

}
