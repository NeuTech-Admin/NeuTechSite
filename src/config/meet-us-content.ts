export interface Founder {
  name: string
  role: string
  image: string
  bio: string
}

export const FOUNDERS: Founder[] = [
  {
    name: 'Ripdaman Malhans',
    role: 'Co-Founder',
    image: '/ripdaman.jpg',
    bio: 'I am a software engineer currently working at HP and have experience in many technical and leadership roles. My focus on computers and software development has made me appreciate the necessity of being connected through devices in our society. This is part of the reason why I am passionate about tackling the disproportionate access to technology that exists today. I am also excited to work on reducing electronics waste in our communities while advocating for the right to repair movement.',
  },
  {
    name: 'Amit Sharma',
    role: 'Co-Founder',
    image: '/amit.jpg',
    bio: 'I am a sustainability ambassador and student researcher at the University of British Columbia. I have extensive leadership experience and have been involved in robotics, technology, and sustainability for over a decade. I aspire to educate youth on the importance of viewing future STEM innovation through a sustainability lens. I am passionate about community initiatives and education because I believe issues such as climate change and pollution can be countered starting at a grassroots level.',
  },
]
