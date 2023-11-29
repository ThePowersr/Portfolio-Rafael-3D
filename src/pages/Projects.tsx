import { projects } from '../constants/index';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons'
import CTA from '../components/CTA';

const Projects = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Mis <span className="blue-gradient_text font-semibold drop-shadow-sm">Proyectos</span>
      </h1>
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          Me he embarcado en numerosos proyectos a lo largo de este tiempo como desarrollador,
          y aqui mostrare los proyectos que he creado. Todos son de código abierto, por lo que si
          encuentran algo que despierte su interes, no duden en poder explorar el código base y contribuir
          con ideas futuras para mejoras.
        </p>
      </div>
      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) => (
          <div className='lg:w-[400px] w-full' key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={project.iconUrl}
                  alt="Project Icon"
                  className='w-16 h-16'
                />
              </div>
            </div>
            <div className='mt-5 flex flex-col'>
              <h4 className='text-2xl font-poppins font-semibold'>{project.name}</h4>
              <p className='mt-2 text-slate-500'>{project.description}</p>
              <div className='mt-5 flex items-center gap-2 font-poppins'>
                <Link
                  to={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='font-semibold text-blue-600'
                >
                  Live Link
                </Link>
                <img src={arrow} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className='border-slate-200' />
      <CTA />
    </section>
  )
}

export default Projects
