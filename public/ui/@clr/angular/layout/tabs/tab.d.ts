import { IfActiveService } from '../../utils/conditional/if-active.service';
import { TabsService } from './providers/tabs.service';
import { ClrTabContent } from './tab-content';
import { ClrTabLink } from './tab-link.directive';
export declare class ClrTab {
    ifActiveService: IfActiveService;
    id: number;
    private tabsService;
    tabLink: ClrTabLink;
    tabContent: ClrTabContent;
    constructor(ifActiveService: IfActiveService, id: number, tabsService: TabsService);
    ngOnDestroy(): void;
    readonly active: boolean;
}
