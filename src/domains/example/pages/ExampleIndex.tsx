// ui-main-src-domains-example-pages-ExampleIndex.tsx

import type { IComponent } from '@nova/ui-library/types';
import { useReduxAPI, useReduxState, fetchAPI } from '@nova/ui-library/store';
import { useEffect, useStae } from 'react';
import { XButton, XNoticicationBadge, XDialog, XDialogHeader, XDialogBody, XDialogFooter } from 'opus-x-react-assets';
import DialogTestComp from '../components/DialogTestComp';
import exampleStyles from '../styles/ExampleIndex.module.scss';

interface IExampleIndexProps {

}

const ExampleIndex : IComponent<IExampleIndexProps> = () : JSX.Element => {
	// REST API를 사용하기 위하여 useReduxAPI 훅을 입력하고 파라미터 ActionType를 넘겨준다.
	// const { data, fetch, setData } = useReduxAPI('main/exampleStore/search');
	const { data : sData, fetch: sFetch } = useReduxAPI('exampleStore/dictionaryCode');
	const { data : testData, setData : setTestData } = useReduxState('exampleStore/testState');
	
	const [onlyApiData, setOnlyApiData] = useState('');
	const [open, setOpen] = useState(false);
	
	const handlerApi = () => {
		sFetch({
			projectKey : 'akkmpiebpl',
			cdMngtCd : '10200',
			page : 0,
			size : 10,
			option : { method : 'get' },
		}).then((res : any) => {
			console.log(res);
		});
	};
	const handlerSetData = () => {
		setTestData('테스트');
	};
	
	const handlerOnlyApi = () => {
		fetchAPI('/metadata/rest/dicionary/codes' , {
			projectKey : 'akkmpiebpl',
			cdMngtCd : '10200',
			page : 0,
			size : 10,
			option : { method : 'get' },
		}).then((res : any) => {
			setOnlyApiData(res);
		});	
	};

	const handlerOpenDialog = () => {
		$ui.dialog({ element : <DialogTestComp text='1111' />, title: '타이틀' , width :'800px' });
	};
	
	const handlerOpenExternalDialog = () => {
		$ui.dialog({ url : '/example/main' , isExternal : true width : '900' , height :'300' });
	};
 
 	const handlerOpenExternal = () => {
 		$router.openExternal('/cm/example/ex-main');
 	};
 
 	const handerLoadHead = (event : any) => {
 		console.log('다이얼로그 헤더 로드', event);
 	};
 
 	useEffect(() => {
	 }, []);
	
	return (
		<>
			<div className = "content">
				<h3> 예제 메인 화면 !!! </h3>
				<div> {JSON.stringigy(sData)}</div>
				<br />
				<XButton
					variant = "solid"
					onClick = {handlerApi}
				> api  테스트
				</XButton>
				<br />
				<div> {JSON.stringify(testData.vlue)} </div>
				<br />
				<XButton onClick={handlerSetData}> state 저장 </XButton>
				<br />
				<div>{JSON.stringify(onlyApiData)}</div>
				<br />
				<XButton onClick={handerOnlyApi}>api호출(fetchAPI)</XButton>
				<br />
				<br />
				<XButton onClick={handerOpenDialog}>Dialog열기</XButton>
				<br />
				<br />
				<XButton onClick={handerOpenExternalDialog}>Dialog(external)열기</XButton>
				<br />
				<br />
				<XButton onClick={handerOpenExternal}>외부 브라우저 탭 열기</XButton>
				<br />
				<XButoon
					label = {
						<>
							<div> 버튼</div>
							<XNotificationBadge    
								color = "red"
								content = "number"
								laber = "21"
								size = "medium"
							/>							
						</>
					}
				/>
				<br />
				<XButton onClick={() => setOpen(!open)}>{!open ? 'Show' : 'Hide'} </XButton>
				<XDialog
					open={open}
					content="custom"
					backgroundOverlay = {true}
					alert={false}
					className={exampleStyles.ui.dialog}
					onOpenChange={(open) => setOpen(open)}
				>
					<div
						style={{ position : 'absolute' }}
						onLoadedData={handlerLoadHead}
					/>
					<XDialogHeader
						title={'Title Goes Here.' }
						showCloseButton
					/>
					<XDialogBody>
						<DialogTestComp text="1111" />
					</XDialogBody>
					<XDialogFooter
						showPrimaryButton
						primaryButtonLabel = {'Button'}
						showSecondaryButton
						secondaryButtionLabel = {'Button'}
						showTeriaryButton
						teriaryButtionLabel = {'Button'}
					/>
					</XDialog>								
			</div>
		</>
	);	
};

ExampleIndex.displayName = 'ExampleIndex';
export default ExampleIndex;