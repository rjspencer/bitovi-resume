import './App.css'
import { BitoviWork } from './components/bitoviWork/BitoviWork'
import { WhyMe } from './components/whyMe/WhyMe'
import { WorkHistory } from './components/workHistory/WorkHistory'

function App() {
  return (
    <>
      <nav className="navigation">
        <div className="links">
          <a href="#why-me">
            Why me?
          </a>
          <a href="#bitovi-work">
            Bitovi Work
          </a>
          <a href="#work-history">
            Job History
          </a>
        </div>
      </nav>
      <main>
        <h1>Ryan Spencer</h1>
        <section id="why-me">
          <WhyMe />
        </section>
        <section id="bitovi-work">
          <BitoviWork />
        </section>
        <section id="work-history">
          <WorkHistory />
        </section>
      </main>
    </>
  )
}

export default App
