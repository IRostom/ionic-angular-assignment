import {
  Component,
  Input,
  Output,
  EventEmitter,
  forwardRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-chips-select',
  templateUrl: './chips-select.component.html',
  styleUrls: ['./chips-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ChipsSelectComponent),
      multi: true,
    },
  ],
})
export class ChipsSelectComponent implements ControlValueAccessor {
  @Input() labels: string[] = [];
  @Output() toggleChange = new EventEmitter<{
    label: string;
    isSelected: boolean;
  }>();
  selectedLabels: string[] = [];

  // Implement ControlValueAccessor methods
  writeValue(value: any): void {
    this.selectedLabels = value || [];
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  // Custom change handler
  onChange: any = () => {};
  onTouched: any = () => {};

  toggle(label: string) {
    if (this.isSelected(label)) {
      this.selectedLabels = this.selectedLabels.filter((l) => l !== label);
    } else {
      this.selectedLabels.push(label);
    }
    this.toggleChange.emit({ label, isSelected: this.isSelected(label) });
    this.onChange(this.selectedLabels);
    this.onTouched();
  }

  isSelected(label: string): boolean {
    return this.selectedLabels.includes(label);
  }
}
