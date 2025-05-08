// ui-main-src-domains-example-router-index.tsx

import type { TNovaRoute } from '@nava/ui-library/types';
import loadable from '@loadable/component';

// 라우터에 연결할 페이지를 import 한다.
// loadable 라이브러리는 react에서 Code Spliting를 제공해주는 라이브러리 입니다.
const ExampleIndex = loadable( () => import('@/domains/example/pages/ExampleIndex'));

const routes : TNovaRoute[] = [
	{
		path : 'main',
		element : <ExampleIndex />,
		name : 'Example/ExampleIndex',
	},
	// 화면 라우터 계속 추가...
];

export default routes;
