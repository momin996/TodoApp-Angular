import { DOCUMENT } from '@angular/common';
import { Component, Inject, Renderer2 } from '@angular/core';
import { Todo } from './todo.model';
import { TodoListService } from './todoList.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';
  todos: Todo[] = [];

  constructor(@Inject(DOCUMENT) private document: Document, private renderer: Renderer2, todoService: TodoListService) {
    this.todos = todoService.todoList;
  }

  onThemeChange(theme: boolean) {
    console.log("Is day theme: " + theme);
    const dayTheme = 'lightmode';
    const darkTheme = 'darkmode';
    if(theme){
      this.addRemoveTheme(dayTheme, darkTheme);
    } else {
      this.addRemoveTheme(darkTheme, dayTheme);
    }
  }

  addRemoveTheme(addTheme: string, removeTheme: string) {
      this.renderer.addClass(this.document.body, addTheme);
      this.renderer.removeClass(this.document.body, removeTheme);
  }

}
