import { useState } from 'react'
import './App.css'
import LeftSection from './components/LeftSection'
import Tabreestr from './components/TabReestr'
import TabMyTasks from './components/TabMyTasks'
import TabApplications from './components/TabApplications'
import TabPatents from './components/TabPatents'
import TabBulletin from './components/TabBulletin'
import TabSearch from './components/TabSearch'
import TabExport from './components/TabExport'

function App() {
  const [tab, setTab] = useState('reestr')

  return (
    <main className="app-main d-grid align-items-stretch">
        <LeftSection active={tab} onChange={(current) => setTab(current)}/>

        <section className="app-main__right app-right">   
               
            {tab === 'reestr' && (
              <Tabreestr />
            )}
            {tab === 'myTasks' && (
              <TabMyTasks />
            )}
            {tab === 'applications' && (
              <TabApplications />
            )}
            {tab === 'patents' && (
              <TabPatents />
            )}
            {tab === 'bulletin' && (
              <TabBulletin />
            )}
            {tab === 'search' && (
              <TabSearch />
            )}
            {tab === 'export' && (
              <TabExport />
            )}
        </section>
    </main>
  )
}

export default App
