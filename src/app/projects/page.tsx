import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - Adam Moen | Mental Health Innovation Portfolio",  
  description: "Explore AvaLoChat mental health app, 'Broken' book, The Family Operating System, and IGF One children's nutrition - projects transforming wellness.",
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
          
          <div className="space-y-12">
            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-xl">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                AvaLoChat - Free Mental Health Support App
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
              <div className="text-slate-600 dark:text-slate-300">
                <strong>Impact:</strong> Free mental health resources, crisis intervention tools, community support network, personalized wellness tracking
              </div>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-xl">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                &quot;Broken: How to Be Comfortable being Imperfect in a &apos;Perfect&apos; World&quot;
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Transformative book exploring the power of embracing imperfection, vulnerability, and authentic living in our social media-driven world. A guide to finding comfort in our &quot;broken&quot; places.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Published Author</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Mental Health</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Authenticity</span>
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Self-Help</span>
              </div>
              <div className="text-slate-600 dark:text-slate-300">
                <strong>Themes:</strong> Vulnerability, authenticity, imperfection acceptance, mental health awareness, social media impact
              </div>
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
                IGF One Children&apos;s Protein Snacks
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Premium children&apos;s nutrition innovation designed to support healthy growth and development. Creating kid-friendly protein snacks that families love and trust for optimal nutrition.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Children&apos;s Nutrition</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Product Innovation</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Health & Wellness</span>
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Family Products</span>
              </div>
              <div className="text-slate-600 dark:text-slate-300">
                <strong>Focus:</strong> High-quality protein nutrition, kid-approved taste, healthy growth support, family wellness integration
              </div>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <p className="text-slate-500 dark:text-slate-400 mb-6">
              Want to see these solutions in action for your business?
            </p>
            <a
              href="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}