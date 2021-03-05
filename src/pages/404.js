import React from 'react';
import Layout from "../components/Layout";
import {Link} from 'gatsby'

const NotFound = ()=>{


return (   <Layout page={''}>
            <main className='error-page'>
              <div className="error-container">
                <h1>Página no encontrada</h1>
                <Link to='/' className="btn">Volver a la página principal</Link>
              </div>
            </main>
          </Layout>)
}

export default NotFound;