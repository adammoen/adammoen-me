import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Adam Moen | Get Started with AI Automation",
  description: "Ready to transform your business with AI automation and viral content strategy? Contact Adam Moen to discuss your project and get started.",
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Let&apos;s Work Together
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-12">
            Ready to transform your business with AI automation and viral content strategy?
          </p>
          
          <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-xl mb-8">
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6">
              Get Started
            </h2>
            
            <div className="space-y-6 text-left">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  Email
                </h3>
                <a 
                  href="mailto:hello@adammoen.me" 
                  className="text-blue-600 hover:text-blue-700 text-lg"
                >
                  hello@adammoen.me
                </a>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  What to Include
                </h3>
                <ul className="text-slate-600 dark:text-slate-300 space-y-2">
                  <li>• Brief description of your business/project</li>
                  <li>• What you&apos;re looking to automate or improve</li>
                  <li>• Your current content strategy challenges</li>
                  <li>• Timeline and budget considerations</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  Response Time
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  I typically respond within 24 hours with initial thoughts and next steps.
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                Perfect For
              </h3>
              <ul className="text-slate-600 dark:text-slate-300 space-y-2">
                <li>• Content creators scaling their presence</li>
                <li>• Businesses automating repetitive tasks</li>
                <li>• Entrepreneurs building content systems</li>
                <li>• Companies needing custom automation</li>
              </ul>
            </div>
            
            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                Project Types
              </h3>
              <ul className="text-slate-600 dark:text-slate-300 space-y-2">
                <li>• One-time automation setup</li>
                <li>• Ongoing content strategy</li>
                <li>• Custom tool development</li>
                <li>• Integration and optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}