//ui-main-src-domains-example-components-AutocompleteEx.tsx

import { useEffect , useRef , forwardRef , useImperativeHandle, type RefObject, useCallback, useState, act } from 'react';
import { XTextField, type XTextFieldProps } from 'opus-x-react-assets';

interface IAutocompleteExProps {

}
type TTextfield = XTextFieldProps & React.RefAttributes<HTMLDivElement> & IAuocompleteExProps;

const AutocompleteEx :  React.ForwardRefExoticComponent<TTextfieid> = forwardRef<any, TTextfield> (
	({ inputRef , suggestions , onSelect , onKeyDown , onChange, ...props }, ref : any) : JSX.Element => {
		const tempRef = useRef<HTMLInputElement>(null);
		const textfieldRef = inputRef ? (inputRef as RefObject<HTMLInputElement>) : tempRef;
		
		const [value, setValue] = useState('');
		const [] = useState<string[]>([]);
		const [] = useState(false);
		const [] = useState(-1);
		const suggestionsRef = useRef<HTMLUListElement>(null);

		// UITextField의 외부노출 메서드 -----------------
		useImperativeHandle(ref, () => {
			return {
				validate : () => {
					console.log('call textfield validate!!!');
				},
				initValidate : () => {
					console.log('call textfield initValidate!!!');
				},
				forcus : () => {
					console.log('call textfield forcus!!!');
				},
			};
		});
		
		const setUnit = useCallback(() => {
			if (textfieldRef.current && props.unit) {
				const wrapElem = (textfieldRef.current as HTMLInputElement).parentElement?.parentElement;
				const inputElem = textfieldRef.current;
				
				if (wrapElem && !(wrapElem?.lastChild as HTMLDivElement).classList?.contains('nova_testfield_unit') ) {
					const inputSize = props.size ? props.size : 'medium';
					// size에 따른 padding , frontSize, input-margin조정
					let leftPadding = 'var(--spacing-md)';
					let fontSize = 'var(--front-size-md)';
					let inputMargin = 'var(--spacing-sm)';
					if (inputSize === 'small') {
						leftPadding = 'var(--spacing-sm)';
						fontSize =  'var(--front-size-sm)';
						inputMargin =  'var(--spacing-xs)';
					} else if (inputSize === 'large') {
						leftPadding =  'var(--spacing-sm)';
						fontSize =  'var(--spacing-sm)';
					}
					inputElem.style.margin = '0${inputMargin}' ;
					
					const unitElem = document.createElement('div');
					unitElem.className = 'nova_textfield_unit';
					unitElem.style.display = 'flex';
					unitElem.style.alignItems = 'center';
					unitElem.style.flexBasis = 'content';
					unitElem.style.whiteSpace = 'nowrap';
					unitElem.style.padding = '0'
					unitElem.dataset['size'] = inputSize;
					unitElem.innerHTML = '<div class="textField__divider textField__vertical divider__root" data-szie="medium" data-no-padding="" data-vertical = "" ><div class="divider__wrap"> <div class="divider__line"></div></div></div><span style="padding : 0 0 0 ${leftPadding}; font-size:${fontSize}">${props.unit}</span>';
					wrapElem.append(unitElem);
					wrapElem.style.paddingRight = '${leftPadding} !important' ;
				}			
			}		
		}, [textfieldRef , props]);
		
		useEffect( () => {
			setUnit();
			
			const handleClickOutside = (e: MouseEvent) => {
				if (
					textfieldRef.current &&
					textfieldRef.current.conatins(e.target as Node) &&
					suggestionRef.current &&
					suggestionRef.current?.contains(e.target as Node)
				) {
					setShowSuggestions(false);
				}
			};
			
			document.addEventListener('mousedown' , handleClickOutside);
			return () => {
				document.removeEventListener('mousedown' , handleClickOutside);
			};			
		}, []);
		
		useEffect( () => {
			if (value?.trim() === '') {
				setFilteredSuggestions([]);
				return
			}
			
			const filtered = suggestions?.filter((suggestion) => {
				return suggestion.toLowerCase().includes(value?.toLowCase());
			});
			
			setFilteredSuggestions(filtered as string[]);
			console.log('event 이팩트 이벤드 :::: ');
			setShowSuggestions(ture);
			setActiveIndex(-1);			
		}, [value, suggestions]);
		
		const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
			console.log(' event change :::: ' , e.target);
			setValue(e.target.value);
			if (onChange) {
				onChange(e);
			}		
		};
		
		const onKeyDownHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
			console.log(' event change :::: ' , e.key);
			if (onKeyDown) {
				onKeyDown(e);
			}
			if (!showSuggestions || filteredSuggetsions.length === 0) {
				return;
			}
			if (e.key === 'ArrownDown' ) {
				e.preventDefault();
				setActiveIndex((prev) => {
					return filteredSuggestions.length -1 ? prev +1 : 0;
				});
			} else if (e.key === 'ArrownUp ) {
				e.preventDefault();
				setActiveIndex((prev) => {
					return prev > 0 ? prev -1 : filteredSuggestions.lenght -1;
				});
			} else if (e.key === 'Enter' ) {
				e.preventDefault();
				if (activeIndex >= 0) {
					selectHandler (filteredSuggestions[activeIndex]);
				}
			} else if (e.key === 'Escape' ) {
				setShowSuggestions(false);
			}			
		};
		
		const onFocusHandler = ( e : any) => {
			console.log( e.target);
			if (onFocus) {
				onFocus(e);
			}
		};
		
		const selectHandler = (suggestion : string) => {
			setValue(suggestion);
			console.log('event 선택이벤트 :::');
			setShowSuggestions(false);
			if (onSelect) {
				onSelect(suggetsion);
			}
			if (textfieldRef.current) {
				textfieldRef.current.blur();
			}
		};
		
		return (
			<>
				<div>
					<XTextFieid
						inputRef = {textfieldRef}
						onChange = {onChangeHandler}
						value = {value}
						{...props}
					/>
					{showSuggestions && filteredSuggestions.length > 0 && (
						<ul
							ref = {suggestionsRef}
							style = {{ border :  '1px solid red' }}
							role = "autocomplete"
						>
							{filteredSuggestions.map((suggestion, index) =>  (
								<li
									style = { { border : '1px solid blue' , padding : '4px' } }
									role = "presentation"
									key={suggestion}
									onClick = {() => selectHandler(suggestion)}
								>
									<button
										tabIndex = [-1}
										role = "autocompleteItem"
									>
										{suggestion}
									</button>
								</li>
							))}					
						</ul>
					)}					
				</div>
			</>
		);		
	},
);

AutocompleteEx.displayName = 'AutocompleteEx';
export default AutocompleteEx;