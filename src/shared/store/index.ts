// ui-main-src-shared-store-index.ts

import { setRootReducer } from '@nova/ui-library/store';

// 각 업무 도메인 Reducer를 가져와서 return 함수 setRootReducer의 argument 객체에 세팅 한다.
// store 이름은 각 업무(domain)에서 actionType으로 활용 되기 때문에 기억하고 있어야 한다.
import exampleStore from '@/domains/example/store';
import mainStore from '@/domains/main/store';

export default () : any => {
	return setRootReducer (
		{	
			mainStore,
			exampleStore,
		},
		'main',
	);	
};