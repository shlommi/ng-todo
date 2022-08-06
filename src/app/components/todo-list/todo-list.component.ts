import { Component, Input, OnInit } from '@angular/core';
import { ITodo } from 'src/app/models/todo.interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  @Input() todos: Array<ITodo> = [];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  onTodoClick(todo: ITodo, index: number): void {
    this.todoService.setSelectedTodo(todo);
    this.todos.forEach((todo) => (todo.selected = false));
    this.todos[index].selected = true;
  }
}
