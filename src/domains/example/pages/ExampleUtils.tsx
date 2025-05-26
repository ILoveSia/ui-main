ui-main-src-domains-example-pages-ExampleUtils.tsx

import type { IComponent } from '@nova/ui/ui-library/types';
import { UIPageTitle } from '@nova/ui/ui-library/ui';
import cx from '../styles/cx';

interface IExampleUtilsProps{
}

const ExampleUtils : IComponent<IExampleUtilsProps> = (): JSX.Element => {
	return (
		<>
			<div className = {cx('main-wrapper')} >
				<UIPageTitle title = "$utils 예제" />
				{/* code data content */}
				<div className = {cx('grid-payment-content')} >
					<div
						className = {cx('grid-payment-top')}
						style = {{ paddingBottom :'10px' }}
					>
						<strong> $utils.string 객체</strong>
					</div>
					<hr />
					<div>
						<ul>
							<li>
								<label>
									<strong> $utils.string.isEmpty() : 주어진 문자열이 비어있는지 확인 </strong>
								</label>
								<ul style = {{ paddingLeft : '20px' }} >
									<li>
										$utils.string.isEmpty('') :
										<span style = {{ color : '#0089ff' }}> {JSON.stringify($utils.string.isEmpty(' '))} </span>
									</li>
									<li>
										$utils.string.isEmpty('test') :
										<span style = {{ color : '#0089ff' }}> {JSON.stringify($utils.string.isEmpty('test'))} </span>
									</li>
								</ul>
							</li>
						</ul>
					<div>
				</div>
			</div>
		</>
	);
};

ExampleUtils.displayName = 'ExampleUtils';
export default ExampleUtils;s