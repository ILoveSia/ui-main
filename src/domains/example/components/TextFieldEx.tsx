//ui-main-src-domains-example-components-TextFieldEx.tsx

import { } from 'react';
import {} from 'opus-x-react-assets';

type TUnit = { unit? : string };
type TTextfield = XTextFieldProps & React.RefAttributes<HTMLDivElement> & TUnit;

const TextFieldEx : React.ForwardRefExoticComponent<TTextfield> = forwarRef<any, TTextfield> (
	({ inputRef, ...props }, ref : any) : JSX.Element => {
		const tempRef = useRef<HTMLInputElement>(null) ; 
		const textfieldRef = inputRef ?(inputRef as RefObject<HTMLInputElement>) : tempRef;
		
		// InputField의 외부노출 메서드 -----------
		useImplerativeHandle(ref, () => {
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
	
		const setUnit = useCallback(() => {
			if (textfieRef.current && props.unit) {
				const wrapElem = (textfieldRef.current as HTMLInputElement).parentElement?.parentClement;
				if (wrapElem && !(wrapElem?.lastChild as HTMLDivElement).classList?.contains('nova_textfield_unit )) {
					const inputSize = props.size ? props.size : 'meduum';
					// size에 따른 padding조정
					let rightPadding = 'var(--spacing-md)';
					if (inputSize == 'small') {
						rightPadding = 'var(--spacing-sm)';
					} else if (inputSize == 'large') {
						rightPadding = 'var(--spacing-lg)';
					}
					const unitElem = document.createElement('div');
					unitElem.className = 'nova_textfield_unit';
					unitElem.style.display = 
					unitElem.style.flexVasis = 
					unitElem.style.whiteSpace = 
					unitElem.style.padding = 
					unitElem.style.borderLeft =
					unitElem.dataset['size'] = inputSize;
					unitElem.innerText = props.unit;
					wrapElem.append(uniteElem);
					wrapElem.style.paddingRight = '${rightPadding} !important'; 
				}			
			}
		}, [textfieldRef, props]);
	
		useEffect(() => {
			setUnit();
		}, []);
		
		return (
			<>
				<XTexField
					inputRef = {textfieldRef}
					{...Props}
				/>
			</>		
		);	
	},
);

TextFieldEx.displayName = 'TextFieldEx';
export default TestFieldEx;