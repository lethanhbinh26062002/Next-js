import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { SWRConfig } from "swr";
import Layout from "../components/Layout";
import { AppPropsWithLayout } from "../models/layout";
import instance from "../api/instance";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
    const LayoutWrapper = Component.Layout ?? Layout;
    return (
        <LayoutWrapper>
            <SWRConfig value={{ refreshInterval: 1000, fetcher: async (url) => await instance.get(url) }}>
                <Component {...pageProps} />
            </SWRConfig>
        </LayoutWrapper>
    );
}

export default MyApp;
