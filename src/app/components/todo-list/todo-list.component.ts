import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITodo } from 'src/app/models/todo.interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit, OnDestroy {
  todos: Array<ITodo> = [];

  private _subscription: Subscription = new Subscription();

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this._subscription.add(
      this.todoService.getTodos().subscribe((data) => (this.todos = data))
    );
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  onTodoClick(todo: ITodo, index: number): void {
    this.todoService.setSelectedTodo(todo);
    this.todos.forEach((todo) => (todo.selected = false));
    this.todos[index].selected = true;
  }
}
