import "./globals.css";

export const metadata = {
  title: "ChromeAI",
  description: "A Chrome built-in api",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          // translate -api
          httpEquiv="origin-trial"
          content="AqgJJd4BeFIMAv9xxcqaWC8V/i3rheT4h+/1Ur33iCrvnKNTcFA0/WaZNSH/MB9uqHCiyXvkW4icPkEXRaJCUQ0AAAB6eyJvcmlnaW4iOiJodHRwczovL2huZy1jaHJvbWUtYWktYXBpMDAzLnZlcmNlbC5hcHA6NDQzIiwiZmVhdHVyZSI6IlRyYW5zbGF0aW9uQVBJIiwiZXhwaXJ5IjoxNzUzMTQyNDAwLCJpc1N1YmRvbWFpbiI6dHJ1ZX0="
        />
        {/* summarizer-api */}
        <meta
          httpEquiv="origin-trial"
          content="AmWCdQTTe66+sjIm1Z3nBJY+BKTveR7HN0xnE9XFkztcYMHL++5XICOrR+OMCNuStJOTNuxgBxLvMBeJuFBTdg8AAAB+eyJvcmlnaW4iOiJodHRwczovL2huZy1jaHJvbWUtYWktYXBpMDAzLnZlcmNlbC5hcHA6NDQzIiwiZmVhdHVyZSI6IkFJU3VtbWFyaXphdGlvbkFQSSIsImV4cGlyeSI6MTc1MzE0MjQwMCwiaXNTdWJkb21haW4iOnRydWV9"
        />
        {/* language-detector-api */}
        <meta
          httpEquiv="origin-trial"
          content="Aqy+RBrBuB8QXDEUuln59a0iEKtFPghb3+ZSygZ5BrzOibOoCVJwvN6vKJU4o1jto91FyABN0x+tKtSkPOYzzgQAAACAeyJvcmlnaW4iOiJodHRwczovL2huZy1jaHJvbWUtYWktYXBpMDAzLnZlcmNlbC5hcHA6NDQzIiwiZmVhdHVyZSI6Ikxhbmd1YWdlRGV0ZWN0aW9uQVBJIiwiZXhwaXJ5IjoxNzQ5NTk5OTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZX0="
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
