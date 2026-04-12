import Hero from './hero/Hero'
import Apps from './apps/Apps'
import Journey from './journey/Journey'
import GitHubSection from './github/GitHubSection'
import Contact from './contact/Contact'
import Signature from './Signature'

const Main = () => {
  return (
    <main className='relative max-w-7xl mx-auto px-4 pt-6 md:pt-0 overflow-hidden'>

      {/* Global background glows — dark mode */}
      <div className="pointer-events-none fixed inset-0 z-0 hidden dark:md:block">
        <div className="absolute top-[10%] -left-32 w-[32rem] h-[32rem] rounded-full bg-green-500/15 blur-[120px] animate-float-orb-1" />
        <div className="absolute top-[40%] -right-32 w-[28rem] h-[28rem] rounded-full bg-emerald-500/12 blur-[100px] animate-float-orb-2" />
        <div className="absolute top-[25%] left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] rounded-full bg-green-400/8 blur-[150px] animate-float-orb-3" />
        <div className="absolute top-[60%] right-1/4 w-[20rem] h-[20rem] rounded-full bg-emerald-400/10 blur-[80px] animate-float-orb-4" />
        <div className="absolute top-[80%] left-1/3 w-[18rem] h-[18rem] rounded-full bg-green-600/8 blur-[90px] animate-float-orb-5" />
      </div>

      {/* Global background glows — light mode */}
      <div className="pointer-events-none fixed inset-0 z-0 hidden md:block dark:hidden">
        <div className="absolute top-[10%] -left-20 w-[30rem] h-[30rem] rounded-full bg-green-400/25 blur-[100px] animate-float-orb-1" />
        <div className="absolute top-[40%] -right-20 w-[26rem] h-[26rem] rounded-full bg-emerald-400/20 blur-[90px] animate-float-orb-2" />
        <div className="absolute top-[25%] left-1/2 -translate-x-1/2 w-[36rem] h-[36rem] rounded-full bg-green-300/15 blur-[130px] animate-float-orb-3" />
        <div className="absolute top-[60%] right-1/4 w-[22rem] h-[22rem] rounded-full bg-emerald-300/20 blur-[80px] animate-float-orb-4" />
        <div className="absolute top-[80%] left-1/3 w-[20rem] h-[20rem] rounded-full bg-green-500/15 blur-[90px] animate-float-orb-5" />
      </div>

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
