import { FC } from "react"
import { content } from "./content"
import { JobItem } from "./JobItem"

export const WorkHistory: FC = () => {
  return (
    <div>
      <h2>Job History</h2>
      {content.jobs.map((job, index) => (
        <JobItem key={index} {...job} />
      ))}
    </div>
  )
}