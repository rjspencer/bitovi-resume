import { FC } from "react";
import type { Client } from "./types";

export const ClientItem: FC<Client> = ({ title, description, technologies }) => {
  return (
    <div className="entry-wrapper">
      <div className="entry-header">
        <h3>{title}</h3>
      </div>
      <p className="entry-description">{description.replace(/^\s/, '')}</p>
      <h4>Technologies:</h4>
      <ul className="entry-tech">
        {technologies.map((technology, index) => (
          <li key={index}>{technology}</li>
        ))}
      </ul>
    </div>
  )
}
