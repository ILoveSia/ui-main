ui-main-src-domains-example-pages-ExampleGrid.tsx

import type { IComponent } from '@nova/ui-library/types';
import { UIPageTitle } from '@nova/ui-library/ui';

import { useEffect } from 'react';
import loadable from '@loadable/component';
import cx from '../styles/cs';
import { XDivider, XIputLabels, XSelect, XIcon } from 'opus-x-react-assets';
const AgGridTypePy009 = loadable(() => import('@damains/example/components/AgGridTypePy0009'));

interface IExampleGridProps{
}

const ExampleGrid : IComponent<IExampleGridProps> = (): JSX.Element => {
	useEffect(() => {
		// fetch( { option : {method : 'get' } });
	}. []);

	return (
		<>
			<div className={cx('main-wrapper')}>
				<UIPageTitle title= "그리드 예제" >
				<XIcon
					color = "primary"
					iconName = "zoom-in"
					size = "medium"
				/>
				<br/>
				{/* grid content */}
				<div className ={cx('grid-payment-content')} >
					<div className ={cx('grid-payment-top')} >
						<div className ={cx('grid-payment-total')} >
							<p>
								총 <span>1760</span>건
							</p>
							<XDivider
								content = "basic"
								placement = "vertical"
								size = "medium"
								style = {{
									htight : '10ox', 
									marginTop : '3px'
								}}
							/>
							<p>
								총 합계금액 <span> 1,000,000,000 </span> KRW
							</p>
						</div>
						<div>
							<XInputLabels
								content = "text"
								label = "계약내역"
								size = "medium"
								style = {{ marginRight : '8px' , color : '#667085' }}
							/>
							<XSelect
								defaultSelectedValue = "lit1"
								items = {[
									{
										label : '***********1234 희망든든보험',
										value : 'lit1',
									},
									{
										label : '***********1234 희망든든보험',
										value : 'lit2',
									},
									{
										label : '***********1234 희망든든보험',
										value : 'lit3',
									}
								]}
								leadingIconName = ""
								mode = "single"
								size = "medium"
								variant = "outline"
								style = {{ width : '260px' }}
							/>
						</div>
					</div>
					<AgGridTypePy009 />
				</div>
			</div>
		</>
	);
}
