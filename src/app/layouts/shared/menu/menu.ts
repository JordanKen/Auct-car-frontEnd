import { MenuItem } from './menu.model';

export const ADMIN_MENU: MenuItem[] = [
    {
        label: 'Navigation',
        isTitle: true
    },
    {
        label: 'Dashboard',
        icon: 'home',
        link: '/dashboard',
        badge: {
            variant: 'success',
            text: '1',
        }
    },
    {
        label: 'Apps',
        isTitle: true
    },
    {
        label: 'Calendar',
        icon: 'calendar',
        link: '/apps-calendar',
    },
  {
    label: 'Transaction',
    link: '/apps-transaction',
  },
    {
        label: 'Email',
        icon: 'inbox',
        subItems: [
            {
                label: 'Inbox',
                link: '/apps/email-inbox',
            },
            {
                label: 'Read',
                link: '/apps/email-read'
            },
            {
                label: 'Compose',
                link: '/apps/email-compose'
            },
        ]
    },
    {
        label: 'Project',
        icon: 'briefcase',
        subItems: [
            {
                label: 'List',
                link: '/apps/project-list',
            },
            {
                label: 'Detail',
                link: '/apps/project-detail',
            },
        ]
    },
    {
        label: 'Tasks',
        icon: 'bookmark',
        subItems: [
            {
                label: 'List',
                link: '/apps/task-list',
            },
            {
                label: 'Kanban Board',
                link: '/apps/task-board',
            },
        ]
    },
    {
        label: 'Custom',
        isTitle: true
    },
    {
        label: 'Pages',
        icon: 'file-text',
        subItems: [
            {
                label: 'Starter',
                link: '/other/backend-starter'
            },
            {
                label: 'Profile',
                link: '/other/backend-profile'
            },
            {
                label: 'Activity',
                link: '/other/backend-activity'
            },
            {
                label: 'Invoice',
                link: '/other/backend-invoice'
            },
            {
                label: 'Pricing',
                link: '/other/backend-pricing'
            },
            {
                label: 'Error 404',
                link: '/other/backend-error-404'
            },
            {
                label: 'Error 500',
                link: '/other/backend-error-500'
            },
        ]
    },
    {
        label: 'components',
        isTitle: true
    },
    {
        label: 'UI Elements',
        icon: 'package',
        subItems: [
            {
                label: 'Bootstrap UI',
                link: '/ui/bootstrap'
            },
            {
                label: 'Icons',
                link: '/ui/icons',
                subItems: [
                    {
                        label: 'Feather Icons',
                        link: '/ui/icon-feather'
                    },
                    {
                        label: 'Unicons Icons',
                        link: '/ui/icon-unicons'
                    },
                ]
            },
            {
                label: 'Widgets',
                link: '/ui/widgets'
            }
        ]
    },
    {
        label: 'Forms',
        link: '/ui/form',
        icon: 'file-text',
        subItems: [
            {
                label: 'Basic Elements',
                link: '/ui/forms-basic'
            },
            {
                label: 'Advanced',
                link: '/ui/forms-advanced'
            },
            {
                label: 'Validation',
                link: '/ui/forms-validation'
            },
            {
                label: 'Wizard',
                link: '/ui/forms-wizard'
            },
            {
                label: 'Editor',
                link: '/ui/forms-editor'
            },
            {
                label: 'File Uploads',
                link: '/ui/forms-uploads'
            },
        ]
    },
    {
        label: 'Charts',
        link: '/ui/charts',
        icon: 'pie-chart'
    },
    {
        label: 'Tables',
        link: '/ui/tables',
        icon: 'grid',
        subItems: [
            {
                label: 'Basic',
                link: '/ui/tables-basic'
            },
            {
                label: 'Advanced',
                link: '/ui/tables-advanced'
            },
        ]
    }
];
export const MENU: MenuItem[] = [
    {
        label: 'Navigation',
        isTitle: true
    },
    {
        label: 'Dashboard',
        icon: 'home',
        link: '/admin',
        badge: {
            variant: 'success',
            text: '1',
        }
    },
    {
        label: 'Opérations',
        isTitle: true
    },
    {
      label: 'Utilisateurs',
      link: '/admin/utilisateur',
    },
  {
    label: 'Véhicules',
    link: '/admin/vehicule',
  },
  {
    label: 'Garages',
    link: '/admin/garage',
  },
  {
    label: 'Marques',
    link: '/admin/marques',
  },
  {
    label: 'Gabaries',
    link: '/admin/gabaries',
  },
  {
    label: 'Enchères',
    link: '/admin/enchere',
  },
];
