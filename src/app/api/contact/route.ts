import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 'dummy_key_for_build');

export async function POST(request: NextRequest) {
  try {
    // Check if we have a valid API key
    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 'dummy_key_for_build') {
      return NextResponse.json(
        { error: 'Email service not configured. Please set RESEND_API_KEY environment variable.' },
        { status: 503 }
      );
    }

    const body = await request.json();
    const { name, phone, email, message } = body;

    // Validate required fields
    if (!name || !phone || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Send email to business owner
    const businessEmail = await resend.emails.send({
      from: 'Shira\'s Cakes <noreply@shirascakes.com>',
      to: ['shira@shirascakes.com'], // Replace with actual business email
      subject: `New Cake Order Request from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #ec4899, #f472b6); padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Cake Order Request</h1>
          </div>
          
          <div style="padding: 30px; background: #f9f9f9;">
            <h2 style="color: #333; margin-bottom: 20px;">Customer Information</h2>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 10px 0;"><strong>Phone:</strong> ${phone}</p>
              <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
            </div>
            
            <h3 style="color: #333; margin-bottom: 15px;">Order Details</h3>
            <div style="background: white; padding: 20px; border-radius: 8px;">
              <p style="margin: 0; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
            </div>
          </div>
          
          <div style="background: #ec4899; padding: 20px; text-align: center;">
            <p style="color: white; margin: 0;">Please respond to this customer as soon as possible!</p>
          </div>
        </div>
      `,
    });

    // Send confirmation email to customer
    const customerEmail = await resend.emails.send({
      from: 'Shira\'s Cakes <noreply@shirascakes.com>',
      to: [email],
      subject: 'Thank you for your cake order request!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #ec4899, #f472b6); padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">Thank You, ${name}!</h1>
          </div>
          
          <div style="padding: 30px; background: #f9f9f9;">
            <p style="color: #333; font-size: 16px; line-height: 1.6;">
              Thank you for reaching out to Shira's Cakes! We've received your cake order request and are excited to help bring your sweet vision to life.
            </p>
            
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #333; margin-top: 0;">What happens next?</h3>
              <ul style="color: #666; line-height: 1.8;">
                <li>We'll review your request within 24 hours</li>
                <li>Shira will contact you to discuss details and pricing</li>
                <li>We'll create a custom quote for your order</li>
                <li>Once approved, we'll start crafting your perfect cake!</li>
              </ul>
            </div>
            
            <div style="background: #ec4899; padding: 20px; border-radius: 8px; text-align: center;">
              <h3 style="color: white; margin-top: 0;">Need immediate assistance?</h3>
              <p style="color: white; margin-bottom: 10px;">Call us directly:</p>
              <a href="tel:+12146776273" style="color: white; font-size: 18px; font-weight: bold; text-decoration: none;">
                +1 214.677.6273
              </a>
            </div>
          </div>
          
          <div style="background: #333; padding: 20px; text-align: center;">
            <p style="color: #ccc; margin: 0; font-size: 14px;">
              Follow us on social media for more sweet inspiration!<br>
              <a href="https://www.instagram.com/shirascakes/" style="color: #ec4899;">Instagram</a> | 
              <a href="https://www.facebook.com/cakesbyshira" style="color: #ec4899;">Facebook</a>
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json(
      { 
        message: 'Order request sent successfully!',
        businessEmailId: businessEmail.data?.id,
        customerEmailId: customerEmail.data?.id
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send order request. Please try again or call us directly.' },
      { status: 500 }
    );
  }
}
