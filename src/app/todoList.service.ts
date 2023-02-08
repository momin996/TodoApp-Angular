import { Injectable } from "@angular/core";
import { Todo } from "./todo.model";

@Injectable({providedIn: 'root'})
export class TodoListService {
    
    todoList: Todo[] = [];
    //[{task:'Enter your Todos here...', isCompleted: false, creationDate: new Date()}];

    addTodo(task: string) {
        this.todoList.push({task, isCompleted: false, creationDate: new Date()});
    }

    deleteTodo(task: Todo) {
        var index = this.todoList.indexOf(task);
        if (index !== -1) {
            this.todoList.splice(index, 1);
        }
    }



}