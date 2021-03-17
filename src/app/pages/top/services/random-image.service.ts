import { Injectable } from "@angular/core";

const randomImageApiUrls = {
  baseUrl: "https://picsum.photos",
  byWidthAndHeight: (width: number, height: number) =>
    `${baseUrl}/${width}/${height}`,
  bySize: (size: number) => `${baseUrl}/${size}`
};

@Injectable()
export class RandomImageService {
  public loadedImages: Image[];
  public mainImage: Image;
  public readonly defaultImageWidth = 400;
  public readonly defaultImageHeight = 300;

  constructor() {
    this.mainImage = this.loadImage(
      this.defaultImageWidth,
      this.defaultImageHeight
    );
  }

  public loadImages(
    amount: number,
    width: number = this.defaultImageWidth,
    height: number = this.defaultImageHeight
  ): Image[] {
    return new Array(amount).map(() => this.loadImage(width, height));
  }

  public loadImage(width: number, height: number): Image {
    const image = new Image(width, height);
    image.src =
      width === height
        ? randomImageApiUrls.bySize(width)
        : randomImageApiUrls.byWidthAndHeight(width, height);
    this.loadedImages.push(image);
    return image;
  }
}
