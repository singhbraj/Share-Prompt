import '@styles/globals.css';


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
         {children}
        </main>
    </body>
    </html>
  )
}

export default RootLayput