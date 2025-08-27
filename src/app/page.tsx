export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            Adam Moen
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8">
            AI Automation & Content Strategy Expert
          </p>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-12">
            Building viral content systems and AI-powered automation solutions that scale businesses and transform digital presence.
          </p>
          
          <div className="flex gap-6 justify-center mb-16">
            <a
              href="#services"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View Services
            </a>
            <a
              href="#projects"
              className="border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              See Projects
            </a>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                Viral Content Automation
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Multi-platform video generation and posting systems that create engaging content at scale.
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                AI Content Strategy
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Data-driven content strategies using AI to identify trending topics and optimize engagement.
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                Business Automation
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Custom automation solutions that streamline operations and drive measurable growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
