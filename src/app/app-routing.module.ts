import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AboutPageComponent } from "./pages";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./pages/top/top.module").then(mod => mod.TopModule)
  },
  {
    path: "about",
    component: AboutPageComponent
  },
  {
    path: "**",
    redirectTo: ""
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
