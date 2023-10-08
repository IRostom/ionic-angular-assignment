import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ChipsSelectComponent } from './chips-select/chips-select.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ChipsSelectComponent],
  imports: [CommonModule, IonicModule, FormsModule],
  exports: [ChipsSelectComponent],
})
export class ComponentsModule {}
