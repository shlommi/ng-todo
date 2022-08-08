import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ITodo } from '../models/todo.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private _todos: ITodo[] = [];

  private _todosSubject: BehaviorSubject<Array<ITodo>> = new BehaviorSubject(
    this._todos
  );

  private _singleTodoSubject: BehaviorSubject<ITodo> = new BehaviorSubject(
    this._todos[0]!
  );

  constructor() {}

  getTodos(): Observable<Array<ITodo>> {
    return this._todosSubject.asObservable();
  }

  getSelectedTodo(): Observable<ITodo> {
    return this._singleTodoSubject.asObservable();
  }

  setSelectedTodo(todo: ITodo) {
    this._singleTodoSubject.next(todo);
  }

  addNewTodo(newTodo: ITodo): void {
    // take  existing todos
    // add new todo to the existing todo list
    //trigger next  tic in observable

    const existingTodoList: ITodo[] = this._todosSubject.value;
    existingTodoList.push(newTodo);
    this._todosSubject.next(existingTodoList);
  }
}
