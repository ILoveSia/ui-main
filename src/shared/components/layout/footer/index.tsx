// ui-main-src-shared-components-layout-footer-index.tsx

import type { IComponent } from '@nova/ui-library/types';
import '@/assets/scss/layout/layout.scss';

interface IFooterProps{

}

const Footer : IComponent<IFooterProps> = () : JSX.Element => {
	return (
		<>
			<footer className="footer">
				<p> COPYRIGHT (C) NFC 2021 </p>
			</footer>
		</>
	);
};

export default Footer;