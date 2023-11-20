import { Component, Input, OnInit } from '@angular/core';

interface Margin {
  index: number;
  left?: number;
  right?: number;
}

@Component({
  selector: 'app-nav-link',
  templateUrl: './nav-link.component.html',
  styleUrls: ['./nav-link.component.scss'],
})
export class NavLinkComponent {
  @Input() noMarginLink: Margin[] = [];
  @Input() linkText: string[] = [];
  @Input() selected: string = '';

  /* Allow users to supply an array of Margin objects to override
   * the default margin.
   *
   * index = Link index postion, left = margin left, right =
   * margin right. Where the numbers provided are the desired
   * override value.
   */

  getMargin(linkIndex: number, direction: 'left' | 'right'): number {
    const marginObject = this.noMarginLink.find((element) => element.index === linkIndex);

    // Use nullish coalescing to provide default value of 20.
    return marginObject?.[direction] ?? 20;
  }
}
