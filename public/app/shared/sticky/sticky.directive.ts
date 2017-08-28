import { Directive, Input , ElementRef,Renderer2 , HostListener , EventEmitter} from '@angular/core';

@Directive({ selector: '[sticky]' })
export class StickyHeaderDirective {
  private _minY:number = 90
  private _classname:string = "header__sticky";

  @Input('stickyMin') set StickyMin(minY:number){
    this._minY = minY || this._minY
  }
  @Input('stickyClass') set stickyClass(classname:string){
    this._classname = classname || this._classname
  }

  @HostListener('window:scroll')
  handleWindowsScroll(e:any){
    if(window.pageYOffset > this._minY){
      this._renderer.addClass(this.el.nativeElement,this._classname)
    }else{
      this._renderer.removeClass(this.el.nativeElement,this._classname)
    }
  }
  constructor(private _renderer:Renderer2,private el: ElementRef){
  }



}
