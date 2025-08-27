import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - Adam Moen | AI Automation Portfolio",
  description: "Explore my portfolio of AI automation projects, viral content systems, and business automation solutions that drive real results.",
};

export default function Projects() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Projects
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-12">
            Real-world automation solutions that drive measurable results
          </p>
          
          <div className="space-y-12">
            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-xl">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                Viral Video Automation System
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                AI-powered system that generates viral mental health videos and posts them across TikTok, Instagram, YouTube, and Twitter. Achieved 100% success rate across all platforms with 5x daily posting schedule.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Python</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">AI Video Generation</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Multi-Platform API</span>
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">Automation</span>
              </div>
              <div className="text-slate-600 dark:text-slate-300">
                <strong>Results:</strong> 4 platforms, 5x daily posts, automated content tracking, viral engagement optimization
              </div>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-xl">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                Reddit Mental Health Analyzer
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Advanced content analysis system that identifies trending mental health discussions on Reddit and transforms them into actionable video proposals for content creation.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Python</span>
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Reddit API</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">NLP Analysis</span>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Google Sheets</span>
              </div>
              <div className="text-slate-600 dark:text-slate-300">
                <strong>Features:</strong> Sentiment analysis, trend detection, automated content proposals, engagement scoring
              </div>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-xl">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                Parasite SEO Content Engine
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mb-6">
                Automated system for generating and posting SEO-optimized Twitter threads and Medium articles targeting high-value mental health keywords for organic traffic growth.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">SEO</span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Content Marketing</span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Twitter API</span>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Medium Automation</span>
              </div>
              <div className="text-slate-600 dark:text-slate-300">
                <strong>Impact:</strong> Automated content creation, keyword targeting, viral thread templates, brand promotion
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