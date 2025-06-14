import { FaCar, FaTools, FaGasPump, FaFileAlt, FaHistory, FaChartLine, FaGooglePlay, FaApple } from 'react-icons/fa';
import Image from 'next/image';

export default function Home() {
  const features = [
    {
      icon: <FaCar className="w-8 h-8" />,
      title: "Vehicle Management",
      description: "Keep track of all your vehicles in one place with detailed information and status updates."
    },
    {
      icon: <FaTools className="w-8 h-8" />,
      title: "Maintenance Tracking",
      description: "Never miss a service appointment with automated maintenance reminders and tracking."
    },
    {
      icon: <FaGasPump className="w-8 h-8" />,
      title: "Fuel Consumption",
      description: "Monitor your fuel efficiency and track expenses with detailed consumption analytics."
    },
    {
      icon: <FaFileAlt className="w-8 h-8" />,
      title: "Document Management",
      description: "Store and organize all your vehicle-related documents in one secure location."
    },
    {
      icon: <FaHistory className="w-8 h-8" />,
      title: "Service History",
      description: "Maintain a complete history of all services and repairs for each vehicle."
    },
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: "Cost Tracking",
      description: "Track all expenses related to your vehicles and generate detailed reports."
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-secondary text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/garage-hero.jpg"
            alt="Modern Car Garage"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90"></div>
        </div>
        <div className="container mx-auto px-6 py-16 relative">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left side - Image with Overlay */}
            <div className="flex-1 relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="/images/mechanic-working.jpg"
                alt="Professional Car Maintenance"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Right side - Content */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Professional Car
                <span className="block text-accent">Maintenance Made Easy</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-300">
                Trust your vehicle to the experts. Track maintenance, manage repairs, and keep your car running smoothly with our comprehensive management platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button className="bg-accent text-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all">
                  Get Started
                </button>
                <button className="border-2 border-accent text-accent px-8 py-4 rounded-full text-lg font-semibold hover:bg-accent hover:bg-opacity-10 transition-all">
                  Learn More
                </button>
              </div>
              <div className="mt-12 flex items-center justify-center md:justify-start gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">10K+</div>
                  <div className="text-sm text-gray-400">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">50K+</div>
                  <div className="text-sm text-gray-400">Vehicles Tracked</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent">4.8</div>
                  <div className="text-sm text-gray-400">App Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-primary mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Preview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-4xl font-bold mb-6">Smart Car Management at Your Fingertips</h2>
              <p className="text-xl text-gray-600 mb-8">
                Experience the future of vehicle management with our intuitive mobile app. Track, manage, and optimize your car's performance effortlessly.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Real-time vehicle status updates</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Automated maintenance reminders</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Detailed expense tracking</span>
                </li>
              </ul>
            </div>
            <div className="flex-1 relative h-[600px]">
              <Image
                src="/images/app-preview.png"
                alt="Carnama app interface"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Simplify Your Vehicle Management?</h2>
          <p className="text-xl mb-12">Join thousands of car owners who trust Carnama for their vehicle management needs.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-accent text-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all flex items-center justify-center gap-3">
              <FaGooglePlay className="w-6 h-6" />
              <div className="text-left">
                <div className="text-xs">GET IT ON</div>
                <div className="text-sm font-bold">Google Play</div>
              </div>
            </button>
            <button className="bg-accent text-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-all flex items-center justify-center gap-3">
              <FaApple className="w-6 h-6" />
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="text-sm font-bold">App Store</div>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <p className="text-lg">© 2024 Carnama. All rights reserved.</p>
            <p className="mt-4 text-gray-400">carnama.app</p>
          </div>
        </div>
      </footer>
    </main>
  );
} 