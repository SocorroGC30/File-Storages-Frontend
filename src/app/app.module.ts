import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { DownloadPDFComponent } from './Pages/download-pdf/download-pdf.component';
//import { PdfViewerModule } from 'ng2-pdf-viewer';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SecondPageComponent,
    DownloadPDFComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxDocViewerModule


    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
