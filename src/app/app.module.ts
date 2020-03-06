import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from '../app/test/test.component';
import { OrgTreeModule } from '../app/org-tree/org-tree.module';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OrgTreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
