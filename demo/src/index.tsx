import { render, TransitionEffect } from 'react-app-layouts';

import { pages, navigation, buildTheme, Providers } from './app';
import metadata from './manifest.json';
import { Logo } from './logo';

render({
	theme: buildTheme(undefined, metadata.theme_color),
	metadata,
	navigation,
	pages,
	version: process?.env?.['VERSION'],
	transitionEffect: TransitionEffect.Slide,
	Providers,
	Icon: <Logo size={40} />,
	settings: {
		header: { shadowElevation: 1 },
		sidebar: { spacedItems: true, width: { collapsed: '55px', expanded: '220px' } },
	},
});
