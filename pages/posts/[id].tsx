import { GetStaticPaths, GetStaticProps } from "next";
import Layout from "../../components/layout";

export default function Post(props: any) {
	console.log(props);
	return <Layout>...</Layout>;
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	// ...

	return { props: { params } };
};

export const getStaticPaths: GetStaticPaths = async (context) => {
	// ...
	console.log({ context });

	return {
		paths: [
			{
				params: {
					id: "ssg-ssr",
				},
			},
			{
				params: {
					id: "pre-rendering",
				},
			},
		],
		fallback: false,
	};
};
