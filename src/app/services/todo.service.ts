import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
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
    },
    {
      title: 'Tarantula, salmon pink bird eater',
      description: 'Lasiodora parahybana',
      isCompolited: false,
      isArchived: true,
      endDate: '11/9/2021',
    },
    {
      title: 'Fringe-eared oryx',
      description: 'Oryx gazella callotis',
      isCompolited: false,
      isArchived: true,
      endDate: '9/21/2021',
    },
    {
      title: 'Caiman, spectacled',
      description: 'Caiman crocodilus',
      isCompolited: false,
      isArchived: false,
      endDate: '8/21/2021',
    },
    {
      title: 'Owl, great horned',
      description: 'Bubo virginianus',
      isCompolited: true,
      isArchived: false,
      endDate: '2/1/2022',
    },
    {
      title: 'Red deer',
      description: 'Cervus elaphus',
      isCompolited: true,
      isArchived: false,
      endDate: '3/19/2022',
    },
    {
      title: 'Wombat, southern hairy-nosed',
      description: 'Lasiorhinus latifrons',
      isCompolited: false,
      isArchived: true,
      endDate: '4/5/2022',
    },
    {
      title: 'Brindled gnu',
      description: 'Connochaetus taurinus',
      isCompolited: true,
      isArchived: true,
      endDate: '12/22/2021',
    },
  ];
  private _todoSubject: BehaviorSubject<Array<ITodo>> = new BehaviorSubject(
    this._mock
  );
  constructor() {}

  getTodos(): Observable<Array<ITodo>> {
    return this._todoSubject.asObservable();
  }
}
