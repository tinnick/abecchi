import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { map, take, switchMap } from 'rxjs/operators';


export interface IRandomImageListItem {
  id: number;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}

export type IRandomImageListResponse = IRandomImageListItem[];

const randomImageApiBaseUrl = "https://picsum.photos";
const randomImageApiBaseUrlv2 = "https://picsum.photos/v2";

export const randomImageApiUrls = {
  byWidthAndHeight: (width: number, height: number) => `${randomImageApiBaseUrl}/${width}/${height}`,
  bySize: (size: number) => `${randomImageApiBaseUrl}/${size}`,
  byList: (limit: number) => `${randomImageApiBaseUrlv2}/list?page=${Math.round(Math.random() * 100) + 1}&limit=${limit}`,
  byIdWidthandHeight: (id: number, width: number, height: number) => `${randomImageApiBaseUrl}/id/${id}/${width}/${height}`
};

@Injectable()
export class RandomImageService {
  public loadedImages: HTMLImageElement[] = [];
  public mainImage: HTMLImageElement;
  public readonly defaultImageWidth = 400;
  public readonly defaultImageHeight = 300;

  constructor(private httpClient: HttpClient) {
    this.loadImage(
      this.defaultImageWidth,
      this.defaultImageHeight
    ).subscribe(image => this.mainImage = image);
  }

  public loadImages(
    amount: number, width: number = this.defaultImageWidth, height: number = this.defaultImageHeight
  ): Observable<HTMLImageElement[]> {
    return this.getImageList(amount, width, height).pipe(map(urls => {
      return urls.map(url => {
        const image = new Image(width, height);

        image.src = url;

        return image;
      })
    }));
  }

  public loadImage(width: number, height: number): Observable<HTMLImageElement> {
    const image = new Image(width, height);
    image.src =
      width === height
        ? randomImageApiUrls.bySize(width)
        : randomImageApiUrls.byWidthAndHeight(width, height);
    this.loadedImages.push(image);
    return of(image);
  }

  public getImageList(amount: number, width: number = this.defaultImageWidth, height: number = this.defaultImageHeight): Observable<string[]> {
    return this.httpClient.get(randomImageApiUrls.byList(amount)).pipe(take(1), map((items: IRandomImageListResponse) => {
      return items.map(({ id }) => randomImageApiUrls.byIdWidthandHeight(id, width, height));
    }));
  }
}
