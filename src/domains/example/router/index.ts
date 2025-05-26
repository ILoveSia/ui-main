// ui-main-src-domains-example-router-index.tsx

import type { TNovaRoute } from '@nava/ui-library/types';
import loadable from '@loadable/component';

// 라우터에 연결할 페이지를 import 한다.
// loadable 라이브러리는 react에서 Code Spliting를 제공해주는 라이브러리 입니다.
const ExampleIndex = loadable( () => import('@/domains/example/pages/ExampleIndex'));
const ExampleGrid = loadable( () => import('@/domains/example/pages/ExampleGrid'));
const ExampleTab = loadable( () => import('@/domains/example/pages/ExampleTab'));
const ExampleCommonCode = loadable( () => import('@/domains/example/pages/ExampleCommonCode'));
const ExampleToast = loadable( () => import('@/domains/example/pages/ExampleToast'));
const ExampleUtils = loadable( () => import('@/domains/example/pages/ExampleUtils'));

const routes : TNovaRoute[] = [
	{
		path : 'main',
		element : <ExampleIndex />,
		name : 'Example/ExampleIndex',
	},
	// 화면 라우터 계속 추가...
	{
		path : 'main',
		element : <ExampleGrid />,
		name : 'Example/ExampleGrid',
	},
	{
		path : 'main',
		element : <ExampleTab />,
		name : 'Example/ExampleTab',
	},
	{
		path : 'main',
		element : <ExampleIndex />,
		name : 'Example/ExampleIndex',
	},
	{
		path : 'main',
		element : <ExampleCommonCode />,
		name : 'Example/ExampleCommonCode',
	},
	{
		path : 'main',
		element : <ExampleToast />,
		name : 'Example/ExampleToast',
	},
	{
		path : 'main',
		element : <ExampleUtils />,
		name : 'Example/ExampleUtils',
	},
];

export default routes;
