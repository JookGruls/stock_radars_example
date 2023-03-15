import React, { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import Loading from "./components/loading/Loading";
import PublicLayout from "./layout/PublicLayout";

const Home = lazy(() => import("./pages/home/Home"));
const PageNotFound = lazy(() => import("./pages/errors/PageNotFound"));
const Fetching = lazy(() => import("./pages/fetching/Fetching"));
const Forms = lazy(() => import("./pages/forms/Forms"));

const routesConfig = [
	{
		path: "/",
		element: <PublicLayout />,
		children: [
			{ path: `/`, element: <Home /> },
			{ path: `/fetching`, element: <Fetching /> },
			{ path: `/forms`, element: <Forms /> },
			{ path: `*`, element: <PageNotFound /> },
		],
	},
];

const Routes = () => {
	const routing = useRoutes(routesConfig);
	return <Suspense fallback={<Loading />}>{routing}</Suspense>;
};

export default Routes;
