import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { RandomImageService } from "../../services/random-image.service";

@Component({
  selector: "top-page",
  templateUrl: "./top-page.component.html",
  styleUrls: ["./top-page.component.css"]
})
export class TopPageComponent implements OnInit {
  @ViewChild("imageContainer", { static: true })
  private imageContainer: ElementRef<HTMLDivElement>;

  public images: HTMLImageElement[];
  public imageUrls: string[];
  public readonly imagesCount = 10;

  constructor(private readonly randomImageService: RandomImageService) {}

  public ngOnInit(): void {
    /*
    this.randomImageService.loadImages(this.imagesCount).subscribe(images => {
      this.images = images;

      this.images.forEach(imageEl => { this.imageContainer.nativeElement.innerHTML += imageEl.outerHTML; });
    });
    */

    this.randomImageService.getImageList(this.imagesCount).subscribe(urls => {
      this.imageUrls = urls;
    });
  }
}
