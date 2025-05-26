// ui-main-src-shared-components-layout-sidebar-index.ts

import type { IComponent } from '@nova/ui-library/types';
import { 
	XIconButton ,
	XDivider,
	XDialog,
	XDialogHeader,
	XDialogBody,
	XTabs,
	XTab,
	XTooltip,
	XIdentifierBadge,
	XButton,
} from 'opus-x-react-assets';

import { UIcon} from '@nova/ui-library/ui;

interface ISidebarProps {
}

const Sidebar : IComponent<ISidebarProps> = (): JSX.Element => {
	const [ openTerm , setOpenTerm ] = useState(false);
	const [ openNote , setOpenNote ] = useState(false);

	// 업무참고 > 세대정보 더미데이터
	const generateionItems = [
		{
			relationship : '처',
			name : '흥부인',
			age : 53  ,
			set : '여성',
			residenNumber : 700101,
			security : '700101-2*******,
			jab : '변호사',
		},
		{
			relationship : '자녀',
			name : '김지희',
			age : 25  ,
			set : '여성',
			residenNumber : 980101,
			security : '980101-2*******,
			jab : '학생',		
		},
		{
			relationship : '자녀',
			name : '김미호',
			age : 27  ,
			set : '여성',
			residenNumber : 960101,
			security : '960101-2*******,
			jab : '사무원',		
		}	
	];
	
	// 업무참고 > 세대정보 데미데이터
	const noticeItems = [
		{
			type : '유형'
			title : 'Title',
			desc :'신호접촉법 [전화] 로 선택되어 있지만 자택 연팍처가 입력되어있지 않습니다. 추가 정보 확인이 필요합니다.'
		},
		{
			type : '고객정보'
			title : '휴대폰착오',
			desc :'신호접촉법 [전화] 로 선택되어 있지만 자택 연팍처가 입력되어있지 않습니다. 추가 정보 확인이 필요합니다.'
		},
		{
			type : '미지급액'
			title : '분할보험금',
			desc :'신호접촉법 [전화] 로 선택되어 있지만 자택 연팍처가 입력되어있지 않습니다. 추가 정보 확인이 필요합니다.'
		},
	]
	
	return (
		<>
			<div className="sidebar">
				<div>
					<ul>
						<li>
							<UIcon
								iconName = "novaAiLogoBasic"
								size = "30"
							/>
						</li>
						<li>
							<XTooltip
								crossOffset = {0}
								invert
								label = "메모"
								offset = {0}
								placement = "left"
								showArrow
							>							
								<XIconButton
									aria-label="Button"
									color="neutral"
									iconName="file-05"
									shape="square"
									size="large"
									variant="ghost"
								/>
							<XTooltip>
						</li>
						<li>
							<XTooltip
								crossOffset = {0}
								invert
								label = "바로가기"
								offset = {0}
								placement = "left"
								showArrow
							>							
								<XIconButton
									aria-label="Button"
									color="neutral"
									iconName="file-05"
									shape="square"
									size="large"
									variant="ghost"
								/>
							<XTooltip>
						</li>
						<li>
							<XTooltip
								crossOffset = {0}
								invert
								label = "용어사전"
								offset = {0}
								placement = "left"
								showArrow
							>							
								<XIconButton
									aria-label="Button"
									color="neutral"
									iconName="file-05"
									shape="square"
									size="large"
									variant="ghost"
								/>
							<XTooltip>
						</li>						
						<li>
							<XTooltip
								crossOffset = {0}
								invert
								label = "유의사항"
								offset = {0}
								placement = "left"
								showArrow
							>							
								<XIconButton
									aria-label="Button"
									color="neutral"
									iconName="file-05"
									shape="square"
									size="large"
									variant="ghost"
								/>
							<XTooltip>
						</li>
						<li>
							<XTooltip
								crossOffset = {0}
								invert
								label = "업무참고"
								offset = {0}
								placement = "left"
								showArrow
							>							
								<XIconButton
									aria-label="Button"
									color="neutral"
									iconName="file-05"
									shape="square"
									size="large"
									variant="ghost"
								/>
							<XTooltip>
						</li>
						<li>
							<XDivider
								content = "basic"
								placement = "horizontal"
								size = "medium"
								style = {{	
									width :'24px'
									padding :'4px 0',
								}}
							/>
						</li>
						<li>
							<XIconButton
								aria-label="Button"
								color="neutral"
								iconName="file-05"
								shape="square"
								size="large"
								variant="ghost"
							/>
						</li>
						<li>
							<XIconButton
								aria-label="Button"
								color="neutral"
								iconName="file-05"
								shape="square"
								size="large"
								variant="ghost"
							/>
						</li>						
					</ul>
				</div>
				<div>
					<ul>
						<li>
							<XIconButton
								aria-label="Button"
								color="neutral"
								iconName="settings-01"
								shape="circle"
								size="large"
								variant="ghost"
							/>
						</li>
						<li>												
							<XIconButton
								aria-label="Button"
								color="neutral"
								iconName="file-05"
								shape="square"
								size="large"
								variant="ghost"
							/>							
						</li>
					</ul>
				</div>			
			</div>
			
			{ /* 업무 참고 */}
			<XDialog
				className = "custom-edge-pannel"
				open = {openTerm}
				size = "small"
				backgroudOverlay = {false}
				content = "custom"
				alert = {false}
				onOpenChange = {(open) => setOpenTerm(open)}
			>
				<XDialogHeader
					title = {'업무참고'}
					showCloseButton
				/>
				<XDialogBody>
					<XTab
						defaultValue = {0}
						panelPostiton = "bottom"
						placement = "horizontal"
						size = "medium"
						tabPosition = "top"
						variant = "line"						
					>
						<XTab label = "세대정보">
							<div className = "ist-type1>
								<div className = "count-info">
									<p>
										전체 <strong> 5 </strong> 건
									</p>
									<Xbutton
										color = "neutral"
										label = "세대정보 관리"
										variant = "ghost"
										size= "small"
									/>
								</div>
								<ul>
									{generationItems.amp((item, index) => (
										<li key = {index}>
											<div>
												<XIdentigierBadge
													color = "teal"
													content = "text"
													label = {item.relationshop}
													size = "medium"
													tone = "solid"
													style = {{
														backgroundColor : '#fff',
														border : '1px solid #414F7E',
														borderRadius : 4px ,
													}}
												/>
												<p className = "title"> {item.name} </p>
												<p>	
													{item.age}세/{item.sex}
												</p>
												<XDivider
													content = "basic"
													placement = "vertical"
													size = "medium"
													style = {{
														height : '8px'
													}}
												/>
												<p>{item.residentNumber}</p>												
											</div>
											<div className = "sub-info">
												<p>{item.security}</p>
												<XDivider
													content = "basic"
													placement = "vertical"
													size = "medium"
													style = {{
														height : '8px'
													}}
												/>
												<p>{item.jab}</p>
											</div>
										</li>
									))}
								</ul>
							</div>
						</XTab>
						<XTab label = "동의정보">
							<div className = "list-type2">
								<div className = "count-info">
									<p>
										전체 <strong> 5 </strong> 건
									</p>
									<Xbutton
										color = "neutral"
										label = "동의정보 관리"
										variant = "ghost"
										size= "small"
									/>
								</div>
								<ul>
									<li>
										<p> 신용정보처리 표준동의 </p>
										<div>
											<ul>
												<li>
													<span> 동의여부 </span>
													<XIdentifierBadge
														color ="green"
														content = "text"
														label="동의"
														size="medium"
														tone = "light"
													/>
												<li>
												<li>
													<span>동의기간</span> 2024-01-01 ~ 2025-10-20
												</li>
												<li>
													<sapn>동의매체</span>
													<div>
														<span>전화</span>
														<div>
															<span>전화</span>
															<XDivider
																content = "basic"
																placement = "vertical"
																size = "medium"
																style = {{
																	height:'8px'
																}}
															/>
															<span>문자</span>
															<XDivider
																content = "basic"
																placement = "vertical"
																size = "medium"
																style = {{
																	height:'8px'
																}}
															/>
															<span>이메일</span>
														</div>
													</li>
													<li>
														<span> 처리일자/일자</span> 김삼성 / 24-01-10
													</li>
													<li>
														<span>처리경로</span> 모바일
													</li>
												</ul>
											</div>
										</li>
									</ul>
								</div>
							</XTab>
							<XTab label = "변경이력" >
								<div> 변경이력 내용 </div>
							</XTab>
						</XTabs>
					</XDialogBody>
				</XDialog>
			
				{/*  */}
			
			
		</>
	);
};

export default Sidebar;