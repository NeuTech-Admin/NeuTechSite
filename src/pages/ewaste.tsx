import { InitiativeTemplate } from '@/components/sections/initiative-template'
import { INITIATIVES_CONTENT } from '@/config/initiatives-content'

export function EWaste() {
  const content = INITIATIVES_CONTENT.ewaste

  return (
    <InitiativeTemplate
      title={content.title}
      missionStatement={content.missionStatement}
      image={content.image}
      imageAlt={content.imageAlt}
    />
  )
}
