import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { TopPageComponent } from "./components";
import { RandomImageService } from "./services";
import { TopRoutingModule } from "./top-routing.module";

@NgModule({
  imports: [TopRoutingModule, CommonModule],
  declarations: [TopPageComponent],
  providers: [RandomImageService]
})
export class TopModule {}
