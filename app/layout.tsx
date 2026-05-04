import './globals.css';

export const metadata = {
  title: 'Nüma Coffee & Kitchen | Premium Café & Brunch in Tunis',
  description: 'Discover Nüma, a premium café and kitchen in Tunis where nature meets culinary art. Specialty coffee, artisanal brunch, and an aesthetic cozy atmosphere.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
