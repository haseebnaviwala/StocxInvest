import Year2023 from './images/stocXinvest Accounts June 2023.pdf'
import Year2024 from './images/Stocxinvest Accounts 2023-2024 PSX.pdf'
import Year2025 from './images/Audited Account 2024-2025_optimized.pdf'
import CommonTermsEnglish from './images/Common Terms Of Share Market English.pdf'
import CommonTermsUrdu from './images/Common Terms Of Share Market Urdu.pdf'
import PsxRuleEnglish from './images/PSX-Rule Book.pdf'
import PsxRuleUrdu from './images/PSX_RuleBook-Urdu.pdf'
import Disclaimer from './images/SECP_Investor_Guide.pdf'
import ProcedureCancel from './images/Procedure To Cancel Pending Orders.pdf'
import Flowchart from './images/Flowchart.pdf'
import OrderSettlement from './images/Order Settlement Flow.pdf'
import Arbitration from './images/Arbitration Procedure - Stocxinvest.pdf'
import RiskDisclosure from './images/Risk Disclosure Document - Stocxinvest.pdf'
import UserManualGuide from './images/TRADE CAST USER MANUAL(Version 1.1).pdf'
import SLA from './images/img-Y10160459-0001.pdf'
import TermsConditions from './images/973 terms and conditions.pdf'
import ProductCompliance from './images/Product Compliance - Eclear.pdf'

export const modalData = {
  associated_companies: [
    { heading: "Details Of Associated Companies", description: ["Nil"] },
  ],
  homepage_popup: [
    {
      heading: "⚠️ Beware of Fraudulent Schemes Misusing the Name of StocXinvest Securities Pvt Limited",
      description: [
        "Fraudulent individuals and entities may misuse the identity of StocXinvest Securities Pvt Limited or falsely impersonate its directors or executives to deceive the public through unauthorized communication channels, fake profiles, and misleading information.",
        "We strongly advise our clients and the general public to exercise caution and remain vigilant against such scams.",
        "Please note:",
         "StocXinvest Securities Pvt Limited has no affiliation with any unofficial pages, profiles, apps, or WhatsApp numbers.",
         "We never request OTPs, personal information, funds, or investments through unofficial platforms.",
         "All communication from StocXinvest Securities Pvt Limited is conducted only through our official phone numbers, website, email, social media handles through official representatives.",
         <br />,
        "For your safety:",
         "Always verify the authenticity of any communication before engaging.",
         "Make sure that you are dealing with licensed entities and registered professionals by conducting research from the PSX and SECP websites.",
         "Regularly visit SECP, PSX, CDC, and NCCPL websites for authentic updates.",
         "Transact only through official banking channels linked to licensed brokers.",
         "In case of any ambiguity it is recommended to contact and verify the information through our official representatives.",
        "Official Channels:",
          <p>Website: <a href="https://www.stocxinvest.com" target="_blank" rel="noreferrer">www.stocxinvest.com</a></p> ,
        <p>Email: <a href="mailto:info@stocxinvest.com">info@stocxinvest.com</a></p>,
        <p>Helpline: <a href="tel:03162288686">0316 2288686</a></p>,
      ],
    },
  ],
  advisors: [
    {
      heading: "Statutory Auditors & Legal Advisor",
      description: [
        "M/s Parker Russell-A.J.S.",
        "Chartered Accountants,",
        "Mr. Khurram Lakhani",
        "M/s Lakhani Law Associates",
      ],
    },
  ],
  services: [
    {
      heading: "Services",
      description: [
        "Under the Securities Broker license, the Company is mandated to offer securities brokerage services to local and foreign clients comprising of High Networth Individuals (HNWIs) and Corporates including Companies, Employees Benefit Trust Schemes and other Non-Profit Organizations. The Company provides to its clients PSX’s online trading platform “KITS” application for trading via Smart Phones, Personal Computers and Laptops. KITS is Pakistan Stock Exchange online stock trading system which offers real time stock trading, market watch, portfolio information on hand-held / internet trading Interface.",
      ],
    },
  ],
  agents: [
    {
      heading: "Registered Agents",
      description: ["The Company has no registered agents."],
    },
  ],
  statutory: [
    {
      heading: "Statutory Auditor Details",
      description: [
        "Category B of SBP Panel of Auditors",
        "M/s Parker Russell-A.J.S.",
        "Chartered Accountants",
        "901, Q.M. House, Elander Road",
        "Karachi, Pakistan",
        "Tel: +92-21-32621701-03",
        "E-mail: khi@parkerrussellajs.com.pk",
      ],
    },
  ],
  investors: [
    {
      heading: "Pending Investor Complaints",
      description: ["Nil"],
    },
  ],
  penal_action: [
    {
      heading:
        "Details of penal action taken by Exchanges & SECP against the brokerage firms",
      description: ["Nil"],
    },
  ],
  annual: [
    {
      heading:
        "Annual / Half Yearly / Quarterly Financials",
      description: [
        <a href={Year2023} target='_blank' rel='noreferrer'>Accounts for the year 2023</a>,
        <a href={Year2024} target='_blank' rel='noreferrer'>Accounts for the year 2024</a>,
        <a href={Year2025} target='_blank' rel='noreferrer'>Accounts for the year 2025</a>,
      ],
    },
  ],
  common_terms: [
    {
      heading:
        "Common Terms Of Share Market",
      description: [
        <a href={CommonTermsEnglish} target='_blank' rel='noreferrer'>Common Terms of Share Market English</a>,
        <a href={CommonTermsUrdu} target='_blank' rel='noreferrer'>Common Terms of Share Market Urdu</a>,
      ],
    },
  ],
  psx_rule_book: [
    {
      heading:
        "PSX Rule Book",
      description: [
        <a href={PsxRuleEnglish} target='_blank' rel='noreferrer'>PSX Rule Book English</a>,
        <a href={PsxRuleUrdu} target='_blank' rel='noreferrer'>PSX Rule Book Urdu</a>,
      ],
    },
  ],
  disclaimer: [
    {
      heading:
        "SECP Investor Guide",
      description: [
        <a href={Disclaimer} target='_blank' rel='noreferrer'>Investor Guide By SECP</a>,
      ],
    },
  ],
  procedure_cancel_orders: [
    {
      heading:
        "Procedure To Cancel Pending Orders",
      description: [
        <a href={ProcedureCancel} target='_blank' rel='noreferrer'>Procedure To Cancel Pending Orders</a>,
      ],
    },
  ],
  flowchart: [
    {
      heading:
        "Online Order Execution Flow",
      description: [
        <a href={Flowchart} target='_blank' rel='noreferrer'>Online Order Execution Flow</a>,
      ],
    },
  ],
  order_settlement_flow: [
    {
      heading:
        "Order Settlement Flow",
      description: [
        <a href={OrderSettlement} target='_blank' rel='noreferrer'>Order Settlement Flow</a>,
      ],
    },
  ],
  arbitration: [
    {
      heading:
        "Arbitration Procedure",
      description: [
        <a href={Arbitration} target='_blank' rel='noreferrer'>Arbitration Procedure</a>,
      ],
    },
  ],
  risk_disclosure: [
    {
      heading:
        "Risk Disclosure Document",
      description: [
        <a href={RiskDisclosure} target='_blank' rel='noreferrer'>Risk Disclosure Document</a>,
      ],
    },
  ],
  user_manual: [
    {
      heading:
        "Trade Cast User Manual",
      description: [
        <a href={UserManualGuide} target='_blank' rel='noreferrer'>Trade Cast User Manual</a>,
      ],
    },
  ],
  ncb: [
    {
      heading: "NCB Auditors Details along with NCB for last five years",
      description: ["Not applicable on Trading Only Securities Broker."],
    },
  ],
  sla: [
    {
      heading:
        "Service Level Agreement",
      description: [
        <a href={SLA} target='_blank' rel='noreferrer'>Service Level Agreement</a>,
      ],
    },
  ],
  terms_and_conditions: [
    {
      heading:
        "Online terms and conditions",
      description: [
        <a href={TermsConditions} target='_blank' rel='noreferrer'>Online terms and conditions</a>,
      ],
    },
  ],
  product_compliance: [
    {
      heading:
        "Product Compliance",
      description: [
        <a href={ProductCompliance} target='_blank' rel='noreferrer'>Product Compliance</a>,
      ],
    },
  ],
};
