// ui-main-src-shared-components-layout-header-index.tsx

import type { ICompont } from '@nova/ui-library/types';
import { XIconButton, XSearchBar, XAvatar, XStatusBadge } from 'opus-x-react-assets';
import logo from '@/assets/images/icons/logo/svg';

import RouterMenu from '../temporary/RouterMenu';

interface IHeaderProps {

}

const Header : IComponent<IHeaderProps> = (): JSX.Element => {
	return (
		<>
			<header className="header">
				<div className="header-left">
					<img
						src={logo}
						alt=""
					/>
					<XIconButton
						aria-label="Button"
						color="neutral"
						iconName="star-01_solid"
						shape="circle"
						size="large"
						variant="ghost"
					/>
					<ul className="menu">
						<li>신계약</li>
						<li>계약변경</li>
						<li>입출금</li>
						<li>일반지급</li>
						<li>사고지급</li>
						<li>보험계약대출</li>
						<li>고객관리</li>
						<li>상품관리</li>
						<li>시스템관리</li>
						<li>
							<RouterMenu />
						</li>
					</ul>
				</div>
				<div className ="header-right">
					<XIconButton
						aria-label="Button"
						color="neutral"
						iconName="menu-01"
						shape="circle"
						size="large"
						variant="ghost"
					/>
					<XSearchBar
						defaultValue=""
						leadingIconName="search-md"
						onImageSearchButtonClick={function ks() {}}
						onValueChange={funtion ks() {}}
						onVoiceInputButtonClick={function fs() {}}
						placeholder="Search"
						value=""
					/>
					<XAvatar
						color= "default"
						content = "image"
						imageSrc = "image/avatar_image.png"
						size = "medium"
						stype={{
							width :65,
						}}
					/>
					<XIconButton
						aria-label="Button"
						color="neutral"
						iconName="layout-alt-04"
						shape="circle"
						size="large"
						variant="ghost"
					/>
					<XIconButton
						aria-label="Button"
						color="neutral"
						iconName="layout-alt-01"
						shape="circle"
						size="large"
						variant="ghost"
					/>
					<XStatusBadge
						label=""
						leadingIconName=""
						shape="pill"
						size="medium"
						status="default"
						tone="solid"
						style={{
							width :90,
						}}
					/>
				</div>
			</header>
		</>	
	);
};

export default Header;