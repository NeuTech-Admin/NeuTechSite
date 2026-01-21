export interface Principle {
  title: string
  description: string
  image: string
  imageAlt: string
  imagePosition: 'left' | 'right'
}

export const THREE_ARMS_TITLE = 'The Three Arms'

export const PRINCIPLES: Principle[] = [
  {
    title: 'Sustainability in STEM Education',
    description:
      'With a focus on youth and teaching sustainable engineering through our initiative YouSEN, we hope to inspire the next generation of STEM leaders and innovators to work towards solving complex problems related to sustainability.',
    image: '/DarkArm.png',
    imageAlt: 'Dark Arm',
    imagePosition: 'left',
  },
  {
    title: 'Technology Reuse & Redistribution',
    description:
      'Our aim is to prevent electronics from ending up in landfills and harming the environment. We work to improve access to technology to utilize telehealth services and pursue education. We make sure that all types of technology are carefully inspected to determine if they can be reused before recycling them. To this end we work with other non-profit organizations and health authorities that have experience with distribution to rural & Indigenous communities.',
    image: '/LightArm.png',
    imageAlt: 'Light Arm',
    imagePosition: 'right',
  },
  {
    title: 'Optimizing AI for Sustainability',
    description:
      'We focus on developing methods for reducing energy consumption and improving the efficiency of AI applications. Current development practices put minimal emphasis on computational resource demand. We propose alternative approaches to AI development and deployment which prioritize sustainability, particularly for applications in healthcare, education, social wellbeing, and climate change.',
    image: '/DarkArm.png',
    imageAlt: 'Dark Arm',
    imagePosition: 'left',
  },
]
