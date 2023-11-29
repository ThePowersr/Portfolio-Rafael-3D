import React from 'react'
import { Link } from 'react-router-dom';
import arrow from '../assets/icons/arrow.svg'

interface Props {
  currentStage: number;
}

interface InfoBoxProps {
  text: string;
  link: string;
  btnText: string;
}

const InfoBox: React.FC<InfoBoxProps> = ({ text, link, btnText }) => {
  return (
    <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>{text}</p>
      <Link to={link} className='neo-brutalism-white neo-btn'>
        {btnText}
        <img src={arrow} />
      </Link>
    </div>
  )
}
const renderContent: { [key: number]: JSX.Element } = {
  1: (
    <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
      Hola, soy <span className='font-semibold'>Rafael</span>
      <br />
      Un desarrollador FrontEnd de Ecuador
    </h1>
  ),
  2: (
    <InfoBox
      text={'He Desarrollado habilidades clave a lo largo de mi trayectoria. Mi compromiso con el aprendizaje constante me prepara para nuevos desafios.'}
      link={'/about'}
      btnText={'conoceme mas'}
    />
  ),
  3: (
    <InfoBox
      text={'He desarrollado y creado multiples proyectos en los ultimos años. ¿Quieres conocerlos?'}
      link={'/projects'}
      btnText={'visita mi portafolio'}
    />
  ),
  4: (
    <InfoBox
      text={'¿Necesitas realizar un proyecto o buscas un desarrollador? Estoy a sólo unas pocas teclas de distancia'}
      link={'/contact'}
      btnText={'Hablemos'}
    />
  ),
}


const HomeInfo: React.FC<Props> = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo
