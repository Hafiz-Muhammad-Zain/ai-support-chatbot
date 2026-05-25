export interface KnowledgeEntry {
  id: string
  niche: string
  category: string
  content: string
}

export const knowledgeBase: KnowledgeEntry[] = [

  // ── ECOMMERCE — NovaNest (novaNest.shop) ───────────────────────────────────
  {
    id: 'ec-001',
    niche: 'ecommerce',
    category: 'Returns & Refunds',
    content: `NovaNest Return Policy: You can return any item within 30 days of delivery for a full refund. Items must be unused and in original packaging with all tags attached. To start a return, visit novaNest.shop/returns or email support@novanest.shop with your order number. A prepaid return label is emailed within 2 hours. Refunds are processed within 5-7 business days back to your original payment method once we receive and inspect the item. Sale items are final sale and cannot be returned. Damaged or defective items are replaced free of charge with no return required — just send a photo.`,
  },
  {
    id: 'ec-002',
    niche: 'ecommerce',
    category: 'Returns & Refunds',
    content: `NovaNest Refund Status: Once your returned item is received and inspected (1-2 business days), you will receive an email confirmation. Refunds appear on your original payment method within 5-7 business days after approval. PayPal refunds typically appear within 24 hours. If your refund has not appeared after 10 business days, contact support@novanest.shop with your order number. We can also issue store credit immediately as an alternative to waiting for the bank refund. Partial refunds are issued for items returned in less-than-perfect condition.`,
  },
  {
    id: 'ec-003',
    niche: 'ecommerce',
    category: 'Returns & Refunds',
    content: `NovaNest Exchange Policy: If you want a different size or colour, you can exchange your item within 30 days. Exchanges are free — we cover both the return shipping and the new item's outbound shipping. Select your new item at checkout and use code EXCHANGE for free shipping. If the new item costs more, you only pay the difference. If it costs less, we refund the difference. Exchange turnaround is 3-5 business days from when we receive your return.`,
  },
  {
    id: 'ec-004',
    niche: 'ecommerce',
    category: 'Shipping',
    content: `NovaNest Shipping Options: Standard shipping (5-7 business days) is $4.99 — free on orders over $50. Express shipping (2-3 business days) is $12.99. Overnight shipping is $24.99, order by 2pm EST for next-day delivery. We ship to all 50 US states and 40+ countries. International orders take 10-21 business days depending on destination and customs. International shipping rates start at $19.99. All orders include insurance. Signature required for orders over $200.`,
  },
  {
    id: 'ec-005',
    niche: 'ecommerce',
    category: 'Shipping',
    content: `NovaNest Delivery Issues: If your tracking shows "Delivered" but you haven't received your package: check around your property, with neighbours, and in any safe spots. Wait 24 hours as some carriers mark packages delivered early. If still missing after 24 hours, contact support@novanest.shop — we will file a claim with the carrier and send a replacement within 3 business days at no charge. For packages lost in transit (no updates for 5+ days), we will resend or refund immediately. All shipments are insured.`,
  },
  {
    id: 'ec-006',
    niche: 'ecommerce',
    category: 'Order Tracking',
    content: `NovaNest Order Tracking: Once your order ships, you will receive a tracking email from noreply@novanest.shop with a direct tracking link. You can also track by logging into novaNest.shop and visiting My Orders. Orders ship within 1-2 business days. Tracking numbers activate 12-24 hours after shipment. If your tracking link shows no movement for 3+ days, contact us and we will investigate with the carrier. We support tracking for UPS, FedEx, USPS, and DHL. Text alerts are available — opt in at checkout.`,
  },
  {
    id: 'ec-007',
    niche: 'ecommerce',
    category: 'Orders',
    content: `NovaNest Order Changes and Cancellations: You can modify or cancel your order within 2 hours of placing it by contacting support@novanest.shop with URGENT in the subject line. After 2 hours, orders enter processing and cannot be changed. If your order has already shipped, use our free returns process to send it back. To change your shipping address, contact us immediately — we can update it if the order hasn't been picked up by the carrier yet. Order number format: NOV-XXXXXX.`,
  },
  {
    id: 'ec-008',
    niche: 'ecommerce',
    category: 'Payment',
    content: `NovaNest Payment Methods: We accept Visa, Mastercard, American Express, PayPal, Apple Pay, Google Pay, and Shop Pay. All payments are processed securely through Stripe — PCI DSS Level 1 compliant. We do not store your full card details. Buy Now Pay Later is available through Klarna (4 interest-free payments) and Afterpay. For corporate orders over $500 we accept bank transfer and purchase orders. Gift cards are accepted at checkout. Coupons apply before tax and shipping.`,
  },
  {
    id: 'ec-009',
    niche: 'ecommerce',
    category: 'Payment',
    content: `NovaNest Payment Failures: If your payment is declined: check that your billing address matches your bank records exactly. Try a different browser or clear your cache. Ensure 3D Secure is enabled with your bank. Try PayPal as an alternative. If you continue to have issues, contact your bank — some banks block international or online transactions by default. Contact support@novanest.shop if you need help completing your order. We can send you a secure payment link as an alternative.`,
  },
  {
    id: 'ec-010',
    niche: 'ecommerce',
    category: 'Discount & Loyalty',
    content: `NovaNest Discounts and Loyalty Programme: Sign up for our newsletter and receive 10% off your first order. NovaNest Rewards: earn 1 point per $1 spent. 100 points = $5 off your next order. Refer a friend and both of you get $10 credit when they place their first order. Student discount: 15% off with valid student ID — verify at novaNest.shop/student. Seasonal sales run in January and July with up to 50% off. Subscribe & Save: 10% off repeat orders on eligible products.`,
  },
  {
    id: 'ec-011',
    niche: 'ecommerce',
    category: 'Products',
    content: `NovaNest Product Information: Full product specifications, dimensions, materials, and care instructions are on each product page under the Details tab. Product reviews from verified buyers are visible on the listing. If a size guide is not visible, email support@novanest.shop with the product name and we will help with sizing. We use manufacturer descriptions plus in-house testing for accuracy. If you receive a product that looks different from the photos, contact us — we take misrepresentation seriously.`,
  },
  {
    id: 'ec-012',
    niche: 'ecommerce',
    category: 'Products',
    content: `NovaNest Stock and Restock: If an item shows "Out of Stock," click "Notify Me" to receive an email when it returns — typically within 2-4 weeks. Limited edition and seasonal items may not restock. Pre-order items ship on the listed date — payment is not taken until shipment. Flash sale items sell on a first-come basis and may not restock. For bulk or wholesale enquiries (10+ units), email wholesale@novanest.shop for pricing and availability.`,
  },
  {
    id: 'ec-013',
    niche: 'ecommerce',
    category: 'Account',
    content: `NovaNest Account Management: Create an account at novaNest.shop/register to track orders, save wishlists, and view order history. Reset your password at novaNest.shop/forgot-password — link expires in 1 hour. To update your email or address, go to Account Settings. To permanently delete your account and all data (GDPR right to erasure), email privacy@novanest.shop — completed within 30 days. Contact support if you are locked out after multiple failed attempts.`,
  },
  {
    id: 'ec-014',
    niche: 'ecommerce',
    category: 'Wholesale & Business',
    content: `NovaNest B2B and Wholesale: We offer wholesale pricing for orders of 10+ units. Email wholesale@novanest.shop with your business details and required quantities for a quote. Net 30 payment terms available for verified businesses. Corporate gifting service available for branded packaging and custom messages. API and EDI integration available for retail partners. Minimum wholesale order: $250. Dedicated account manager assigned for accounts over $2,000/month.`,
  },
  {
    id: 'ec-015',
    niche: 'ecommerce',
    category: 'Complaints',
    content: `NovaNest Complaints and Escalation: If you are not satisfied with our service, email complaints@novanest.shop — a manager will respond within 24 hours. We aim to resolve all complaints within 3 business days. If you feel your complaint has not been resolved, ask to speak with our Customer Experience Director. We take all feedback seriously and use complaints to improve our service. We are a member of the Better Business Bureau (BBB) — you can also raise disputes there if needed.`,
  },

  // ── REAL ESTATE — Meridian Property Group ─────────────────────────────────
  {
    id: 're-001',
    niche: 'real_estate',
    category: 'Property Viewings',
    content: `Meridian Property Group — Booking a Viewing: You can book a property viewing online at meridianproperty.co.uk/book or by calling 020 7890 1234 (9am-6pm Mon-Sat). Viewings are available Mon-Sat 8am-7pm and Sunday 10am-4pm. We require 24 hours notice to arrange a viewing. A confirmation is sent to your email with your agent's direct mobile number. If you need to rearrange, please give at least 4 hours notice. Virtual tours (Matterport 3D) are available on all listings — view them 24/7 without booking.`,
  },
  {
    id: 're-002',
    niche: 'real_estate',
    category: 'Property Viewings',
    content: `Meridian Property Group — Viewing Preparation: Bring photo ID to all viewings. Take your time — viewings typically last 20-30 minutes. Write down or photograph anything you want to remember. Check mobile signal, broadband availability, and nearby transport. Ask your agent about: last sale price, time on market, chain situation, reason for selling, and any known issues. A second viewing before making an offer is strongly recommended. We can arrange building survey connections if you decide to proceed.`,
  },
  {
    id: 're-003',
    niche: 'real_estate',
    category: 'Buying Process',
    content: `Meridian Property Group — Buying a Home: Step 1: Get a mortgage agreement in principle (AIP) from your bank or a broker — this shows sellers you are serious. Step 2: Search listings and book viewings through our website or app. Step 3: Make a formal offer through your Meridian agent — we negotiate on your behalf. Step 4: Offer accepted — instruct a conveyancing solicitor (we have recommended partners). Step 5: Survey and legal searches (4-8 weeks). Step 6: Exchange contracts and pay 10% deposit. Step 7: Complete — keys are released. Total: 3-6 months typically.`,
  },
  {
    id: 're-004',
    niche: 'real_estate',
    category: 'Buying Process',
    content: `Meridian Property Group — Making an Offer: All offers are submitted in writing through your Meridian agent. State your offer price, position (first-time buyer, no chain, mortgage or cash), and any conditions. We present all offers to the vendor within 2 hours. You may be asked to provide your AIP or proof of funds. Offers are not legally binding until exchange of contracts — either party can withdraw up to that point. We recommend keeping offers at or near asking price in competitive areas. Sealed bid processes apply for properties with multiple offers.`,
  },
  {
    id: 're-005',
    niche: 'real_estate',
    category: 'Selling',
    content: `Meridian Property Group — Selling Your Property: Our commission is 1.25% of the sale price (inc. VAT for sole agency). This includes professional photography by our in-house photographer, floor plans, virtual tour, listing on Rightmove, Zoopla, and OnTheMarket, a prominent board, open house events, and a dedicated sales agent. We aim to find a buyer within 6 weeks. Average time from listing to sale agreed: 28 days. No upfront fees. You only pay on successful completion.`,
  },
  {
    id: 're-006',
    niche: 'real_estate',
    category: 'Selling',
    content: `Meridian Property Group — Preparing to Sell: We recommend: decluttering and deep cleaning before photography, fixing any obvious maintenance issues (leaking taps, broken tiles), repainting scuffed walls in neutral colours, ensuring good kerb appeal (tidy garden, clean windows), and removing very personal items from photos. We provide a free pre-sale checklist. A home staging consultation is available at £150 and typically increases sale price by 3-5%. EPC (Energy Performance Certificate) is legally required to sell — we can arrange this for £75.`,
  },
  {
    id: 're-007',
    niche: 'real_estate',
    category: 'Valuations',
    content: `Meridian Property Group — Property Valuation: Free no-obligation market valuations for any homeowner. A senior valuer visits, assesses the property inside and out, checks recent comparable sales in your area, and provides a realistic market price range within 48 hours. We also offer instant online valuations at meridianproperty.co.uk/valuation using Land Registry and market data. Online valuations are indicative — a physical valuation is more accurate. Valuations for mortgage or legal purposes require a RICS-accredited surveyor (we can refer).`,
  },
  {
    id: 're-008',
    niche: 'real_estate',
    category: 'Rentals',
    content: `Meridian Property Group — Renting a Property: Tenancy agreements are typically 6 or 12 months (Assured Shorthold Tenancy). You must pass a credit check (Experian), right to rent check (photo ID + proof of address), and provide references from your employer and previous landlord. The deposit is 5 weeks rent, held in the Deposit Protection Service (DPS). Rent is paid by standing order. For pets, please mention at enquiry stage — considered case-by-case at landlord discretion. We charge no tenant fees (Tenant Fees Act 2019).`,
  },
  {
    id: 're-009',
    niche: 'real_estate',
    category: 'Rentals',
    content: `Meridian Property Group — Landlord Services: Full management service at 12% of monthly rent (inc. VAT) — we handle tenant finding, referencing, deposit protection, tenancy agreements, rent collection, maintenance coordination, inspections, and renewal negotiations. Let only service at 8% — we find and reference tenants, set up the tenancy, and hand over to you. Rent guarantee insurance available from £199/year. We manage 1,200+ properties across South East England. Contact lettings@meridianproperty.co.uk.`,
  },
  {
    id: 're-010',
    niche: 'real_estate',
    category: 'Mortgages',
    content: `Meridian Property Group — Mortgage Advice: We offer a free mortgage broker service through our partner, Meridian Financial Services. Our advisers have access to 90+ lenders including exclusive deals not available on the high street. First consultation is free with no obligation. We can advise on: residential mortgages, buy-to-let mortgages, remortgaging, Help to Buy, and shared ownership. Your mortgage is secured against your home — you could lose your home if you do not keep up payments. We are FCA authorised.`,
  },
  {
    id: 're-011',
    niche: 'real_estate',
    category: 'Legal & Surveys',
    content: `Meridian Property Group — Surveys and Legal: We recommend a Level 2 survey (HomeBuyer Report) for most properties — £450-£600. A Level 3 full structural survey is recommended for older or unusual properties — £600-£1,000. Both include a market valuation for your lender. Legal searches typically take 4-8 weeks and cost £300-£500 via your solicitor. We have recommended conveyancing partners who offer a fixed-fee service from £895 all-in. Always use a solicitor — never try to convey yourself.`,
  },
  {
    id: 're-012',
    niche: 'real_estate',
    category: 'New Builds',
    content: `Meridian Property Group — New Build Properties: New builds come with a 10-year NHBC Buildmark warranty covering structural defects. Purchase through Help to Buy Equity Loan (5% deposit required, government lends 20%). New builds are typically priced at a slight premium but come with the latest insulation, energy ratings, and no upward chain. Snagging inspection (checking for minor defects before completion) is strongly recommended — we can arrange this. Reservation fees of £500-£2,000 are common and usually refundable if the purchase falls through.`,
  },
  {
    id: 're-013',
    niche: 'real_estate',
    category: 'International Buyers',
    content: `Meridian Property Group — International Buyers: Non-UK residents can purchase UK property freely with no restrictions. A 2% stamp duty surcharge applies for overseas buyers. You will need a UK bank account for the mortgage and completion. We assist international clients throughout — video viewings, remote signing via DocuSign, and liaising with your international solicitor. We have successfully assisted buyers from 45 countries. Contact international@meridianproperty.co.uk for a dedicated international buyer pack.`,
  },
  {
    id: 're-014',
    niche: 'real_estate',
    category: 'Fees & Costs',
    content: `Meridian Property Group — Buying Costs to Budget For: Stamp Duty Land Tax (SDLT): 0% up to £250,000 for second properties (first-time buyers have additional relief). Survey: £450-£1,000. Conveyancing: £895-£1,500. Mortgage arrangement fee: £0-£2,000 (often added to mortgage). Removal costs: £300-£2,000 depending on property size. Buildings insurance: from £150/year (required from exchange). Total buying costs typically add 2-4% on top of the purchase price. We provide a full cost breakdown at your valuation.`,
  },
  {
    id: 're-015',
    niche: 'real_estate',
    category: 'Market Information',
    content: `Meridian Property Group — Current Market Conditions: Our local market report is published monthly at meridianproperty.co.uk/market-report. Key metrics tracked: average days on market, sale price vs asking price ratio, new listings vs demand, and price trends by postcode. We also provide free neighbourhood reports showing: school Ofsted ratings, crime statistics, transport links, flood risk, and planned developments. Ask your agent for a bespoke area report for any postcode you are considering.`,
  },

  // ── HR — Pinnacle Technologies HR Department ────────────────────────────────
  {
    id: 'hr-001',
    niche: 'hr',
    category: 'Annual Leave',
    content: `Pinnacle Technologies — Annual Leave Policy: Full-time employees receive 25 days annual leave plus 8 UK bank holidays per year. Leave year runs January to December. Part-time employees receive leave on a pro-rata basis calculated on contracted hours. Submit leave requests at least 2 weeks in advance via the HR portal (Workday). A maximum of 5 days can be carried over to the following year with line manager approval — carried-over leave must be used by March 31. Unused leave above 5 days is forfeited at year-end. Emergency leave of up to 3 days can be approved by your line manager without advance notice.`,
  },
  {
    id: 'hr-002',
    niche: 'hr',
    category: 'Annual Leave',
    content: `Pinnacle Technologies — Leave Approval Process: Submit leave in Workday — select dates, type, and add any notes. Your line manager receives an automated notification and must approve or decline within 3 working days. If your request has not been actioned after 3 days, escalate to your HR Business Partner. Leave requests can be declined for business reasons (e.g., peak periods, insufficient notice, minimum team coverage). During December 23-Jan 2 (company shutdown), leave is mandatory and deducted from your annual allowance. Check the team leave calendar in Workday before submitting to avoid clashes.`,
  },
  {
    id: 'hr-003',
    niche: 'hr',
    category: 'Sick Leave',
    content: `Pinnacle Technologies — Sick Leave Policy: For absences of 1-3 days, self-certification is sufficient via Workday. For 4+ consecutive days, a GP fit note is required and must be uploaded to Workday. Statutory Sick Pay (SSP) applies from day 4 (waiting days 1-3 are unpaid under SSP). Pinnacle sick pay: full pay for first 10 working days in any 12-month rolling period, then SSP only. Notify your line manager before your contracted start time on day 1 of absence — phone call preferred, not text or email only. Frequent short-term absences may trigger a welfare review.`,
  },
  {
    id: 'hr-004',
    niche: 'hr',
    category: 'Sick Leave',
    content: `Pinnacle Technologies — Mental Health and Wellbeing: Mental health absences are treated with the same confidentiality and support as physical illness. Pinnacle provides an Employee Assistance Programme (EAP) through Bupa — 24/7 confidential helpline: 0800 100 1234. Up to 6 free counselling sessions per year. Mental Health First Aiders are available in every department — see the intranet for the list. Flexible working arrangements (amended hours, remote working) can be temporarily agreed to support return from mental health absence. Speak to HR in confidence — no disclosure to your line manager without consent.`,
  },
  {
    id: 'hr-005',
    niche: 'hr',
    category: 'Payroll',
    content: `Pinnacle Technologies — Payroll: Salaries are paid on the last working day of each month directly to your nominated bank account. Your payslip is available in Workday 3 working days before payment date. For payroll queries or corrections (wrong tax code, missed expense, overtime discrepancy), contact payroll@pinnacle.tech by the 15th of the month for changes in that month's payroll. Changes submitted after the 15th apply the following month. BACS transfer — allow 1 working day if not in account on payday. P60 issued by May 31 each year.`,
  },
  {
    id: 'hr-006',
    niche: 'hr',
    category: 'Payroll',
    content: `Pinnacle Technologies — Expenses: Submit expenses within 30 days of the expense date via Workday Expenses. Attach receipts (photo or PDF) for all items over £10. Mileage is reimbursed at HMRC approved rate (45p/mile up to 10,000 miles, 25p/mile thereafter). International travel expenses require pre-approval from your cost centre manager before travel. Approved expenses are paid in the next payroll cycle. Alcohol is not reimbursable. Client entertainment over £50 requires a business purpose note. Company credit card holders must reconcile monthly within Workday.`,
  },
  {
    id: 'hr-007',
    niche: 'hr',
    category: 'Benefits',
    content: `Pinnacle Technologies — Benefits Package: Private health insurance through Bupa from day 1 (dental, vision, mental health, physio — employee and family). Pension: 8% employer contribution matching up to 5% employee contribution (Nest pension scheme). Life assurance: 4x annual salary. Income protection: 60% of salary after 13 weeks sick leave. Annual learning budget: £1,500 per employee for courses, conferences, and certifications. Gym partnership: 50% discount at PureGym and David Lloyd. Cycle to Work scheme. Share option plan after 12 months service.`,
  },
  {
    id: 'hr-008',
    niche: 'hr',
    category: 'Benefits',
    content: `Pinnacle Technologies — Flexible Working: Flexible working requests can be submitted after 26 weeks employment via Workday. Options available: compressed hours (4-day week), flexitime (core hours 10am-3pm), remote working (up to 3 days/week for eligible roles), job share, and part-time reduction. We consider all requests fairly and respond within 3 months. Requests can only be declined for specified business reasons under the Employment Rights Act. Many team roles are already designated hybrid — check your contract. Speak to your HR Business Partner first to discuss suitability.`,
  },
  {
    id: 'hr-009',
    niche: 'hr',
    category: 'Onboarding',
    content: `Pinnacle Technologies — New Employee Onboarding: Before day 1: you will receive a welcome email from HR with IT setup instructions, employee handbook, parking/access info, and a pre-boarding checklist (bank details, right to work documents, emergency contact). Day 1: report to Reception at 9am — your buddy will meet you. 2-hour HR induction covers policies, benefits, systems, and safeguarding. Your manager provides your 30-60-90 day plan. Laptop, access badge, and credentials are ready on arrival. First week: IT training, compliance e-learning (must complete within 7 days), and team introductions.`,
  },
  {
    id: 'hr-010',
    niche: 'hr',
    category: 'Performance & Development',
    content: `Pinnacle Technologies — Performance Reviews: Annual performance reviews take place in December using Workday Performance. Mid-year check-ins in June. Your manager sets SMART objectives at the start of each year in Workday. Performance ratings: Exceptional / Exceeds / Meets / Developing / Unsatisfactory. Ratings inform the annual pay review cycle (January). Promotions are considered at mid-year and year-end cycles — discuss eligibility with your manager and HRBP. Development plans (PDPs) are created collaboratively and tracked in Workday. 360-degree feedback available on request.`,
  },
  {
    id: 'hr-011',
    niche: 'hr',
    category: 'Policies & Conduct',
    content: `Pinnacle Technologies — Key HR Policies: All policies are on the intranet under People > Policies. Key policies include: Code of Conduct, Equal Opportunities, Anti-Bribery, Data Protection (GDPR), Social Media Policy, Disciplinary and Grievance Procedure, Whistleblowing (Speak Up), and Alcohol and Drugs Policy. New starters must read and acknowledge these within their first 7 days. Policy violations are investigated via our Disciplinary Procedure — serious breaches may result in dismissal. Report concerns confidentially to HR or via the anonymous Speak Up hotline: 0800 999 5678.`,
  },
  {
    id: 'hr-012',
    niche: 'hr',
    category: 'Maternity & Parental Leave',
    content: `Pinnacle Technologies — Family Leave: Maternity leave: 52 weeks available. Enhanced pay: 16 weeks full pay, then statutory maternity pay (SMP) for up to 23 weeks, then unpaid. Shared Parental Leave (SPL) allows parents to share up to 50 weeks leave and 37 weeks pay. Paternity leave: 2 weeks at full pay from day 1. Adoption leave: same as maternity. IVF treatment: up to 3 rounds of IVF-related absence treated as sick leave with full pay. KIT (keeping in touch) days: up to 10 days work during maternity without ending leave. Notify HR of pregnancy/adoption as early as comfortable — all discussions are confidential.`,
  },
  {
    id: 'hr-013',
    niche: 'hr',
    category: 'Leavers',
    content: `Pinnacle Technologies — Resignation and Leaving: Notice periods are specified in your contract — typically 1 month for most roles, 3 months for senior positions. Submit your resignation in writing (email to your manager, cc HR). Garden leave may be applied at Pinnacle's discretion during your notice period. Final salary includes all accrued but untaken leave (pro-rated). Company equipment must be returned on your last day. Your P45 is issued within 2 weeks of leaving. References are provided by HR confirming employment dates and job title only. Exit interview is voluntary and confidential — booked by your HRBP.`,
  },
  {
    id: 'hr-014',
    niche: 'hr',
    category: 'Recruitment',
    content: `Pinnacle Technologies — Internal Vacancies: All internal vacancies are posted on the intranet under Careers > Internal Jobs before external advertising. To apply, submit your CV and a cover letter through the internal jobs portal. You must have been in your current role for at least 12 months to apply internally (exceptions require line manager and HR approval). Interviews follow the same structured process as external hiring. Internal candidates receive interview feedback regardless of outcome. Refer an external candidate and receive a £1,000 referral bonus if they complete 3 months service (referral@pinnacle.tech).`,
  },
  {
    id: 'hr-015',
    niche: 'hr',
    category: 'Training & Development',
    content: `Pinnacle Technologies — Learning and Development: £1,500 annual learning budget per employee for external courses, certifications, and conferences. Book pre-approved providers through the L&D portal in Workday, or request new providers via learning@pinnacle.tech. Pinnacle Learning Hub (internal LMS) has 400+ e-learning courses — available 24/7. Leadership development programmes run twice yearly — nominate through your HRBP. Apprenticeship levy: Pinnacle pays 100% of approved apprenticeship training costs. Study leave: up to 5 days paid study leave per year for professional qualifications with manager approval.`,
  },

  // ── HEALTHCARE — Greenfield Medical Practice ───────────────────────────────
  {
    id: 'hc-001',
    niche: 'healthcare',
    category: 'Appointments',
    content: `Greenfield Medical Practice — Booking an Appointment: Book online at greenfieldmedical.nhs.uk, via NHS App, or call 01234 567890 (8am-6pm Mon-Fri, 9am-12pm Sat). Same-day urgent appointments: call at 8am when lines open — available for acute illness, new symptoms, or deterioration of a chronic condition. Routine appointments: available within 5-7 working days. Choose face-to-face, telephone, or video consultation at booking. If booking online and no slots show, call us — we keep slots for call-in patients. Reception cannot give medical advice — if you are unsure if it is urgent, call 111.`,
  },
  {
    id: 'hc-002',
    niche: 'healthcare',
    category: 'Appointments',
    content: `Greenfield Medical Practice — Appointment Preparation: Arrive 10 minutes before your appointment. Bring any current medications (or a list with doses). Bring your NHS number if known. Appointments are typically 10 minutes — for complex or multiple issues, request a double appointment (20 mins) when booking. If you are bringing a child under 16, a parent or legal guardian must be present. If you need an interpreter, request one when booking (48 hours notice required). Do not come to the practice with suspected COVID-19 — call first for telephone/video options.`,
  },
  {
    id: 'hc-003',
    niche: 'healthcare',
    category: 'Appointments',
    content: `Greenfield Medical Practice — Cancelling and DNA Policy: If you need to cancel, please do so at least 2 hours before your appointment by calling 01234 567890 or cancelling online. This frees the slot for other patients. Three missed appointments (Did Not Attend — DNA) in 12 months will result in a letter from us — repeated DNAs may result in removal from our patient list. We understand emergencies happen — contact us and we will note the reason. Cancellations via NHS App are immediate. We send appointment reminders by SMS 24 hours in advance.`,
  },
  {
    id: 'hc-004',
    niche: 'healthcare',
    category: 'Prescriptions',
    content: `Greenfield Medical Practice — Repeat Prescriptions: Order your repeat prescription online (NHS App or greenfieldmedical.nhs.uk/prescriptions), by phone, or by posting a paper slip to reception. Allow 2 working days for processing. We send prescriptions electronically to your nominated pharmacy — no need to collect from us. To change your nominated pharmacy, update your preference in the NHS App or tell reception. If requesting early (running out), explain why when ordering. Not all medications are available on repeat — some require a review appointment first.`,
  },
  {
    id: 'hc-005',
    niche: 'healthcare',
    category: 'Prescriptions',
    content: `Greenfield Medical Practice — Prescription Charges and Exemptions: NHS prescription charge: £9.90 per item (2026 rate). You are exempt if you are: under 16, over 60, in full-time education and under 19, pregnant or had a baby in last 12 months, hold a valid HC2/HC3 certificate, have a qualifying medical condition (diabetes, epilepsy, permanent fistula, myxoedema, hypoparathyroidism, Addison's, certain cancer treatments), or receive qualifying benefits. Prepayment Certificate (PPC) costs £111.60/year and covers all prescriptions — worth it for 12+ items/year. Apply via NHS Business Services Authority.`,
  },
  {
    id: 'hc-006',
    niche: 'healthcare',
    category: 'Services',
    content: `Greenfield Medical Practice — Clinical Services: We offer GP consultations, nurse consultations, healthcare assistant appointments, blood tests (phlebotomy — Tues/Thurs mornings), ECG, spirometry, blood pressure monitoring, travel health and vaccinations, NHS health checks (40-74 years), smear tests, and minor procedures (coil fitting, joint injections, skin lesion removal). Specialist clinics: Diabetes (Monday pm), Asthma/COPD (Wednesday pm), Child health (Thursday am), Women's health (Friday). On-site pharmacy open Mon-Fri 8am-6pm.`,
  },
  {
    id: 'hc-007',
    niche: 'healthcare',
    category: 'Services',
    content: `Greenfield Medical Practice — Referrals: Your GP will refer you to a specialist when clinically appropriate. Routine referrals: the NHS 18-week pathway means you should be seen within 18 weeks. Urgent (2-week wait) referrals for suspected cancer — you will be contacted by the hospital within 2 weeks. You choose your hospital for non-urgent referrals at referral time — visit nhs.uk/service-search. After referral, the hospital contacts you directly to book. If you have not heard within 4 weeks of referral, contact the hospital directly with your NHS number. Private referral letters are available — ask reception (£30 admin fee).`,
  },
  {
    id: 'hc-008',
    niche: 'healthcare',
    category: 'Test Results',
    content: `Greenfield Medical Practice — Test Results: Blood test results are typically available within 3-5 working days and can be viewed in the NHS App or online patient access. X-ray and scan results: 1-2 weeks depending on hospital capacity. If results are urgent, your GP will contact you — if a result is abnormal but not urgent, you may be asked to book a review appointment. Do not assume no news is good news for important tests — check your results in the NHS App. For results you are unsure about, book a telephone consultation with your GP to discuss.`,
  },
  {
    id: 'hc-009',
    niche: 'healthcare',
    category: 'Patient Registration',
    content: `Greenfield Medical Practice — Registering as a Patient: Register online at greenfieldmedical.nhs.uk/register or collect a form from reception. We accept patients living within our catchment area (SE1, SE5, SE15, SE17 postcodes). Proof of address and ID are helpful but not legally required to register. Registration is processed within 5 working days — you will receive a letter confirming your NHS number. Temporary registration available for visitors. Under 16s can register with parental consent. If you have complex needs (learning disability, carer, serious mental illness), mention this at registration for enhanced support.`,
  },
  {
    id: 'hc-010',
    niche: 'healthcare',
    category: 'Mental Health',
    content: `Greenfield Medical Practice — Mental Health Support: Speak to your GP if you are experiencing anxiety, depression, stress, or any other mental health concern — these are treated with the same care as physical health. We have two mental health link workers who can provide brief support and refer to talking therapies. Self-refer to IAPT (Improving Access to Psychological Therapies) online — no GP referral needed for mild to moderate anxiety/depression. MIND local charity: 01234 111 222. Crisis line (24/7): 0800 171 2171 (South London and Maudsley). If in immediate danger: 999 or nearest A&E.`,
  },
  {
    id: 'hc-011',
    niche: 'healthcare',
    category: 'Emergency',
    content: `Greenfield Medical Practice — Emergency Guidance: 999 — life-threatening emergencies (chest pain, stroke, difficulty breathing, severe bleeding, unconscious). 111 — urgent non-emergency (advice, out-of-hours GP, urgent dental, mental health crisis): available 24/7, free. Walk-in Centre (Kings College Hospital Walk-in) — minor injuries and illnesses, no appointment needed, open 7am-10pm. A&E (King's College Hospital) — 24/7, serious and emergency cases. Practice urgent line during hours: 01234 567890. Out-of-hours GP (6pm-8am weekdays, 24hrs weekends): dial 111 and ask for out-of-hours GP.`,
  },
  {
    id: 'hc-012',
    niche: 'healthcare',
    category: 'Patient Records',
    content: `Greenfield Medical Practice — Accessing Your Medical Records: View your consultation notes, medication list, allergies, immunisation history, and test results via NHS App (free) or request online access through greenfieldmedical.nhs.uk/access. Full records access includes all GP notes — some sensitive entries may be redacted at the GP's clinical discretion. To request a copy of your complete records (Subject Access Request under GDPR), submit via reception or email info@greenfieldmedical.nhs.uk — we respond within 30 days at no charge. Records are never shared without your consent except in specific legal circumstances.`,
  },
  {
    id: 'hc-013',
    niche: 'healthcare',
    category: 'Vaccinations',
    content: `Greenfield Medical Practice — Vaccinations and Immunisations: Childhood immunisations are per the NHS schedule — book through the child health clinic (Thursdays). Flu vaccine: available October-January, book online or call. COVID-19 booster: offered per NHS guidance to eligible groups. Travel vaccinations: book a travel health appointment 6-8 weeks before departure. Some travel vaccines are not NHS funded (cost applies) — we will advise at your appointment. Shingles, pneumonia, and RSV vaccines available to eligible age groups. All vaccination records are on your NHS App. HPV vaccine for school-age children via school programme.`,
  },
  {
    id: 'hc-014',
    niche: 'healthcare',
    category: 'Chronic Disease Management',
    content: `Greenfield Medical Practice — Long-Term Condition Management: If you have diabetes, hypertension, asthma, COPD, heart disease, or another long-term condition, you will be invited for an annual review. These reviews check your condition is well managed and update your care plan. Attend even if you feel well — many complications are prevented by monitoring. Structured education programmes available for type 2 diabetes and COPD. If you have multiple conditions, these can often be reviewed in a single longer appointment. Contact your named GP or our chronic disease nurse on 01234 567891 between reviews with any concerns.`,
  },
  {
    id: 'hc-015',
    niche: 'healthcare',
    category: 'Feedback & Complaints',
    content: `Greenfield Medical Practice — Feedback and Complaints: We welcome all feedback to improve our service. Complete our Friends and Family Test after each appointment (text message link). For compliments, email info@greenfieldmedical.nhs.uk. For formal complaints, write to our Practice Manager at 12 Greenfield Lane, London SE1 4XY or email complaints@greenfieldmedical.nhs.uk — we acknowledge within 3 working days and aim to resolve within 20 working days. If you are not satisfied with our response, contact the Parliamentary and Health Service Ombudsman (0345 015 4033). Your feedback does not affect your care.`,
  },

  // ── LEGAL — Sterling & Hart Solicitors ────────────────────────────────────
  {
    id: 'lg-001',
    niche: 'legal',
    category: 'Initial Consultation',
    content: `Sterling & Hart Solicitors — Initial Consultation: We offer a free 30-minute initial consultation by phone, video, or in-person for all new clients. This allows us to understand your situation, confirm whether we can help, explain the relevant law, and outline options and costs. To book: call 020 3456 7890, email hello@sterlinghart.co.uk, or use the booking form at sterlinghart.co.uk/consult. Available Mon-Fri 8:30am-6pm, Sat 9am-1pm. After the consultation, we send a written summary of our advice and a fee estimate within 24 hours. No obligation to proceed.`,
  },
  {
    id: 'lg-002',
    niche: 'legal',
    category: 'Initial Consultation',
    content: `Sterling & Hart Solicitors — What to Bring to Your Consultation: For employment matters: your employment contract, any correspondence with your employer (emails, letters), and details of the issue (dates, names, what happened). For property matters: title deeds or Land Registry information if available, any existing contracts or offers. For family matters: marriage certificate, details of assets and debts, and any existing court orders. For any matter: bring any documents you have received. The more context you provide, the more specific and useful our advice. All information is treated as strictly confidential.`,
  },
  {
    id: 'lg-003',
    niche: 'legal',
    category: 'Practice Areas',
    content: `Sterling & Hart Solicitors — Practice Areas: Employment Law (unfair dismissal, constructive dismissal, redundancy, discrimination, settlement agreements, TUPE, whistleblowing, restrictive covenants). Family Law (divorce, financial remedy, child arrangements, domestic abuse injunctions, cohabitation disputes). Property Law (residential and commercial conveyancing, landlord and tenant disputes, lease extensions, boundary disputes). Personal Injury (road traffic accidents, workplace injuries, slips and trips, medical negligence). Wills, Trusts & Probate. Immigration. We do not handle criminal law.`,
  },
  {
    id: 'lg-004',
    niche: 'legal',
    category: 'Practice Areas',
    content: `Sterling & Hart Solicitors — Employment Law Services in Detail: Unfair dismissal claims: we assess merits, calculate potential compensation (up to £115,115 in 2026), and represent at Employment Tribunal. Settlement agreements: review and negotiate — we ensure you understand what you are signing away. Redundancy: we advise on whether the process was fair and calculate your statutory entitlement. Discrimination: race, sex, age, disability, religion, sexual orientation — all protected under the Equality Act 2010. We offer no win no fee on strong employment cases. Time limit for most employment claims: 3 months less one day from the date of dismissal.`,
  },
  {
    id: 'lg-005',
    niche: 'legal',
    category: 'Fees',
    content: `Sterling & Hart Solicitors — Fee Structures: Fixed fee: predictable cost for defined services — e.g., standard residential conveyancing from £895 + disbursements, straightforward will from £250, settlement agreement review from £500. Hourly rate: for complex or contested matters — junior solicitor from £185/hour, senior solicitor from £250/hour, partner from £380/hour. No Win No Fee (Conditional Fee Agreement): available for personal injury and strong employment tribunal cases — you pay nothing if unsuccessful; success fee of 25% of damages on win. All fees agreed in writing before work starts. Monthly billing available for ongoing matters. We never add hidden charges.`,
  },
  {
    id: 'lg-006',
    niche: 'legal',
    category: 'Fees',
    content: `Sterling & Hart Solicitors — Conveyancing Fees: Residential purchase fixed fee: £895 plus disbursements (searches £300-£400, Land Registry fee £20-£500 based on price, SDLT if applicable). Residential sale fixed fee: £795 plus disbursements (Land Registry official copies ~£12). Leasehold properties add £200-£300 due to additional work. Remortgage: £595 plus disbursements. New build purchase: £1,100 plus disbursements. We do not charge for the initial conveyancing quote. We use a secure client portal for all document exchange. Average time to complete: 8-12 weeks for straightforward transactions.`,
  },
  {
    id: 'lg-007',
    niche: 'legal',
    category: 'Document Turnaround',
    content: `Sterling & Hart Solicitors — Document Preparation Timelines: Settlement agreements: 2-3 working days once we have all information. Standard contracts: 3-5 working days. Wills: 5-7 working days. Employment contract review: 24-48 hours. Court documents: 24-hour turnaround available (additional £150 urgency fee). Letters before action: same day or next day. GDPR data subject access request response: within 30 days. We always confirm your deadline at the start and will tell you immediately if we cannot meet it. Urgent matters outside office hours: call our duty solicitor line 07000 123 456.`,
  },
  {
    id: 'lg-008',
    niche: 'legal',
    category: 'Process & Communication',
    content: `Sterling & Hart Solicitors — How We Work: On instruction, you receive a client care letter confirming the scope, your solicitor's name and contact details, fee estimate, and our complaints procedure. We communicate primarily by email but call for urgent matters. All key decisions and advice are confirmed in writing. You will receive regular updates — at minimum every 2 weeks on active matters. Our online client portal (Clio) lets you view your file, documents, messages, and invoices 24/7. All communications are legally privileged and confidential. We are regulated by the Solicitors Regulation Authority (SRA number: 123456).`,
  },
  {
    id: 'lg-009',
    niche: 'legal',
    category: 'Family Law',
    content: `Sterling & Hart Solicitors — Divorce and Separation: Divorce is now no-fault under the Divorce, Dissolution and Separation Act 2020 — one spouse simply states the marriage has broken down. Application is online (£593 court fee, or apply for fee remission if on low income). 20-week reflection period, then apply for conditional order, then final order. Financial matters (division of assets) are separate and can be resolved by consent order (we draft) or court proceedings if no agreement. Child arrangements: we recommend mediation first — required before court application. A children's solicitor and CAFCASS may be involved in contested child cases.`,
  },
  {
    id: 'lg-010',
    niche: 'legal',
    category: 'Wills & Probate',
    content: `Sterling & Hart Solicitors — Wills and Probate: Single will: £250. Mirror wills for couples: £400. Including trusts or complex estates: from £600. If you die without a will (intestate), assets pass under fixed legal rules — your wishes may not be followed. We recommend reviewing your will every 3-5 years or after major life events (marriage, divorce, new child, property purchase). Probate: if the estate is over £5,000 we apply for a Grant of Probate on your behalf. Our probate fee: 1.5% of estate value (min £1,500). We handle all aspects including tax (IHT), asset collection, and distribution to beneficiaries.`,
  },
  {
    id: 'lg-011',
    niche: 'legal',
    category: 'Personal Injury',
    content: `Sterling & Hart Solicitors — Personal Injury Claims: We handle road traffic accidents (including whiplash via the Official Injury Claim portal), workplace injuries, public liability (slips, trips, falls), and medical negligence. Time limit: 3 years from the date of the accident or date of knowledge. We work on No Win No Fee — no upfront cost to you. We instruct medical experts to assess your injuries. General damages for pain and suffering plus special damages (lost earnings, medical costs, travel costs). Average personal injury case duration: 6-18 months. We will give you an honest assessment of your claim's merits at the free consultation.`,
  },
  {
    id: 'lg-012',
    niche: 'legal',
    category: 'Immigration',
    content: `Sterling & Hart Solicitors — Immigration Law: We advise on: Skilled Worker Visa (formerly Tier 2), Global Talent Visa, Investor and Entrepreneur visas, Family visas (spouse/partner, parent, child), Indefinite Leave to Remain (ILR) and British Citizenship applications, EU Settlement Scheme, and asylum. Immigration rules change frequently — always take professional advice before applying. An incorrect application can result in refusal and a ban on reapplying. Our immigration team processes over 200 applications per year with a 94% success rate. Fixed-fee packages available for standard applications from £750.`,
  },
  {
    id: 'lg-013',
    niche: 'legal',
    category: 'Dispute Resolution',
    content: `Sterling & Hart Solicitors — Dispute Resolution and Mediation: Courts require parties to attempt Alternative Dispute Resolution (ADR) before litigation. We offer and facilitate mediation, arbitration, and negotiated settlement. Mediation is typically one day, costs £500-£1,500 per party, and resolves 70% of disputes. If ADR fails, we litigate in the County Court, High Court, or specialist tribunal. Our litigation team has appeared in 800+ court hearings. We give you a frank assessment of litigation risk — legal costs can exceed the value in dispute, and we will tell you if that is the case. Pre-action protocol letters often resolve disputes without court.`,
  },
  {
    id: 'lg-014',
    niche: 'legal',
    category: 'Business Law',
    content: `Sterling & Hart Solicitors — Business Legal Services: Company formation and shareholder agreements. Commercial contracts — drafting, reviewing, and negotiating supplier, client, and partnership agreements. Terms and conditions for websites and businesses. Commercial property — leases, licences, and purchases. Employment contracts and handbooks for businesses. GDPR compliance and data protection policies. Business sale and purchase (M&A). IP protection — trademark registration, non-disclosure agreements. Debt recovery — letters before action to court enforcement. We offer a Business Retainer: unlimited legal advice for a fixed monthly fee from £350. Email business@sterlinghart.co.uk.`,
  },
  {
    id: 'lg-015',
    niche: 'legal',
    category: 'Complaints',
    content: `Sterling & Hart Solicitors — Complaints Procedure: We are committed to providing excellent service. If you have a complaint, first raise it with your solicitor directly. If unresolved within 5 working days, contact our Client Relations Manager at complaints@sterlinghart.co.uk or write to 14 Hart Square, London EC4A 2AB — we acknowledge within 3 working days and resolve within 8 weeks. If still dissatisfied, contact the Legal Ombudsman (0300 555 0333, legalombudsman.org.uk) within 6 months of our final response. The SRA (0370 606 2555) handles issues of professional misconduct. All complaints are handled free of charge and do not affect your case.`,
  },

  // ── CONTACT & ESCALATION ENTRIES ─────────────────────────────────────────
  {
    id: 'ec-016',
    niche: 'ecommerce',
    category: 'Support Contact',
    content: `NovaNest — How to Reach Support: Email: support@novanest.shop (response within 4 business hours). Live chat: available on the website Mon-Sat 9am-8pm EST. Phone: 1-800-668-2678 (Mon-Fri 9am-6pm EST). WhatsApp: +1 212 555 0199 (same hours as live chat). For account security issues (suspected unauthorised access), call immediately. For media enquiries: media@novanest.shop. For partnership and wholesale: wholesale@novanest.shop. Average first-response time: under 2 hours during business hours. Holiday schedules are posted on the website 2 weeks in advance.`,
  },
  {
    id: 're-016',
    niche: 'real_estate',
    category: 'Contact',
    content: `Meridian Property Group — How to Contact Us: Head office: 45 Canary Wharf, London E14 5EH. Main line: 020 7890 1234. Out-of-hours emergency maintenance (rental properties only): 0800 999 1234. Email: hello@meridianproperty.co.uk. Sales: sales@meridianproperty.co.uk. Lettings: lettings@meridianproperty.co.uk. Valuations: valuations@meridianproperty.co.uk. Complaints: complaints@meridianproperty.co.uk. Office hours: Mon-Fri 9am-6pm, Sat 9am-5pm, Sun 10am-2pm. Six branches across London — see meridianproperty.co.uk/branches. Response time target: all emails within 4 hours during working hours.`,
  },
  {
    id: 'hr-016',
    niche: 'hr',
    category: 'HR Contacts',
    content: `Pinnacle Technologies — HR Contact Directory: HR Helpdesk (general queries): hr@pinnacle.tech or extension 4400. Payroll: payroll@pinnacle.tech or extension 4410. Recruitment: talent@pinnacle.tech or extension 4420. L&D: learning@pinnacle.tech or extension 4430. Occupational Health: oh@pinnacle.tech. EAP (confidential, 24/7): 0800 100 1234. HR Business Partners are assigned by department — your HRBP name is in Workday under My Team. For urgent HR issues outside business hours, contact the on-call HR manager via the duty rota (published monthly on the intranet). All HR queries are responded to within 1 working day.`,
  },
  {
    id: 'hc-016',
    niche: 'healthcare',
    category: 'Practice Contact',
    content: `Greenfield Medical Practice — Contact Information: Phone: 01234 567890 (8am-6pm Mon-Fri, 9am-12pm Sat). Online: greenfieldmedical.nhs.uk. NHS App: for appointments, prescriptions, and records. Address: 12 Greenfield Lane, London SE1 4XY. For non-urgent administrative queries: info@greenfieldmedical.nhs.uk (2 working day response). Sick note requests by email: sicknotes@greenfieldmedical.nhs.uk. Medical reports and insurance letters: reports@greenfieldmedical.nhs.uk (5-10 working day turnaround, fees apply). Do not email clinical queries — call or book an appointment. Out-of-hours: 111.`,
  },
  {
    id: 'lg-016',
    niche: 'legal',
    category: 'Contact',
    content: `Sterling & Hart Solicitors — Contact Us: Phone: 020 3456 7890 (Mon-Fri 8:30am-6pm, Sat 9am-1pm). Email: hello@sterlinghart.co.uk. Address: 14 Hart Square, London EC4A 2AB (nearest tube: Chancery Lane). Client portal: my.sterlinghart.co.uk. For urgent matters outside office hours: duty solicitor line 07000 123 456. Departments: employment@sterlinghart.co.uk, family@sterlinghart.co.uk, property@sterlinghart.co.uk, injury@sterlinghart.co.uk, immigration@sterlinghart.co.uk, wills@sterlinghart.co.uk. Complaints: complaints@sterlinghart.co.uk. All initial consultations are free.`,
  },

]
