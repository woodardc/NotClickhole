import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { NewsItem } from './news-item.interface';
import { NewsService, API } from './news.service';

describe('NewsService', () => {
  let service: NewsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [NewsService]
    });

    service = TestBed.get(NewsService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should fetch a news list', () => {
    const sampleNews: Partial<NewsItem>[] = [
      { id: 0, time: 100000 },
      { id: 1, time: 100000 },
      { id: 2, time: 100000 },
      { id: 3, time: 100000 },
      { id: 4, time: 100000 },
      { id: 5, time: 100000 }
    ];

    service.getNews().subscribe(news => {
      expect(news.length).toBe(6);

      expect(news as Partial<NewsItem>[]).toEqual(sampleNews);
    });

    const req = httpMock.expectOne(API);

    expect(req.request.method).toBe('GET');

    req.flush(sampleNews);
  });
});
