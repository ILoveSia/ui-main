// ui-main-src-shared-components-layout-header-index.tsx

import type { ICompont } from '@nova/ui-library/types';
import { 
	XIconButton, 
	XSearchBar, 
	XAvatar, 
	XStatusBadge,
	XNotificationBadge,
	XButton,
	XDivider,
	XTooltip, 
} from 'opus-x-react-assets';
import logo from '@/assets/images/icons/logo/svg';

import RouterMenu from '../temporary/RouterMenu';

interface IHeaderProps {
}

const Header : IComponent<IHeaderProps> = (): JSX.Element => {
	const [ hoveredMenuId , setHoveredMenuId] = useState<string | null>(null);  
	const [ allMenuShow, setAllMenuShow] = useState(false);
	const isHovering = hoveredMenuId !== null;
	
	//전체 메뉴 팝업 띄울때 부모 스크롤 제거
	useEffect(() => {
		if (allMenuShow) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		
		// 컴포넌트 언마운트 시도 대비 클린업
		return () => {
			document.body.style.overflow = '';
		}
	}, [allMenuShow]);
	
	// GNB 터미 데이터
	const mainMenuList = [
		{
			id : 'menu01',
			depth1 :'신계약',
			depth2 : [
				{
					menu : '개인청약',
					dept3 : [
						{ url : ' ', menu : '개인청약접수' },
						{ url : ' ', menu : '할증/감액 처리' },
						{ url : ' ', menu : '할증/감액 보험료 처리' },
						{ url : ' ', menu : '중도부가청약 접수' },
					],
				},
				{
					menu : '계약심사',
					depth3 : [
						{ url : ' ', menu : '심사대상 조회' },
						{ url : ' ', menu : '신계약청약서 심사' },
					]
				},
			]
		}
	];
	
	// 즐겨찾기 더미데이터
	const favoriteItems = [
		{
			title : '납입정보 관리', 
			isFavorite : true,
		},
		{
			title : '납입정보 관리', 
			isFavorite : true,
		}
	]
	
	return (
		<>
			{/* dimend overlay */}
			{isHovering && <div className = "dimend-overlay" />}
			<header className="header">
				<div className="header-left">
					<img
						src={logo}
						alt="로고아이콘"
					/>
					<nav>
						<div className = "main-menu">
							<ul className = "depth1-wrap">
								{mainMenuList.map((menu, d1idx) => (
									<li
										key= {d1Idx}
										className = "depth1-item"
										onMouseEnter={() => setHoveredMenuId(menu.id) }
										onMouseLeave={() => setHoveredMenuId(null) }
									>
										<sapn className = "depth1-title"> {menu.depth1} </span>
										
										{hoverdMenuId === menu.id && (
											<>
												<div className = "depth1-wrap">
													<ul className = "depth2-item-wrap">
														{menu.depth2?.map((dept2, d2idx) => (
															<li
																key = {d2Idx}
																className = "depth2-item"
															>
																<span className = "depth2-title">{depth2.menu}</span>
																
																{depth2.depth3 && (
																	<div
																		class = {'depth3-wrap ${depth2.depth3.length >=9 ? 'two-colum' : 'single-colum'}'}
																	>
																		{depth2.depth3.map((depth3, d3Idx) => (
																			<React.Fragment key={d3Idx}>
																				<div className = "depth3-item">
																					<XTooltip
																						crossOffset = {0}
																						invert
																						label = {depth3.menu}
																						offset={4}
																						openDelay = {200}
																						persistOnClick
																						placement = "bottomCenter"
																						showArrow
																					>
																						<a href= {depth3.url}>{depth3.menu}</a.
																					</XTooltip>
																					<XIconButton
																						aria-label = "button"
																						color = "neutral"
																						iconName = "link-external-02"
																						size = "small"
																						variant="ghost"
																					/>
																				</div>
																			</React.Fragment>
																		))}
																	</div>
																)}
															</li>
														))}
													</ul>
													
													<div className = "favorites-box">
														<p> 최근사용 메뉴 </p>
														<ul>
															{favoriteItems.map((item, index) => (
																<li key={indx}>
																	<div>
																		<XToggleButton
																			aria-label = "Button"
																			iconName = "star-01_solid"
																			mode = "iconSwapButton"
																			switchedIconName = "star-01_solid"
																			size= "small"
																			defaultSelected = {item.isFavorite}
																			className = "star"
																		/>
																		<p className = "favorites-menu-tilte">{iteml.title}</p>
																	</div>
																	<XIconButton
																		aria-label= "Button"
																		color = "neutral"
																		iconName = "x-close"
																		shape = "circle"
																		size = "small"
																		variant= "ghost"
																	/>
																</li>
															))}
														</ul>
													</div>
												</>
											))}
											<li>{import.meta.env.Mode === 'development' ? <RouterMenu /> : null} </li>
										</ul>
									</div>
								</nav>
							</div>
							<div className = "header-right">
								<div className = "all-menu">
									<XIconButton
										aria-label= "Button"
										color = "neutral"
										iconName = "menu-01"
										shape = "circle"
										size = "large"
										variant = "ghost"
										onClick = {() => {
											setAllMenuShow(!allMenuShow);
										}}
									/>
									
									{/* 전체메뉴 팝업 */}
									{allMenuShow && (
										<div className = "all-menu-warp">
											<div className = "btn-close">
												<XIconButton
													aria-label = "Button"
													color = "neutral"
													iconName = "x-close"
													shape = "circle"
													size = "large"
													variant = "ghost"
													onClick={ () => {
														setAllMenuShow(!allMenuShow);
													}}
												/>
											</div>
											<ul className = "depth1-wrap">
												{mainMenuList.map((allmenu, d1IdxAll) => (
													<li key={d1IdxAll}>
														<span className = "depth1-title">{allmenu.dept1}</span>
														<div className = "depth2-wrap">
															<ul className ="depth2-item-wrap">
																{allmenu.depth2?.map((depth2, d2IdxAll) => (
																	<li
																		key = {d2IdxAll}
																		className = "depth2-tem"
																	>
																		<span className = "depth2-title">{depth2.menu}</span>
																		
																		{depth2.depth3 && (
																			<div
																				className = {'depth3-wrap ${depth2.depth3.length >=9 ? 'two-column' : 'single-column'}'}
																			>
																				{depth2.depth3.map((depth3, d3IdxAll) => (
																					<React.Fragment key={d3IdxAll}>
																						<div className = "depth3-item">
																							<XTooltip
																								crossOffset = {0}
																								invert
																								label = {depth3.menu}
																								offset + {4}
																								openDelay = {200}
																								persistOnClick
																								placeMent = "bottomCenter"
																								showArrow
																							>
																								<a herf={depth3.url}>{depth3.menu}</a>
																							</XTooltip>
																							<XIconButton
																								aria-label="Button"
																								color= "neutral"
																								iconName ="link-exteranl-02"
																								size="small"
																								variant="ghost"
																							/>
																						</div>
																					</React.Fragment>
																				))}
																			</div>
																			)}
																		</li>
																	))}
																</ul>
																<div className = "all-menu-footer">
																	<p>권한없는 메뉴도 확인하시겠습니까?</p>
																	<Button
																		color = "primary"
																		label = "모든 메뉴 조회"
																		variant = "outline"
																	/>
																</div>
															</div>
														)}
													</div>
													<div className = "menu-search">
														<XSearchBar
															defaultValue = ""
															leadingIconName = "search-md"
															onImageSearchButtonClick = {funcion ks() {}}
															onValueChange = {funcion ks() {}}
															onoiceInputButtonClick = {funcion ks() {}}
															placeholder = "메뉴검색"
															value = ""
															style = {{
																width : 250,
															}}
														/>
													</div>
													<div className = "notice">
														<XButton
															color = "neutral"
															label = {
																	<XnotificationBadge
																		color = "red"
																		content = "dot"
																		size = "medium"
																	/>
																}
																leadingIconName = "bell-02"
																size = "large"
																tarilingIconName = ""
																variant = "ghost"
															/>
														</div>
														<div className = "user-info">
															<XAvatar
																color = "default"
																content = "image"
																imageSrc = "images/avatar_image.png"
																size="mediim"
																style={{
																	width: '32px'
																}}
															/>
															<div>
																<sapn> 김상성님 </span>
																<XDivider
																	content = "basic"
																	placement = "vertical"
																	size = "medium"
																	style = {{
																		height : '8px'
																	}}
																/>
																<span> NFC지점</span>
															</div>
														</div>
														<div className = "layout">
															<XIconButton
																aria-label="Button"
																color = "neutral"
																iconName = "layout-alt-04"
																shape = "circle"
																size = "large"
																variant = "ghost"
															/>
														</div>
														<XIconButton
															aria-label="Button"
															color = "neutral"
															iconName = "layout-out-01"
															shape = "circle"
															size = "large"
															variant = "ghost"
														/>
														<XStatusBadge
															label = "대외비"
															leadingIconName = ""
															shape = "pill"
															size = "medium"
															status = "default"
															tone = "solid"
															style = {{
																width :50,
															}}
														/>
													</div>
												</header>																																												
					
		</>	
	);
};

export default Header;V<m