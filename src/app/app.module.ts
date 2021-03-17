import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";

import { AppRoutingModule } from "./app-routing.module";
import { SharedModule } from "./shared";
import { AboutPageComponent } from "./pages";

const COMPONENTS: any[] = [AppCompoent, AboutPageComponent];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [...COMPONENTS],
  bootstrap: [AppComponent]
})
export class AppModule {}
