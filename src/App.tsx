/*
 * @Descripttion: 
 * @version: X3版本
 * @Author: 吴毛三
 * @Date: 2022-10-27 00:34:56
 * @LastEditors: 吴毛三
 * @LastEditTime: 2022-10-29 23:22:40
 */
import { useState } from 'react'
import {useRoutes,Link} from 'react-router-dom'
import routes from './Router'
function App() {
  const [count, setCount] = useState(0)
  const Outlet=useRoutes(routes)
  return (
    <div className="App">
      {/* <Link to={'/home'}>Home</Link> |
      <Link to={'/about'}>About</Link> */}
      {Outlet}
    </div>
  )
}

export default App
