import { Component } from "@angular/core";

import { appAuthor } from "@constants";

@Component({
  selector: "abecchi-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"]
})
export class FooterComponent {
  public readonly aboutLink = "/about";
  public readonly topLink = "/";
  public readonly author = appAuthor;
}
