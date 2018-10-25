import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatPaginatorModule} from '@angular/material/paginator';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SearchComponent} from './search/search.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UsersServices } from './users.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommitsComponent } from './commits/commits.component';
import { ModalWindowComponent } from './modal-window/modal-window.component';

const appRoutes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'commits', component: CommitsComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SearchComponent,
    CommitsComponent,
    ModalWindowComponent,
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
    MatDialogModule,
    MatButtonModule,
    MatPaginatorModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  entryComponents: [
    ModalWindowComponent,
  ],
  providers: [UsersServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
