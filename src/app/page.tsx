import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-slate-900 dark:to-emerald-900">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-lg">
              <Image
                src="/adam-headshot.jpg"
                alt="Adam Moen headshot"
                width={256}
                height={334}
                priority
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
            Adam Moen
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8">
            Mental Health Speaker & Entrepreneur
          </p>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-8">
            Transforming mental health through speaking, innovation, and authentic storytelling. Creator of Veisund and author of &quot;Prescribed to Fail&quot; - helping individuals and families thrive.
          </p>
          
          {/* Credibility Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12 text-sm text-slate-600 dark:text-slate-400">
            <div className="text-center">
              <div className="font-semibold text-slate-900 dark:text-white text-lg">3,000+</div>
              <div>Newsletter Subscribers</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-slate-900 dark:text-white text-lg">50+</div>
              <div>Speaking Engagements</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-slate-900 dark:text-white text-lg">3,000+</div>
              <div>App Downloads</div>
            </div>
            <div className="text-center">
              <div className="font-semibold text-slate-900 dark:text-white text-lg">10K+</div>
              <div>Social Media Followers</div>
            </div>
          </div>
          
          <div className="flex gap-4 justify-center mb-16">
            <a
              href="/services"
              className="bg-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
            >
              View Services
            </a>
            <a
              href="/projects"
              className="border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              See Projects
            </a>
            <a
              href="/blog"
              className="border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              Read Blog
            </a>
            <a
              href="/contact"
              className="bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
            >
              Contact Adam
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
                Veisund App
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
                The Family Operating System framework and Children&apos;s Health Snack Supplement - supporting healthy families holistically.
              </p>
            </div>
          </div>
          
          {/* Testimonials Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-12">
              What People Are Saying
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center">
                    <span className="text-emerald-600 font-semibold">JM</span>
                  </div>
                  <div className="ml-3">
                    <div className="font-semibold text-slate-900 dark:text-white">Jessica Martinez</div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">HR Director</div>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-300 italic">
                  &quot;Adam&apos;s keynote transformed our entire approach to mental health in the workplace. His authentic storytelling and practical insights gave our team the tools they needed.&quot;
                </p>
              </div>
              
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center">
                    <span className="text-teal-600 font-semibold">RL</span>
                  </div>
                  <div className="ml-3">
                    <div className="font-semibold text-slate-900 dark:text-white">Robert Lee</div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">Conference Organizer</div>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-300 italic">
                  &quot;Best mental health speaker we&apos;ve ever had. Adam connected with our audience immediately - authentic, vulnerable, and incredibly impactful.&quot;
                </p>
              </div>
              
              <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold">SP</span>
                  </div>
                  <div className="ml-3">
                    <div className="font-semibold text-slate-900 dark:text-white">Sarah Parker</div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">Avalochat User</div>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-300 italic">
                  &quot;The Avalochat app has been a game-changer for my mental health journey. Having free, accessible support available 24/7 has made all the difference.&quot;
                </p>
              </div>
            </div>
          </div>
          
          {/* Family & Personal Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-8">
              Family & Values
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <p className="text-lg text-slate-600 dark:text-slate-300">
                  As a father and husband, I understand firsthand the challenges families face in today&apos;s world. My work is deeply rooted in personal experience and a genuine desire to help families thrive together.
                </p>
                <p className="text-lg text-slate-600 dark:text-slate-300">
                  The Family Operating System isn&apos;t just a framework I created - it&apos;s how we live our daily lives, creating structure, communication, and wellness habits that support every family member.
                </p>
              </div>
              <div className="space-y-4">
                <div className="h-64 rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="/family-apple-picking.jpg"
                    alt="Adam Moen family apple picking"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-32 rounded-lg overflow-hidden shadow-md">
                    <img
                      src="/family-photo-1.jpg"
                      alt="Adam Moen family photo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="h-32 rounded-lg overflow-hidden shadow-md">
                    <img
                      src="/family-photo-2.jpg"
                      alt="Adam Moen family photo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
