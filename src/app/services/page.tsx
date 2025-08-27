import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services - Adam Moen | Mental Health Speaking & Wellness Solutions",
  description: "Mental health keynote speaking, AvaLoChat app, The Family Operating System, and IGF One children's protein snacks. Transform your organization and family wellness.",
};

export default function Services() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Services
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-12">
            Mental health speaking, wellness innovation, and family systems that create lasting impact
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-xl">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                Mental Health Keynote Speaking
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Authentic, powerful presentations that transform how organizations and individuals approach mental health, resilience, and embracing imperfection.
              </p>
              <ul className="text-slate-600 dark:text-slate-300 space-y-2">
                <li>• Corporate wellness keynotes</li>
                <li>• Conference and event speaking</li>
                <li>• Workshop facilitation</li>
                <li>• Authenticity and vulnerability training</li>
              </ul>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-xl">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                AvaLoChat - Free Mental Health App
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Revolutionary mental health support platform providing free access to resources, community support, and personalized guidance for mental wellness.
              </p>
              <ul className="text-slate-600 dark:text-slate-300 space-y-2">
                <li>• Free mental health resources</li>
                <li>• Community support network</li>
                <li>• Personalized wellness tracking</li>
                <li>• Crisis intervention tools</li>
              </ul>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-xl">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                The Family Operating System
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Comprehensive framework helping families create structure, communication patterns, and systems that support every member&apos;s growth and wellbeing.
              </p>
              <ul className="text-slate-600 dark:text-slate-300 space-y-2">
                <li>• Family communication systems</li>
                <li>• Conflict resolution frameworks</li>
                <li>• Goal setting and accountability</li>
                <li>• Wellness integration strategies</li>
              </ul>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-xl">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                IGF One Children&apos;s Protein Snacks
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Premium children&apos;s protein snacks designed to support healthy growth, development, and nutrition for active kids and families.
              </p>
              <ul className="text-slate-600 dark:text-slate-300 space-y-2">
                <li>• High-quality protein nutrition</li>
                <li>• Kid-friendly flavors and formats</li>
                <li>• Supports healthy growth</li>
                <li>• Family wellness integration</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <a
              href="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}