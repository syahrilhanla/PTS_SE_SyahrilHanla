import Layout from "../components/common/Layout";
import DataProvider from "../components/context/DataProvider";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<DataProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</DataProvider>
	);
}

export default MyApp;
