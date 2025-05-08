// ui-main-src-shared-components-layout-sidebar-index.ts

import type { IComponent } from '@nova/ui-library/types';
import { XIconButton } from 'opus-x-react-assets';

interface ISidebarProps {

}

const Sidebar : IComponent<ISidebarProps> = (): JSX.Element => {
	return (
		<>
			<div className="sidebar">
				<div>
					<ul>
						<li>
							<XIconButton
								aria-label="Button"
								color="neutral"
								iconName="AI_Logo_Basic"
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
								shape="circle"
								size="large"
								variant="ghost"
							/>
						</li>
						<li>
							<XIconButton
								aria-label="Button"
								color="neutral"
								iconName="star-01"
								shape="circle"
								size="large"
								variant="ghost"
							/>
						</li>
						<li>
							<XIconButton
								aria-label="Button"
								color="neutral"
								iconName="book-open-01"
								shape="circle"
								size="large"
								variant="ghost"
							/>
						</li>
						<li>
							<XIconButton
								aria-label="Button"
								color="neutral"
								iconName="alert-circle"
								shape="circle"
								size="large"
								variant="ghost"
							/>
						</li>
						<li>
							<XIconButton
								aria-label="Button"
								color="neutral"
								iconName="lightbulb-02"
								shape="circle"
								size="large"
								variant="ghost"
							/>
						</li>
						<li>
							<XIconButton
								aria-label="Button"
								color="neutral"
								iconName="info-circle"
								shape="circle"
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
								iconName="message-question-square"
								shape="circle"
								size="large"
								variant="ghost"
							/>
						</li>
					</ul>
				</div>			
			</div>
		</>
	);
};

export default Sidebar;