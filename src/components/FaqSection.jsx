import FaqItem from "./FaqItem";

const faqs = [
  {
    question: "Are your products safe for newborns?",
    answer:
      "Yes, all our products are dermatological tested and made with gentle, non-toxic ingredients that are safe for newborns and sensitive skin.",
  },
   {
    question: "How long does delivery take?",
    answer:
      "Our standard delivery timeline is 3 to 5 working days. You'll receive a confirmation email with tracking once your order is dispatched.",
  },
  {
    question: "Can I return or exchange a product?",
    answer:
      "Certainly! We allow returns and exchanges within 7 days of delivery, provided the item is unused and in its original packaging.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We support payments via credit/debit cards, UPI, net banking, and digital wallets including PhonePe, Google Pay, and Paytm.",
  },
  {
    question: "Are your skincare products organic or natural?",
    answer:
      "Yes, our skincare products are crafted with nature-derived ingredients and are certified organic, ensuring purity and safety for all skin types.",
  },
];


export default function FaqSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        Frequently Asked Questions
      </h2>
      <p className="text-center text-2xl text-gray-600 mb-8">
        We’re Here to Help – Every Step of the Way
      </p>

      {faqs.map((faq, index) => (
        <FaqItem
          key={index}
          question={faq.question}
          answer={faq.answer}
        />
      ))}
    </section>
  );
}
