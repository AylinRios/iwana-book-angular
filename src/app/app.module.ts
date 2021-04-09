import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { BookComponent } from './book/book.component';
import { AuthorComponent } from './author/author.component';
import { BookAuthorComponent } from './book-author/book-author.component';
import { CategoryComponent } from './category/category.component';
import { RankingComponent } from './ranking/ranking.component';

@NgModule({
  declarations: [  //agregar lo relacionado con componentes
    AppComponent,
    StudentComponent,
    BookComponent,
    AuthorComponent,
    BookAuthorComponent,
    CategoryComponent,
    RankingComponent,
  ],
  imports: [ //relacionado con moduloas
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
