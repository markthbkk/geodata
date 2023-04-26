import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ChakraProvider } from "@chakra-ui/react";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * (60 * 1000),
      cacheTime: 100 * (60 * 1000),
    },
  },
});

import Home from "./pages/Home";
import { countriesLoader } from "./components/Loaders";
import Citations from "./pages/Citations";
import RootLayout from "./layouts/RootLayout";
import GovernanceReports from "./pages/GovernanceReports";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} loader={countriesLoader(queryClient)} />
      <Route path="/reports" element={<GovernanceReports />} loader={countriesLoader(queryClient)} />
      <Route path="/citations" element={<Citations />} />
    </Route>
  )
  { basename: "/geodata" }
);

function App({ routes }) {
  return (
    <>
      <ChakraProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
          {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        </QueryClientProvider>
      </ChakraProvider>
    </>
  );
}

export default App;
