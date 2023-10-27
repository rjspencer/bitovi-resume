import { FC } from "react"
import { content } from "./content"
import { ClientItem } from "./ClientItem"

export const BitoviWork: FC = () => {
  return (
    <div>
      <h2>Bitovi Work</h2>
      {content.clients.map((client, index) => (
        <ClientItem key={index} {...client} />
      ))}
    </div>
  )
}