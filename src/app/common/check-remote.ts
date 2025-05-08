// ui-main > src > app > common > check-remote.ts

export const getRemoteEntry = async (remoteAppName: string, url: string): Promise<string> => {
	const gData = (window as any)[`__NOVA_UI_${remoteAppName.replace(/@/g, '').toUpperCase()}_ROUTER_STORE__`];
	
	if(gData){
		return 'true';
	}
	
	try {
		console.log(remoteAppName);
		const response = await fetch(url);
		if(response.ok){
			return url;
		} else {
			return '';
		}
	} catch (error) {
		console.log(error);
		return '';
	}
};