import '@styles/globals.css'
import Navbar from '@components/Navbar'
import Footer from '@components/Footer'

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className='main'>
                {/* <div className='gradient'/> */}
           

        <main className='app'>
          <Navbar />
          {children}
          <Footer></Footer>
        </main>
         </div>
      </body>
    </html>
  )
}

export default RootLayout