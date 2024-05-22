import React from 'react';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import atheneasAppleIcon from './assets/apple-touch-icon.png';
import atheneasFavicon32 from './assets/favicon-32x32.png';
import atheneasFavicon16 from './assets/favicon-16x16.png';
import './styles.css';

function Head() {
  return (
    <Helmet>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Atheneas Group | Transformando datos en éxito, Potenciando tu empresa</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
      <link rel="apple-touch-icon" sizes="180x180" href={atheneasAppleIcon} />
      <link rel="icon" type="image/png" sizes="32x32" href={atheneasFavicon32} />
      <link rel="icon" type="image/png" sizes="16x16" href={atheneasFavicon16} />
      <link rel="manifest" href="assets/site.webmanifest" />
      <meta name="description" content="Atena's Group es una empresa de consultoría colombiana líder en soluciones de ingeniería de datos e inteligencia artificial. Brindamos servicios de diagnóstico, optimización y aprovechamiento de datos, capacitación personalizada, automatización de procesos y seguridad informática para potenciar el uso de datos en empresas y maximizar su éxito." />
      <meta name="keywords" content="ingeniería de datos, inteligencia artificial, consultoría empresarial, análisis de datos, big data, machine learning, automatización de procesos, ciberseguridad" />
      <meta name="author" content="Atena's Group" />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content="Atena's Group | Transformando datos en éxito, Potenciando tu empresa" />
      <meta property="og:description" content="Atena's Group transforma datos en éxito, potenciando empresas colombianas con soluciones innovadoras de ingeniería de datos e inteligencia artificial." />
      <meta property="og:url" content="https://nivektakedown.github.io/AtheneasGroup/" />
      <meta property="og:image" content="https://nivektakedown.github.io/AtheneasGroup/assets/apple-touch-icon.png" />
      <meta property="og:type" content="website" />
    </Helmet>
  );
}

export default Head;