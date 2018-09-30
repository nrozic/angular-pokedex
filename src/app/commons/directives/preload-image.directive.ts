import { Directive, Input, HostBinding, HostListener, AfterContentInit, ElementRef } from '@angular/core';

@Directive({
    selector: 'img[appLoadImage]',
})
export class AppPreloadImageDirective implements AfterContentInit {
    @Input() src: string;
    @Input() default: string;
    @HostBinding('class') className;

    @HostListener('error') onError() {
        this.updateSrc(this.default);
    }

    @HostListener('load', ['$event.target']) onLoad() {
        this.className = 'loaded';
    }


    constructor(
        private element: ElementRef
    ) {
    }

    ngAfterContentInit() {
        this.updateSrc(this.src);
    }

    private updateSrc(src: string) {
        this.element.nativeElement.src = src;
    }
}
