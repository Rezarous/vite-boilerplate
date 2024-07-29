import React, { useEffect, useState } from 'react'
import config from './config'

const App: React.FC = () => {
  const [username, setUsername] = useState<string | null>(null)
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const user = urlParams.get('username')
    const err = urlParams.get('error')

    if (user) {
      setUsername(user)
    } else if (err) {
      setError(true)
    }

    const script = document.createElement('script')
    script.async = true
    script.src = 'https://telegram.org/js/telegram-widget.js?9'
    script.setAttribute('data-telegram-login', 'YOUR_BOT_USERNAME')
    script.setAttribute('data-size', 'large')
    script.setAttribute('data-auth-url', `${config.backendUrl}/auth`)
    script.setAttribute('data-request-access', 'write')
    document.body.appendChild(script)
  }, [])

  return (
    <div className='App'>
      {error ? (
        <h1>Error...</h1>
      ) : (
        <h1>Hello, {username ? username : '...'}</h1>
      )}
    </div>
  )
}

export default App
