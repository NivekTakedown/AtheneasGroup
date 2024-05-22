import React from 'react';
import './styles.css';
import ServiceCard from './utils/ServiceCard';
import ServiceDetailsCard from './utils/ServiceDetailsCard';
import diagnosticoDeDatos from './assets/DiagnósticoDatos.jpeg';
import optimizacionDeDatos from './assets/Optimizacióndatos.jpeg';
import capacitacionPersonalizada from './assets/Capacitaciónpersonalizada.jpeg';
import automatizacionDeProcesos from './assets/Automatizacion.jpeg';
import aprovechamientoDeNuevasFuentes from './assets/diamante.jpeg';
import seguridadInformatica from './assets/seguridad.jpeg';
import { faServer, faChartLine, faRocket, faCogs, faUsers, faShieldAlt } from '@fortawesome/free-solid-svg-icons'
const servicesData = [
  {
    icon: faServer,
    title: 'Diagnóstico estratégico de datos',
    description:
      'Nuestro equipo realiza un análisis exhaustivo de la estructura y uso actual de tus datos, identificando oportunidades de mejora y áreas de crecimiento.',
    link: '#diagnostico-de-datos',
  },
  {
    icon: faChartLine,
    title: 'Optimización de datos',
    description:
      'Te ayudamos a aprovechar al máximo tus datos existentes, mejorando la eficiencia y la toma de decisiones basada en información precisa y actualizada.',
    link: '#optimizacion-de-datos',
  },
  {
    icon: faRocket,
    title: 'Capacitación personalizada',
    description:
      'Ofrecemos programas de capacitación a medida para que tu equipo adquiera las habilidades necesarias en ingeniería de datos e inteligencia artificial.',
    link: '#capacitacion-personalizada',
  },
  {
    icon: faCogs,
    title: 'Automatización de procesos',
    description:
      'Implementamos soluciones de automatización que te permitirán ahorrar tiempo y recursos, liberándote para enfocarte en el crecimiento de tu negocio.',
    link: '#automatizacion-de-procesos',
  },
  {
    icon: faUsers,
    title: 'Aprovechamiento de nuevas fuentes de información',
    description:
      'Exploramos y analizamos fuentes de datos no tradicionales que pueden brindar información valiosa para mejorar tus operaciones y estrategias.',
    link: '#aprovechamiento-de-nuevas-fuentes',
  },
  {
    icon: faShieldAlt,
    title: 'Seguridad informática',
    description:
      'Brindamos capacitación y asesoramiento en las mejores prácticas de seguridad para proteger tus datos sensibles contra amenazas cibernéticas.',
    link: '#seguridad-informatica',
  },
];
const serviceDetailsData = [
  {
    serviceId: 'diagnostico-de-datos',
    imageContainerClass: 'col-lg-6 order-lg-2',
    detailsContainerClass: 'col-lg-6 order-lg-1',
    serviceTitle: 'Diagnóstico estratégico de datos',
    serviceDescription: [
      'En Atheneas Group, nos especializamos en realizar diagnósticos profundos y detallados sobre la organización y aprovechamiento de los datos en tu empresa. Nuestro equipo altamente capacitado utiliza metodologías avanzadas y herramientas de vanguardia para identificar fortalezas, debilidades y áreas de oportunidad en la gestión de tus datos.',
      'Algunos de los aspectos clave que evaluamos durante nuestro diagnóstico incluyen:',
      'Al finalizar nuestro diagnóstico, te proporcionaremos un informe detallado con hallazgos y recomendaciones prácticas para optimizar el manejo de tus datos y obtener el máximo valor de ellos. Nuestro objetivo es ayudarte a convertir tus datos en una ventaja competitiva sustancial que impulse el crecimiento de tu negocio.',
    ],
    serviceImage: diagnosticoDeDatos,
    altText: 'Imagen de diagnóstico de datos',
    serviceListItems: [
      'Estructura y calidad de los datos',
      'Procesos de recolección, almacenamiento y análisis',
      'Integración de datos de diferentes fuentes',
      'Seguridad y privacidad de la información',
      'Uso de datos para la toma de decisiones estratégicas',
    ],
    buttonText: 'Solicita tu diagnóstico ahora',
    buttonLink: '#contacto',
  },
  {
    serviceId: 'optimizacion-de-datos',
    imageContainerClass: 'col-lg-6',
    detailsContainerClass: 'col-lg-6',
    serviceTitle: 'Optimización de datos',
    serviceDescription: [
      'En Atheneas Group, te ayudamos a aprovechar al máximo tus datos existentes para mejorar la eficiencia operativa y la toma de decisiones estratégicas. Nuestro equipo de expertos en ingeniería de datos trabajará contigo para identificar áreas de mejora y desarrollar soluciones a medida que optimicen tus procesos de gestión de datos.',
      'Nuestros servicios de optimización de datos incluyen:',
      'Con nuestra ayuda, podrás tomar decisiones más informadas, identificar nuevas oportunidades de negocio y mejorar la eficiencia general de tu organización. Permítenos ayudarte a llevar tus datos al siguiente nivel.',
    ],
    serviceImage: optimizacionDeDatos,
    altText: 'Imagen de optimización de datos',
    serviceListItems: [
      'Limpieza y enriquecimiento de datos',
      'Integración de datos de múltiples fuentes',
      'Diseño y optimización de bases de datos',
      'Implementación de sistemas de monitoreo y alerta temprana',
      'Creación de dashboards y reportes personalizados',
    ],
    buttonText: 'Solicita una consultoría de optimización de datos',
    buttonLink: '#contacto',
  },
  {
    serviceId: 'capacitacion-personalizada',
    imageContainerClass: 'col-lg-6 order-lg-2',
    detailsContainerClass: 'col-lg-6 order-lg-1',
    serviceTitle: 'Capacitación personalizada',
    serviceDescription: [
      'Invertir en la capacitación de tu equipo es fundamental para mantenerse a la vanguardia en el mundo de la ingeniería de datos y la inteligencia artificial. En Atheneas Group, ofrecemos programas de capacitación a medida diseñados para satisfacer las necesidades específicas de tu organización.',
      'Nuestros expertos en la materia desarrollarán un plan de estudios personalizado que aborde temas como:',
      'Ya sea que tu equipo necesite una introducción a los conceptos básicos o un entrenamiento avanzado en técnicas específicas, nuestros programas de capacitación los prepararán para enfrentar los desafíos del mundo real y generar un impacto significativo en tu organización.',
    ],
    serviceImage: capacitacionPersonalizada,
    altText: 'Imagen de capacitación personalizada',
    serviceListItems: [
      'Fundamentos de la ingeniería de datos',
      'Mejores prácticas en el manejo y análisis de datos',
      'Herramientas y tecnologías de vanguardia',
      'Aplicaciones prácticas de la inteligencia artificial',
      'Desarrollo de proyectos basados en datos',
    ],
    buttonText: 'Solicita más información sobre nuestros programas de capacitación',
    buttonLink: '#contacto',
  },
  {
    serviceId: 'automatizacion-de-procesos',
    imageContainerClass: 'col-lg-6',
    detailsContainerClass: 'col-lg-6',
    serviceTitle: 'Automatización de procesos',
    serviceDescription: [
      'La automatización de procesos basada en datos es clave para optimizar las operaciones, reducir costos y liberar tiempo valioso del equipo. En Atheneas Group, desarrollamos soluciones de automatización a medida que se integran a la perfección con tus sistemas existentes y flujos de trabajo.',
      'Nuestro enfoque de automatización abarca:',
      'Con nuestras soluciones de automatización, podrás reducir errores, mejorar la consistencia y velocidad de los procesos, y permitir que tu equipo se enfoque en tareas de mayor valor agregado. Permítenos ayudarte a aprovechar el poder de la automatización basada en datos.',
    ],
    serviceImage: automatizacionDeProcesos,
    altText: 'Imagen de automatización de procesos',
    serviceListItems: [
      'Identificación de procesos repetitivos y propensos a errores',
      'Diseño y desarrollo de flujos de trabajo automatizados',
      'Integración con fuentes de datos internas y externas',
      'Monitoreo y optimización continua del rendimiento',
      'Capacitación del equipo en el uso y mantenimiento de las soluciones implementadas',
    ],
    buttonText: 'Solicita una consultoría de automatización de procesos',
    buttonLink: '#contacto',
  },
  {
    serviceId: 'aprovechamiento-de-nuevas-fuentes',
    imageContainerClass: 'col-lg-6 order-lg-2',
    detailsContainerClass: 'col-lg-6 order-lg-1',
    serviceTitle: 'Aprovechamiento de nuevas fuentes de información',
    serviceDescription: [
      'En el mundo actual, los datos están en todas partes. Aprovechar nuevas fuentes de información puede proporcionar una ventaja competitiva significativa y revelar ideas que impulsen el crecimiento de tu negocio. En Atheneas Group, te ayudamos a identificar y explotar fuentes de datos no tradicionales para complementar tus datos existentes y obtener una visión más completa de tu entorno empresarial.',
      'Nuestro enfoque para aprovechar nuevas fuentes de información incluye:',
      'Ya sea que se trate de datos de redes sociales, sensores IoT, o fuentes de datos públicas, nuestro equipo tiene la experiencia para ayudarte a convertir esa información en una ventaja competitiva. Descubre el poder de las nuevas fuentes de datos con Atheneas Group.',
    ],
    serviceImage: aprovechamientoDeNuevasFuentes,
    altText: 'Imagen de aprovechamiento de nuevas fuentes de información',
    serviceListItems: [
      'Identificación de fuentes de datos relevantes y valiosas',
      'Recolección y procesamiento de datos estructurados y no estructurados',
      'Integración de datos de múltiples fuentes',
      'Análisis avanzado y extracción de insights accionables',
      'Desarrollo de estrategias basadas en datos para la toma de decisiones',
    ],
    buttonText: 'Solicita una consultoría sobre nuevas fuentes de datos',
    buttonLink: '#contacto',
  },
  {
    serviceId: 'seguridad-informatica',
    imageContainerClass: 'col-lg-6',
    detailsContainerClass: 'col-lg-6',
    serviceTitle: 'Seguridad informática',
    serviceDescription: [
      'En la era digital, proteger tus datos es más importante que nunca. Las violaciones de seguridad pueden tener consecuencias devastadoras para tu negocio, desde la pérdida de confianza de los clientes hasta multas y daños a la reputación. En Atheneas Group, te ayudamos a fortalecer tu postura de seguridad informática y proteger tus activos de datos críticos.',
      'Nuestros servicios de seguridad informática incluyen:',
      'Nuestro equipo de expertos en seguridad trabajará contigo para desarrollar una estrategia integral que proteja tus datos, cumpla con las regulaciones de la industria y mantenga la confianza de tus clientes. No dejes la seguridad de tus datos al azar, confía en Atheneas Group para mantener tu negocio a salvo.',
    ],
    serviceImage: seguridadInformatica,
    altText: 'Imagen de seguridad informática',
    serviceListItems: [
      'Evaluación de vulnerabilidades y pruebas de penetración',
      'Desarrollo e implementación de políticas y procedimientos de seguridad',
      'Capacitación en concientización sobre seguridad para empleados',
      'Monitoreo continuo y detección de amenazas',
      'Respuesta a incidentes y recuperación ante desastres',
    ],
    buttonText: 'Solicita una consultoría de seguridad informática',
    buttonLink: '#contacto',
  },
];

function Services() {
  return (
    <section className="servicios" id="servicios">
      <div className="container">
        <h2 className="text-center display-4 m-5">
          Soluciones innovadoras para impulsar tu negocio
        </h2>
        <div className="row">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
              {serviceDetailsData.map((item, index) => 
            <ServiceDetailsCard key={index} {...item} />
          )}
        </div>

      </div>
    </section>
  );
}

export default Services;