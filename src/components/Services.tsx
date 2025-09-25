'use client';

import { Cake, Heart, Cookie, Users } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Cake,
      title: 'Custom Cakes',
      description: 'Beautiful, personalized cakes for birthdays, weddings, anniversaries, and special occasions.',
      features: [
        'Custom design consultation',
        'Fresh ingredients',
        'Multiple flavor options',
        'Various sizes available',
        'Delivery available'
      ],
      startingPrice: '$45',
      popular: true
    },
    {
      icon: Heart,
      title: 'Cupcakes',
      description: 'Delicious cupcakes perfect for parties, events, or just because you deserve something sweet.',
      features: [
        'Custom flavors',
        'Beautiful decorations',
        'Minimum 12 cupcakes',
        'Party packages available',
        'Seasonal specials'
      ],
      startingPrice: '$24',
      popular: false
    },
    {
      icon: Cookie,
      title: 'Cookies',
      description: 'Hand-decorated cookies that are almost too pretty to eat. Almost.',
      features: [
        'Custom designs',
        'Sugar cookies',
        'Chocolate chip varieties',
        'Holiday themes',
        'Gift packaging'
      ],
      startingPrice: '$18',
      popular: false
    },
    {
      icon: Users,
      title: 'Baking Workshops',
      description: 'Learn the basics of baking in fun, hands-on workshops during summer months.',
      features: [
        'Beginner-friendly',
        'All supplies included',
        'Take home your creations',
        'Small group sizes',
        'Summer sessions only'
      ],
      startingPrice: '$35',
      popular: false
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Our <span className="text-primary-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From custom cakes to baking workshops, we offer a variety of sweet services 
            to make your special moments even more memorable.
          </p>
          <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                  service.popular ? 'ring-2 ring-primary-500 scale-105' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-primary-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="text-3xl font-bold text-primary-600 mb-2">
                      Starting at {service.startingPrice}
                    </div>
                    <p className="text-sm text-gray-500">per order</p>
                  </div>

                  <div className="space-y-3 mb-8">
                    <h4 className="font-semibold text-gray-800 mb-3">What&apos;s Included:</h4>
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                    Order Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Need Something Special?
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Don&apos;t see exactly what you&apos;re looking for? I love creating custom treats 
              for unique occasions. Let&apos;s discuss your vision and make it happen!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+12146776273"
                className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                Call: +1 214.677.6273
              </a>
              <button
                onClick={() => {
                  const element = document.getElementById('home');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold border-2 border-primary-600 hover:bg-primary-50 transition-colors"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
