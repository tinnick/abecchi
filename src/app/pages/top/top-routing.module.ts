import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { TopPageComponent } from "./components";

const routes: Routes = [{
  path: "",
  component: TopPageComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TopRoutingModule {}
