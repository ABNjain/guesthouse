import "./globals.css";

export const metadata = {
  title: "Kingsukh Guest House",
  description: "Generated by abnjain",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
