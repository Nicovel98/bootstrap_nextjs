import fetch from 'isomorphic-unfetch'
import Navbar from '../../components/navbar'

const consumir = (props) => (
    <div>
        <Navbar/>
        <h1 className="d-flex justify-content-center pt-5">Consumir!</h1>
        {/* <Link href="/">
            <a>Inicio</a>
        </Link> */}
        <div className="card-body">
            <h2>{props.data.name}</h2>
            <img src={props.data.avatar_url} alt="" />            
        </div>
        <div className="card-body">
            <ul className="list-group">
            {
                props.dato.map(usuarios => (
                    <li className="list-group-item" key={usuarios.id}>{usuarios.name}</li>
                ))
            }
            </ul>
        </div>                     
    </div>
);

/* consumir2.getInitialProps = async function(){
    const recibir2 = await fetch('https://jsonplaceholder.typicode.com/users')

    const dato = await recibir2.json()
    console.log(dato)

    return { dato }
} */

consumir.getInitialProps = async function(){
    const req = await fetch('https://api.github.com/users/nicobobb')
    const recibir = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await req.json()
    const dato = await recibir.json()
    /* console.log(data)
    console.log(dato) */

    return { data, dato }
}

export default consumir