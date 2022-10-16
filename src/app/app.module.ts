import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LeftcontComponent } from './leftcont/leftcont.component';
import { MiddlecontComponent } from './middlecont/middlecont.component';
import { RightcontComponent } from './rightcont/rightcont.component';
import { DemopipeComponent } from './demopipe/demopipe.component';
import { CustompipePipe } from './custompipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LeftcontComponent,
    MiddlecontComponent,
    RightcontComponent,
    DemopipeComponent,
    CustompipePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
