// ui-main-src-App.tsx

import {RouterProvider ] from 'react-router';
	import router from '@/app/router';
	import { Provider } from 'react-redux';
	import { store } from '@/app/store';
	import { Utils. Router } from @nova/ui-library';
	import { DialogComponentContainer, setUiJS } from '@nova/ui-libaray';
	
	function App() {
		window.$utils = Utils.getInstance();
		window.$ui = setUiJS();	//UI컴포넌트 js함수
		window.$router = Router.getInstance();
		
		return (
			<>
				{/* TODO : 추가 html 요소가 있으면 추가   */}
				<Provider store= {store}>	
					<RouterProvider router ={router} />
					<DialogComponentContainer />			
				<Provider>
			</>
		);
	}
	
	export default App; 
	