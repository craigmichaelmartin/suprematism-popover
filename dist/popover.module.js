var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TooltipDirective } from './tooltip/tooltip.directive';
import { TooltipComponent } from './tooltip/tooltip.component';
import { InlineDialogComponent } from './dialog/dialog.component';
import { InlineDialogDirective } from './dialog/dialog.directive';
import { Popover, PopoverContent } from 'ngx-popover';
export var PopoverModule = (function () {
    function PopoverModule() {
    }
    PopoverModule = __decorate([
        NgModule({
            declarations: [
                Popover,
                PopoverContent,
                TooltipDirective,
                TooltipComponent,
                InlineDialogComponent,
                InlineDialogDirective
            ],
            exports: [
                TooltipDirective,
                InlineDialogComponent,
                InlineDialogDirective
            ],
            imports: [
                BrowserModule
            ],
            providers: [],
            entryComponents: [TooltipComponent],
            bootstrap: []
        }), 
        __metadata('design:paramtypes', [])
    ], PopoverModule);
    return PopoverModule;
}());
//# sourceMappingURL=/Users/jacobstewart/src/suprematism-popover/src/popover.module.js.map