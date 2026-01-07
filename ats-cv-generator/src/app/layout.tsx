import "./global.css";
import "../styles/ats.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ATS CV Generator",
  description: "Générateur de CV compatible ATS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-gray-100 text-black">
        {children}
      </body>
    </html>
  );
}
