import nodemailer from 'nodemailer';

import { NextResponse } from 'next/server';

export async function POST(req) {
  const body = await req.json();
  const { name, email, phone, subject, message } = body;

  // Validate required fields
  if (!name || !email || !phone || !subject || !message) {
    return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
  }

  try {
    // Create transporter using your email service
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email to your business
    const businessEmailOptions = {
      from: process.env.SMTP_FROM,
      to: process.env.BUSINESS_EMAIL,
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #007bff; margin-top: 0;">Contact Details</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border-left: 4px solid #007bff; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="color: #666; font-size: 14px;">
              This email was sent from your website contact form.
            </p>
          </div>
        </div>
      `,
    };

    // Auto-reply email to the customer
    const customerEmailOptions = {
      from: process.env.SMTP_FROM,
      to: email,
      subject: 'Thank you for contacting us!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #007bff;">Thank You for Reaching Out!</h2>
          
          <p>Hi ${name},</p>
          
          <p>Thank you for contacting us. We've received your message and will get back to you as soon as possible, typically within 24 hours.</p>
          
          <div style="background-color: #f8f9fa; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h4 style="margin-top: 0; color: #333;">Your Message Details:</h4>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong> ${message}</p>
          </div>
          
          <p>If you have any urgent questions, please don't hesitate to call us at <strong>${process.env.BUSINESS_PHONE || 'your phone number'}</strong>.</p>
          
          <p>Best regards,<br>
          Your Business Name Team</p>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="color: #666; font-size: 14px;">
              This is an automated response. Please do not reply to this email.
            </p>
          </div>
        </div>
      `,
    };

    // Send both emails
    await transporter.sendMail(businessEmailOptions);
    await transporter.sendMail(customerEmailOptions);

    return NextResponse.json({ message: 'Emails sent successfully' }, { status: 200 });

  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json({ message: 'Failed to send email', error: error.message }, { status: 500 });
  }
}