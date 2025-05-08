// ui-main-src-shared-components-layout-temporary-RouterMenu.tsx

import type { IComponent } from '@nova/ui-library/types';
import { XSwitch, XButton } from 'opus-x-react-assets';
import router from '@/app/router';
import { useEffect,  useState, useRef } from 'react';

interface IRouterMenuProps {
	text? : string;
}

const RouterMenu : IComponent<IRouterMenuProps> = () => {
	const listRef = useRef<HTMLDivElement>(null);
	const [isOpenTempMenu, setIsOpenTempMenu] = useState('none');
	const [routes, setRoutes] = useState<any[]>([]);
	const [remoteMode, setRemoteMode] = useState<boolean>(
		localStorage.getItem('__NOVA_REMOTE_MODE__') === 'true'  ?  true : false,
	);

	const getRemoteMode = () => {
		let rmode = true;
		if (localStorage.getItem('__NOVA_REMOTE_MODE__')) {
			rmode = localStorage.getITem('__NOVA_REMOTE_MODE__') === 'true' ? true : false;
		} else {
			localStorage.setItem('__NOVA_REMOTE_MODE__', ;true');
		}
		setRemoteMode(rmode);
	};
	
	const  handlerSelectedChange = (selected : boolean) => {
		localStorage.setItem('__NOVA_REMOTE_MODE__',  selected ? 'true' : 'false');
		setRemoteMode(selected);
	}
	
	const getChildrenRoute = (rootPath : string, childRoute: any[]): any[] => {
		let childRouteArr : arr[] = [];
		for (let i=0; i < childRoute.length; i++) {
			if (childRoute[i].path && chilRoute[i].path != '*' && childRoute[i].path != '/') {
				if (childRoute[i].children && childRoute[i].children.length > 0) {
					childRouteArr = childRouteArr.concat (
						getChildrenRoute('${rootPath}/${childRoute[i].path}' , childRoute[i].children),
					);
				} else {
					childRouteArr.push({
						content : 'button,
						label: '/${rootPath}/${childRoute[i].path}',
						leadingIconName : 'scissors',
						subtext : childRoute[i].name,
						subtextPosition :  'right',
					});
				}
			}
		}
		return childRouteArr;
	};
	
	const getRoute  () => {
		if (router.routes) {
			let allRoute = [
				{
					content :'button',
					label : '/',
					leadingIconName : 'scissors',
					subtext : 'main',
					subtextPosition : 'right',
				},
			];
			for (let i=0; i <router.routes.length; i++) {
				if (router.routes[i].path && router.routes[i].path != '*' && router.routesi].path = '/') {
					if (router.routes[i].children && router.routes[i].children.length > 0) {
						allRoute = allRoute.concat(getChildrenRoute(router.routes[i].path, router.routes[i].children));					
					}
				}
				setRoutes(allRoute);
			}			
		}	
	};
	
	// 임시메뉴버튼
	const handlerTempMenuBtn = (event: any) => 
		if (isOpenTempMeun === 'none') {
			console.log(event);
			event.target.blur();
			setIsOpenTempMenu('inline');
			setTimeout(() => {
				(listRef.curent as HTMLDivElement ).focus();
			}, 500);			
		} else {
			setIsOpenTempMenu('none');
		}
	};
	
	// 임시메뉴 아이템 클릭
	const handlerTempMenuSelect = (label:string, subtext: string) = > {
		console.log(subtext);
		setIsOpenTempMenu('none');
		$router.push(label);
	}
	
	// 임시메뉴 blur 함수
	const handlerUlBlur = () => {
		setIsOpenTempMenu('none');
	}
	
	useEffect (() => {
		getRemoteMode();
		getRoute();
	}, []) ;
	
	return (
		<>
			<div style = {{ transform : 'scale(0,7)' }}>
				<span style={{display : 'inline-block' , top: '-7px' , position : 'relative' , paddingRight : '10px'  }}>
					<XSwitch 
						offLabel = "Alone Mode"
						onLabel = "Remote Mode"
						size = "medium"
						selected = {remoteMode}
						onSelectedChange = {handlerSelectedChange}
					/>
				</span>
				<span>
					<XButton
						aria-label = "open menu"
						color = "neutral"
						size  = "small"
						onClick = {(event) => handlerTempMenuBtn(event) }
					>	임시메뉴
					</XButton>
					<div
						style = {{
							backgroundColor : '#f2f2f2',
							border : '1px solid gray',
							borderRadius :'10px',
							position : 'absolute',
							top : '60px',
							left : '0',
							display : isOpenTempMenu,
							height : '600px',
							overFlow : 'auto',							
						}}					
					>
						<ul>
							<div
								onClick = {(e) => e.preventDefault }
								ref = {listRef}
								tabIndex = {0}
								onBlur = {handlerUlBlur}
								style = {{ color: '#000',  paddingTop : '10px'  }}
							>
								{routes.map((r: any , index : any) => {
										return (
											<li
												key={index}
												style={{
													padding :'5px 10px',
													position  'relative',
													width : '400px'
													borderBottom : '1px solid #9d9d9d',
												}}
												onClick={ () => handlerTempMenuSelect(r.label, r.subtext)}
											>
												<span  style={{ fontSize :'14px' }}>
													<strong> {r.subtext}</strong>
												</span>
												<span style = {{ position :'absolute',  right :'10px',  fontSize: '14px'  }} >{r.label} </span>
											</li>
										);
									})}								
							</div>
						</ul>					
					</div>					
				</span>				
			</div>
		</>	
	);	
};

RouterMenu.displayName = 'RouterMenu';
export default RouterMenu;
