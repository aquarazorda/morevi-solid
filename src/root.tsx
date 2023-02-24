// @refresh reload
import { Suspense } from "solid-js";
import {
  Body,
  ErrorBoundary,
  Head,
  Html,
  Meta,
  Link,
  Scripts,
  Title,
} from "solid-start";
import { createI18nContext, I18nContext } from "@solid-primitives/i18n";
import { languageDict } from './modules/language';
import { App } from './components/App';

export default function Root() {
  const value = createI18nContext(languageDict, "en");

  return (
    <Html lang="en">
      <Head>
        <Title>Morevi.ge</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <Link rel='stylesheet' href="https://fonts.googleapis.com/css?family=Oxanium" />
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
            <I18nContext.Provider value={value}>
              <App />
            </I18nContext.Provider>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
