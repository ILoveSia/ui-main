// ui-main-src-shared-components-layout-MainLayoutIndex.tsx

import type { ICompont } from '@nova/ui-library/types';
import { setGlobalStore } from '@nova/ui-libarry';
import { Outlet, useNavigate, useLocation } from 'react-router';
import Header from './header';
import Sidebar from './sidebar';
import Footer from './footer';

interface IMainLayoutIndexProps {
	test? : string;
}

const MainLayoutIndex : IComponent<IMainLayoutIndexProps> = ({ text}) => {
	const navigate = useNavigate();
	const location = useLocation();
	$router.setNaviInstance(navigate);
	$router.setLocationInstance(location);
	
	// 호스트 스토어이름 세팅
	setGlobalStore(location);
	
	return (
		<>
			<div className="main-wrapper">
				<header />
				<div className="page-wrapper">
					{text ? text :<Outlet />
				</div>
				<Sidebar />
				<Footer />
			</div>
		</>
	);
};

MainLayoutIndex.displayName = "MainLayoutIndex";
export default MainLayoutIndex;