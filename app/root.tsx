import type { LinksFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

import stylesheet from "~/tailwind.css?url";
import Document from "~/components/Document";
import Footer from "~/components/static/Footer";
import Header from "./components/static/Header";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export default function App() {
  return (
    <Document>
      <Header />
      <Outlet />
      <Footer />
    </Document>
  );
}
