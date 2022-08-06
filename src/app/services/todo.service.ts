import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ITodo } from '../models/todo.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private _mock: ITodo[] = [
    {
      title: 'Cattle egret',
      description: 'Bubulcus ibis',
      isCompolited: true,
      isArchived: false,
      endDate: '7/29/2022',
      selected: false,
    },
    {
      title: 'Tarantula, salmon pink bird eater',
      description: 'Lasiodora parahybana',
      isCompolited: false,
      isArchived: true,
      endDate: '11/9/2021',
      selected: true,
    },
    {
      title: 'Fringe-eared oryx',
      description: 'Oryx gazella callotis',
      isCompolited: false,
      isArchived: true,
      endDate: '9/21/2021',
      selected: true,
    },
    {
      title: 'Caiman, spectacled',
      description: 'Caiman crocodilus',
      isCompolited: false,
      isArchived: false,
      endDate: '8/21/2021',
      selected: true,
    },
    {
      title: 'Owl, great horned',
      description: 'Bubo virginianus',
      isCompolited: true,
      isArchived: false,
      endDate: '2/1/2022',
      selected: true,
    },
  ];

  private _todosSubject: BehaviorSubject<Array<ITodo>> = new BehaviorSubject(
    this._mock
  );

  private _singleTodo: BehaviorSubject<ITodo> = new BehaviorSubject(
    this._mock[0]
  );

  constructor() {}

  getTodos(): Observable<Array<ITodo>> {
    return this._todosSubject.asObservable();
  }

  getSelectedTodo(): Observable<ITodo> {
    return this._singleTodo.asObservable();
  }

  setSelectedTodo(todo: ITodo) {
    this._singleTodo.next(todo);
  }
}
