import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';
import { NewsItem } from './news-item.interface';

export const API = 'http://port-8086.lvsf-fullstack-assignment-woodardc310774.codeanyapp.com/api/news/';
export const queryUrl = '?search=';

@Injectable()
export class NewsService {
  constructor(private http: HttpClient) {}

  getNews(): Observable<NewsItem[]> {
    return this.http.get<NewsItem[]>(API);
  }

}
