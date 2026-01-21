import { Facebook, Instagram, Twitter } from 'lucide-react'

export function Footer() {
  return (
    <div>
      {/* Wave Divider */}
      <div className="w-full overflow-hidden leading-none" style={{ transform: 'rotate(180deg)' }}>
        <svg 
          data-name="Layer 1" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
          className="relative block w-[calc(100%+1.3px)] h-[100px]"
          style={{ transform: 'rotateY(180deg)' }}
        >
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#0A5B89"
          />
        </svg>
      </div>

      {/* Footer Content */}
      <div 
        className="bg-[#0A5B89] flex flex-col w-full h-fit bottom-0 px-8"
      >
        <section className="flex flex-row">
          <p 
            className="text-white text-[1.1rem] mt-16 ml-8"
            style={{ fontFamily: 'Nunito-ExtraBold' }}
          >
            Contact us at info@ntfoundation.ca
          </p>

          <div className="ml-auto">
            <div className="text-right mt-8">
              <p 
                className="max-md:hidden text-white text-[1.1rem] mr-8 mt-16"
                style={{ fontFamily: 'Nunito-ExtraBold' }}
              >
                Check out our socials to stay up to date with our initiatives
              </p>
              <p 
                className="md:hidden text-white text-[1rem] mr-8 mt-8"
                style={{ fontFamily: 'Nunito-ExtraBold' }}
              >
                Check out our socials
              </p>

              <div className="mt-4 mr-8 flex justify-end gap-2">
                <Instagram 
                  className="text-white text-2xl cursor-pointer hover:text-[#40E0D0] transition-colors duration-250"
                  size={24}
                />
                <Twitter 
                  className="text-white text-2xl cursor-pointer hover:text-[#40E0D0] transition-colors duration-250"
                  size={24}
                />
                <Facebook 
                  className="text-white text-2xl cursor-pointer hover:text-[#40E0D0] transition-colors duration-250"
                  size={24}
                />
              </div>
            </div>
          </div>
        </section>

        <p 
          className="text-white text-center mt-[3.2rem] mb-8"
          style={{ fontFamily: 'Nunito-ExtraBold' }}
        >
          © 2023 NeuTech Foundation
        </p>
      </div>
    </div>
  )
}
