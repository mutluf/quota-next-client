import React from 'react';

export default async function RootLayout({ children }) {
  return (
    <html>
       <body>
      <header>
        {/* Header içeriği */}
        <h1>My Admin Layout</h1>
      </header>
     
        <main>{children}</main>
      
      <footer>
        {/* Footer içeriği */}
        <p>Footer admin here</p>
      </footer>
      </body>
    </html>
  );
};


