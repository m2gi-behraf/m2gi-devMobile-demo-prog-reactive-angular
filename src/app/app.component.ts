import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef,  VERSION, ViewChild } from '@angular/core';
import { BehaviorSubject, fromEvent, Observable } from 'rxjs';
import { filter, map,  scan, takeUntil,  tap } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  L_obsPoints = new BehaviorSubject<Observable<string>[]>([]);
  pointerMove = fromEvent(document.body, 'pointermove');
  pointerUp   = fromEvent(document.body, 'pointerup');

  constructor() {
  }

  startPolygone(evt: PointerEvent): void {
    // à compléter...
  }
}
