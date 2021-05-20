import { Navbar, Nav} from 'react-bootstrap';
import Link from "next/link";

export default function Navbar1() {
  return ( 
    <div className="pb-5">
      <Navbar className="pt-3 pb-3" collapseOnSelect fixed="top" expand="sm" bg="info" variant="light">
        <div className="container-fluid">            
        <Navbar.Brand href="/"><img src="../vercel.svg" height="23px" alt="logo"/></Navbar.Brand>
          <Navbar.Toggle className="mr-auto" aria-controls="responsive-navbar-nav"/>                    
          <Navbar.Collapse id="responsive-navbar-nav">            
            <Nav className="me-auto">
              <Link href="/" passHref>
                <Nav.Link className="pt-3 pb-1">Inicio</Nav.Link>
              </Link>
              <Link href="/consumir/consumir" passHref>
                <Nav.Link className="pt-3 pb-1">Consumir</Nav.Link>            
              </Link>              
            </Nav> 
          </Navbar.Collapse>         
        </div>        
      </Navbar>
    </div>    
  );
}
