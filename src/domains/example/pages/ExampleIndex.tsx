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
	const { data : commonCodeData, fetch : fetchCommonCode } = useAPI ('exampleStore/commonCode');
	const { data : holidaysData, fetch : fetchHolidays } = useAPI('exampleStore/holidays');
	const [ d, setD] = useState();
	const [ value, setValue] = useState('60888');
	const inputRef = useRef<HTMLIputElement>(null);
	
	const [ onlyApiData, setOnlyApiData] = useState('');
	const [ open, setOpen] = useState(false);
	const suggestions = [
		'사과' ,
		'사자' ,
		'바나나' ,
		'오렌지' ,
		'딸기' ,
		'망고' ,
		'파인애플' ,
		'키위' ,
		'수박' ,
		'포도' ,
		'블루베리' ,
		'복숭아' ,
		'자몽' ,
		'레몬' ,
		'라인 ,
	];
	
	const onChangeHanler = (e: any) => {
		console.log('ref로 찾은 값 :::: ', inputRef.current?.value);
		console.log('e.target으로 찾은 값 ::::: ', inputRef.current?.value);
		setValue(e.target.value);
	};
	
	const onkeyDownHandler = (e: any) => {
		console.log('event key ::::' , e.key);
	}
	
	const onFocusHandler = (e: any) => {
		console.log('>>>>>>> event 포커스  ::::' , e.key);
	}
	
	const onSelectChangeHandler = (e: any) => {
		console.log('ref로 찾은 값 ::::: ' , inputRef.current?.value);
		console.log('e.target으로 찾은 값 ::::' , e.key);
	}
	
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
	
	const handlerCommonCodeApi = () => {
		fetchCommonCode();
	}
	
	const handlerHolidaysApi = () => {
		fetchHolidays(
			starDate : '20240101',
			endDate : '20251231',
			page : '0',
			size : '10',
		});
	}
	
	const handlerSetData = () => {
		setTestData('테스트');
		toast({
			message : 'Toast Message. Lorem ipsum dolor sit amet',
			leaingIconName : 'info-circle',
		});
	};
	
	const handlerOnlyApi = () => {
		fetchAPI('/exampleStore/dicionaryCode' , {
			projectKey : 'akkmpiebpl',
			cdMngtCd : '10200',
			page : 0,
			size : 10,
			//option : { method : 'get' },
		}).then((res : any) => {
			setOnlyApiData(res);
		});	
	};

	const handlerOpenDialog = () => {
		$ui.dialog({ 
			element : <DialogTestComp text='1111' />, 
			title: '타이틀' , 
			size : 'full',
			footerOption : {
				showTertiaryButton: true,
				showPrimaryButton: true,
				showSecondaryButton : true,
				teriaryButtonLabel :  '사망등록',
				primaryButtonLabel : '저장',
				secondaryButtonLabel : '취소'
				alignment : 'leftRight',
				onSecondaryButtonClick : () => $ui.dialog({ close: true}),
			},
		})
		.then((res : any) => {
			console.log('>>>>> 결과 ::' , res);
		});
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
				<div> {JSON.stringify(commonCodeData)} </div>
				<br />
				<XButton
					variant = "solid
					onClick= {handlerHolidaysApi}
				>
					Holidays api 테스트
				</XButton>
				<div> {JSON.stringify(testData.value)}</div>
				<br />
				<XButton onClick={handlerSetData}> state 저장 </XButton>
				<br />
				<div> {JSON.stringify(onlyApiData)}</div>
				<br />
				<XButton onClick={handlerOnlyApi}>api호출(fetchAPI</XButton>
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
					<br/>
					<div
						className = ""
						style = {{
							grp : '50px'
							width : '320px',
						}}
					>
						<br/>
						<div style= {{ padding: '0 0 10px 30px' }}>
							<AutocompleteEx
								helperText = "Helper text goes here."
								leadingIconName = ""
								maxLength = {200}
								onChange = {onChaneHandler}
								onKeyDown = {onKeyDownHandler}
								ofForcus = {onFocusHandler}
								placeholder = "Placeholder Text"
								size= "small"
								status = "default"
								variant = "outline"
								suggestions = {suggestions}
							/>
						</div>
						<UTextField
							inputRef = {inputRef}
							unit = "만원"
							filterItems = {[
								{
									label : 'Filter 1',
									value : 'it1',
								},
								{
									label : 'Filter 2',
									value : 'it2',
								},
								{
									label : 'Filter 3',
									value : 'it3',
								},
							]}
							helperText = ""
							leadingIconName = ""
							maxLength = {10}
							mode = "select"
							onChange = {onChangeHandler}
							onSelectValueChange = {onSelectChangeHandler}
							placeholder = "Placeholder Text"
							size = "small"
							status = "default"
							value= {value}
							variant = "outline"						
						/>
					</div>					
			</div>
		</>
	);	
};

ExampleIndex.displayName = 'ExampleIndex';
export default ExampleIndex;(;{n)0gu