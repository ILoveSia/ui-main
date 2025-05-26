// ui-main-src-App.tsx

import {RouterProvider } from 'react-router';
import router from '@/app/router';
import { Provider } from 'react-redux';
import { store } from '@/app/store';
import { Utils. Router } from @nova/ui-library';
import { Formatters } from '@nova/ui-library/formatter';
import { useEffect } from 'react';
import { DialogComponentContainer,  DialogContainer, ToastContainer , setUiJS } from '@nova/ui-libaray';

function App() {
	window.$utils = Utils.getInstance();
	window.$format = Formatters.getInstance();
	window.$ui = setUiJS();	//UI컴포넌트 js함수
	window.$router = Router.getInstance();
	
	useEffect( () => {
		window.$router.setBasename(import.meta.env.VITE_ROUTER_BASENAME);
		// 현재 전체 라우터를 등록한다.
		window.$router.registerAppRouter(router);
		// 화면이동 시 상태값 관련 부분
		window.$router.setPatMeta(location.pathname);
		window.opopstate = function () {
			window.$router.setPathMeta(location.pathname);
		};
		//
		import('@assets/scss/ui/overrideDesignToken.scss');	
	} , []);
	
	return (
		<>
			{/* TODO : 추가 html 요소가 있으면 추가   */}
			<Provider store= {store}>	
				<RouterProvider router ={router} />
				<DialogComponentContainer />
				<DialogContainer />
				<ToastContainer
					maxVisibleCount = {5}
					duration = {500}
				/>
			</Provider>
		</>
	);
}

export default App; 
