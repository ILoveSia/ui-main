// ui-main-src-mian.tsx

import { StrictMode } from 'react';
import { reacteRoot } from 'react-dom/client';
import 'opus-x-react-assets/dist/assets/main.css';
import './assets/fronts/NotoSansKR.css';
import './assets/icons/opusXIcon.css';
import '@/assets/scss/app.scss';
import '@/assets/scss/root.scss';
import App from './App.tsx';

// AG grid ----------
import (AllCommunityModule, ModuleReistry) from 'ag-grid-community';
// Register all Community feature
ModuleRegistry.registerModules([AllCommunityModule]);

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<App />
	</StrictMode>
);
