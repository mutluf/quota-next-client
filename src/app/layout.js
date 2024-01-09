import { Inter } from 'next/font/google'
import './globals.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/rightbar/Rightbar'
import Rigthbar from './components/sidebar/Sidebar'
import CreateButton from './components/createbutton/CreateButton'
import {FontContextProvider} from '../context/FontContext'
import FontProvider from '@/provider/FontProvider'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Quote',
  description: 'Life is quote',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <FontContextProvider>
          <FontProvider>
            <div className='container'>
              <div className="navbar">
              <Navbar/>
              </div>

              <div className='wrapper'>
                <div className='rightbar'>
                  <Rigthbar/>
                </div>
              <div className='child'>
                {children}     
                    
              </div> 
              <div className='sidebar'>
                <Sidebar/>
                
              </div>         
              </div>
            
              <CreateButton/>
              <div className='footer'>
              <Footer/>
              </div>
              
            </div>      
          </FontProvider>
        </FontContextProvider>
      </body>
    </html>
  )
}
