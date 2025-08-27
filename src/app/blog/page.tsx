import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog - Adam Moen | Mental Health Speaking & Wellness Insights",
  description: "Expert insights on mental health speaking, AvaLoChat app development, family operating systems, and children's nutrition. Practical advice for speakers and wellness professionals.",
  keywords: ["mental health blog", "keynote speaking tips", "mental health app insights", "family systems blog", "children nutrition advice"],
};

// Blog post data structure
const blogPosts = [
  // Mental Health Speaking Posts
  {
    slug: "how-to-deliver-authentic-mental-health-keynotes-that-transform-audiences",
    title: "How to Deliver Authentic Mental Health Keynotes That Transform Audiences",
    excerpt: "Learn the 7 key elements of impactful mental health speaking that creates lasting change in corporate and conference settings.",
    category: "Mental Health Speaking",
    date: "2025-08-27",
    readTime: "8 min read"
  },
  {
    slug: "overcoming-speaker-anxiety-when-sharing-mental-health-stories",
    title: "Overcoming Speaker Anxiety When Sharing Mental Health Stories",
    excerpt: "Practical strategies for speakers to manage vulnerability and anxiety while delivering powerful mental health presentations.",
    category: "Mental Health Speaking", 
    date: "2025-08-26",
    readTime: "6 min read"
  },
  {
    slug: "corporate-wellness-keynote-topics-that-engage-employees",
    title: "Corporate Wellness Keynote Topics That Engage Employees",
    excerpt: "Top 10 mental health keynote topics that resonate with corporate audiences and drive employee engagement.",
    category: "Mental Health Speaking",
    date: "2025-08-25", 
    readTime: "7 min read"
  },
  {
    slug: "building-psychological-safety-through-vulnerability-based-speaking",
    title: "Building Psychological Safety Through Vulnerability-Based Speaking",
    excerpt: "How authentic storytelling and vulnerability create psychologically safe environments in workplace presentations.",
    category: "Mental Health Speaking",
    date: "2025-08-24",
    readTime: "9 min read"
  },
  {
    slug: "mental-health-speaker-fee-guide-pricing-your-expertise",
    title: "Mental Health Speaker Fee Guide: Pricing Your Expertise",
    excerpt: "Complete guide to pricing mental health keynotes, workshops, and consulting based on experience and value delivered.",
    category: "Mental Health Speaking",
    date: "2025-08-23",
    readTime: "5 min read"
  },
  {
    slug: "designing-interactive-mental-health-workshops-for-maximum-impact",
    title: "Designing Interactive Mental Health Workshops for Maximum Impact", 
    excerpt: "Framework for creating engaging, participatory mental health workshops that drive behavior change.",
    category: "Mental Health Speaking",
    date: "2025-08-22",
    readTime: "10 min read"
  },
  {
    slug: "trauma-informed-speaking-best-practices-for-mental-health-presenters",
    title: "Trauma-Informed Speaking: Best Practices for Mental Health Presenters",
    excerpt: "Essential guidelines for delivering mental health content safely and inclusively for diverse audiences.",
    category: "Mental Health Speaking",
    date: "2025-08-21",
    readTime: "8 min read"
  },
  {
    slug: "measuring-impact-mental-health-keynote-success-metrics",
    title: "Measuring Impact: Mental Health Keynote Success Metrics",
    excerpt: "Key performance indicators and feedback methods to track the effectiveness of mental health presentations.",
    category: "Mental Health Speaking",
    date: "2025-08-20",
    readTime: "6 min read"
  },
  {
    slug: "virtual-vs-in-person-mental-health-speaking-engagement-guide",
    title: "Virtual vs In-Person Mental Health Speaking: Engagement Guide",
    excerpt: "Adapting mental health presentations for virtual platforms while maintaining emotional connection and impact.",
    category: "Mental Health Speaking",
    date: "2025-08-19",
    readTime: "7 min read"
  },
  {
    slug: "creating-safe-spaces-mental-health-discussions-large-audiences",
    title: "Creating Safe Spaces for Mental Health Discussions with Large Audiences",
    excerpt: "Techniques for fostering open, safe dialogue about mental health in conference and corporate settings.",
    category: "Mental Health Speaking", 
    date: "2025-08-18",
    readTime: "9 min read"
  },

  // AvaLoChat/Mental Health App Posts
  {
    slug: "free-mental-health-apps-vs-avalochat-comprehensive-comparison",
    title: "Free Mental Health Apps vs AvaLoChat: Comprehensive Comparison",
    excerpt: "Compare AvaLoChat's unique features with other free mental health apps to find the best support platform.",
    category: "Mental Health Technology",
    date: "2025-08-17",
    readTime: "12 min read"
  },
  {
    slug: "how-avalochat-provides-24-7-mental-health-support-without-therapist",
    title: "How AvaLoChat Provides 24/7 Mental Health Support Without a Therapist",
    excerpt: "Discover how AI-powered mental health platforms like AvaLoChat offer continuous support between therapy sessions.",
    category: "Mental Health Technology",
    date: "2025-08-16",
    readTime: "8 min read"
  },
  {
    slug: "digital-mental-health-privacy-security-avalochat-approach",
    title: "Digital Mental Health Privacy & Security: AvaLoChat's Approach",
    excerpt: "Understanding data protection, privacy policies, and security measures in mental health apps like AvaLoChat.",
    category: "Mental Health Technology",
    date: "2025-08-15",
    readTime: "7 min read"
  },
  {
    slug: "building-resilience-daily-mental-health-check-ins-avalochat",
    title: "Building Resilience Through Daily Mental Health Check-ins with AvaLoChat",
    excerpt: "How consistent mental health tracking and check-ins build emotional resilience over time.",
    category: "Mental Health Technology",
    date: "2025-08-14",
    readTime: "6 min read"
  },
  {
    slug: "mental-health-crisis-intervention-features-avalochat-emergency-support",
    title: "Mental Health Crisis Intervention: AvaLoChat's Emergency Support Features",
    excerpt: "Critical features every mental health app should have for crisis situations and emergency mental health support.",
    category: "Mental Health Technology", 
    date: "2025-08-13",
    readTime: "9 min read"
  },
  {
    slug: "peer-support-communities-avalochat-vs-traditional-therapy-groups",
    title: "Peer Support Communities: AvaLoChat vs Traditional Therapy Groups",
    excerpt: "Comparing online peer support in mental health apps with in-person therapy group effectiveness.",
    category: "Mental Health Technology",
    date: "2025-08-12",
    readTime: "10 min read"
  },
  {
    slug: "mental-health-app-accessibility-features-avalochat-inclusive-design",
    title: "Mental Health App Accessibility: AvaLoChat's Inclusive Design Features",
    excerpt: "How mental health apps accommodate users with disabilities and diverse accessibility needs.",
    category: "Mental Health Technology",
    date: "2025-08-11", 
    readTime: "8 min read"
  },
  {
    slug: "integrating-avalochat-existing-therapy-treatment-plan-guide",
    title: "Integrating AvaLoChat with Your Existing Therapy Treatment Plan",
    excerpt: "Best practices for using mental health apps as supplements to professional therapy and treatment.",
    category: "Mental Health Technology",
    date: "2025-08-10",
    readTime: "7 min read"
  },
  {
    slug: "mental-health-app-effectiveness-research-avalochat-outcomes",
    title: "Mental Health App Effectiveness: Research & AvaLoChat Outcomes",
    excerpt: "Scientific evidence and user outcome data supporting the effectiveness of digital mental health interventions.",
    category: "Mental Health Technology",
    date: "2025-08-09",
    readTime: "11 min read"
  },
  {
    slug: "customizing-avalochat-personalized-mental-health-support-preferences",
    title: "Customizing AvaLoChat: Personalized Mental Health Support Preferences",
    excerpt: "How to optimize AvaLoChat settings for your unique mental health needs and communication preferences.",
    category: "Mental Health Technology",
    date: "2025-08-08",
    readTime: "6 min read"
  },

  // Family Operating System Posts
  {
    slug: "family-operating-system-framework-creating-healthy-family-dynamics",
    title: "Family Operating System Framework: Creating Healthy Family Dynamics",
    excerpt: "Complete guide to implementing structured communication and goal systems that strengthen family relationships.",
    category: "Family Systems",
    date: "2025-08-07",
    readTime: "12 min read"
  },
  {
    slug: "family-conflict-resolution-strategies-operating-system-approach",
    title: "Family Conflict Resolution Strategies Using Operating System Approach",
    excerpt: "Systematic methods for resolving family disagreements and building stronger communication patterns.",
    category: "Family Systems",
    date: "2025-08-06",
    readTime: "9 min read"
  },
  {
    slug: "implementing-family-meeting-structure-better-communication-system",
    title: "Implementing Family Meeting Structure for Better Communication System",
    excerpt: "Step-by-step guide to establishing regular family meetings that improve communication and decision-making.",
    category: "Family Systems",
    date: "2025-08-05",
    readTime: "8 min read"
  },
  {
    slug: "family-goal-setting-accountability-systems-that-work",
    title: "Family Goal Setting & Accountability Systems That Actually Work",
    excerpt: "Proven frameworks for setting and achieving family goals while maintaining individual growth and autonomy.",
    category: "Family Systems",
    date: "2025-08-04",
    readTime: "10 min read"
  },
  {
    slug: "digital-detox-family-operating-system-screen-time-management",
    title: "Digital Detox in Family Operating System: Screen Time Management",
    excerpt: "Strategies for managing technology use within family systems to promote healthy relationships and communication.",
    category: "Family Systems",
    date: "2025-08-03",
    readTime: "7 min read"
  },
  {
    slug: "blended-family-operating-system-challenges-solutions-guide",
    title: "Blended Family Operating System: Challenges & Solutions Guide",
    excerpt: "Special considerations and adaptations for implementing family systems in blended and step-family situations.",
    category: "Family Systems",
    date: "2025-08-02",
    readTime: "11 min read"
  },
  {
    slug: "family-financial-planning-operating-system-approach-money-management",
    title: "Family Financial Planning: Operating System Approach to Money Management",
    excerpt: "Systematic methods for teaching financial literacy and managing family finances through structured systems.",
    category: "Family Systems",
    date: "2025-08-01",
    readTime: "9 min read"
  },
  {
    slug: "teenage-behavior-challenges-family-operating-system-solutions",
    title: "Teenage Behavior Challenges: Family Operating System Solutions",
    excerpt: "Adapting family communication and boundary systems for adolescent development and behavioral challenges.",
    category: "Family Systems",
    date: "2025-07-31",
    readTime: "8 min read"
  },
  {
    slug: "family-wellness-routines-operating-system-health-habits",
    title: "Family Wellness Routines: Operating System for Healthy Habits",
    excerpt: "Creating sustainable family wellness practices through systematic approaches to health and self-care.",
    category: "Family Systems",
    date: "2025-07-30",
    readTime: "10 min read"
  },
  {
    slug: "long-distance-family-relationships-virtual-operating-system-guide",
    title: "Long-Distance Family Relationships: Virtual Operating System Guide",
    excerpt: "Maintaining strong family connections and communication systems across geographical distances.",
    category: "Family Systems",
    date: "2025-07-29", 
    readTime: "7 min read"
  },

  // IGF One Children's Nutrition Posts
  {
    slug: "children-protein-requirements-age-group-igf-one-nutrition-guide",
    title: "Children's Protein Requirements by Age Group: IGF One Nutrition Guide",
    excerpt: "Complete breakdown of protein needs for growing children and how IGF One snacks support healthy development.",
    category: "Children's Nutrition",
    date: "2025-07-28",
    readTime: "9 min read"
  },
  {
    slug: "healthy-protein-snacks-kids-alternatives-processed-foods",
    title: "Healthy Protein Snacks for Kids: Alternatives to Processed Foods",
    excerpt: "Nutritious protein snack options for children including IGF One products and homemade alternatives.",
    category: "Children's Nutrition",
    date: "2025-07-27",
    readTime: "8 min read"
  },
  {
    slug: "picky-eater-protein-strategies-igf-one-kid-approved-nutrition",
    title: "Picky Eater Protein Strategies: IGF One Kid-Approved Nutrition",
    excerpt: "Practical solutions for ensuring adequate protein intake in children with selective eating habits.",
    category: "Children's Nutrition",
    date: "2025-07-26",
    readTime: "7 min read"
  },
  {
    slug: "athletic-children-protein-needs-igf-one-sports-nutrition-kids",
    title: "Athletic Children's Protein Needs: IGF One Sports Nutrition for Kids",
    excerpt: "Specialized protein requirements for young athletes and how proper nutrition supports performance and growth.",
    category: "Children's Nutrition",
    date: "2025-07-25",
    readTime: "10 min read"
  },
  {
    slug: "school-lunch-protein-alternatives-igf-one-portable-nutrition",
    title: "School Lunch Protein Alternatives: IGF One Portable Nutrition",
    excerpt: "Convenient, nutritious protein options for school lunches that kids actually want to eat.",
    category: "Children's Nutrition",
    date: "2025-07-24",
    readTime: "6 min read"
  },
  {
    slug: "children-growth-spurts-increased-protein-needs-igf-one-support",
    title: "Children's Growth Spurts: Increased Protein Needs & IGF One Support",
    excerpt: "Understanding how protein requirements change during rapid growth periods and supporting nutritional needs.",
    category: "Children's Nutrition",
    date: "2025-07-23",
    readTime: "8 min read"
  },
  {
    slug: "food-allergies-children-safe-protein-options-igf-one-alternatives",
    title: "Food Allergies in Children: Safe Protein Options & IGF One Alternatives",
    excerpt: "Navigating protein nutrition for children with food allergies and sensitivities safely and effectively.",
    category: "Children's Nutrition",
    date: "2025-07-22",
    readTime: "9 min read"
  },
  {
    slug: "family-meal-planning-protein-rich-recipes-kids-igf-one-integration",
    title: "Family Meal Planning: Protein-Rich Recipes Kids Love with IGF One Integration",
    excerpt: "Weekly meal planning strategies that incorporate adequate protein for growing children and family nutrition.",
    category: "Children's Nutrition",
    date: "2025-07-21",
    readTime: "11 min read"
  },
  {
    slug: "children-digestive-health-protein-absorption-igf-one-gentle-nutrition",
    title: "Children's Digestive Health: Protein Absorption & IGF One Gentle Nutrition",
    excerpt: "Supporting healthy digestion while ensuring adequate protein intake for optimal child development.",
    category: "Children's Nutrition",
    date: "2025-07-20",
    readTime: "8 min read"
  },
  {
    slug: "budget-friendly-children-protein-nutrition-igf-one-value-guide",
    title: "Budget-Friendly Children's Protein Nutrition: IGF One Value Guide",
    excerpt: "Cost-effective strategies for providing quality protein nutrition to children without breaking the family budget.",
    category: "Children's Nutrition",
    date: "2025-07-19",
    readTime: "7 min read"
  }
];

export default function Blog() {
  // Group posts by category
  const categories = {
    "Mental Health Speaking": blogPosts.filter(post => post.category === "Mental Health Speaking"),
    "Mental Health Technology": blogPosts.filter(post => post.category === "Mental Health Technology"),
    "Family Systems": blogPosts.filter(post => post.category === "Family Systems"),
    "Children's Nutrition": blogPosts.filter(post => post.category === "Children's Nutrition")
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Mental Health & Wellness Blog
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-12">
            Expert insights on mental health speaking, wellness technology, family systems, and children&apos;s nutrition
          </p>
          
          {Object.entries(categories).map(([categoryName, posts]) => (
            <div key={categoryName} className="mb-16">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-8 border-b border-slate-200 dark:border-slate-700 pb-4">
                {categoryName}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {posts.map((post) => (
                  <Link 
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl hover:shadow-lg transition-shadow"
                  >
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3 hover:text-blue-600 dark:hover:text-blue-400">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}