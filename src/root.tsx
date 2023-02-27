// @refresh reload
import { createEffect, createSignal, Suspense } from 'solid-js';
import {
	Body,
	ErrorBoundary,
	Head,
	Html,
	Link,
	Meta,
	Scripts,
	Title,
} from 'solid-start';
import { createI18nContext, I18nContext } from '@solid-primitives/i18n';
import { languageDict } from './lib/language';
import { App } from './components/App';
import { QueryClient, QueryClientProvider } from '@tanstack/solid-query';
import { darkTheme } from './styles/themes/dark.css';
import { lightTheme } from './styles/themes/light.css';
import { setElementVars } from '@vanilla-extract/dynamic';
import { themeVars } from './styles/themes/base.css';

const queryClient = new QueryClient();
export const [themeMode, setThemeMode] = createSignal('dark');

export default function Root() {
	// eslint-disable-next-line
	// @ts-ignore
	let html;
	const value = createI18nContext(languageDict, 'en');
	//eslint-disable-next-line
	// @ts-ignore
	createEffect(() => setElementVars(html, themeVars, themeMode() === 'dark' ? darkTheme : lightTheme));

	return (
		<Html lang="en" ref={html}>
			<Head>
				<Title>Morevi.ge</Title>
				<Meta charset="utf-8" />
				<Meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta name="description" content="Morevi.Ge Main Page" />
				<Link rel="preload" href="/fonts/Oxanium/Oxanium-VariableFont_wght.ttf" as="font" crossOrigin='anonymous' />
			</Head>
			<Body>
				<Suspense>
					<ErrorBoundary>
						<I18nContext.Provider value={value}>
							<QueryClientProvider client={queryClient}>
								<App />
							</QueryClientProvider>
						</I18nContext.Provider>
					</ErrorBoundary>
				</Suspense>
				<Scripts />
			</Body>
		</Html>
	);
}
