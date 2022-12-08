import { Suspense } from 'react'
import App from '@/src/App'
 
const Loader = () => {
 return (
   <div
     style={{
       width: '100vw',
       height: '100vh',
       display: 'flex',
       justifyContent: 'center',
       alignItems: 'center'
     }}>
     <b>Loading...</b>
   </div>
 )
}
const EntryPoint = () => {
 return (
   <Suspense fallback={<Loader />}>
     <App />
   </Suspense>
 )
}
export default EntryPoint