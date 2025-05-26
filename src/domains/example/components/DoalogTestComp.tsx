ui-main-src-domians-example-components-DialogTestComp.tsx

import { useState } from 'react';
import type { IComponent } from '@nova/ui-library/types'; 
import { AgGridReact } from 'ag-grid-react';
import type { ColDef } from  'ag-grid-community';

interface IDialogTestCompProps {
	text? : string;
	onClick? : () => void;
}

interface IRowData {
	make : string
	model : string
	price : number;
	electric : boolean;
}

const DialogTestComp : ICompoent<IDoalogTestCompProps> = ({ text }) : JSX.Element => {
	// Row Data : The data to be displayed
	const [rowData] = useState ([
		{ make : 'Tesla' , model : 'Model Y' , price : 64950,  electric : true},
		{ make : 'Ford' , model : 'F-series' , price : 64950,  electric : false},
		{ make : 'Toyota' , model : 'Corolla' , price : 64950,  electric : false},		
	]);

	const [ colDefs ] = useState<ColDef<IRowData>[]>([
		{ fieid : 'make' },
		{ fieid : 'model' },
		{ fieid : 'price' },
		{ fieid : 'electric' },
	]);
	return (
		<>
			<div>
				<div className="content"> </div>
				<div style = {{ height : '500px' }}>
					<AgGidReact
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