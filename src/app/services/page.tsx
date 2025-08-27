import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services - Adam Moen | AI Automation & Content Strategy",
  description: "Professional AI automation and viral content strategy services. Transform your business with data-driven solutions and scalable automation systems.",
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
            Transform your business with AI automation and viral content strategies
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-xl">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                Viral Content Automation
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Multi-platform content generation and posting systems that create engaging videos and posts at scale across TikTok, Instagram, YouTube, and Twitter.
              </p>
              <ul className="text-slate-600 dark:text-slate-300 space-y-2">
                <li>• AI-powered video generation</li>
                <li>• Multi-platform posting automation</li>
                <li>• Content optimization for engagement</li>
                <li>• Analytics and performance tracking</li>
              </ul>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-xl">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                AI Business Automation
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Custom automation solutions that streamline operations, reduce manual work, and drive measurable growth through intelligent systems.
              </p>
              <ul className="text-slate-600 dark:text-slate-300 space-y-2">
                <li>• Workflow automation development</li>
                <li>• Data processing and analysis</li>
                <li>• API integrations and webhooks</li>
                <li>• Custom dashboard creation</li>
              </ul>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-xl">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                Content Strategy Consulting
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Data-driven content strategies using AI to identify trending topics, optimize engagement, and build sustainable growth.
              </p>
              <ul className="text-slate-600 dark:text-slate-300 space-y-2">
                <li>• Trend analysis and topic research</li>
                <li>• Content calendar optimization</li>
                <li>• Platform-specific strategy development</li>
                <li>• Performance measurement and iteration</li>
              </ul>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-xl">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                Technical Implementation
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Full-stack development services focused on automation tools, content management systems, and scalable web applications.
              </p>
              <ul className="text-slate-600 dark:text-slate-300 space-y-2">
                <li>• Python automation scripts</li>
                <li>• Web scraping and data collection</li>
                <li>• API development and integration</li>
                <li>• Database design and optimization</li>
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