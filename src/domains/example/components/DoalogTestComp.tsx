// ui-main-src-domains-example-components-DialogTestComp.tsx

import { useState } from 'react';
import type { IComponent } from '@nova/ui-library/types';
import { AgGridReact } from 'ag-grid-react';
import type { ColDef } from 'ag-grid-community';

interface IDialogTestComProps {
	text? : string;
	onClick? :() => void;
}

interface IRowData {
	make : string;
	model : string;
	price : number;
	electric : boolean;
}

const DialogTestComp : IComponent<IDialogTestComProps> = ({text}) : JSX.Element => {
	// Row Data : The data to be displayed.
	const [rowData] = useState ([
		{ make : 'Tesla' , model : 'Model Y' , price : 64950, electric : true },
		{ make : 'Ford' , model : 'F-Series' , price : 38350, electric : false },
		{ make : 'Toyota' , model : 'Corolla' , price : 29600, electric : false },
	]);
	
	// Column Definitions : Defines the colums to be displayed.
	const [colDefs] = useState<ColDef<IRowData>[]>([
		{ filed : 'make' },
		{ filed : 'model },
		{ filed : 'price' },
		{ filed : 'electric },
	]);
	return (
		<>
			<div>
				<div className = "content">호스트 메인 화면!!!  {text}</div>
				<div style = {{ height: '500px' }}>
					<AgGridReact
						rowData = {rowData}
						columnDefs = {colDefs}
					/>
				</div>
			</div>
		</>
	);
};

DialogTestComp.displayName = 'DialogTestComp';
export default DialogTestComp;

