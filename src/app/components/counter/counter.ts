import { CommonModule } from '@angular/common';
import { counterReducer } from './../../ngrx/reducers/counter.reducers';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from '../../ngrx/actions/counter.actions';

@Component({
  selector: 'app-counter',
  imports: [CommonModule],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  count$: Observable<number> | undefined;

  constructor(private store: Store) {
    this.count$ = store.select((state: any) => state.counterReducer); // Selector
  }

  increment() {
    const actionObj = increment();
    this.store.dispatch(actionObj);
  }
  decrement() {
    const actionObj = decrement();
    this.store.dispatch(actionObj);
  }
  reset() {
    const actionObj = reset();
    this.store.dispatch(actionObj);
  }
}
