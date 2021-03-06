import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NotebookComponent } from './notebook/notebook.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListNotebookComponent } from './list-notebook/list-notebook.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { NotebookService } from './notebook.service';
import { MessageService } from './message.service';
import { MessageComponent } from './message/message.component';
import { FormsModule } from '@angular/forms';
import { ListNotesComponent } from './list-notes/list-notes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalContentComponent } from './app.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ListTodoComponent } from './list-todo/list-todo.component';

import { environment } from './environment';
// import { AngularFireModule } from '@angular/fire';
// import { AngularFireDatabaseModule } from 'angularfire2/database';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
    NgbModule,
    // AngularFireModule.initializeApp(environment.firebase),
  ],
  declarations: [
    AppComponent,
    NotebookComponent,
    NavbarComponent,
    ListNotebookComponent,
    MessageComponent,
    ListNotesComponent,
    ModalContentComponent,
    ListTodoComponent,
  ],
  entryComponents: [ModalContentComponent],
  bootstrap: [AppComponent],
  providers: [InMemoryDataService, NotebookService, MessageService],
})
export class AppModule {}
