// app/layout.js
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Header will appear on every page */}
        <Header />
        
        <main>{children}</main>

        {/* Footer will appear on every page */}
        <Footer />
      </body>
    </html>
  );
}
