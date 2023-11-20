import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() column!: { start: number; end: number };
  @Input() row!: { start: number; end: number };

  @HostBinding('style.grid-column-start') get gridColumnStart() {
    return this.column.start;
  }
  @HostBinding('style.grid-column-end') get gridColumnEnd() {
    return this.column.end;
  }

  @HostBinding('style.grid-row-start') get gridRowStart() {
    return this.row.start;
  }
  @HostBinding('style.grid-row-end') get gridRowEnd() {
    return this.row.end;
  }
}
