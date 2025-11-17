import Hero from './hero/Hero'
import Apps from './apps/Apps'
import Skills from './skills/Skills'
import Contact from './contact/Contact'


const Main = () => {
  return (
    <main className='max-w-7xl mx-auto px-4 pt-6 md:pt-0'>
      <Hero/>
      <Apps/>
      <Skills/>
      <Contact/>
    </main>
  )
}

export default Main
