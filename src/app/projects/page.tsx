import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Projects - Adam Moen | Mental Health Innovation Portfolio",  
  description: "Explore Avalochat mental health app, 'Prescribed to Fail' book, The Family Operating System, and Children's Health Snack Supplement - projects transforming wellness.",
};

export default function Projects() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Projects & Innovations
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-12">
            Mental health innovation, family wellness systems, and transformative content that creates real impact
          </p>
          
          {/* Family Photos Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white mb-8 text-center">
              About Adam & Family
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image 
                  src="/family-photo-1.jpg" 
                  alt="Adam Moen with family apple picking" 
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <Image 
                  src="/family-photo-2.jpg" 
                  alt="Adam Moen family photo" 
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
            <p className="text-center text-slate-600 dark:text-slate-300 mt-6 max-w-2xl mx-auto">
              Family-focused entrepreneur and mental health advocate passionate about creating authentic solutions that help families thrive together.
            </p>
          </div>

          <div className="space-y-12">
            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-xl">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                Avalochat - Free Mental Health Support App
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Revolutionary mental health platform providing free access to resources, community support, and personalized guidance. Breaking down barriers to mental health care through technology and authentic connection.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Mental Health</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Mobile App</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Community Platform</span>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Free Access</span>
              </div>
              <div className="text-slate-600 dark:text-slate-300 mb-4">
                <strong>Impact:</strong> Free mental health resources, crisis intervention tools, community support network, personalized wellness tracking
              </div>
              <a 
                href="https://www.avalo.chat" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
              >
                Visit Avalochat →
              </a>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-xl">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                &quot;Prescribed to Fail: Why Modern Mental Health Care Makes Us Feel Worse&quot;
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                A groundbreaking examination of how the mental health system fails patients through over-medicalization and the journey to discover authentic healing. A guide to understanding suffering as teacher, not enemy.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Upcoming Book</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Mental Health</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Healthcare Critique</span>
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Transformation</span>
              </div>
              <div className="text-slate-600 dark:text-slate-300 mb-4">
                <strong>Themes:</strong> Healthcare system critique, personal transformation, Eastern philosophy, alternative healing, taking responsibility
              </div>
              <a 
                href="/book-chapter-1" 
                className="inline-flex items-center bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
              >
                Read Chapter 1 →
              </a>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-xl">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                The Family Operating System
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Comprehensive framework helping families create structure, healthy communication patterns, and systems that support every member&apos;s growth, wellbeing, and authentic connection.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Family Systems</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Communication</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Framework</span>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Wellness</span>
              </div>
              <div className="text-slate-600 dark:text-slate-300">
                <strong>Components:</strong> Communication protocols, conflict resolution systems, goal alignment, wellness integration strategies
              </div>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-xl">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                Children&apos;s Health Snack Supplement
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Premium children&apos;s nutrition innovation designed to support healthy growth and development. Creating kid-friendly health snacks that families love and trust for optimal nutrition and wellness.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Children&apos;s Nutrition</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Product Innovation</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Health & Wellness</span>
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Family Products</span>
              </div>
              <div className="text-slate-600 dark:text-slate-300">
                <strong>Focus:</strong> High-quality nutrition, kid-approved taste, healthy growth support, family wellness integration
              </div>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <p className="text-slate-500 dark:text-slate-400 mb-6">
              Want to see these solutions in action for your business?
            </p>
            <a
              href="/contact"
              className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
            >
              Contact Adam
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}