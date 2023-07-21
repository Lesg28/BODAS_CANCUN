import plan1 from '../image/PLANEADOR.jpg';
import plan2 from '../image/PLANEADOR2.jpg';
import plan3 from '../image/PLANEADOR3.jpg';
import carta from '../image/escritura.png';


export default function Planeador() {
  return (
    <div>
 <>
  <title>Planeador</title>
  {/* Required meta tags */}
  <meta charSet="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n        \n  \n           \n         .container {\n          display: flex;\n          justify-content: space-between;\n          align-items: center; /* Alineación vertical de los textos */\n        }\n        \n        .left-section,\n           .center-section,\n           .right-section {\n             flex: 1;\n           }\n           \n           .left-section {\n             text-align: left;\n           }\n           \n           .center-section {\n             text-align: center;\n           }\n           \n           .right-section {\n             text-align: right;\n           }\n           .cuadro-dudas {\n           border: 2px solid #6A625A;\n           border-radius: 10px;\n           padding: 10px;\n           width: 300px;\n           resize: none;\n       }\n       .contenedor {\n           display: flex;\n           justify-content: flex-start;\n           align-items: center;\n           height: 100vh;\n           padding-left: 20px;\n       }\n     \n       .white-button {\n      background-color: white;\n      color: black;\n      border: 1px solid black;\n      padding: 5px 10px;\n      border-radius: 5px;\n      display: flex;\n      align-items: center;\n  }\n\n  .white-button i {\n      margin-right: 5px;\n  }\n        "
    }}
  />
  <header>{/* place navbar here */}</header>
  <main>
    {/* ========== Start FORM ========== */}
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ textAlign: "center" }}>
          <img
            src={plan1}
            alt="Imagen 1"
            style={{ width: 300, height: "auto", margin: 20, borderRadius: 10 }}
          />
          <h3>Tania Solano</h3>
          <p
            style={{
              marginBottom: 5,
              maxWidth: 300,
              overflow: "hidden",
              textOverflow: "ellipsis"
            }}
            className="fw-semibold"
          >
            27 años
          </p>
          <p
            style={{
              marginBottom: 5,
              maxWidth: 300,
              overflow: "hidden",
              textOverflow: "ellipsis"
            }}
            className="fw-semibold"
          >
            Planeador con experiencia en bodas en la playa
          </p>
          <p
            style={{
              marginBottom: 5,
              maxWidth: 300,
              overflow: "hidden",
              textOverflow: "ellipsis"
            }}
          >
            <small>Mejor boda: Wedding Playas</small>
          </p>
          <p
            style={{
              marginBottom: 5,
              maxWidth: 300,
              overflow: "hidden",
              textOverflow: "ellipsis"
            }}
          >
            <small>Eventos Realizados: 19 Bodas</small>
          </p>
          <button
    type="submit"
    className="btn btn-custom btn-sm rounded-pill"
    style={{
      backgroundColor: "#ffffff",
      color: "rgb(0, 0, 0)",
      borderColor: "#6A625A",
      padding: "5px 25px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginLeft: "76px" // Ajusta el valor de marginLeft según tu preferencia
    }}
  >
    <img
      src={carta}
      alt="Icono"
      style={{ maxWidth: 19, maxHeight: 20, marginRight: "5px" }}
    />
    <span className="text-custom">AGREGAR</span>
  </button>
        </div>
        <div style={{ textAlign: "center" }}>
          <img
            src={plan2}
            alt="Imagen 2"
            style={{ width: 300, height: "auto", margin: 20, borderRadius: 10 }}
          />
          <h3>Carlos Mejía</h3>
          <p
            style={{
              marginBottom: 5,
              maxWidth: 300,
              overflow: "hidden",
              textOverflow: "ellipsis"
            }}
            className="fw-semibold"
          >
            28 años
          </p>
          <p
            style={{
              marginBottom: 5,
              maxWidth: 300,
              overflow: "hidden",
              textOverflow: "ellipsis"
            }}
            className="fw-semibold"
          >
            Planeador con experiencia en bodas en la playa y culturales
          </p>
          <p
            style={{
              marginBottom: 5,
              maxWidth: 300,
              overflow: "hidden",
              textOverflow: "ellipsis"
            }}
          >
            <small>Mejor boda: Noche Estrellada</small>
          </p>
          <p
            style={{
              marginBottom: 5,
              maxWidth: 300,
              overflow: "hidden",
              textOverflow: "ellipsis"
            }}
          >
            <small>Eventos Realizados: 15 Bodas</small>
          </p>
          <button
    type="submit"
    className="btn btn-custom btn-sm rounded-pill"
    style={{
      backgroundColor: "#ffffff",
      color: "rgb(0, 0, 0)",
      borderColor: "#6A625A",
      padding: "5px 25px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginLeft: "76px" // Ajusta el valor de marginLeft según tu preferencia
    }}
  >
    <img
      src={carta}
      alt="Icono"
      style={{ maxWidth: 19, maxHeight: 20, marginRight: "5px" }}
    />
    <span className="text-custom">AGREGAR</span>
  </button>
        </div>
        <div style={{ textAlign: "center" }}>
          <img
            src={plan3}
            alt="Imagen 3"
            style={{ width: 300, height: "auto", margin: 20, borderRadius: 10 }}
          />
          <h3>Laura Dominguez</h3>
          <p
            style={{
              marginBottom: 5,
              maxWidth: 300,
              overflow: "hidden",
              textOverflow: "ellipsis"
            }}
            className="fw-semibold"
          >
            26 años
          </p>
          <p
            style={{
              marginBottom: 5,
              maxWidth: 300,
              overflow: "hidden",
              textOverflow: "ellipsis"
            }}
            className="fw-semibold"
          >
            Planeador con experiencia en bodas mayas
          </p>
          <p
            style={{
              marginBottom: 5,
              maxWidth: 300,
              overflow: "hidden",
              textOverflow: "ellipsis"
            }}
          >
            <small>Mejor boda: Culture Wedding </small>
          </p>
          <p
            style={{
              marginBottom: 5,
              maxWidth: 300,
              overflow: "hidden",
              textOverflow: "ellipsis"
            }}
          >
            <small>Eventos Realizados: 11 Bodas</small>
          </p>
          <button
    type="submit"
    className="btn btn-custom btn-sm rounded-pill"
    style={{
      backgroundColor: "#ffffff",
      color: "rgb(0, 0, 0)",
      borderColor: "#6A625A",
      padding: "5px 25px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginLeft: "76px" // Ajusta el valor de marginLeft según tu preferencia
    }}
  >
    <img
      src={carta}
      alt="Icono"
      style={{ maxWidth: 19, maxHeight: 20, marginRight: "5px" }}
    />
    <span className="text-custom">AGREGAR</span>
  </button>
        </div>
        {/* ========== End FORM ========== */}
      </div>
    </div>
  </main>
  {/* Bootstrap JavaScript Libraries */}
</>



  
        </div>
    
      );
    }
