import { CommonModule } from '@angular/common';
import { ImageUploaderDirective } from './image-uploader/image-uploader';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ImageUploaderDirective
  ],
  exports: [
    ImageUploaderDirective
  ]
})
export class Iwe7ImageUploaderModule { }
