import React from 'react'
import Header from './Header'
import * as styles from '../assets/css/main.css'
import {Helmet} from "react-helmet";

export default function Layout({children}) {
  
  console.log("Layout children")
  console.log(children)

  return (    
    <div>
      {/* <Header /> */}
      <main id="main" className="main">
        <div>
          { children }
        </div>
        <footer>
          {/* <p>Copyright @ 2023 Reece</p> */}
          <Helmet>
            <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>        
            <script id="data" src="../assets/js/main.js" type="application/json" />
          </Helmet>     
        </footer>
      </main>
    </div>    
  )
}
