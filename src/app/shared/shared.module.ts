import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { HeaderComponent, FooterComponent } from "./components";

const COMPONENTS: any[] = [HeaderComponent, FooterComponent];

@NgModule({
  imports: [RouterModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS]
})
export class SharedModule {}
