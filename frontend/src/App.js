

import boda from './image/bodaprincipal.jpeg';
import prom1 from './image/Promocion1.jpg';
import prom2 from './image/promocion2.jpeg';
import prom3 from './image/promocion3.jpg';
import prom4 from './image/promocion4.jpg';

export default function App() {
  return (
    <div>
      <>
        <title>Inicio</title>
        {/* Required meta tags */}
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <style
          dangerouslySetInnerHTML={{
            __html:
              ".container {display: flex; justify-content: space-between; align-items: center; .left-section,.center-section, .right-section {flex: 1;} .left-section { text-align: left; }.center-section {text-align: center; } .right-section { text-align: right;} h2 { text-align: center; color:#6A625A; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif, sans-serif; font-size: 60px; margin-top: 80px;  margin-bottom: 130px; } .image-container { display: flex; flex-direction: row; / Muestra las imágenes en horizontal / justify-content: center; gap: 10px; height: 200px; / Ajusta la altura según tus necesidades */} .horizontal-image {width: auto;height: 100%; border-radius: 10px; } .image-caption { text-align: center;}"
          }}
        />
        <main>
          <img
            src={boda}
            alt="Imagen 4"
            style={{ width: "100%" }}
          />
          <div
            style={{
              position: "absolute",
              top: "120%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center"
            }}
          >
            <h1 style={{ color: "white", fontSize: 50 }}>Saranghae</h1>
            <h2 style={{ color: "white", fontSize: 30, marginTop: 20 }}>
              <small>Encuentra tu planificador ideal</small>
            </h2>
          </div>
          <h2>Promociones de Planeadores</h2>
          <div className="image-container">
            <div style={{ textAlign: "center" }}>
              <img
                src={prom1}
                alt="Imagen 1"
                style={{ width: 300, height: "auto", margin: 20, borderRadius: 10 }}
              />
              <h3>Boda en la Playa:</h3>
              <p style={{ marginBottom: 5 }}>
                <small>Planeador: Carlos Mejía Cancún, Q.Roo</small>
              </p>
              <p style={{ marginBottom: 5 }}>
                <strong>$90,000</strong>
              </p>
            </div>
            <div style={{ textAlign: "center" }}>
              <img
                src={prom2}
                alt="Imagen 2"
                style={{ width: 300, height: "auto", margin: 20, borderRadius: 10 }}
              />
              <h3>Boda Maya</h3>
              <p style={{ marginBottom: 5 }}>
                <small>Planeador: Isaí Carrillo Cancún, Q.Roo</small>
              </p>
              <p style={{ marginBottom: 5 }}>
                <strong>$95,000</strong>
              </p>
            </div>
            <div style={{ textAlign: "center" }}>
              <img
                src={prom3}
                alt="Imagen 3"
                style={{ width: 300, height: "auto", margin: 20, borderRadius: 10 }}
              />
              <h3>Boda al aire libre</h3>
              <p style={{ marginBottom: 5 }}>
                <small>Planeador: Laura Domínguez Cancún, Q.Roo</small>
              </p>
              <p style={{ marginBottom: 5 }}>
                <strong>$89,000</strong>
              </p>
            </div>
            <div style={{ textAlign: "center" }}>
              <img
                src={prom4}
                alt="Imagen 4"
                style={{ width: 300, height: "auto", margin: 20, borderRadius: 10 }}
              />
              <h3>Boda en Yate</h3>
              <p style={{ marginBottom: 5 }}>
                <small>Planeador: Tania Solano Cancún, Q.Roo</small>
              </p>
              <p style={{ marginBottom: 5 }}>
                <strong>$85,000</strong>
              </p>
            </div>
          </div>
        </main>
      </>
    </div>

  );
}

