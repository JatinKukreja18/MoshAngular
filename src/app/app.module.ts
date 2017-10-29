import { ErrorHandler } from '@angular/core';
import { AppErrorHandler } from './common/app-error-handler';
import { PostService } from './posts/post.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { TitleCasePipe } from './title-case.pipe';
import { HttpModule } from '@angular/http';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component'
@NgModule({
  declarations: [
    AppComponent,
    FavouriteComponent,
    TitleCasePipe,
    PostComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [PostService, 
    {provide: ErrorHandler , useClass : AppErrorHandler}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
