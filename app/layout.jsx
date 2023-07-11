import '@styles/globals.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider'


export const metadata = {
    titlle:"Promptopia",
    description:'Discover & Share AI Prompts'
}


const RootLayput = ({children}) => {
  return (
    <html land='en'>
    <body>
        <div className='main'>
            <div className='gradient' />
        </div>
        <main className='app'>
          <Nav />
         {children}
        </main>
    </body>
    </html>
  )
}

export default RootLayput