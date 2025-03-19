import React from 'react';
import { ArrowRight, Code, Layout, Zap } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div 
        className="relative h-screen flex items-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Build Something Amazing
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl">
            Create stunning websites and applications with our modern development platform.
            Get started today and bring your ideas to life.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2 transition-colors">
            Get Started
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Why Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Lightning Fast</h3>
              <p className="text-gray-600">
                Optimized performance that keeps your applications running smoothly.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Code className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Clean Code</h3>
              <p className="text-gray-600">
                Well-structured and maintainable code that scales with your needs.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Layout className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Modern Design</h3>
              <p className="text-gray-600">
                Beautiful and responsive layouts that work on any device.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <p className="text-sm">© 2025 Your Company. All rights reserved.</p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-blue-400 transition-colors">Terms</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Privacy</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;