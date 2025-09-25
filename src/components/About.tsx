import Image from 'next/image';
import { GraduationCap, Heart, Calendar, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-primary-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            About <span className="text-primary-600">Shira</span>
          </h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/cakes/2.jpg"
                alt="Shira Tzur - Cake Designer"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-200 rounded-full opacity-50"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-100 rounded-full opacity-50"></div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                I&apos;m <span className="font-semibold text-primary-600">Shira Tzur</span>, a 19-year-old 
                self-taught baker, cake designer, and full-time student at the University of Texas at Austin. 
                What started as a fun hobby quickly turned into a full-blown passion, and since 2019, 
                I&apos;ve been bringing custom cake visions to life for any occasion.
              </p>
              
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                While custom cakes are my specialty, I also create cupcakes, cookies, and run summer 
                baking workshops where I teach the basics (and the fun!) of baking.
              </p>
            </div>

            {/* Stats/Features */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Since 2019</h3>
                <p className="text-sm text-gray-600">Years of experience</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">UT Austin</h3>
                <p className="text-sm text-gray-600">Full-time student</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Self-Taught</h3>
                <p className="text-sm text-gray-600">Passionate learner</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Custom Design</h3>
                <p className="text-sm text-gray-600">Unique creations</p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-primary-600 text-white p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Create Something Sweet?</h3>
              <p className="text-primary-100 mb-6">
                Let&apos;s discuss your vision and bring your dream cake to life!
              </p>
              <a
                href="tel:+12146776273"
                className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Call Now: +1 214.677.6273
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
