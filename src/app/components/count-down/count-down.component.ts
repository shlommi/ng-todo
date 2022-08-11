import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss'],
})
export class CountDownComponent implements OnInit, OnDestroy {
  private _subscription: Subscription = new Subscription();
  private _dDay!: Date; // Final date
  private _dateNow!: Date;

  private _millisecondsInSecond: number = 1000;
  private _secondsInMinute: number = 60;
  private _minutesInHour: number = 60;
  private _houresInDay: number = 24;

  @Input() set dDay(dDay: Date) {
    this._dDay = dDay;
    this._dateNow = new Date();
  }

  public timeDiff!: number;
  public seconds!: number;
  public minutes!: number;
  public hours!: number;
  public days!: number;

  constructor() {}

  ngOnInit(): void {
    this._subscription.add(
      interval(1000).subscribe(() => {
        this.getTimeDiff();
      })
    );
  }
  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

  private getTimeDiff(): void {
    this.timeDiff = new Date(this._dDay).getTime() - this._dateNow.getTime();
    this.setTimeUnits(this.timeDiff);
  }

  private setTimeUnits(timeDiff: number): void {
    this.seconds = Math.floor(
      (timeDiff / this._millisecondsInSecond) % this._secondsInMinute
    );
    this.minutes = Math.floor(
      (timeDiff / (this._millisecondsInSecond * this._minutesInHour)) %
        this._minutesInHour
    );
    this.hours = Math.floor(
      (this.timeDiff /
        (this._millisecondsInSecond *
          this._minutesInHour *
          this._secondsInMinute)) %
        this._houresInDay
    );
    this.days = Math.floor(
      this.timeDiff /
        (this._millisecondsInSecond *
          this._minutesInHour *
          this._secondsInMinute *
          this._houresInDay)
    );
  }
}
