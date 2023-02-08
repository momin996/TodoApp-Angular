import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { TodoCompnentComponent } from './todo-compnent/todo-compnent.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddTodoComponent,
    TodoCompnentComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
