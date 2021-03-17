import { Component, OnInit, TemplateRef } from "@angular/core";
import { RandomImageService } from "../../services/random-image.service";

@Component({
  selector: "top-page",
  templateUrl: "./top-page.component.html",
  styleUrls: ["./top-page.component.css"]
})
export class TopPageComponent implements OnInit {
  @ViewChild("imagesContainer", { static: true })
  private imageContainer: TemplateRef<HTMLDivElement>;

  constructor(private readonly randomImageService: RandomImageService) {}

  public ngOnInit(): void {
    const images = this.randomImageService.loadedImages(6);

    images.forEach(imageEl =>
      this.imageContainer.nativeElement.appendChild(imageEl)
    );
  }
}
