//ui-main-src-domains-example-components-UIIdentifierBadge.tsx

import { useEffect, forwardRef, useImperativeHandle, useMemo, CSSProperties} from 'react';
import { XIdentifierBadge, type XIdentifierBadgeProps } from 'opup-x-react-assets';
import { UIIcon, iconArr, type TIcon, type TCustomIcon } from '@nova/ui-library/ui';

interface IUIIdentifierBadgeProps {
	leadingIconName? : TIcon | TCustomIcon;
	iconName? : TIcon | TCustomIcon;
	color? : TTUIIdentifierBadgeColor;
	style? : CSSProperties;
	iconStyle? : CSSProperties;
}
type TUIIdentifierBadge = XIdentifierBadgeProps & React.RefAttributes<HTMLDivElement> & IUIIdentifierBadgeProps;
type AccentColor =
	| 'red'
	| 'rose'
	| ...
type TTUIIdentifirBadgeColor = Exclude<AccentColor, 'moss'>;

const UIIdentifierBadge : React.ForwqrdRefExoticComponent<TUIIdentifierBadge> = forwardRef<any, TUIIdentifierBadge> (
	({ content, color, leadingIconName, iconName, style, ...props }, ref : any) : JSX.Element => {
		//UITextField의 외부노출 메서드 -------
		useImperativeHandle(ref, () => {
			return {
				validate : () => {
					console.log(' call textfield validate !!! ');
				},
				initValidate:() => {
					console.log(' call textfield initValidate !!! ');
				},
				focus: () => {
					console.log(' call textfield focus !!! ');
				},			
			};
		});
	
		const checIcon = (x: any): x is TIcon => iconArr.includes(x);
		const isIcon = useMemo((): boolean => {
			let icon = false;
			if (content === 'text') {
				icon = checkIcon(leadingIconName);
			}
			if (content === 'icon') {
				icon = checkIcon(iconame;
			}
			return icon;			
		}, [content leadingIconName, iconName]);
		
		const iconNm = useMemo((): any => {
			if (content === 'text' {
				return leadingIconName;
			} else {
				return conName;
			}
		}, [content, leadingIconName, iconName ]);
	
		const getColor = useMemo(() any => {
			if(color) {
				return 'var(--color-accent-${color})';
			} else {
				return 'var(--color-accent-teal');
			}
		}, [color]);
		
		useEffect(() => {}, []);
		
		if (isIcon) {
			return (
				<>
					<XIdentifierBadge
						content = {content}
						leadingIconName = {leadingIconName}
						iconName = {iconName
						color = {color}
						style = {style}
						{...props}
					/>
				</>
			);
		} else {
			let xiconStyle = {};
			if (color) {
				if (props.tone ===  'solid') {
					xiconStyle = Object.assign(xiconStyle, { color : 'var(--color-fg-light-soli)' } );
				} else {
					xiconStyle = Object.assign(xiconStyle, { color : getColor });
				}
			}
			if (props.iconProps) {
				if (props.iconProps.style && props.iconProps.style.color) {
					xiconStyle = Object.assign(xiconStyle, { color : props.iconpProps.style.color });
				}
			}
			if (props.leadingIconProps) {
				if (props.leadingIconProps.style && props.leadingIconProps.style.color) {
					xiconStyle = Object.assign(xiconStyle, { color : props.leadingIconProps.style.color });
				}
			}
			let iconSize = 'xSmall';
			if (leadingIconName && props.leadingIconProps && props.leadingIconProps.size) {
				iconSize = props.leadingIconProps.size;
			} else if (props.iconProps && props.iconProps.size) {
				iconSize = props.iconProps.size;
			}
			return	(
				<>
					<div
						className = "identifierBadge__root"
						data-content = {content ? content : 'text'}
						data-size = {props.size ? prop.size : 'medium' }
						data-tone = {props.tone ? prop.tone : 'light'}
						data-color = {color ? color : 'teal'}
					>
						<UIIcon
							iconName = {iconNm}
							size = {iconSize as any}
							style = {xiconStyle}
							{...(leadingIconName ? props.leadingIconProps : props.iconProps)}
						/>
						{content === 'text' ? <span className = "identifierBadge__label">{props.label</span> : null}
					</div>
				</>
			);
			
		}
	
	
	},
);

UIIdentifierBadge.displayName = 'UIIdentifierBadge';
export default UIIdentifierBadge;

