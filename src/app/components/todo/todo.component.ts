import { Component, Input, OnInit } from '@angular/core';
import { ITodo } from 'src/app/models/todo.interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  @Input() todo: ITodo | undefined;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  onCompleteTodo(todo: ITodo): void {
    todo.isCompleted = true;
  }

  onArchivedTodo(): void {
    if (this.todo) {
      this.todo.isArchived = true;
    }
  }
}
