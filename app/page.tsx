import './globals.css'
import Bestseller from './Home/Bestseller'
import Landingpage from './Home/Landingpage'
import Occasion from './Home/Occasion'
import Itemsofdelight from './Home/Itemsofdelight'
 import Navbar from "./Navbar/page";


export default function Home() {
  return (
    <>
    <Navbar />
    <div className="home-main">
      <Landingpage />
      <Occasion />
      <Bestseller />
      <Itemsofdelight />
    </div>
    </>
  );
}
