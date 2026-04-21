import { motion } from 'framer-motion'
import { Briefcase, Heart, Mail, Clock, ArrowRight } from 'lucide-react'
import { PageLayout } from '@/components/layout/page-layout'
import { AngledDivider } from '@/components/ui/angled-divider'
import { COLORS, FONTS, ANIMATION_DURATIONS } from '@/config/theme'

const OPPORTUNITY_CARDS = [
  {
    icon: Briefcase,
    title: 'Job Opportunities',
    description:
      'Join our growing team and help drive meaningful change through technology and innovation. We welcome passionate individuals from every background.',
    badge: 'Coming Soon',
    listTitle: 'What we look for',
    list: [
      'Passion for technology and social impact',
      'Collaborative, community-driven mindset',
      'Diverse perspectives and skill sets',
    ],
    detail: 'Open positions are on the way. Reach out early to express your interest.',
  },
  {
    icon: Heart,
    title: 'Volunteer Opportunities',
    description:
      'Give your time and skills to make a real impact in communities across Canada. No matter your background, there is a meaningful role for you.',
    badge: 'Coming Soon',
    listTitle: 'How you can help',
    list: [
      'Program delivery and community outreach',
      'Technical mentorship and education',
      'Event organization and communications',
    ],
    detail: 'Volunteer postings are coming soon. Get in touch to register your interest.',
  },
]

export function JoinUs() {
  return (
    <PageLayout>
      <div className="flex flex-col w-full h-fit">

        {/* Hero */}
        <div className="bg-white flex flex-col items-center justify-center py-16 px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: ANIMATION_DURATIONS.medium, ease: 'easeOut' }}
            className="text-[3.25rem] max-lg:text-[2.5rem] mb-5"
            style={{ fontFamily: FONTS.nunitoBlack, color: COLORS.primaryBlue }}
          >
            Get Involved
          </motion.span>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: ANIMATION_DURATIONS.medium, delay: 0.15, ease: 'easeOut' }}
            className="text-[1.1rem] max-w-[580px] leading-relaxed text-gray-500"
            style={{ fontFamily: FONTS.ui }}
          >
            Whether you're looking for a career in tech-for-good or want to volunteer your skills,
            the NeuTech Foundation has a place for you. Explore your options below or reach out
            directly.
          </motion.p>
        </div>

        <AngledDivider variant="top" color={COLORS.lightHoverBlue} />

        {/* Opportunities + Reach Out */}
        <div style={{ backgroundColor: COLORS.lightHoverBlue }} className="py-14 flex flex-col items-center px-8">

          {/* Expanded opportunity cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl mb-8">
            {OPPORTUNITY_CARDS.map((card, index) => {
              const Icon = card.icon
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: ANIMATION_DURATIONS.medium, delay: index * 0.15 }}
                  className="bg-white rounded-2xl p-10 flex flex-col gap-6"
                  style={{ boxShadow: '0px 4px 20px rgba(37,133,187,0.12)' }}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="rounded-xl p-3.5 w-fit shrink-0" style={{ backgroundColor: COLORS.primaryBlue }}>
                      <Icon size={32} color="white" />
                    </div>
                    <span
                      className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full mt-1 shrink-0"
                      style={{ fontFamily: FONTS.ui, color: COLORS.primaryBlue, backgroundColor: '#dff0fb' }}
                    >
                      <Clock size={12} />
                      {card.badge}
                    </span>
                  </div>

                  {/* Title + description */}
                  <div className="flex flex-col gap-3">
                    <h3
                      className="text-[1.45rem]"
                      style={{ fontFamily: FONTS.nunitoBlack, color: COLORS.primaryBlue }}
                    >
                      {card.title}
                    </h3>
                    <p
                      className="text-gray-500 leading-relaxed text-[0.95rem]"
                      style={{ fontFamily: FONTS.ui }}
                    >
                      {card.description}
                    </p>
                  </div>

                  {/* Bullet list */}
                  <div className="flex flex-col gap-2">
                    <span
                      className="text-[0.75rem] uppercase tracking-wider"
                      style={{ fontFamily: FONTS.ui, fontWeight: 700, color: COLORS.hoverBlue }}
                    >
                      {card.listTitle}
                    </span>
                    <ul className="flex flex-col gap-2">
                      {card.list.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-gray-500 text-[0.9rem] leading-snug"
                          style={{ fontFamily: FONTS.ui }}
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: COLORS.primaryBlue }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer CTA */}
                  <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between gap-4">
                    <p
                      className="text-gray-400 text-[0.82rem] italic leading-relaxed"
                      style={{ fontFamily: FONTS.ui }}
                    >
                      {card.detail}
                    </p>
                    <a
                      href="mailto:info@ntfoundation.ca"
                      className="flex items-center gap-1.5 text-[0.85rem] font-semibold transition-colors duration-200 shrink-0 hover:opacity-75"
                      style={{ fontFamily: FONTS.ui, color: COLORS.primaryBlue }}
                    >
                      Reach out
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Compact Reach Out bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: ANIMATION_DURATIONS.medium }}
            className="w-full max-w-5xl bg-white rounded-2xl px-10 py-7 flex flex-col sm:flex-row items-center justify-between gap-5"
            style={{ boxShadow: '0px 4px 20px rgba(37,133,187,0.12)' }}
          >
            <div className="flex items-center gap-4">
              <div className="rounded-xl p-2.5 w-fit shrink-0" style={{ backgroundColor: COLORS.primaryBlue }}>
                <Mail size={22} color="white" />
              </div>
              <p
                className="text-gray-500 text-[0.95rem] leading-snug"
                style={{ fontFamily: FONTS.ui }}
              >
                Have questions or want to introduce yourself?{' '}
                <span className="font-semibold" style={{ color: COLORS.primaryBlue }}>We read every email.</span>
              </p>
            </div>
            <a
              href="mailto:info@ntfoundation.ca"
              className="inline-flex items-center gap-2 font-bold text-[1rem] transition-colors duration-200 shrink-0 hover:opacity-75"
              style={{ fontFamily: FONTS.nunitoBlack, color: COLORS.primaryBlue }}
            >
              info@ntfoundation.ca
              <ArrowRight size={16} />
            </a>
          </motion.div>

        </div>

        <AngledDivider variant="bottom" color={COLORS.lightHoverBlue} />
      </div>
    </PageLayout>
  )
}
