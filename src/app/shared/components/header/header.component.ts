import { Component } from "@angular/core";

import { appAuthor } from '../../../constants';

@Component({
  selector: "abecchi-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent {
  public readonly author = appAuthor;
}
