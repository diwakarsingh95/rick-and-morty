import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ErrorBoundary from "../components/errorBoundary";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ErrorBoundary>
        <Component {...pageProps} />
      </ErrorBoundary>
      <SpeedInsights />
    </>
  );
}

export default MyApp;
