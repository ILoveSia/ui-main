// ui-main-src-shared-router-index.tsx

import type { TNovaRoute } from '@nova/ui-library/types';
import { getRemoteModule } from '@/app/common/get-remote-module';

// main layout 가져오기 ---------------------
import MainLayoutIndex from '../components/layout/MainLayoutIndex';

// main 라우터 가져오기 ----------------------
import MainRouter from '@/domains/main/router';
import ExampleRouter from '@/domains/example/router';

// 리모트 앱 라우터 가져오는 함수
const getRoute = async (remoteNm : '@cm' | '@pm' | '@py' , route : any) => {
	let remoteRouter = '';
	if (route !== '') {
		remoteRouter = {
			path : remoteNm.replace(/@/g, ''),
			element :  <MainLayoutIndex />,
			children : route,
		} as any;
	} else {
		remoteRouter = {
			path :  '${remoteNm.replace(/@/g, '')}/*',
			element :  <MainLayoutIndex text="리모트 호출 시 에러!!!">,
		} as any;
	}
	return remoteRouter;
};

// 공통업무 (cm) 라우터 가져오기
let cmRouter = {};
// 계약업무 (pm) 라우터 가져오기
let pmRouter = {};
// 지급업무(py) 라우터 가져오기
let pyRouter = {};
if (localStorage.getItem('___NOVA_REMOTE_MODE__') === 'true') {
	// 공통업무 (cm) 라우터 가져오기
	cmRouter = await getRemoteModule('@cm', 'router');
	cmRouter = await getRoute('@cm' , cmRouter);
	// 계약업무 (pm) 라우터 가져오기
	pmRouter = await getRemoteModule('@pm', 'router');
	pmRouter = await getRoute('@pm' , pmRouter);
	// 지급업무 (py) 라우터 가져오기
	pyRouter = await getRemoteModule('@py', 'router');
	pyRouter = await getRoute('@py' , pyRouter);
}

const routes : TNovaRoute[] = [
	{
		path : '/',
		element : <MainLayoutIndex />,
		children : MainRouter,
	},
	cmRouter,
	pmRouter,
	pyRouter,
	{
		path : 'example',
		element : <MainLayoutIndex />,
		children : ExampleRouter,
	},
	{
		path : '*',
		element : <MainLayoutIndex text ="404 Loading.... 실패" />,
	},
];

export default routes;





















