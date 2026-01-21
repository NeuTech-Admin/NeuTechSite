import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { PageLayout } from '@/components/layout/page-layout'
import { TESTIMONIAL_CONTENT } from '@/config/testimonial-content'
import { COLORS, FONTS, ANIMATION_DURATIONS } from '@/config/theme'

export function Testimonial() {
  return (
    <PageLayout>
      <div className="flex flex-col w-full min-h-screen bg-white py-20 px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: ANIMATION_DURATIONS.medium }}
          className="text-center mb-20 max-w-4xl mx-auto"
        >
          <h1
            className={`text-[3.5rem] text-[${COLORS.primaryBlue}] mb-6 max-lg:text-[2.5rem]`}
            style={{ fontFamily: FONTS.nunitoBlack }}
          >
            {TESTIMONIAL_CONTENT.title}
          </h1>
          <div className="w-32 h-1 bg-[#2585BB] mx-auto" />
        </motion.div>

        {/* Testimonial Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: ANIMATION_DURATIONS.medium, delay: 0.2 }}
          className="max-w-5xl mx-auto w-full"
        >
          <div className="bg-white rounded-2xl shadow-2xl p-12 relative max-lg:p-8">
            {/* Opening Quote */}
            <Quote
              className={`text-[${COLORS.lightBlue}] absolute top-8 left-8 opacity-20`}
              size={64}
            />

            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: ANIMATION_DURATIONS.medium, delay: 0.3 }}
              className={`text-[1.8rem] text-[${COLORS.primaryBlue}] mb-8 relative z-10`}
              style={{ fontFamily: FONTS.nunitoBlack }}
            >
              {TESTIMONIAL_CONTENT.testimonial.greeting}
            </motion.p>

            {/* Testimonial Text */}
            <div className="space-y-6 mb-10 relative z-10">
              {TESTIMONIAL_CONTENT.testimonial.text.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{
                    duration: ANIMATION_DURATIONS.medium,
                    delay: 0.4 + index * 0.1,
                  }}
                  className={`text-[1.2rem] text-[${COLORS.primaryBlue}] leading-relaxed`}
                  style={{ fontFamily: FONTS.nunitoExtraBold }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* Author */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{
                duration: ANIMATION_DURATIONS.medium,
                delay: 1.0,
              }}
              className={`text-[1.5rem] text-[${COLORS.primaryBlue}] text-right relative z-10`}
              style={{ fontFamily: FONTS.nunitoBlack }}
            >
              {TESTIMONIAL_CONTENT.testimonial.author}
            </motion.p>

            {/* Closing Quote */}
            <Quote
              className={`text-[${COLORS.lightBlue}] absolute bottom-8 right-8 opacity-20 rotate-180`}
              size={64}
            />
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: ANIMATION_DURATIONS.medium, delay: 0.5 }}
          className="text-center mt-20"
        >
          <p
            className={`text-[1.5rem] text-[${COLORS.primaryBlue}] mb-6`}
            style={{ fontFamily: FONTS.nunitoExtraBold }}
          >
            Want to make a difference in your community?
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
    </PageLayout>
  )
}
