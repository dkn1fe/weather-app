import { useState, useEffect } from 'react'
import Spinner from './components/spinner/Spinner'
import Header from './components/header/Header'
import Widget from './components/widget/Widget'
import TabsWrappedLabel from './components/tabsContent/TabsContent'
import StartingLoading from './components/startingLoading/StartingLoading'
import './App.scss'

function App() {
  const [isStartLoading, setIsStartLoading] = useState(true)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsStartLoading(false)
    },1000)
    return (() => {
      clearInterval(timeout)
    })
  }, [])

  return (
    <>
    <StartingLoading  isStartLoading={isStartLoading}/>
      <div className='white-header'>
        <div className='container'>
          <header className='header'>
            <Header />
          </header>
          <>
            <main className='widget-main'>
              <Widget />
            </main>
            <div className='tab-content'>
              <TabsWrappedLabel />
            </div>
          </>
        </div>
      </div>
      </>
  )
}

export default App
