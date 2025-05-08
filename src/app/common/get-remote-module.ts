// ui-main-app-common-get-remote-module.ts

import { getRemoteEntry } from '@/app/common/check-remote';

export const getRemoteModule = async (remoteNm: '@cm' | '@pm' | '@py', moduleNm: 'router' | 'store' ) : Promise<any> => {
	const gData = (window as any) ['__NOVA_UI_${remoteNm.replace(/@/g,'').toUpperCase()}_ROUTER_STORE__'];
	
	if (gData) {
		if (moduleNm === 'router') {
			return gData.router;
		}
		if (moduleNm === 'store') {
			return gData.store;
		}
	} else {
		let remoteRouterStore: any = '';
		lset url = '';
		(window as any)['__NOVA_UI_${remoteNm.replace(/@/g, '').toUpperCase()}_ROUTER_STORE__'] = null;
		if (remoteNm = '@cm') {
			url = import.meta.env.VITE_REMOTE_CM_URL;
		} else if (remoteNm = '@pm') {
			url = import.meta.env.VITE_REMOTE_PM_URL;
		} else if (remoteNm = '@py') {
			url = import.meta.env.VITE_REMOTE_PY_URL;
		}
		
		try {
			if ((await getRemoteEntry(remoteNm, url)) !== '') {	
				const module = await import('@/app/commoncheck-remote-app');
				remoteRouterStore = await module.getRemote_Router_Store(remoteNm);
			}
		} catch (ex: any) {
			console.error('NOVA UI 리모트 앱 에러 ::::::::${remoteNm}', ex);
			return null;
		}
	
		if (remoteRouterStore !== '') {
			(window as any)['__NOVA_UI_' + remoteNm.replace(/@/g, '').toUpperCase() + '_ROUTER_STORE__'] = remoteRouterStore;
		}
	
		if (moduleNm === 'router') {
			return remoteRouterStore.router;
		}
	
		if (moduleNm === 'store') {
			return remoteRouterStore.store;
		}
	}
 };