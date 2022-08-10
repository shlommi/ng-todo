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
    this._todos?.[0]
  );

  constructor() {}

  getTodos(): Observable<Array<ITodo>> {
    if (!this._todosSubject.value.length) {
      const todosString = localStorage.getItem('todos');
      if (todosString) {
        const existingTodos: ITodo[] = JSON.parse(todosString);
        this._todosSubject.next(existingTodos);
        this._singleTodoSubject.next(existingTodos[0]);
        existingTodos[0].selected = true;
      }
      //TODO: this should return something
    }
    return this._todosSubject.asObservable();
  }

  getSelectedTodo(): Observable<ITodo> {
    return this._singleTodoSubject.asObservable();
  }

  setSelectedTodo(todo: ITodo) {
    this._singleTodoSubject.next(todo);
  }

  addNewTodo(newTodo: ITodo): void {
    // take  existing todos at that point with the help of .value
    const existingTodoList: ITodo[] = this._todosSubject.value;
    // add new todo to the existing todo list
    existingTodoList.push(newTodo);
    //trigger next  tic in observable
    this._todosSubject.next(existingTodoList);
    // set to local storage
    localStorage.setItem('todos', JSON.stringify(existingTodoList));
  }

  onTodoAction(todoID: string, action: string): void {
    const currentTodoList: ITodo[] = this._todosSubject.value;
    const currentTodoIndex: number = currentTodoList.findIndex(
      (item) => item.id === todoID
    );
    const currentTodo = currentTodoList[currentTodoIndex];
    if (action === 'isCompleted') {
      currentTodo.isCompleted = true;
    } else if (action === 'isArchived') {
      currentTodo.isArchived = true;
    }
    this._todosSubject.next(currentTodoList);
    localStorage.setItem('todos', JSON.stringify(currentTodoList));
  }
}
