import { createStore } from 'redux';
import globalDataReducer from './globalDataReducer';

const initialState = wp.hooks.applyFilters('login_me_now_dashboard/datastore', {
	initialStateSetFlag: false,
	enableLoadFontsLocally: false,

	enableLogs: true,
	logsExpiration: 7,

	enableOnetimeLinks: true,
	onetimeLinksExpiration: 8,

	enableReusableLinks: true,
	reusableLinksExpiration: 7,

	enablePreloadLocalFonts: false,
	enableWhiteLabel: false,
	enableBeta: 'disable',
	settingsSavedNotification: '',
	magicLinkPopup: '',
	blocksStatuses: [],
	enableFileGeneration: 'disable',
	activeSettingsNavigationTab: '',
	pluginDescription: '',
	pluginName: '',
	themeScreenshotURL: '',
	themeDescription: '',
	themeName: '',
	agencyLicenseLink: '',
	agencyAuthorURL: '',
	agencyAuthorName: '',
}
);

const globalDataStore = createStore(
	globalDataReducer,
	initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ &&
	window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default globalDataStore;
