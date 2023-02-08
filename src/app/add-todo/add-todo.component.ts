import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TodoListService } from '../todoList.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit{

  todoForm: any;

  constructor(private todoService: TodoListService) {}

  ngOnInit() {
    this.todoForm = new FormGroup({
      'todo': new FormControl(null, [Validators.required])
    });
  }

  onSubmit(){
    const newTodo = this.todoForm.controls['todo'].value;
    if(newTodo!==null){
      this.todoService.addTodo(newTodo);
      this.todoForm.reset();
    }
  }

}
