import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog - Adam Moen | Mental Health Speaking & Wellness Insights",
  description: "Expert insights on mental health speaking, AvaLoChat app development, family operating systems, and children's nutrition. Practical advice for speakers and wellness professionals.",
  keywords: ["mental health blog", "keynote speaking tips", "mental health app insights", "family systems blog", "children nutrition advice"],
};

// Blog post data structure - ALL 80 POSTS
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
  },

  // BATCH 2: NEW ARTICLES - Mental Health Speaking (10 more)
  {
    slug: "mental-health-stigma-workplace-keynote-speakers-guide-breaking-barriers",
    title: "Mental Health Stigma in the Workplace: Keynote Speaker's Guide to Breaking Barriers",
    excerpt: "Evidence-based strategies for addressing mental health stigma in corporate environments through transformational speaking.",
    category: "Mental Health Speaking",
    date: "2025-09-03",
    readTime: "11 min read"
  },
  {
    slug: "executive-leadership-mental-health-keynote-c-suite-engagement-strategies",
    title: "Executive Leadership Mental Health Keynote: C-Suite Engagement Strategies",
    excerpt: "Specialized approaches for delivering mental health presentations to senior executives and board members.",
    category: "Mental Health Speaking",
    date: "2025-09-04",
    readTime: "9 min read"
  },
  {
    slug: "healthcare-worker-burnout-keynote-speaking-frontline-mental-wellness",
    title: "Healthcare Worker Burnout Keynote Speaking: Frontline Mental Wellness",
    excerpt: "Tailored mental health presentations addressing unique challenges faced by healthcare professionals.",
    category: "Mental Health Speaking",
    date: "2025-09-05",
    readTime: "10 min read"
  },
  {
    slug: "remote-work-mental-health-virtual-keynote-engagement-techniques",
    title: "Remote Work Mental Health: Virtual Keynote Engagement Techniques",
    excerpt: "Adapting mental health speaking for distributed teams and virtual work environments.",
    category: "Mental Health Speaking",
    date: "2025-09-06",
    readTime: "8 min read"
  },
  {
    slug: "mental-health-first-aid-workplace-keynote-training-integration",
    title: "Mental Health First Aid Workplace: Keynote Training Integration",
    excerpt: "Combining keynote presentations with practical mental health first aid training for employees.",
    category: "Mental Health Speaking",
    date: "2025-09-07",
    readTime: "12 min read"
  },
  {
    slug: "diversity-inclusion-mental-health-speaking-multicultural-audiences",
    title: "Diversity & Inclusion Mental Health Speaking for Multicultural Audiences",
    excerpt: "Cultural competency strategies for delivering inclusive mental health presentations.",
    category: "Mental Health Speaking",
    date: "2025-09-08",
    readTime: "9 min read"
  },
  {
    slug: "student-mental-health-crisis-keynote-university-college-speaking",
    title: "Student Mental Health Crisis: Keynote Speaking for Universities & Colleges",
    excerpt: "Addressing academic mental health challenges through impactful campus presentations.",
    category: "Mental Health Speaking",
    date: "2025-09-09",
    readTime: "10 min read"
  },
  {
    slug: "workplace-suicide-prevention-keynote-sensitive-topic-navigation",
    title: "Workplace Suicide Prevention Keynote: Sensitive Topic Navigation",
    excerpt: "Professional guidelines for addressing suicide prevention in corporate mental health presentations.",
    category: "Mental Health Speaking",
    date: "2025-09-10",
    readTime: "13 min read"
  },
  {
    slug: "manager-supervisor-mental-health-training-keynote-leadership-development",
    title: "Manager & Supervisor Mental Health Training: Keynote Leadership Development",
    excerpt: "Specialized presentations equipping managers with mental health leadership skills.",
    category: "Mental Health Speaking",
    date: "2025-09-11",
    readTime: "11 min read"
  },
  {
    slug: "mental-health-keynote-roi-measurement-corporate-wellness-impact",
    title: "Mental Health Keynote ROI Measurement: Corporate Wellness Impact",
    excerpt: "Metrics and methods for demonstrating the business value of mental health speaking investments.",
    category: "Mental Health Speaking",
    date: "2025-09-12",
    readTime: "8 min read"
  },

  // BATCH 2: NEW ARTICLES - Mental Health Technology (10 more)
  {
    slug: "mental-health-ai-chatbots-avalochat-human-connection-vs-automation",
    title: "Mental Health AI Chatbots: AvaLoChat's Human Connection vs Automation",
    excerpt: "Exploring the balance between AI efficiency and authentic human support in mental health apps.",
    category: "Mental Health Technology",
    date: "2025-09-13",
    readTime: "10 min read"
  },
  {
    slug: "telehealth-integration-avalochat-therapy-session-complement-tools",
    title: "Telehealth Integration: AvaLoChat Therapy Session Complement Tools",
    excerpt: "How mental health apps enhance remote therapy sessions and treatment continuity.",
    category: "Mental Health Technology",
    date: "2025-09-14",
    readTime: "9 min read"
  },
  {
    slug: "mental-health-app-addiction-avalochat-healthy-digital-boundaries",
    title: "Mental Health App Addiction: AvaLoChat's Healthy Digital Boundaries",
    excerpt: "Preventing technology dependence while maintaining beneficial mental health app usage.",
    category: "Mental Health Technology",
    date: "2025-09-15",
    readTime: "8 min read"
  },
  {
    slug: "workplace-mental-health-apps-avalochat-employee-assistance-programs",
    title: "Workplace Mental Health Apps: AvaLoChat in Employee Assistance Programs",
    excerpt: "Corporate integration strategies for mental health apps in workplace wellness initiatives.",
    category: "Mental Health Technology",
    date: "2025-09-16",
    readTime: "11 min read"
  },
  {
    slug: "mental-health-data-analytics-avalochat-personal-wellness-insights",
    title: "Mental Health Data Analytics: AvaLoChat Personal Wellness Insights",
    excerpt: "Using app data to identify mental health patterns and optimize personal wellness strategies.",
    category: "Mental Health Technology",
    date: "2025-09-17",
    readTime: "10 min read"
  },
  {
    slug: "adolescent-mental-health-apps-avalochat-teen-digital-native-support",
    title: "Adolescent Mental Health Apps: AvaLoChat Teen Digital Native Support",
    excerpt: "Specialized mental health app features designed for teenage users and developmental needs.",
    category: "Mental Health Technology",
    date: "2025-09-18",
    readTime: "9 min read"
  },
  {
    slug: "mental-health-app-gamification-avalochat-motivation-engagement-strategies",
    title: "Mental Health App Gamification: AvaLoChat Motivation & Engagement Strategies",
    excerpt: "Ethical gamification approaches that enhance mental health app engagement without manipulation.",
    category: "Mental Health Technology",
    date: "2025-09-19",
    readTime: "7 min read"
  },
  {
    slug: "offline-mental-health-support-avalochat-connectivity-independent-features",
    title: "Offline Mental Health Support: AvaLoChat Connectivity-Independent Features",
    excerpt: "Essential mental health app functionality that works without internet connection.",
    category: "Mental Health Technology",
    date: "2025-09-20",
    readTime: "8 min read"
  },
  {
    slug: "mental-health-app-clinical-trials-avalochat-evidence-based-validation",
    title: "Mental Health App Clinical Trials: AvaLoChat Evidence-Based Validation",
    excerpt: "Research methodology and clinical validation processes for mental health app effectiveness.",
    category: "Mental Health Technology",
    date: "2025-09-21",
    readTime: "12 min read"
  },
  {
    slug: "mental-health-app-interoperability-avalochat-healthcare-system-integration",
    title: "Mental Health App Interoperability: AvaLoChat Healthcare System Integration",
    excerpt: "Technical standards and protocols for integrating mental health apps with medical records.",
    category: "Mental Health Technology",
    date: "2025-09-22",
    readTime: "11 min read"
  },

  // BATCH 2: NEW ARTICLES - Family Systems (10 more)
  {
    slug: "single-parent-family-operating-system-solo-household-management-strategies",
    title: "Single Parent Family Operating System: Solo Household Management Strategies",
    excerpt: "Adapted family system frameworks for single-parent households and unique challenges.",
    category: "Family Systems",
    date: "2025-09-23",
    readTime: "10 min read"
  },
  {
    slug: "multi-generational-family-operating-system-grandparent-integration-guide",
    title: "Multi-Generational Family Operating System: Grandparent Integration Guide",
    excerpt: "Expanding family systems to include grandparents and extended family members effectively.",
    category: "Family Systems",
    date: "2025-09-24",
    readTime: "9 min read"
  },
  {
    slug: "family-emergency-preparedness-operating-system-crisis-response-planning",
    title: "Family Emergency Preparedness: Operating System Crisis Response Planning",
    excerpt: "Systematic approaches to family emergency planning and crisis communication protocols.",
    category: "Family Systems",
    date: "2025-09-25",
    readTime: "11 min read"
  },
  {
    slug: "neurodivergent-family-operating-system-autism-adhd-accommodations",
    title: "Neurodivergent Family Operating System: Autism & ADHD Accommodations",
    excerpt: "Adapting family systems for neurodivergent family members with specialized needs.",
    category: "Family Systems",
    date: "2025-09-26",
    readTime: "12 min read"
  },
  {
    slug: "family-business-operating-system-work-life-integration-boundaries",
    title: "Family Business Operating System: Work-Life Integration & Boundaries",
    excerpt: "Balancing family relationships with business operations through structured systems.",
    category: "Family Systems",
    date: "2025-09-27",
    readTime: "10 min read"
  },
  {
    slug: "adoptive-family-operating-system-attachment-trauma-informed-approach",
    title: "Adoptive Family Operating System: Attachment & Trauma-Informed Approach",
    excerpt: "Specialized family system adaptations for adoptive families and attachment challenges.",
    category: "Family Systems",
    date: "2025-09-28",
    readTime: "13 min read"
  },
  {
    slug: "family-sabbatical-planning-operating-system-extended-travel-structure",
    title: "Family Sabbatical Planning: Operating System for Extended Travel & Structure",
    excerpt: "Maintaining family systems and routines during sabbaticals and extended travel periods.",
    category: "Family Systems",
    date: "2025-09-29",
    readTime: "8 min read"
  },
  {
    slug: "military-family-operating-system-deployment-relocation-stability",
    title: "Military Family Operating System: Deployment & Relocation Stability",
    excerpt: "Family system strategies for military families managing deployments and frequent moves.",
    category: "Family Systems",
    date: "2025-09-30",
    readTime: "11 min read"
  },
  {
    slug: "family-inheritance-planning-operating-system-wealth-transfer-values",
    title: "Family Inheritance Planning: Operating System for Wealth Transfer & Values",
    excerpt: "Systematic approaches to family legacy planning and intergenerational value transmission.",
    category: "Family Systems",
    date: "2025-10-01",
    readTime: "12 min read"
  },
  {
    slug: "international-family-operating-system-cross-cultural-communication-guide",
    title: "International Family Operating System: Cross-Cultural Communication Guide",
    excerpt: "Family system adaptations for international families and cross-cultural dynamics.",
    category: "Family Systems",
    date: "2025-10-02",
    readTime: "9 min read"
  },

  // BATCH 2: NEW ARTICLES - Children's Nutrition (10 more)
  {
    slug: "toddler-protein-deficiency-signs-igf-one-early-intervention-nutrition",
    title: "Toddler Protein Deficiency Signs: IGF One Early Intervention Nutrition",
    excerpt: "Identifying and addressing protein inadequacy in toddlers with targeted nutritional support.",
    category: "Children's Nutrition",
    date: "2025-10-03",
    readTime: "8 min read"
  },
  {
    slug: "plant-based-children-protein-sources-igf-one-vegetarian-family-nutrition",
    title: "Plant-Based Children's Protein Sources: IGF One Vegetarian Family Nutrition",
    excerpt: "Comprehensive guide to meeting children's protein needs on vegetarian and vegan diets.",
    category: "Children's Nutrition",
    date: "2025-10-04",
    readTime: "10 min read"
  },
  {
    slug: "childhood-obesity-protein-balance-igf-one-healthy-weight-management",
    title: "Childhood Obesity & Protein Balance: IGF One Healthy Weight Management",
    excerpt: "Using appropriate protein intake to support healthy weight management in children.",
    category: "Children's Nutrition",
    date: "2025-10-05",
    readTime: "11 min read"
  },
  {
    slug: "special-needs-children-nutrition-igf-one-adaptive-feeding-strategies",
    title: "Special Needs Children Nutrition: IGF One Adaptive Feeding Strategies",
    excerpt: "Specialized nutrition approaches for children with developmental and physical disabilities.",
    category: "Children's Nutrition",
    date: "2025-10-06",
    readTime: "12 min read"
  },
  {
    slug: "teen-athlete-protein-requirements-igf-one-adolescent-sports-nutrition",
    title: "Teen Athlete Protein Requirements: IGF One Adolescent Sports Nutrition",
    excerpt: "Advanced protein needs for teenage athletes and performance optimization strategies.",
    category: "Children's Nutrition",
    date: "2025-10-07",
    readTime: "9 min read"
  },
  {
    slug: "children-gut-health-protein-absorption-igf-one-digestive-wellness",
    title: "Children's Gut Health & Protein Absorption: IGF One Digestive Wellness",
    excerpt: "Supporting children's digestive health for optimal protein utilization and growth.",
    category: "Children's Nutrition",
    date: "2025-10-08",
    readTime: "10 min read"
  },
  {
    slug: "homeschool-nutrition-planning-igf-one-educational-meal-strategies",
    title: "Homeschool Nutrition Planning: IGF One Educational Meal Strategies",
    excerpt: "Systematic nutrition planning for homeschooling families and educational meal integration.",
    category: "Children's Nutrition",
    date: "2025-10-09",
    readTime: "8 min read"
  },
  {
    slug: "children-immune-system-protein-igf-one-illness-prevention-nutrition",
    title: "Children's Immune System & Protein: IGF One Illness Prevention Nutrition",
    excerpt: "How adequate protein intake supports children's immune function and disease resistance.",
    category: "Children's Nutrition",
    date: "2025-10-10",
    readTime: "9 min read"
  },
  {
    slug: "premature-baby-nutrition-igf-one-nicu-graduate-feeding-guide",
    title: "Premature Baby Nutrition: IGF One NICU Graduate Feeding Guide",
    excerpt: "Specialized nutrition considerations for premature infants transitioning to solid foods.",
    category: "Children's Nutrition",
    date: "2025-10-11",
    readTime: "11 min read"
  },
  {
    slug: "travel-children-nutrition-igf-one-portable-healthy-snack-solutions",
    title: "Travel Children Nutrition: IGF One Portable Healthy Snack Solutions",
    excerpt: "Maintaining children's nutritional needs during family travel with convenient protein options.",
    category: "Children's Nutrition",
    date: "2025-10-12",
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