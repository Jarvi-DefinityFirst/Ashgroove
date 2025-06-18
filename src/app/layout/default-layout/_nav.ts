import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
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
    iconComponent: { name: 'cil-user' },
    children: [
      {
        name: 'Managment',
        url: '/staff',
        icon: 'nav-icon-bullet',
        badge: {
          color: 'info',
          text: 'DEMO'
        },
      },
      {
        name: 'Training',
        url: '/staff/training',
        icon: 'nav-icon-bullet',
        badge: {
          color: 'success',
          text: 'EXAMPLE'
        },
      },
    ]
  },
  
];
