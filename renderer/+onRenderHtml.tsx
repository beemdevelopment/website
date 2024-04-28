// https://vike.dev/onRenderHtml
export { onRenderHtml };

import ReactDOMServer from "react-dom/server";
import { PageShell } from "./PageShell";
import { escapeInject, dangerouslySkipEscape } from "vike/server";
import Icon from "../assets/icon.png";
import type { OnRenderHtmlAsync } from "vike/types";

const onRenderHtml: OnRenderHtmlAsync = async (pageContext): ReturnType<OnRenderHtmlAsync> => {
  const { Page, pageProps } = pageContext;
  // This onRenderHtml() hook only supports SSR, see https://vike.dev/render-modes for how to modify
  // onRenderHtml() to support SPA
  if (!Page) throw new Error("My render() hook expects pageContext.Page to be defined");
  const pageHtml = ReactDOMServer.renderToString(
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
  );

  // See https://vike.dev/head
  const { documentProps } = pageContext.exports;

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <link rel="icon" type="image/svg+xml" href="${Icon}" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css">
      <title>Aegis Authenticator</title>
      <meta name="description" content="Aegis Authenticator is a free, secure and open source app for Android to manage your 2-step verification tokens for your online services."/>
      <meta name="application-name" content="Aegis Authenticator" />
      <meta name="author" content="Beem Development" />
      <link rel="author" href="https://github.com/beemdevelopment" />
    </head>
    <body>
      <div id="react-root">${dangerouslySkipEscape(pageHtml)}</div>
    </body>`;

  return {
    documentHtml,
    pageContext: {
      // We can add some `pageContext` here, which is useful if we want to do page redirection https://vike.dev/page-redirection
    },
  };
};
