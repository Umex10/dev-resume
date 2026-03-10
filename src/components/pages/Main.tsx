import Hero from './hero/Hero'
import Apps from './apps/Apps'
import Journey from './journey/Journey'
import GitHubSection from './github/GitHubSection'
import Contact from './contact/Contact'
import Signature from './Signature'

const Main = () => {
  return (
    <main className='max-w-7xl mx-auto px-4 pt-6 md:pt-0'>
      <Hero/>
      <Apps/>
      <Journey/>
      <GitHubSection/>
      <Contact/>
      <Signature/>
    </main>
  )
}

export default Main
