import { Col, Container, Row, Button } from "react-bootstrap";

function App() {
  return (
    <Container as="main" fluid className="m-0 row vh-100">
      <Col as="article" md={8} className="row">
        <ul className="list-unstyled row row-cols-3">
          <li>
            <Button variant="warning" className="boton gt30">
              Equipos asignados a mayores de 30</Button>
          </li>
          <li>
            <Button variant="warning" className="boton tarragona">
              Equipos asignados a personas de Tarragona</Button>
          </li>
          <li>
            <Button variant="warning" className="boton provincias">
              Provincias donde hay equipos</Button>
          </li>
          <li>
            <Button variant="warning" className="boton puestos">
              Puestos de trabajadores con equipo</Button>
          </li>
          <li>
            <Button variant="warning" className="boton edad-media">
              Media de edad de trabajadores</Button>
          </li>
          <li>
            <Button variant="warning" className="boton orden-edad">
              Equipos ordenador por edad</Button>
          </li>
          <li>
            <Button variant="warning" className="boton sobremesa">
              Equipos de tipo sobremesa</Button>
          </li>
          <li>
            <Button variant="warning" className="boton trabajadores-portatil">
              Trabajadores con equipo portátil</Button>
          </li>
          <li>
            <Button variant="warning" className="boton equipos-tipo">
              Equipos organizados por tipo</Button>
          </li>
          <li>
            <Button variant="warning" className="boton portatiles-tarragona">
              Equipos portátiles asigandos en Tarragona</Button>
          </li>
          <li>
            <Button variant="warning" className="boton resumen">
              Resumen de equipos asignados</Button>
          </li>
        </ul>
      </Col>
      <Col md={4} as="aside" className="lado d-flex flex-row justify-content-center align-items-center">
        <Col className="console container overflow-auto">Resultado funciones aqui 🐈</Col>
      </Col>
    </Container>
  );
}

export default App;
