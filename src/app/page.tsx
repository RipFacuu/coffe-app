"use client"

import { ArrowRight, ChevronDown, Coffee, Package, Star, Truck } from "lucide-react";
import { useState, useEffect } from "react";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-amber-50">
      <header 
        id="header" 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'glass shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Coffee className="h-8 w-8 text-amber-700 animate-float" />
            <img
              id="header-img"
              src="https://images.unsplash.com/photo-1518832553480-cd0e625ed3e6?w=50&h=50&fit=crop"
              alt="Brew Box Logo"
              className="h-12 w-12 rounded-full object-cover shadow-lg"
            />
          </div>
          
          <nav id="nav-bar" className="flex gap-8">
            <a href="#features" className="nav-link font-medium text-amber-900 hover:text-amber-700 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-amber-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform">Features</a>
            <a href="#how-it-works" className="nav-link font-medium text-amber-900 hover:text-amber-700 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-amber-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform">How It Works</a>
            <a href="#pricing" className="nav-link font-medium text-amber-900 hover:text-amber-700 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-amber-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform">Pricing</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="min-h-screen flex items-center relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-100/80 via-transparent to-amber-50/50" />
            <img
              src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=2000&q=80"
              alt="Coffee beans background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container mx-auto px-4 py-32">
            <div className="max-w-3xl fade-in">
              <h1 className="text-5xl md:text-7xl font-bold text-amber-900 mb-6 leading-tight">
                Elevate Your <span className="text-amber-600">Coffee</span> Experience
              </h1>
              <p className="text-xl md:text-2xl text-amber-800 mb-12 leading-relaxed">
                Artisanal coffee delivered to your doorstep, perfectly roasted and always fresh.
              </p>
              <form 
                id="form" 
                action="https://www.freecodecamp.com/email-submit"
                className="flex flex-col sm:flex-row gap-4 max-w-md"
              >
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  required
                  className="flex-1 px-6 py-4 rounded-full border-2 border-amber-200 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 shadow-lg"
                />
                <button
                  id="submit"
                  type="submit"
                  className="px-8 py-4 bg-amber-700 text-white rounded-full hover:bg-amber-800 transition-colors shadow-lg flex items-center justify-center gap-2 group"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
              <ChevronDown className="w-8 h-8 text-amber-700" />
            </div>
          </div>
        </section>

        <section id="features" className="py-32 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-12">
              <div className="group p-8 rounded-2xl hover:bg-amber-50 transition-colors duration-300">
                <div className="mb-6 p-4 bg-amber-100 rounded-xl w-fit group-hover:scale-110 transition-transform">
                  <Package className="w-8 h-8 text-amber-700" />
                </div>
                <h3 className="text-2xl font-semibold text-amber-900 mb-4">Premium Selection</h3>
                <p className="text-amber-800 leading-relaxed">Hand-picked coffee beans from award-winning farms worldwide, ensuring exceptional quality in every cup.</p>
              </div>
              <div className="group p-8 rounded-2xl hover:bg-amber-50 transition-colors duration-300">
                <div className="mb-6 p-4 bg-amber-100 rounded-xl w-fit group-hover:scale-110 transition-transform">
                  <Coffee className="w-8 h-8 text-amber-700" />
                </div>
                <h3 className="text-2xl font-semibold text-amber-900 mb-4">Fresh Roasted</h3>
                <p className="text-amber-800 leading-relaxed">Small-batch roasting within 24 hours of shipping, guaranteeing peak flavor and freshness.</p>
              </div>
              <div className="group p-8 rounded-2xl hover:bg-amber-50 transition-colors duration-300">
                <div className="mb-6 p-4 bg-amber-100 rounded-xl w-fit group-hover:scale-110 transition-transform">
                  <Truck className="w-8 h-8 text-amber-700" />
                </div>
                <h3 className="text-2xl font-semibold text-amber-900 mb-4">Free Delivery</h3>
                <p className="text-amber-800 leading-relaxed">Complimentary shipping on all subscription orders, delivered right to your door.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="py-32 bg-gradient-to-b from-amber-50 to-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-amber-900 mb-16">How It Works</h2>
            <div className="max-w-4xl mx-auto glass rounded-3xl overflow-hidden shadow-xl">
              <iframe
                id="video"
                width="100%"
                height="500"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Product Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        <section id="pricing" className="py-32 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-amber-900 text-center mb-16">Choose Your Plan</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  name: 'Starter',
                  price: 29,
                  features: ['1 bag of coffee monthly', 'Basic brewing guide', 'Free shipping'],
                },
                {
                  name: 'Popular',
                  price: 49,
                  features: ['2 bags of coffee monthly', 'Premium brewing guide', 'Free shipping', 'Exclusive tastings'],
                  popular: true,
                },
                {
                  name: 'Connoisseur',
                  price: 79,
                  features: ['4 bags of coffee monthly', 'Expert brewing guide', 'Free shipping', 'Exclusive tastings', 'Coffee masterclasses'],
                },
              ].map((plan) => (
                <div
                  key={plan.name}
                  className={`group relative p-8 rounded-3xl transition-transform duration-300 hover:-translate-y-2 ${
                    plan.popular
                      ? 'bg-gradient-to-b from-amber-50 to-white shadow-xl border-2 border-amber-200'
                      : 'bg-white shadow-lg hover:shadow-xl'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-semibold text-amber-900 mb-4">{plan.name}</h3>
                  <p className="text-4xl font-bold text-amber-700 mb-8">
                    ${plan.price}
                    <span className="text-lg font-normal text-amber-600">/mo</span>
                  </p>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <Star className="w-5 h-5 text-amber-500 flex-shrink-0" />
                        <span className="text-amber-800">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full px-6 py-4 rounded-full transition-colors flex items-center justify-center gap-2 group-hover:gap-3 ${
                    plan.popular
                      ? 'bg-amber-700 text-white hover:bg-amber-800'
                      : 'bg-amber-100 text-amber-900 hover:bg-amber-200'
                  }`}>
                    Select Plan
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="bg-amber-900 text-amber-50 py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex items-center gap-3">
                <Coffee className="h-8 w-8" />
                <span className="text-2xl font-semibold">Brew Box</span>
              </div>
              <div className="flex gap-8">
                <a href="#" className="hover:text-amber-300 transition-colors">Terms</a>
                <a href="#" className="hover:text-amber-300 transition-colors">Privacy</a>
                <a href="#" className="hover:text-amber-300 transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;