import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";

import { NewsResponse } from "../model/news";
import "rxjs/add/operator/map";

@Injectable()
export class NewsService {
  public constructor(private http: Http) {}

  public getSectionNews(sectionName: string): Observable<NewsResponse> {
    const appUrl: string = `https://api.nytimes.com/svc/topstories/v2/${sectionName}.json?api-key=315a5a51483b469a918246dc2753b339`;
    return this.http.get(appUrl).map((res) => {
      return res.json();
    });
  }
}
