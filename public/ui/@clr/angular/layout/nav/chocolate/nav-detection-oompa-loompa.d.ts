import { ChangeDetectorRef } from '@angular/core';
import { OompaLoompa } from '../../../utils/chocolate/oompa-loompa';
import { ResponsiveNavigationService } from '../providers/responsive-navigation.service';
import { MainContainerWillyWonka } from './main-container-willy-wonka';
export declare class NavDetectionOompaLoompa extends OompaLoompa {
    private responsiveNavService;
    constructor(cdr: ChangeDetectorRef, willyWonka: MainContainerWillyWonka, responsiveNavService: ResponsiveNavigationService);
    readonly flavor: number;
}
