import { Link } from "react-router-dom";

function Home (){
    return(
        <Link to='/auth/login' >
            Ir al login
        </Link>
    )
}

export default Home;