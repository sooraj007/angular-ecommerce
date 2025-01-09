import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HlmCheckboxComponent } from '@spartan-ng/ui-checkbox-helm';

import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';

import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';

import { HlmInputDirective } from '@spartan-ng/ui-input-helm';

@Component({
  selector: 'app-filter-section',
  imports: [
    CommonModule,
    HlmCheckboxComponent,
    HlmLabelDirective,
    HlmButtonDirective,
    HlmInputDirective,
  ],
  templateUrl: './filter-section.component.html',
  styleUrl: './filter-section.component.scss',
})
export class FilterSectionComponent {}
