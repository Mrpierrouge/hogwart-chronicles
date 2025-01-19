import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div>
          <header>
            <nav>
              <ul className="flex justify-between items-center p-8 bg-gray-800 text-white mt-2">
                <li>
                  <Link href="/">Aeldari</Link>
                </li>
                <li>
                  <Link href="/heros">Héros</Link>
                </li>
                <li>
                  <Link href="/units">Unitées</Link>
                </li>
              </ul>
            </nav>
          </header>
        </div>
        {children}
      </body>
    </html>
  );
}
