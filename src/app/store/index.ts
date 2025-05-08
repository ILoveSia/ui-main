// ui-main-src-app-store-index.ts

import { configureAppStore } from '@nova/ui-library';
import { setRootReducer } from '@nova/ui-libarary/store';
import { getRemoteModule } from '@/app/comon/get-remote-module';
import mainReducer from '@/shared/store';
import { combineReducers } from '@reduxjs/toolkit';

//import cmStore from '@cm/store';

// Main Root store -----------------------
const mainRootReducer = () : any => {
	return setRootReducer (
		{
			mainRootStore :{
				remoterRouterList : {actionType : 'mainRootStore/remoteRouterList'},
			},
		},
		'main',
	);
};

const storeObject = {
	...mainRootReducer(),
	...mainReducer(),
	//cm : combineReducers(cmStore()),
};

if (localStorage.getItem('___NOVA_REMOTE_MODE___) === 'true') {
	// cm store 가죠오기
	const cmStore = await getRemoteModule('@cm', 'store');
	if (cmStore) {
		Object.assign (storeObject, [ cm : combineReducers(cmStore()) });
	}
	
	// pm store 가죠오기
	const pmStore = await getRemoteModule('@pm', 'store');
	if (pmStore) {
		Object.assign (storeObject, [ pm : combineReducers(pmStore()) });
	}

	// py storee 가죠오기
	const pyStore = await getRemoteModule('@py', 'store');
	if (pyStore) {
		Object.assign (storeObject, [ py : combineReducers(pyStore()) });
	}
}

// 전역 store 생성 -------------
export const store = configureAppStore(storeObject, 'main');

