import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ITodo } from '../models/todo.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private _mock: ITodo[] = [
    {
      id: 1,
      title: 'Cattle egret',
      description: 'Bubulcus ibis',
      isCompleted: false,
      isArchived: false,
      endDate: '7/29/2022',
      selected: true,
    },
    {
      id: 2,
      title: 'Tarantula, salmon pink bird eater',
      description: 'Lasiodora parahybana',
      isCompleted: false,
      isArchived: false,
      endDate: '11/9/2021',
      selected: false,
    },
    {
      id: 3,
      title: 'Fringe-eared oryx',
      description: 'Oryx gazella callotis',
      isCompleted: false,
      isArchived: false,
      endDate: '9/21/2021',
      selected: false,
    },
    {
      id: 4,
      title: 'Caiman, spectacled',
      description: 'Caiman crocodilus',
      isCompleted: false,
      isArchived: false,
      endDate: '8/21/2021',
      selected: false,
    },
    {
      id: 5,
      title: 'Owl, great horned',
      description: 'Bubo virginianus',
      isCompleted: false,
      isArchived: false,
      endDate: '2/1/2022',
      selected: false,
    },
  ];

  private _todosSubject: BehaviorSubject<Array<ITodo>> = new BehaviorSubject(
    this._mock
  );

  private _singleTodoSubject: BehaviorSubject<ITodo> = new BehaviorSubject(
    this._mock[0]
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
}
