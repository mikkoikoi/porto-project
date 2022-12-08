import URLS from '@/src/enums/urls'
import  {createElement} from 'react';
import {
	AppstoreOutlined,
	BarChartOutlined,
	CloudOutlined,
	ShopOutlined,
	TeamOutlined,
	UploadOutlined,
	UserOutlined,
	VideoCameraOutlined,
} from '@ant-design/icons';
export const privateHeaderMenuConfig = [
	{ key: URLS.PROFILE, label: 'Profile', icon: createElement(AppstoreOutlined)  }
	// {
	// 	key: 'package-parent',
	// 	label: 'App Package',
	// 	children: [
	// 		{ label: 'Rent App Package', key: URLS.PACKAGE },
	// 		{ label: 'History', key: URLS.PACKAGE_HISTORY }
	// 	]
	// }
]
export const publicHeaderMenuConfig = [{ key: URLS.AUTH, label: 'Login' }]
