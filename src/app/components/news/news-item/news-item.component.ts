import { Component, OnInit, Input } from "@angular/core";

import { News } from "../../../model/news";

@Component({
  selector: "app-news-item",
  templateUrl: "./news-item.component.html",
  styleUrls: ["./news-item.component.css"],
})
export class NewsItemComponent implements OnInit {
  @Input() public newsItem: News;
  @Input() public id: number;
  public url: string;
  public constructor() {}

  public ngOnInit(): void {}
}
