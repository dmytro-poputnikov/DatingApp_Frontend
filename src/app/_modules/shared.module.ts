import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ToastrModule } from 'ngx-toastr';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';

const MODULES: any[] = [
  TooltipModule.forRoot(),
  BsDropdownModule.forRoot(),
  ToastrModule.forRoot({
    positionClass: 'toast-bottom-right',
  }),
  TabsModule.forRoot(),
  NgxGalleryModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, ...MODULES],
  exports: MODULES,
})
export class SharedModule {}
