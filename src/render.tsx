import { StrictMode, isValidElement } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider as MuiThemeProvider, CssBaseline } from '@mui/material';
import { Global, ThemeProvider as EmotionThemeProvider } from '@emotion/react';

import { IAppConfig, INavigation } from './types';
import { LayoutContextProvider, RoutingProvider } from './context';

export const render = (props: IAppConfig) => {
	const {
		container = 'root',
		basename,
		App,
		Providers = ({ children }) => <>{children}</>,
		strictMode,
		theme,
		styles,
		...rest
	} = props;
	const root = createRoot(document.getElementById(container) as HTMLElement);

	const node = (
		<Router basename={basename}>
			<MuiThemeProvider theme={theme}>
				<EmotionThemeProvider theme={theme}>
					<CssBaseline />
					{ styles ? <Global styles={styles} /> : null}

					<RoutingProvider
						pages={rest.pages}
						name={rest.metadata.short_name}
					>
						<Providers navigation={rest.navigation}>
							{(navigation?: INavigation) => isValidElement(App)
								? <App />
								: (
									<LayoutContextProvider
										{...rest}
										navigation={navigation}
									/>
								)
							}
						</Providers>
					</RoutingProvider>
				</EmotionThemeProvider>
			</MuiThemeProvider>
		</Router>
	);

	root.render(strictMode
		? <StrictMode>{node}</StrictMode>
		: node
	);
};
