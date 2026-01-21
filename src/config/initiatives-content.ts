export interface InitiativePageContent {
  slug: string
  title: string
  missionStatement: string
  image: string
  imageAlt: string
}

export const INITIATIVES_CONTENT: Record<string, InitiativePageContent> = {
  yousen: {
    slug: 'yousen',
    title: 'YouSEN',
    missionStatement:
      'YouSEN is an initiative inspiring youth to embrace sustainable engineering. Through engaging workshops and interactive programs, YouSEN equips young minds with the knowledge and skills needed to tackle environmental challenges through engineering.\n\nWith hands-on experiences and mentorship from aspiring engineers, YouSEN empowers the next generation of STEM leaders to create innovative solutions that align with circular economy principles.',
    image: '/engineering_students.jpg',
    imageAlt: 'Engineering Students',
  },
  ewaste: {
    slug: 'ewaste',
    title: 'E-Waste Management',
    missionStatement:
      'Despite many consumers upgrading devices frequently, lower-income families lack access to usable technology; this is known as the digital divide. Our work implements circular economy principles on a community level by collecting and reusing electronic devices. Our goal is to reuse devices to provide affordable technology to assist low-income communities and families. Recycling E-Waste prevents toxic heavy metals from contaminating the environment such as water sources which disproportionately affects disadvantaged groups. By doing this, we contribute to creating a healthier and more equitable society.',
    image: '/goals.jpg',
    imageAlt: 'Goals',
  },
  oaisus: {
    slug: 'oaisus',
    title: 'OAISus',
    missionStatement:
      'With the widespread adoption of Artificial Intelligence, there has been significant discourse on its environmental impact. Current AI companies and solutions are putting little to no emphasis on problems such as energy usage and model efficiency. They are instead solving many of their problems by using more resources, further straining the energy grid and increasing carbon emissions.\n\nOAISus is a research initiative to develop methods for reducing energy consumption and improving the efficiency of AI, without sacrificing quality and accuracy. We propose alternative approaches to the development and deployment of AI models which prioritize sustainability, particularly for AI applications in healthcare, education, social wellbeing, and climate change. We believe that the future of AI should have a strong focus on its use for good while also neutralizing its impact on the environment.',
    image: '/goals.jpg',
    imageAlt: 'Goals',
  },
}
