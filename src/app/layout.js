import "../styles/globals.css";

export const metadata = {
  title: "App Marcacion",
  description: "Marcar la entrada y salida de tu trabajo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
