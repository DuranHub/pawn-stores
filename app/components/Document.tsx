import { Links, Meta, Scripts, ScrollRestoration } from "@remix-run/react";

export default function Document({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-slate-50">
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
