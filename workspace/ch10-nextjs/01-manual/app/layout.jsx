export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>Next.js</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
