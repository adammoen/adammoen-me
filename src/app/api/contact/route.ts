import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message, website } = body;
    
    // Honeypot check - if website field is filled, it's likely spam
    if (website) {
      console.log('Spam detected via honeypot:', { name, email });
      return NextResponse.json(
        { message: 'Message sent successfully' }, // Don't let spam bots know they were caught
        { status: 200 }
      );
    }

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }
    
    // Additional spam detection
    const spamKeywords = ['casino', 'bitcoin', 'crypto', 'loan', 'seo service', 'backlink', 'guest post', 'viagra'];
    const messageText = message.toLowerCase();
    const nameText = name.toLowerCase();
    
    const containsSpam = spamKeywords.some(keyword => 
      messageText.includes(keyword) || nameText.includes(keyword)
    );
    
    if (containsSpam) {
      console.log('Spam detected via keywords:', { name, email, message: message.substring(0, 100) });
      return NextResponse.json(
        { message: 'Message sent successfully' }, // Don't reveal spam detection
        { status: 200 }
      );
    }
    
    // Check for suspicious patterns (excessive links, all caps, etc.)
    const linkCount = (message.match(/https?:\/\//g) || []).length;
    const isAllCaps = message === message.toUpperCase() && message.length > 20;
    
    if (linkCount > 2 || isAllCaps) {
      console.log('Spam detected via patterns:', { name, email, linkCount, isAllCaps });
      return NextResponse.json(
        { message: 'Message sent successfully' },
        { status: 200 }
      );
    }

    // Create email content
    const emailSubject = `New Contact Form Submission from ${name}`;
    const emailBody = `
New contact form submission from adammoen.me:

Name: ${name}
Email: ${email}

Message:
${message}

---
This message was sent from the contact form on adammoen.me
    `;

    // In a production environment, you would use a service like:
    // - Nodemailer with SMTP
    // - SendGrid
    // - Resend
    // - AWS SES
    
    // For now, we'll simulate sending the email
    // You'll need to implement actual email sending based on your preferred service
    
    console.log('Email would be sent to: adam@reptech.io');
    console.log('Subject:', emailSubject);
    console.log('Body:', emailBody);

    // TODO: Implement actual email sending
    // Example with a hypothetical email service:
    /*
    await emailService.send({
      to: 'adam@reptech.io',
      subject: emailSubject,
      text: emailBody,
      replyTo: email
    });
    */

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}