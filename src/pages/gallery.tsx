import { useState } from 'react'
import { motion } from 'framer-motion'
import { PageLayout } from '@/components/layout/page-layout'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { GALLERY_IMAGES } from '@/config/gallery-content'
import { COLORS, FONTS, ANIMATION_DURATIONS } from '@/config/theme'

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedAlt, setSelectedAlt] = useState<string>('')

  const openImageModal = (src: string, alt: string) => {
    setSelectedImage(src)
    setSelectedAlt(alt)
  }

  const closeImageModal = () => {
    setSelectedImage(null)
    setSelectedAlt('')
  }

  return (
    <PageLayout>
      <div className="flex flex-col w-full min-h-screen bg-white py-20 px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: ANIMATION_DURATIONS.medium }}
          className="text-center mb-16"
        >
          <h1
            className={`text-[3.5rem] text-[${COLORS.primaryBlue}] mb-4 max-lg:text-[2.5rem]`}
            style={{ fontFamily: FONTS.nunitoBlack }}
          >
            Gallery
          </h1>
          <p
            className={`text-[1.3rem] text-[${COLORS.primaryBlue}] max-w-3xl mx-auto`}
            style={{ fontFamily: FONTS.nunitoExtraBold }}
          >
            Explore our initiatives in action. From workshops and community events to e-waste
            collection and technology refurbishment.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {GALLERY_IMAGES.map((image, index) => (
              <motion.div
                key={image.src}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{
                  duration: ANIMATION_DURATIONS.medium,
                  delay: index * 0.1,
                }}
                onClick={() => openImageModal(image.src, image.alt)}
                className="group relative overflow-hidden transition-all duration-300 cursor-pointer"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: ANIMATION_DURATIONS.medium }}
          className="text-center mt-20"
        >
          <p
            className={`text-[1.5rem] text-[${COLORS.primaryBlue}] mb-6`}
            style={{ fontFamily: FONTS.nunitoExtraBold }}
          >
            Want to see more of our work in your community?
          </p>
          <a
            href="/support-us"
            className={`inline-block bg-[${COLORS.primaryBlue}] hover:bg-[${COLORS.hoverBlue}] text-white text-[1.2rem] px-10 py-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 font-bold`}
            style={{ fontFamily: FONTS.nunitoBlack }}
          >
            Support Our Cause
          </a>
        </motion.div>
      </div>

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={closeImageModal}>
        <DialogContent 
          showCloseButton={false}
          className="max-w-[95vw] max-h-[95vh] p-0 bg-transparent border-none shadow-none rounded-none"
        >
          {selectedImage && (
            <img
              src={selectedImage}
              alt={selectedAlt}
              className="w-full h-full object-contain"
            />
          )}
        </DialogContent>
      </Dialog>
    </PageLayout>
  )
}
