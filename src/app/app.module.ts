import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';

import { AppComponent } from './app.component';
import { CardComponent } from './components/atoms/card/card.component';
import { NavLinkComponent } from './components/atoms/nav-link/nav-link.component';
import { NavCardComponent } from './components/organisms/nav-card/nav-card.component';
import { UserInfoComponent } from './components/atoms/user-info/user-info.component';
import { LineComponent } from './components/atoms/line/line.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    NavLinkComponent,
    NavCardComponent,
    UserInfoComponent,
    LineComponent,
  ],
  imports: [BrowserModule, MatIconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
