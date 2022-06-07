import Layout from "../components/Layout"
import Entradas from "../components/Entradas"

const Blog = ({result}) => {



  return (
    <Layout 
        tituloPage = "Blog"
        contenidoSeo= "desde el contenido de el Blog"
        >
          <main className="contenedor">
            <div>
              {result.map(entrada =>(
                <Entradas
                key ={entrada.id}
                entrada = {entrada}
                />
              ))}
            </div>
          </main>
    </Layout>
    
  )
}

export async function getStaticProps(){

  const url = 'http://localhost:1337/blogs'
  const res = await fetch(url)
  const result = await res.json()


  
  return{
    props:{
        result
    }
  }

}


export default Blog