import { NgModule } from "@angular/core";

import { HeaderComponent, FooterComponent } from "./components";

const COMPONENTS: any[] = [HeaderComponent, FooterComponent];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS]
})
export class SharedModule {}
