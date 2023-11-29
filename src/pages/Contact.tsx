import { ChangeEvent, ChangeEventHandler, Suspense, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Canvas } from '@react-three/fiber';
import Fox from '../models/Fox';
import Loader from '../components/Loader';
import useAlert from '../hooks/useAlert';
import Alert from '../components/Alert';

const Contact = () => {
  const formRef = useRef(null)

  const [form, setform] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimations, setCurrentAnimations] = useState('idle');
  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setform({ ...form, [e.target.name]: e.target.value })
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimations('hit')
    const formu = e.currentTarget as HTMLFormElement;

    emailjs.sendForm(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      formu,
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setIsLoading(false);
      // TODO: Show Success message
      showAlert({ show: true, text: 'El mensaje se envio de manera exitosa.', type: 'success' });
      // TODO: Hise an alert
      setTimeout(() => {
        hideAlert();
        setCurrentAnimations('idle');
        setform({ name: '', email: '', message: '' })
      }, 3000)
    }).catch((error) => {
      setIsLoading(false);
      setCurrentAnimations('idle')
      showAlert({ show: true, text: 'No hemos podido recibir tu mensaje.', type: 'danger' })
      // TODO: Show error message
    })

  };
  const handleFocus = () => setCurrentAnimations('walk');
  const handleBlur = () => setCurrentAnimations('idle');

  return (
    <section className='relative flex lg:flex-row flex-col h-[100vh] w-full max-container'>
      {alert.show && <Alert {...alert} />}
      {/* <Alert text={'correcto'} /> */}
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Contactame</h1>
        <form ref={formRef} action="" className='w-full flex flex-col gap-7 mt-14' onSubmit={handleSubmit}>
          <label className='text-black-500 font-semibold'>
            nombre
            <input
              type='text'
              name='name'
              className='input'
              placeholder='Rafael'
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Correo
            <input
              type='text'
              name='email'
              className='input'
              placeholder='angelzde36@gmail.com'
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Tu mensaje
            <textarea
              name='message'
              className='textarea'
              placeholder='Déjame saber cómo puedo ayudarte'
              required
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <button
            className='btn'
            disabled={isLoading}
            type='submit'
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {isLoading ? 'enviando...' : 'Enivar mensaje'}
          </button>
        </form>
      </div>
      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000
          }}
        >
          <directionalLight intensity={2.5} position={[0, 0, 1]} />
          <ambientLight intensity={1} />
          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimations}
              position={[0.5, 0.35, 0]}
              rotation={[12.6, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  )
}

export default Contact
