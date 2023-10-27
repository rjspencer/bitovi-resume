import { FC } from "react"

const links = [{
  title: "GitHub",
  url: "https://github.com/rjspencer/",
}, {
  title: "Client Project: PG&E",
  url: "https://ev.pge.com/charging-stations"
}, {
  title: "Personal Project: S'more RV",
  url: "https://www.smore.info"
}, {
  title: "Blog Post: Efficient Code Review Process",
  url: "https://www.bitovi.com/blog/improve-velocity-with-efficient-code-review-process"
}, {
  title: "Blog Post: Visual Regression Testing",
  url: "https://www.bitovi.com/blog/visual-regression-testing-quality"
}, {
  title: "Blog Post: Writing More Readable React Code",
  url: "https://www.bitovi.com/blog/5-quick-tips-for-writing-more-readable-react-code-chatgpt-experiment"
}]

export const WhyMe: FC = () => {
  return (
    <div>
      <h2>Why Me?</h2>
      <div className="entry-wrapper">
        <p className="entry-description">
          {`
        I've had various official and unofficial leadership roles throughout my career, but getting to lead a team of ~8 developers is a new challenge I'm ready to take on. I enjoy working on things and seeing them grow beyond me. From my children to the  development teams & products I've worked on, they all fill me with a sense of pride and accomplishment as they become both greater and different than than me.
        
        I believe in letting people fail, as I know my biggest personal growth moments have all been failure. While I'm going to make sure you wear a helmet, I know that we all need to crash at some point. I'm not a micro-manager, and I work to keep my ego in check so others can find their own path to success while doing my best to support them.

        My business degree and diverse work experience is what sets me apart from other candidates for the team lead role. 

        There is a concept consultant role coming, and I also feel I'm a good fit for that. I spent a long time debating which I want more, and ultimately I decided that I don't care. I want to be an important part of where Bitovi is going, and I'm confident I can do that in either role. 

        - Ryan Spencer
        `.replace(/^\s/, '')}
        </p>
      </div>
      <div className="entry-wrapper">
        <div className="entry-header">
          <h3>Links</h3>
        </div>
        <ul>
          {links.map(({ title, url }) => (
            <li>
              {title}
              <a href={url} style={{ display: "block", paddingLeft: "1rem" }}>
                {url}
              </a>
            </li>
          ))}
        </ul>
      </div >
    </div >
  )
}