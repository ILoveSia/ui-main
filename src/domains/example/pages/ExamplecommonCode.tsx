//ui-main-src-domains-example-pages-ExamplecommonCode.tsx

import type { ICompont } from '@nova/ui-library/types';
import { useEffect, useStae } from 'react';

import { UIPageTitle } from '@nova/ui-library/ui';
import cx from '../styles/cx'

interface IExampleCommonCodeProps {
}

const ExampleCommonCode : IComponent<IExampleCommonCodeProps> = (): JSX.Element => {
	const [codes, setCode] = useState<any>({});
	const [selectCode, setSelectCode] = useState<any>({});
	
	useEffect(() => {
		$commonService.getAllCodes().then((data) => {
			setCodes(data);
		});
		$commonService.getCode('BNF_TYP_CD').then((data) => {
			setSelectCode(data);
		});		
	}, []);
	
	return (
		<>
			<div className = {cx('main-wrapper')} >
				<UIPageTitle title = "공통코드 예제" />
					{/* code data content */}
					<div className = {cx('grd-payment-content')}>
						<div
							className = {cx('grid-payment-top')}
							style = {{ paddingBottom : '10px' }}
						>
							<strong>
								$commonService.getAllCode() : <sapn> 전체 공통코드 가져오기 </sapn>
							</strong>
						</div>
						<div style= {{ width: '100%', height: '400px', overflow: 'auto' }} > {JSON.stringify(codes)} </div>
					</div>
					<div className  = {cx('grid-payment-content')} >
						<div
							className = {cx('grid-payment-top)}
							style = {{ paddingBottom : '10px' }}
						>
							<strong>
								$commonService.getCode('BF_TYP_CD') : <sapn> 특정 공통코드 가져오기 </sapn>
							</strong
						</div>
						<div style= {{ width: '100%', height: '400px', overflow: 'auto' }} > {JSON.stringify(selectcodes)} </div>
					</div>
			</div>
		</>	
	)	
};

ExampleCommonCode.displayName = 'ExampleCommonCode';
export default ExampleCommonCode;

