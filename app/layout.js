import "../styles/globals.css";
import "../styles/app.css";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://www.artofcse.com/"),
  icons: {
    icon: "../images/logo/favicon.png",
  },
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}) {
  return (
    <html lang="en">
      <body>
        {children}

        <Script src="https://unpkg.com/phosphor-icons" />
        <Script src="https://code.iconify.design/iconify-icon/1.0.0/iconify-icon.min.js" />
        <Script src="../js/script.js" />
      </body>
    </html>
  );
}
