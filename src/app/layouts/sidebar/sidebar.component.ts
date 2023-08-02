import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  isChildActive() {
    return this.router.url.split('/').some(segment => segment.startsWith('create-mortgage-agreement') || segment.startsWith('redemption') || segment.startsWith('search-mortgage-agreement'));
  }

}
