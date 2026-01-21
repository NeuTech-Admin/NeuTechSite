export interface GalleryImage {
  src: string
  alt: string
  caption?: string
}

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    src: '/ERA Truck.jpg',
    alt: 'ERA Truck',
    caption: 'E-Waste Collection Event',
  },
  {
    src: '/Arduino.jpg',
    alt: 'Arduino Workshop',
    caption: 'Electronics Workshop',
  },
  {
    src: '/Whiteboard.jpg',
    alt: 'Whiteboard Planning',
    caption: 'Planning Session',
  },
  {
    src: '/Desktops.jpg',
    alt: 'Desktop Computers',
    caption: 'Computer Donations',
  },
  {
    src: '/teaching.jpg',
    alt: 'Teaching Session',
    caption: 'Educational Workshops',
  },
  {
    src: '/Laptop.jpg',
    alt: 'Laptop Refurbishment',
    caption: 'Device Refurbishment',
  },
  {
    src: '/electronics.jpg',
    alt: 'Electronics Collection',
    caption: 'E-Waste Recycling',
  },
]
