import { PropsWithChildren, ReactElement } from 'react';

import { Theme } from '@mui/material';

import { IManifest, INavigation, IPageConfig, ISettings, Subset, TransitionEffect } from './';

export interface IAppConfig {
	container?: string;
	basename?: string;
	strictMode?: boolean;
	theme: Theme;
	Icon?: JSX.Element;
	transitionEffect?: TransitionEffect;
	metadata: IManifest;
	navigation?: INavigation;
	settings?: Subset<ISettings>;
	pages: IPageConfig[];
	App?: () => ReactElement;
	Providers?: (props: PropsWithChildren<unknown>) => ReactElement;
	version?: string | ReactElement;
}
