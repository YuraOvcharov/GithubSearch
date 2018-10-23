import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SearchComponent} from './search/search.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UsersServices } from './users.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommitsComponent } from './commits/commits.component';

const appRoutes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'commits', component: CommitsComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SearchComponent,
    CommitsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [UsersServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
