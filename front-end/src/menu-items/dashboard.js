// assets
import { IconDashboard } from '@tabler/icons';
import { IconKey } from '@tabler/icons';
import { IconTypography, IconPalette, IconShadow, IconCar, IconBrandAsana } from '@tabler/icons';
// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'group',
    children: [
        {
            id: 'default',
            title: 'Dashboard',
            type: 'item',
            url: '/dashboard/default',
            icon: IconDashboard,
            breadcrumbs: false
        },
        {
            id: 'brand',
            title: 'Brand',
            type: 'item',
            url: '/utils/brand',
            icon: IconBrandAsana,
            breadcrumbs: false
        },
        {
            id: 'property',
            title: 'Property',
            type: 'item',
            url: '/utils/property',
            icon: IconCar,
            breadcrumbs: false
        },
        {
            id: 'order',
            title: 'Order',
            type: 'item',
            url: '/utils/util-shadow',
            icon: IconShadow,
            breadcrumbs: false
        }
    ]
};

export default dashboard;
