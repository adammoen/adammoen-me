import type { Metadata } from "next";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
  title: "Contact - Adam Moen | Mental Health Speaker",
  description: "Book Adam Moen for mental health keynotes, or learn about Veisund and The Family Operating System.",
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
            Ready to transform your organization&apos;s approach to mental health and wellness?
          </p>
          
          <ContactForm />
          
          <div className="text-center mb-8">
            <p className="text-slate-600 dark:text-slate-300">
              <strong>Response Time:</strong> I typically respond within 24 hours with initial thoughts and next steps.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                Perfect For
              </h3>
              <ul className="text-slate-600 dark:text-slate-300 space-y-2">
                <li>• Corporate wellness programs</li>
                <li>• Mental health conferences</li>
                <li>• Educational institutions</li>
                <li>• Healthcare organizations</li>
              </ul>
            </div>
            
            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                Speaking Services
              </h3>
              <ul className="text-slate-600 dark:text-slate-300 space-y-2">
                <li>• Keynote presentations</li>
                <li>• Workshop facilitation</li>
                <li>• Panel discussions</li>
                <li>• Virtual presentations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}