
import Header from '@/components/Layout/Header'
import '@/styles/globals.css'
import SideBar from "../components/Sidebar/index"
export default function App({ Component, pageProps }) {
  return(
    <>
    <Header/>
    <div className='flex gap-2 p-2'>
      <div className='w-[30%] border h-screen'>
      <SideBar/>
      </div>
      <div className='border h-screen w-full'>
      <Component {...pageProps} />
      </div>
    </div>
    </>
  )
}
