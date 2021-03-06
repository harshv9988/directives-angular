import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BasicHighlightDirective } from "./basic-highlight/basic-highlight.directive";

import { AppComponent } from "./app.component";
import { BetterHighlightDirective } from "./basic-highlight/better-highlight.directive";

@NgModule({
  declarations: [
    AppComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
