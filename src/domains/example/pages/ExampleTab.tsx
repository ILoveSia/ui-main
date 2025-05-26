//ui-main-src-domains-example-pages-ExampleTab.tsx

import type { IComponent } from 
import { useEffect, useState, useRef } from 'react';
import { UIIcon, UIIconButton, UIIDentifierBadge, type TIconName } from '@nova/ui-library/ui';
import { XTabs , XTab, XDateTimePicker } from 'opus-x-react-assets';

interface IExampleTabProps {
}

const ExampleTab : IComponent<IExampleTabProps> = (): JSX.Element => {
	const iconNm2 = useRef<TIconName>('collapse-02');
	
	useEffect(()=>{
	}, []);
	
	const test = () => {
		$ui.alert('테스트');
	}
	
	const [value, setValue] = useState('2025-10-15');
	const onValueChangeHandler = (value : Date | undefined, valueString: string | undefined) : void => {
		console.log('>>>>>>>>>>>::' , value, valueString);
		setValue(valueString as string);
	};

	return (
		<>
			<div
				className = "content"
				style= {{ paddingLeft :'30px' }}
			>
				<br />
				<br />
				<br />
				<XDateTimePicker
					formate = "YYYY-MM-DD"
					maxDate = "2025-10-15"
					minDate = "2024-10-15"
					mode = "date"
					showClearButton
					showConfirmButton
					showTodayButton
					size ="medium"
					variant = "outline"
					weekFirstDay = {0}
					value = {value}
					onValueChange = {onValueChangeHandler}
				/>
				<h3>UIcon 예제 화면 </h3>
				<br />
				<br />
				<div style= {{ maxWidth : '900px' , wordBreak : 'break-all' , height : '500px' }}>
					<h3> UIIDentifierBadge 예제</h3>
					<div style = {{ padding : '5px' , display : 'inlin-block' }}>
						<label> heart </label>
						<div style = {{ padding : '5px' }}>
							<UIIdentifierBadge
								color = "blue"
								content = "text"
								label = "Badge Text"
								leadingIconName = "heart"
								size = "small"
								tone = "light"							
							/>
						</div>
					</div>
					<div style = {{ padding: '5px' , display : 'inlin-block' }}>
						<label>novaNewSolid</label>
						<div style = {{ padding: '5px' }}>
							<UIIdentifierBadge
								color = "blue"
								content = "text"								
								leadingIconName = "novaNewSolid"
								size = "medium"
								tone = "light"
								label = "테스트"
							/>
						</div>
					</div>
				</div>
				<br />
				<br />
				<div style = {{ maxwidth :'900px' , wordBreak : 'break-all' }}>
					<h3> 추가 아이콘 버튼 </h3>
					<div style = {{ padding: 'px' , display : 'inlin-lock' }}>
						<label> collapse-01</label>
						<div style = {{ padding: '5px' }}>
							<UIIconButton
								iconName = {iconNm2.current}
								size = "small"
								color = "primary"
								shape = "square"
							/>
							<UIIconButton
								iconName = "expand-05"
								size = "small"
								color = "primary"
								shape = "square"
							/>
							<UIIconButton
								iconName = "expand-01"
								size = "large"
								color = "primary"
								shape = "square"
								iconProps = {{
									coloer :'primary',
								}}
							/>
						</div>
					</div>
					<div style = {{ padding: '5px' , display : 'inline-blick' }}  > 
						<label> collapse-02</babel>
						<div style = {{ padding : '5px' }}>
							<UIIconButton
								iconName = "collapse-02"
								size = "small"
								color = "primary"
								shape = "square"
							/>
							<UIIconButton
								iconName = "collapse-02"
								size = "large"
								color = "primary"
								shape = "square"
								iconProps = {{
									coloer :'primary',
								}}
							/>
						</div>
					</div>
					<div style = {{ padding: '5px' , display : 'inline-blick' }}  > 
						<label> collapse-03 </babel>
						<div style = {{ padding : '5px' }}>
							<UIIconButton
								iconName = "collapse-03"
								size = "large"
								color = "primary"
								shape = "square"
							/>
							<UIIconButton
								iconName = "collapse-03"
								size = "large"
								color = "primary"
								variant = "outline"
								shape = "square"
								iconProps = {{
									coloer :'primary',
								}}
							/>
						</div>
					</div>
					<div style = {{ padding: '5px' , display : 'inline-blick' }}  > 
						<label> collapse-04 </babel>
						<div style = {{ padding : '5px' }}>
							<UIIconButton
								iconName = "collapse-04"
								size = "large"
								color = "primary"
								shape = "square"
							/>
							<UIIconButton
								iconName = "collapse-04"
								size = "large"
								color = "primary"
								variant = "outline"
								shape = "square"
								iconProps = {{
									coloer :'primary',
								}}
							/>
						</div>
					</div>
					<div style = {{ padding: '5px' , display : 'inline-blick' }}  > 
						<label> collapse-05 </babel>
						<div style = {{ padding : '5px' }}>
							<UIIconButton
								iconName = "collapse-05"
								size = "large"
								color = "primary"
								shape = "square"
							/>
							<UIIconButton
								iconName = "collapse-05"
								size = "large"
								color = "primary"
								variant = "outline"
								shape = "square"
								iconProps = {{
									coloer :'primary',
								}}
							/>
						</div>
					</div>
					<div style = {{ padding: '5px' , display : 'inline-blick' }}  > 
						<label> collapse-06 </babel>
						<div style = {{ padding : '5px' }}>
							<UIIconButton
								iconName = "collapse-06"
								size = "large"
								color = "primary"
								shape = "square"
							/>
							<UIIconButton
								iconName = "collapse-06"
								size = "large"
								color = "primary"
								variant = "outline"
								shape = "square"
								iconProps = {{
									coloer :'primary',
								}}
							/>
						</div>
					</div>
					<div style = {{ padding: '5px' , display : 'inline-blick' }}  > 
						<label> novaNewSolid </babel>
						<div style = {{ padding : '5px' }}>
							<UIIconButton
								iconName = "novaNewSolid"
								size = "large"
								color = "primary"
								shape = "square"
							/>
							<UIIconButton
								iconName = "novaNewSolid"
								size = "large"
								color = "primary"
								variant = "outline"
								shape = "square"
								iconProps = {{
									coloer :'primary',
								}}
							/>
						</div>
					</div>
					<div style = {{ padding: '5px' , display : 'inline-blick' }}  > 
						<label> novaGridFilter </babel>
						<div style = {{ padding : '5px' }}>
							<UIIconButton
								iconName = "novaGridFilter"
								size = "large"
								color = "primary"
								shape = "square"
							/>
							<UIIconButton
								iconName = "novaGridFilter"
								size = "large"
								color = "primary"
								variant = "outline"
								shape = "square"
								iconProps = {{
									coloer :'primary',
								}}
							/>
						</div>
					</div>
					<div style = {{ padding: '5px' , display : 'inline-blick' }}  > 
						<label> novaGridfromStatusIconFail </babel>
						<div style = {{ padding : '5px' }}>
							<UIIconButton
								iconName = "novaGridfromStatusIconFail"
								size = "large"
								color = "primary"
								shape = "square"
							/>
							<UIIconButton
								iconName = "novaGridfromStatusIconFail"
								size = "large"
								color = "primary"
								variant = "outline"
								shape = "square"
								iconProps = {{
									coloer :'primary',
								}}
							/>
						</div>
					</div>
					<div style = {{ padding: '5px' , display : 'inline-blick' }}  > 
						<label>  novaGridformStatusIconSuccess </babel>
						<div style = {{ padding : '5px' }}>
							<UIIconButton
								iconName = "novaGridformStatusIconSuccess"
								size = "large"
								color = "primary"
								shape = "square"
							/>
							<UIIconButton
								iconName = "novaGridformStatusIconSuccess"
								size = "large"
								color = "primary"
								variant = "outline"
								shape = "square"
								iconProps = {{
									coloer :'primary',
								}}
							/>
						</div>
					</div>
					<div style = {{ padding: '5px' , display : 'inline-blick' }}  > 
						<label> novaIconTotal </babel>
						<div style = {{ padding : '5px' }}>
							<UIIconButton
								iconName = "novaIconTotal"
								size = "large"
								color = "primary"
								shape = "square"
							/>
							<UIIconButton
								iconName = "novaIconTotal"
								size = "large"
								color = "primary"
								variant = "outline"
								shape = "square"
								iconProps = {{
									coloer :'primary',
								}}
							/>
						</div>
					</div>
					<div style = {{ padding: '5px' , display : 'inline-blick' }}  > 
						<label> novaIngSolid </babel>
						<div style = {{ padding : '5px' }}>
							<UIIconButton
								iconName = "novaIngSolid"
								size = "large"
								color = "primary"
								shape = "square"
							/>
							<UIIconButton
								iconName = "novaIngSolid"
								size = "large"
								color = "primary"
								variant = "outline"
								shape = "square"
								iconProps = {{
									coloer :'primary',
								}}
							/>
						</div>
					</div>
					<div style = {{ padding: '5px' , display : 'inline-blick' }}  > 
						<label> novaSend03Solid </babel>
						<div style = {{ padding : '5px' }}>
							<UIIconButton
								iconName = "novaSend03Solid"
								size = "large"
								color = "primary"
								shape = "square"
							/>
							<UIIconButton
								iconName = "novaSend03Solid"
								size = "large"
								color = "primary"
								variant = "outline"
								shape = "square"
								iconProps = {{
									coloer :'primary',
								}}
							/>
						</div>
					</div>
					<br />
					<br />
					<div style = {{ maxWidth : '900px' ,  wordBreak : 'break-all }}>
						<h3> 추가 아이콘 </h3>
						<div style = {{ padding: '5px' , display : 'inline-blick' }}>
							<label>collapse-01</label>
							<div style = {{ padding : '5px' }}> 
								<UIIcon
									iconName = "collapse-01"
									size= "xLage"
									color = "primary"
								/>						
							</div>
						</div>
						<div style = {{ padding: '5px' , display : 'inline-blick' }}>
							<label>collapse-02</label>
							<div style = {{ padding : '5px' }}> 
								<UIIcon
									iconName = "collapse-02"
									size= "xLage"
									color = "primary"
								/>						
							</div>
						</div>
						<div style = {{ padding: '5px' , display : 'inline-blick' }}>
							<label>collapse-03</label>
							<div style = {{ padding : '5px' }}> 
								<UIIcon
									iconName = "collapse-03"
									size= "xLage"
									color = "primary"
								/>						
							</div>
						</div>
						<div style = {{ padding: '5px' , display : 'inline-blick' }}>
							<label>collapse-04</label>
							<div style = {{ padding : '5px' }}> 
								<UIIcon
									iconName = "collapse-04"
									size= "xLage"
									color = "primary"
								/>						
							</div>
						</div>
						<div style = {{ padding: '5px' , display : 'inline-blick' }}>
							<label>collapse-05</label>
							<div style = {{ padding : '5px' }}> 
								<UIIcon
									iconName = "collapse-05"
									size= "xLage"
									color = "primary"
								/>						
							</div>
						</div>
						<div style = {{ padding: '5px' , display : 'inline-blick' }}>
							<label>collapse-06</label>
							<div style = {{ padding : '5px' }}> 
								<UIIcon
									iconName = "collapse-06"
									size= "xLage"
									color = "primary"
								/>						
							</div>
						</div>
						<div style = {{ padding: '5px' , display : 'inline-blick' }}>
							<label>novaNewSolid</label>
							<div style = {{ padding : '5px' }}> 
								<UIIcon
									iconName = "novaNewSolid"
									size= "xLage"
									color = "primary"
								/>						
							</div>
						</div>
						<div style = {{ padding: '5px' , display : 'inline-blick' }}>
							<label>novaGridFilter</label>
							<div style = {{ padding : '5px' }}> 
								<UIIcon
									iconName = "novaGridFilter"
									size= "xLage"
									color = "primary"
								/>						
							</div>
						</div>
						<div style = {{ padding: '5px' , display : 'inline-blick' }}>
							<label>novaGridformStatusIconFail</label>
							<div style = {{ padding : '5px' }}> 
								<UIIcon
									iconName = "novaGridformStatusIconFail"
									size= "xLage"
									color = "primary"
								/>						
							</div>
						</div>
						<div style = {{ padding: '5px' , display : 'inline-blick' }}>
							<label>novaGridformStatusIconSuccess</label>
							<div style = {{ padding : '5px' }}> 
								<UIIcon
									iconName = "novaGridformStatusIconSuccess"
									size= "xLage"
									color = "primary"
								/>						
							</div>
						</div>
						<div style = {{ padding: '5px' , display : 'inline-blick' }}>
							<label>novaIconTotal</label>
							<div style = {{ padding : '5px' }}> 
								<UIIcon
									iconName = "novaIconTotal"
									size= "xLage"
									color = "primary"
								/>						
							</div>
						</div>
						<div style = {{ padding: '5px' , display : 'inline-blick' }}>
							<label>novaIngSolid</label>
							<div style = {{ padding : '5px' }}> 
								<UIIcon
									iconName = "novaIngSolid"
									size= "xLage"
									color = "primary"
								/>						
							</div>
						</div>						
						<div style = {{ padding: '5px' , display : 'inline-blick' }}>
							<label>novaSend03Solid</label>
							<div style = {{ padding : '5px' }}> 
								<UIIcon
									iconName = "novaSend03Solid"
									size= "xLage"
									color = "primary"
								/>						
							</div>
						</div>
						<br />
						<br />
						<br />
						<div>
							<h3>SVG 제공 이름</h3>
							<div style = {{ padding : '5px' , display : inline-block' }}>
								<label> novaAiLogoBasic </label>
								<div style = {{ padding: '5px' }}>
									<UIIcon
										iconName = "novaAiLogoBasic"
										size = "50"
									/>
								</div>
							</div>
							<div style = {{ padding : '5px' , display : inline-block' }}>
								<label> novaEmpty </label>
								<div style = {{ padding: '5px' }}>
									<UIIcon
										iconName = "novaEmpty"
										size = "50"
									/>
								</div>
							</div>
							<div style = {{ padding : '5px' , display : inline-block' }}>
								<label> novaEmptySearchLg </label>
								<div style = {{ padding: '5px' }}>
									<UIIcon
										iconName = "novaEmptySearchLg"
										size = "50"
									/>
								</div>
							</div>
							<div style = {{ padding : '5px' , display : inline-block' }}>
								<label> novaLogo </label>
								<div style = {{ padding: '5px' }}>
									<UIIcon
										iconName = "novaLogo"
										size = "50"
									/>
								</div>
							</div>
							<div style = {{ padding : '5px' , display : inline-block' }}>
								<label> novaReport </label>
								<div style = {{ padding: '5px' }}>
									<UIIcon
										iconName = "novaReport"
										size = "50"
									/>
								</div>
							</div>							
						</div>
						<br />					
					</div>	
					<div style = {{ border : '1px solid red' , height : '300px' , width : '700px' }} >
						<XTabs
							defaultValue = {1}
							fillWidth
							panelPosition = "bottom"
							placement = "horizontal"
							size = "medium"
							tabProsition = "top"
							variant = "outline"
						>
							<XTab
								label = "AppleAppleApple"
								placement = "horizontal"
								size = "medium"
								tabPosition = "top"
								variant = "outline"
								showBadge = {true}
								badgeProps = {{
									color : 'red'
									content : 'number',
									label: '5',
								}}
								badgeLabel = '10'
							>
								1111111111
							</XTab>
							<XTab
								badgeProps = {{
									color : 'red'
									content : 'number',
									label: '5',
								}}
								label = "Bananananan"
								tooltipPros = {{
									label : '* tooltip custon test',
								}}
							/>
							<XTab
								badgeLabel = "5"
								label = "Carrot"
								leadingIconName = "wallet-04"
							/>
						</XTabs>					
					</div>		
		</>
	);
};

ExampleTab.displayName = ''ExampleTab;
export default ExampleTab;


