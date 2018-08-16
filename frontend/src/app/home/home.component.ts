import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { NewsService, NewsItem } from '../core';

@Component({
  selector: 'app-home',
  template: `
    <div class="input-container">
      <input type="text" placeholder="Search News" #search (keyup)="onKeyUp(search.value)">

    </div>

    <app-feed *ngIf="!loading" [news]="news"></app-feed>

    <app-loader *ngIf="loading"></app-loader>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loading = false;
  news: NewsItem[] = [];
  constructor(private hn: NewsService) {}

  ngOnInit() {
    this.loading = true;

    this.hn.getNews().subscribe(data => {
      this.loading = false;
      this.news = data;
    });
  }

  Filterer(value:string, element:NewsItem) { 
    
   return element.title.toLowerCase().indexOf(value.toLowerCase()) >= 0||
          element.url.toLowerCase().indexOf(value.toLowerCase()) >= 0||
          element.user.toLowerCase().indexOf(value.toLowerCase()) >= 0;
  } 
  
  onKeyUp(value: string) {
    console.log(value);
    
    this.hn.getNews().subscribe(data => {
      this.loading = false;
      this.news = data.filter(this.Filterer.bind(this, value));
    });
  }
  
}
