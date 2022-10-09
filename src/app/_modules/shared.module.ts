import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ToastrModule } from 'ngx-toastr';

const MODULES: any[] = [
  TooltipModule.forRoot(),
  BsDropdownModule.forRoot(),
  ToastrModule.forRoot({
    positionClass: 'toast-bottom-right',
  }),
];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...MODULES],
  exports: MODULES,
})
export class SharedModule {}
