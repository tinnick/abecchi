import { NgModule } from "@angular/core";

import { TopPageComponent } from "./components";
import { RandomImageService } from "./services";
import { TopRoutingModule } from "./top-routing.module";

@NgModule({
  imports: [TopRoutingModule],
  declarations: [TopPageComponent],
  providers: [RandomImageService]
})
export class TopModule {}
