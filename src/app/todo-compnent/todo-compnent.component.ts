import { Component, Input } from '@angular/core';
import { Todo } from '../todo.model';
import { TodoListService } from '../todoList.service';

@Component({
  selector: 'app-todo-compnent',
  templateUrl: './todo-compnent.component.html',
  styleUrls: ['./todo-compnent.component.css']
})
export class TodoCompnentComponent {

  @Input() todo: any;
  isDeleted: boolean = false;

  constructor(private todoService: TodoListService) {}

  onDeleteTodo(task: Todo) {
    this.isDeleted = true;
    setTimeout(() => {
      this.todoService.deleteTodo(task);
    }, 800);
  }

}