export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            Adam Moen
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8">
            Mental Health Speaker & Entrepreneur
          </p>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-12">
            Transforming mental health through speaking, innovation, and authentic storytelling. Creator of AvaLoChat and author of &quot;Broken&quot; - helping individuals and families thrive.
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
                Mental Health Speaking
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Authentic, impactful keynotes and workshops on mental health, resilience, and embracing imperfection in our &quot;perfect&quot; world.
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                AvaLoChat App
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Free mental health support platform connecting individuals with resources, community, and personalized guidance.
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                Family Systems & Wellness
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                The Family Operating System framework and IGF One children&apos;s protein snacks - supporting healthy families holistically.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
