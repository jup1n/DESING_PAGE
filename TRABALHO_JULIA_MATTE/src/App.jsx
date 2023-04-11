import Footer from './Footer'
import Header from './Header'
import Menu from './Menu'
import Sections from './Sections'
import style from './Principal.module.css'

function App() {
 return (
      <div className={style.main}>
        <Header/>
        <Menu/>
        <Sections/>
        <Footer/>
      </div>
   )
}

export default App