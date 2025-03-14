
import { BrowserRouter, Link, Route, Router, Routes } from "react-router-dom";
import FullEntry from "./Components/FullEntry";
import HomePage from "./Pages/HomePage";
import Pokedexes from "./Pages/Pokedexes.jsx";

export default function App() {
  
  return (
    <BrowserRouter>
      
      {/* <nav>
        <Link className="menuLinks" to="/home">Home</Link>
        <Link to="/pokedexes">Pokedexes</Link>
      </nav> */}


      <Routes>

        <Route path="/" element={<HomePage/>} />
        <Route path="/pokedexes" elements={<Pokedexes/>} />
        <Route path="/pokemon/:id" element={<FullEntry/>} />

      </Routes>
    </BrowserRouter>
  );
}



// export default function App() {
// 	return (

//     <BrowserRouter>
//         <nav>
//             <Link className="logo" to="/"><img src="Assets/SiteLogo2.png" alt="Logo for portfolio site" width="auto" height="50"/></Link>
//             <div className="menu">
//                 <Link className="menuLinks" to="/about">ABOUT</Link>
//                 <Link className="menuLinks" to="/portfolio">PORTFOLIO</Link>
//                 <Link className="menuLinks" to="/blog">BLOG</Link>
//             </div>
//         </nav>

//       <Routes>
//         <Route path="/" element={<Homepage />} />
//         <Route path="/about" element={<AboutPage />} />
//         <Route path="/portfolio" element={<Portfolio />} />
//         <Route path="/ResearchProjectOne" element={<ResearchProjectOne />} />
//         {/* <Route path="/books/:id" element={<BookDetailPage/>} /> */}
//       </Routes>

//       <Footer />
    
  
//     </BrowserRouter>

//     )
// }