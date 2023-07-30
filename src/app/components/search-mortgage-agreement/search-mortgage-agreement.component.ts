import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-search-mortgage-agreement',
  templateUrl: './search-mortgage-agreement.component.html',
  styleUrls: ['./search-mortgage-agreement.component.css']
})
export class SearchMortgageAgreementComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../assets/js/main.js";
    this.elementRef.nativeElement.appendChild(s);
  }

  onOpenCalendar(container: any) {
    container.monthSelectHandler = (event: any): void => {
      container._store.dispatch(container._actions.select(event.date));
    };
    container.setViewMode('month');
  }

}
