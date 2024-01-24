import React from 'react';
import Sidebar from '../../../components/(admin)/sidebar/Sidebar';
import Navbar from '../../../components/(admin)/navbar/Navbar';
import '../../../components/(admin)/global.css'
import styles from '../../../components/(admin)/admin.module.css'
export default async function RootLayout({ children }) {
  return (
    <html>
      <body className={styles.container}>
        <div className={styles.menu}>
          <Sidebar />
        </div>

        <div className={styles.content}>
          <Navbar />
          {children}
        </div>


      </body>
    </html>
  );
};


