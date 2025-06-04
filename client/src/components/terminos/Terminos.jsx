import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/terminos/Terminos.module.css';

function Terminos() {
  const navigate = useNavigate();

  const handleAceptar = () => {
    sessionStorage.setItem('acceptedTerms', 'true');
    navigate(-1);
  };

  return (
    <div className={styles.terminosContainer}>
      <h1>Términos y Condiciones de Uso</h1>
      <p><strong>Última actualización:</strong> 21 de mayo de 2025</p>

      <p>Bienvenido(a) a <strong>Healthy BARF</strong> (“la Plataforma”), operada por los desarrolladores Jhojan Cano, Estefany Molina y Alejandro Vanegas, en nombre de la tienda de venta de comida BARF para mascotas Healthy BARF (“nosotros”).</p>

      <p>Al usar esta Plataforma, usted acepta los siguientes términos y condiciones. Si no está de acuerdo con alguno, debe abstenerse de utilizar nuestros servicios.</p>

      <h2>1. Objeto</h2>
      <p>La Plataforma proporciona una tienda virtual para la compra de alimentos naturales tipo BARF para perros y gatos, permitiendo a los usuarios explorar productos, registrarse, gestionar sus perfiles, y realizar pedidos en línea.</p>

      <h2>2. Registro de Usuario</h2>
      <p>El acceso a ciertas funciones de la Plataforma requiere la creación de una cuenta personal. Usted es responsable de proporcionar información veraz y de mantener la confidencialidad de sus credenciales de acceso. No debe compartir su cuenta con terceros.</p>

      <h2>3. Propiedad Intelectual</h2>
      <p>Todo el contenido, diseño, software, interfaces y funcionalidades de esta Plataforma son propiedad de Healthy BARF y están protegidos por derechos de autor, marcas registradas y otras leyes aplicables. No se permite copiar, modificar, distribuir o hacer ingeniería inversa del software sin autorización expresa y por escrito de los titulares.</p>

      <h2>4. Uso Permitido</h2>
      <p>Usted se compromete a:</p>
      <ul>
        <li>Utilizar la Plataforma de forma lícita, conforme a estos Términos y Condiciones.</li>
        <li>No interferir con la seguridad, el rendimiento ni la funcionalidad del sitio.</li>
        <li>No introducir virus, malware o contenido dañino.</li>
        <li>No utilizar esta Plataforma con fines fraudulentos o malintencionados.</li>
      </ul>

      <h2>5. Responsabilidad</h2>
      <p>La Plataforma se proporciona “tal cual” y según disponibilidad. No garantizamos que el servicio esté libre de errores o interrupciones. En ningún caso seremos responsables por daños directos, indirectos o incidentales derivados del uso o la imposibilidad de uso del servicio.</p>

      <h2>6. Modificaciones</h2>
      <p>Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. Las modificaciones se publicarán en esta misma sección y entrarán en vigor a partir de su publicación. Se recomienda revisar periódicamente esta página.</p>

      <h2>7. Legislación Aplicable</h2>
      <p>Estos Términos y Condiciones se rigen por las leyes de la República de Colombia. Cualquier disputa legal deberá resolverse ante las autoridades competentes en Colombia.</p>

      <h2>8. Contacto</h2>
      <p>Si tiene preguntas o comentarios sobre estos Términos y Condiciones, puede escribirnos a: <a href="mailto:contacto@healthybarf.com">contacto@healthybarf.com</a></p>

      <button onClick={handleAceptar} className={styles.botonAceptar}>Aceptar y volver al registro</button>
    </div>
  );
}

export default Terminos;
