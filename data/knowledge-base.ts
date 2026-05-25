export interface KnowledgeEntry {
  id: string
  niche: string
  category: string
  content: string
}

export const knowledgeBase: KnowledgeEntry[] = [

  // ECOMMERCE
  { id: 'ec-001', niche: 'ecommerce', category: 'Returns & Refunds',
    content: `Return Policy: You can return any item within 30 days of delivery for a full refund. Items must be unused and in original packaging. To start a return, contact support@shopexample.com with your order number. Refunds are processed within 5-7 business days back to your original payment method. Sale items are final sale and cannot be returned.` },
  { id: 'ec-002', niche: 'ecommerce', category: 'Shipping',
    content: `Shipping Options: Standard shipping takes 5-7 business days and costs $4.99. Express shipping takes 2-3 business days and costs $12.99. Overnight shipping is available for $24.99. Free standard shipping on all orders over $50. We ship to all 50 US states and over 30 countries. International shipping takes 10-21 business days depending on destination.` },
  { id: 'ec-003', niche: 'ecommerce', category: 'Order Tracking',
    content: `Order Tracking: Once your order ships, you will receive a tracking email with a link to track your package in real time. You can also track your order by logging into your account and visiting "My Orders." If your tracking number is not working within 48 hours of receiving it, please contact our support team. Orders typically ship within 1-2 business days of being placed.` },
  { id: 'ec-004', niche: 'ecommerce', category: 'Payment',
    content: `Payment Methods: We accept Visa, Mastercard, American Express, PayPal, Apple Pay, and Google Pay. All payments are processed securely through Stripe. We do not store your card details. Buy Now Pay Later is available through Klarna - split your purchase into 4 interest-free payments. For orders over $500 we also accept bank transfer.` },
  { id: 'ec-005', niche: 'ecommerce', category: 'Product Questions',
    content: `Product Availability: If an item shows "Out of Stock," you can click "Notify Me" to receive an email when it is back. Most items are restocked within 2-4 weeks. Custom or personalized products take 5-10 business days to produce before shipping. Product dimensions, materials, and care instructions are listed on each product page under the Details tab.` },

  // REAL ESTATE
  { id: 're-001', niche: 'real_estate', category: 'Property Viewings',
    content: `Booking a Viewing: You can book a property viewing online through our website or by calling +1-800-555-0100. Viewings are available Monday to Saturday 9am-6pm and Sunday 10am-4pm. Virtual tours are available for all listed properties. We require 24 hours notice to arrange a viewing. A viewing confirmation will be sent to your email with the agent's contact details.` },
  { id: 're-002', niche: 'real_estate', category: 'Buying Process',
    content: `How to Buy: Step 1 - Get a mortgage agreement in principle from your bank or broker. Step 2 - Browse listings and book viewings. Step 3 - Make an offer through your agent. Step 4 - Offer accepted: instruct a solicitor. Step 5 - Survey and searches completed (4-6 weeks). Step 6 - Exchange contracts and pay deposit (usually 10%). Step 7 - Complete and receive keys. The full process typically takes 3-6 months from offer to completion.` },
  { id: 're-003', niche: 'real_estate', category: 'Fees',
    content: `Agent Fees: For sellers, our commission is 1.5% of the sale price (no VAT). This includes professional photography, floor plans, listing on Rightmove and Zoopla, and a dedicated agent. For buyers, our service is completely free. We also offer a mortgage advice service - initial consultation is free with no obligation. Conveyancing solicitors typically charge 900-1,500 GBP for a standard purchase.` },
  { id: 're-004', niche: 'real_estate', category: 'Rentals',
    content: `Renting a Property: Tenancy agreements are typically 6 or 12 months. You will need to pass a credit check and provide references from your employer and previous landlord. The deposit is usually 5 weeks rent, held in a government-approved deposit scheme. Rent is paid monthly by standing order. Pets are considered on a case-by-case basis. Our management fee for landlords is 10% of monthly rent.` },
  { id: 're-005', niche: 'real_estate', category: 'Valuations',
    content: `Property Valuation: We offer free no-obligation valuations for homeowners considering selling or remortgaging. A local valuation expert will visit your property, assess condition, location, size, and recent comparable sales, and provide a realistic market price. Online instant valuations are also available on our website. Valuations are typically conducted within 48 hours of your request.` },

  // HR
  { id: 'hr-001', niche: 'hr', category: 'Leave Policy',
    content: `Annual Leave: Full-time employees receive 25 days annual leave per year plus bank holidays. Part-time employees receive leave on a pro-rata basis. You must submit leave requests at least 2 weeks in advance through the HR portal. A maximum of 5 days can be carried over to the next year. Unused leave above 5 days is forfeited at year end. Emergency leave of up to 3 days can be approved by your line manager without advance notice.` },
  { id: 'hr-002', niche: 'hr', category: 'Sick Leave',
    content: `Sick Leave: For absences of 1-3 days, self-certification is sufficient. For absences of 4 or more days, a doctor's note (fit note) is required. Statutory Sick Pay (SSP) is paid from day 4 at the current government rate. Company sick pay policy provides full pay for the first 4 weeks and half pay for the following 4 weeks, subject to manager approval. Please notify your line manager by 9am on the first day of absence.` },
  { id: 'hr-003', niche: 'hr', category: 'Onboarding',
    content: `New Employee Onboarding: Before your start date, you will receive a welcome email with IT setup instructions, your employee handbook, and parking/access information. On your first day, report to Reception at 9am. You will meet HR for a 2-hour orientation covering company policies, benefits, and systems. Your manager will introduce you to your team and provide your 30-60-90 day plan. Laptop and access credentials will be ready on your first day.` },
  { id: 'hr-004', niche: 'hr', category: 'Payroll',
    content: `Payroll: Salaries are paid on the last working day of each month directly to your bank account. Your payslip is available in the HR portal 3 days before payment. For payroll queries, contact payroll@company.com by the 15th of the month for changes to take effect that month. Overtime is paid at 1.5x your hourly rate for weekdays and 2x for weekends. Expenses must be submitted within 30 days of being incurred through the expenses portal.` },
  { id: 'hr-005', niche: 'hr', category: 'Benefits',
    content: `Employee Benefits: Health insurance through Bupa covering dental, vision, and mental health - employees and dependents covered. Pension contribution: company matches up to 5% of salary. Gym membership subsidy of 50 GBP/month. Annual learning and development budget of 1,000 GBP per employee. Flexible working available after 3 months probation. Employee Assistance Programme (EAP) provides 24/7 confidential counselling. Share option scheme available after 1 year.` },

  // HEALTHCARE
  { id: 'hc-001', niche: 'healthcare', category: 'Appointments',
    content: `Booking an Appointment: You can book a GP appointment online via the patient portal, by calling 0800-555-0200, or using the NHS App. Same-day appointments are available for urgent issues - call at 8am when phone lines open. Routine appointments are available within 7-10 days. Video consultations are available for non-physical issues. Please arrive 10 minutes early. If you need to cancel, please do so at least 2 hours in advance so we can offer the slot to another patient.` },
  { id: 'hc-002', niche: 'healthcare', category: 'Services',
    content: `Services Available: General practice (GP), nurse consultations, blood tests, vaccinations, travel health, mental health support, physiotherapy, and health checks. We offer the following clinics: diabetes management (Tuesdays), asthma and COPD (Wednesdays), baby and child health (Thursdays), women's health (Fridays). Specialist referrals are arranged by your GP. Pharmacy is located on site - open Mon-Fri 8am-6pm, Saturday 9am-1pm.` },
  { id: 'hc-003', niche: 'healthcare', category: 'Prescriptions',
    content: `Prescriptions: Repeat prescriptions can be ordered online via the patient portal, NHS App, or by submitting a paper slip to reception. Please allow 2 working days for processing. Prescriptions are sent electronically to your nominated pharmacy. The current NHS prescription charge is 9.90 GBP per item. If you are exempt (under 16, over 60, certain conditions, or hold an exemption certificate) there is no charge. Contact your pharmacy directly to check if your medication is in stock.` },
  { id: 'hc-004', niche: 'healthcare', category: 'Emergency',
    content: `Emergency Guidance: For life-threatening emergencies call 999 immediately. For urgent medical issues that are not life-threatening, call NHS 111 (free, 24/7). For urgent issues during practice hours, call our urgent line: 0800-555-0201. A&E at City Hospital is at 123 Hospital Road - open 24/7. Do not come to the practice without calling first for suspected infectious illness. Out-of-hours GP service is available 6pm-8am on weekdays and all day weekends by calling 111.` },
  { id: 'hc-005', niche: 'healthcare', category: 'Patient Records',
    content: `Accessing Your Records: You can access your medical records, test results, and appointment history through the patient portal or NHS App. Results are usually available within 3-5 working days of your test. Your GP will contact you directly if results require urgent discussion. To request a copy of your full records, submit a Subject Access Request form at reception - we respond within 30 days at no charge. All records are kept strictly confidential under GDPR.` },

  // LEGAL
  { id: 'lg-001', niche: 'legal', category: 'Consultation',
    content: `Initial Consultation: We offer a free 30-minute initial consultation by phone or video for all new clients. This allows us to understand your situation, assess whether we can help, and outline potential next steps. To book, call 0800-555-0300 or complete the form on our website. Consultations are available Monday-Friday 9am-5pm and Saturday 9am-12pm by appointment. After the consultation we will send a written summary of our advice and a fee estimate within 24 hours.` },
  { id: 'lg-002', niche: 'legal', category: 'Practice Areas',
    content: `Our Practice Areas: Employment law (unfair dismissal, redundancy, discrimination, settlement agreements), Family law (divorce, child custody, financial settlements), Property law (conveyancing, landlord and tenant disputes), Contract disputes, Personal injury, Wills and probate, Immigration. We do not handle criminal law. Each department has specialists with an average of 12 years experience. All solicitors are SRA-regulated.` },
  { id: 'lg-003', niche: 'legal', category: 'Fees',
    content: `Legal Fees: We offer three fee structures depending on your case. Fixed fee: for standard matters like conveyancing or straightforward wills - prices listed on our website. Hourly rate: for complex litigation - rates from 180 GBP/hour for junior solicitors to 350 GBP/hour for senior partners. Conditional fee (no win no fee): available for personal injury and some employment cases - you pay nothing if unsuccessful. All fees are discussed and agreed before we begin work. No hidden charges.` },
  { id: 'lg-004', niche: 'legal', category: 'Document Turnaround',
    content: `Document Preparation Times: Standard contracts: 3-5 working days. Wills: 5-7 working days. Conveyancing: typically 8-12 weeks end to end (depends on chain). Settlement agreements: 3-5 working days once terms are agreed. Court documents: 24-48 hour turnaround available at an additional charge. We will always provide you with a timeline at the start of your matter and keep you updated at every stage via email and our client portal.` },
  { id: 'lg-005', niche: 'legal', category: 'Client Portal',
    content: `Client Portal: All clients receive access to our secure online portal where you can track your case progress, upload and download documents, send messages to your solicitor, and view invoices. The portal is available 24/7 on desktop and mobile. You will receive login details by email within 24 hours of instructing us. All communications through the portal are encrypted and legally privileged. If you have trouble accessing the portal call our support line: 0800-555-0305.` },
]
