import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'DEMOs'
  },
  {
    name: 'Procedure',
    url: '/procedure',
    iconComponent: { name: 'cil-calculator' },
    badge: {
      color: 'info',
      text: 'DEMO'
    }
  },
  {
    name: 'Staff',
    url: '/staff',
    iconComponent: { name: 'cil-calculator' },
    badge: {
      color: 'info',
      text: 'DEMO'
    },
    children: [
      {
        name: 'Managment',
        url: '/staff',
        icon: 'nav-icon-bullet'
      },
    ]
  },
  
];
