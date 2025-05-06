import { useState } from 'react'
import  './style.css'

const data = [
    {
        title_tab: "tab 1",
        content_tab: "Content of tab 1"
    }, {
        title_tab: "tab 2",
        content_tab: "Content of tab 2"
    }, {
        title_tab: "tab 3",
        content_tab: "Content of tab 3"
    },]



export default function CustomTab() {
    const [tab, setTab] = useState('tab 1')
  return (
      <div>
          <div className="tab_container">
              {
                  data.map((item) => {
                      return <div className="tab" onClick={() => { setTab(item.title_tab)}}>{item.title_tab}</div>
                  })
              }
          
          </div>
          <div className="content">
              {
                  data.map((item) => {
                      return (<div className={`tabContent ${tab == item.title_tab?'active':''}`}>{item.content_tab}</div>)
                  })
              }
          </div>
    </div>
  )
}
