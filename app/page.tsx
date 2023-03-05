import './globals.css'

import Bestseller from './Home/Bestseller'
import Landingpage from './Home/Landingpage'
import Occasion from './Home/Occasion'
import Itemsofdelight from './Home/Itemsofdelight'



export default function Home() {
  return (
    <div className="home-main">
      <Landingpage />
      <Occasion />
      <Bestseller />
      <Itemsofdelight />
    </div>
  )
}
