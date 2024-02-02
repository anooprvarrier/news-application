import { News } from "./../../model/news";
import { NewsState } from "./../../store/reducers/news.reducer";
import { NewsActions } from "../../store/actions/news.actions";

import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  public subsections: string[];
  public response: Object[];
  public constructor(
    private store: Store<any>,
    private newsActions: NewsActions
  ) {}

  public ngOnInit(): void {
    
  }

  public dispatchAction($event: string): void {}
}
