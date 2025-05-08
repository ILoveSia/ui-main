// ui-main-src-domains-example-store-index.ts

import url from '@/domains/example/api/url';
import { IRootState, IActionObject } from '@nova/ui-library/types';

// Example 스토어 타입 ==============
export interface IExampleStore<T = IRootState> {
	search : T;
	dictionaryCode: T;
	testState: T;
}

// Example Action 객체 ====================
// 생성할 Store state의 이름을 정하고, 값으로 actionType과 url을 입력한다.
// API호출이 아닌 경우에는 url을 입력 하지 않아도 된다. (state만 생성할 때)
// actionType 이름은 [업무스토어]/[state 이름] 조합으로 생성한다.
const exampleAction : IExampleStore<IActionObject> = {
	search : { actionType : 'exampleStore/search', url : url.SEARCH },
	dictionaryCode : { actionType : 'exampleStore/dictionaryCode' , url : url.DICTIONARY_CODE },
	testState :  { actionType : 'exampleStore/testState' },
} as const;

export default exampleAction;

