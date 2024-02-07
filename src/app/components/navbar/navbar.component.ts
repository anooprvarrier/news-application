import { News } from "./../../model/news";
import { FILTER_SUBSECTION } from "./../../store/reducers/news.reducer";
import { NewsActions } from "../../store/actions/news.actions";

import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  public subsections: string[] = [];
  public response: Object[];

  public constructor(
    private store: Store<any>,
    private newsActions: NewsActions
  ) {}

  public ngOnInit(): void {
    this.getSubSections();
  }

  private getSubSections(): void {
    this.store.subscribe((response) => {
      this.subsections = [];
      response.news.newsList.forEach((item: News) => {
        const subSection: string = item.subsection;
        if (subSection.length && this.subsections.indexOf(subSection) === -1) {
          this.subsections.push(subSection);
        }
      });
    });
  }

  public dispatchAction(filter: string) {
    this.store.dispatch({ type: FILTER_SUBSECTION, payload: filter });
  }
}
