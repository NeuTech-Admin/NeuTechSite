import { InitiativeTemplate } from '@/components/sections/initiative-template'
import { INITIATIVES_CONTENT } from '@/config/initiatives-content'

export function OAISus() {
  const content = INITIATIVES_CONTENT.oaisus

  return (
    <InitiativeTemplate
      title={content.title}
      missionStatement={content.missionStatement}
      image={content.image}
      imageAlt={content.imageAlt}
    />
  )
}
