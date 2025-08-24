import React from 'react'
import NavLayout from './navLayout';


const AuthTemplates = ({children}) => {
  return (
    <div>
        
        <header style={{ padding: '1rem', background: '#f5f5f5', borderBottom: '1px solid #ddd' }}>
                <NavLayout></NavLayout>
            </header>
            <main>
                {children}
            </main></div>
  )
}

export default AuthTemplates