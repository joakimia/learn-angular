import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { InfoContainerComponent } from './info-container/info-container.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    LeftPanelComponent,
    InfoContainerComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
