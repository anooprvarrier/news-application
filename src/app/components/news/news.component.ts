import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import "../../../../node_modules/zone.js/dist/zone.js";

import { NewsService } from "../../services/news.service";
import { News, NewsResponse } from "../../model/news";
import { NewsActions } from "../../store/actions/news.actions";

@Component({
  selector: "app-news",
  templateUrl: "./news.component.html",
  styleUrls: ["./news.component.css"],
  providers: [],
})
export class NewsComponent implements OnInit {
  public sectionNewsList: any[] = [];

  public constructor(
    private route: ActivatedRoute,
    private store: Store<any>,
    private newsService: NewsService
  ) {}

  public ngOnInit(): void {
    // send this sectionName to newsService. Subscribe newsService and get the newsList
    // now, get news from store
    let sectionName: string;

    this.route.params.subscribe((params) => {
      sectionName = params.id;
      this.newsService
        .getSectionNews(sectionName)
        .subscribe((res: NewsResponse) => {
          const newsList: News[] = res.results;
          this.store.dispatch({
            type: NewsActions.LOAD_SECTION_NEWS,
            payload: newsList,
          });
        });
    });

    this.store.subscribe((data) => {
      if (data) {
        const filter = data.news.filter;
        if (!filter.length) {
          this.sectionNewsList = data.news.newsList;
        } else {
          this.sectionNewsList = data.news.newsList.filter(
            (x: News) => x.subsection == filter
          );
        }
      } else {
        this.sectionNewsList = [];
      }
    });
  }
}
