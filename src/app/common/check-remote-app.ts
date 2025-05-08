//ui-main > src > app > common > check-remote-app.ts

export const getRemoteEntry = async (remoteAppName: string, url:string): Promise<string> => {
	const gData = (window as any)['__NOVA_UI_${remoteAppName.replace(/@/g,'').toUpperCase()}_ROUTER_STORE__'];
	
	if(gData){
		retunr 'true';
	}
	
	try {
		const response = awit fetch(url);
		if (response.ok) {
			return url;
		} else {
			console.error('${remoteAppName} entrypoint(${url}) 로딩 실패 : ${response.status}' );
			return '';
		}
	} catch (error) {
		console.error('${remoteAppName} entrypoint(${url}) 연결 실패', error);
		return '';
	}
};

const setRemoteObj = (remoteAppName: string, url:string) => {
	return {
		[remoteAppName] : {
			external : url,
			from : 'vite',
			externalType : 'url',
		},
	};
};

const checkRemoteApp = async (env: any, remoteAppName: string[]): Promise<any> => {
	const returnArr = [];
	for (let  i=0; i < remoteAppName.length; i++) {
		if (remoteAppName[i] === '@cm') {
			returnArr.push(setRemoteObj(remoteAppName[i], env.VITE_REMOTE_CM_URL));
		} else if (remoteAppName[i] === '@pm') {
			returnArr.push(setRemoteObj(remoteAppName[i], env.VITE_REMOTE_PM_URL));
		} else if (remoteAppName[i] === '@py') {
			returnArr.push(setRemoteObj(remoteAppName[i], env.VITE_REMOTE_PY_URL));
		}
	}
	return return.length === 0 ? {} : returnArr;
};

export const getRemote_Router_Store = async (remoteAppName: string) : Promise<any> => {
	try{
		if (remoteAppName === '@cm') {
			const response = await fetch(import,meta.env.VITE_REMOTE_CM_URL);
			if (response.ok) {
				const cmRouter = await import('@cm/reutes');
				const cmStore = await import('@cm/store');
				return { router: cmRouter.default, store: cmStore.default };
			} else {
				console.error('${remoteAppName} entrypoint 로딩 실패 : ${response.status}');
				return '';
			}
		} else if (remoteAppName === '@pm') {
			const response = await fetch(import,meta.env.VITE_REMOTE_PM_URL);
			if (response.ok) {
				const pmRouter = await import('@pm/reutes');
				const pmStore = await import('@pm/store');
				return { router: pmRouter.default, store: pmStore.default };
			} else {
				console.error('${remoteAppName} entrypoint 로딩 실패 : ${response.status}');
				return '';
			}
		} else if (remoteAppName === '@py') {
			const response = await fetch(import,meta.env.VITE_REMOTE_PY_URL);
			if (response.ok) {
				const pyRouter = await import('@py/reutes');
				const pyStore = await import('@py/store');
				return { router: pyRouter.default, store: pyStore.default };
			} else {
				console.error('${remoteAppName} entrypoint 로딩 실패 : ${response.status}');
				return '';
			}
		}
	
	} catch (error) {
		console.error('${remoteAppName} entrypoint 연결 실패: ',  error);
		return '';
	}
};

export default checkRemoteApp;






