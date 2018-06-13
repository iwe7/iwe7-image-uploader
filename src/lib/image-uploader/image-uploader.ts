import { Iwe7JssdkImageService } from 'iwe7-jssdk';
import {
    Directive, EventEmitter,
    Output, Input, HostListener
} from '@angular/core';

@Directive({
    selector: '[imageUploader]'
})
export class ImageUploaderDirective {
    @Output() imageUploader: EventEmitter<any> = new EventEmitter();
    @Input() imageUploaderCount: number = 1;

    @HostListener('tap', ['$event'])
    _tap(e: any) {
        this.start();
    }
    constructor(
        public image: Iwe7JssdkImageService
    ) {
        console.log(this);
    }

    start() {
        this.image.chooseAndUpload(this.imageUploaderCount).subscribe(res => {
            this.imageUploader.emit(res);
        });
    }
}
