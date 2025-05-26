//ui-main-src-domains-example-pages-ExampleToast.tsx

import type { IComponent } from '@nova/ui-library/types';
import { XButton } from 'opus-x-react-assets';
import { UIPageTitle } from '@nova/ui/ui-library/ui';
import cx from '../styles/cx';

interface IExampleToastProps {
}

const ExampleToast : IComponent<IExampleToastProps> = (): JSX.Element => {
	const item = {
		message : '토스트 테스트'
		leadingIconName :'heart',
	};
	
	const onClickHandler = () => {
		$ui.toast(item);
	};
	
	return (
		<>
			<div className = {cx('main-wrapper')} >
				<UIPageTitle title="UIToast 예제" />
				{/* code data content */}
				<div className = {cx('grid-payment-content')}>
					<div	
						className = {cx('grid-payment-top')}
						style = {{ paddingBottom : '10px' }}
					>
						<strong>
							UIToast :  <span> 사용예 </span>
						</strong>
					</div>
					<div>
						<XButton onClick = {onClickHandler} > 토스트 열기 </XButton>
					</div>					
				</div>				
			</div>
		</>
	);
};

ExampleToast.displayName = 'ExampleToast';
export default ExampleToast;