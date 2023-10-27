import { FC } from "react";
import type { Job } from "./types";

export const JobItem: FC<Job> = ({ title, description, technologies, years }) => {
  return (
    <div className="entry-wrapper">
      <div className="entry-header">
        <h3>{title}</h3>
        <div className="entry-years">
          {years}
        </div>
      </div>
      <ul className="entry-tech">
        {description.map((copy, index) => (
          <li key={index}>{copy}</li>
        ))}
      </ul>
      <h4>Technologies:</h4>
      <ul className="entry-tech">
        {technologies.map((technology, index) => (
          <li key={index}>{technology}</li>
        ))}
      </ul>
    </div>
  )
}
