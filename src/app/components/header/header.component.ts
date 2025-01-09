import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';

import { HlmInputDirective } from '@spartan-ng/ui-input-helm';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';

import {
  hugeSearch01,
  hugeShoppingCart02,
  hugeArrowDown01,
} from '@ng-icons/huge-icons';

@Component({
  selector: 'app-header',

  imports: [NgIcon, HlmInputDirective, HlmButtonDirective],
  viewProviders: [
    provideIcons({ hugeSearch01, hugeShoppingCart02, hugeArrowDown01 }),
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
