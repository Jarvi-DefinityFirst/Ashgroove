// src/app/core/icon.provider.ts
import { Provider } from '@angular/core';
import { IconSetService } from '@coreui/icons-angular';
import {
  cilSettings,
  cilTrash,
  cilPencil,
  cilCloudDownload,
  cil4k,
  cilBell,
  cilMoon,
  cilLan,
  cilUser,
  cilLaptop
} from '@coreui/icons';

export const ICON_PROVIDERS: Provider[] = [
  {
    provide: IconSetService,
    useFactory: () => {
      const iconSet = new IconSetService();
      iconSet.icons = {
        cilSettings,
        cilTrash,
        cilPencil,
        cilCloudDownload,
        cil4k,
        cilBell,
        cilMoon,
        cilLan,
        cilUser,
        cilLaptop
      };
      return iconSet;
    }
  }
];
