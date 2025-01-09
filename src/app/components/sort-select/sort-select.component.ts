import { Component } from '@angular/core';
import { BrnSelectImports } from '@spartan-ng/brain/select';
import { HlmSelectImports } from '@spartan-ng/ui-select-helm';
@Component({
  selector: 'app-sort-select',
  imports: [BrnSelectImports, HlmSelectImports],
  templateUrl: './sort-select.component.html',
  styleUrl: './sort-select.component.scss',
})
export class SortSelectComponent {}
