import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "How can I improve my typing speed?",
    answer:
      "You can improve your typing speed by practicing regularly with our typing practice mode. Track your progress and aim for consistency.",
    value: "item-1",
  },
  {
    question: "What is the Typing Race feature?",
    answer:
      "The Typing Race allows you to compete against other users in real time. Type the given text accurately and quickly to win the race.",
    value: "item-2",
  },
  {
    question: "Do I need to sign up to race?",
    answer:
      "Yes, you need to sign up to participate in races. This allows us to save your race statistics and provide leaderboards.",
    value: "item-3",
  },
  {
    question: "Can I create a race and invite others to my race?",
    answer:
      "Absolutely! You can create a custom race and invite your friends or other users to compete with you.",
    value: "item-4",
  },
  {
    question: "Is this typing test free to use?",
    answer:
      "Yes! All our features, including practice mode and typing races, are completely free to use.",
    value: "item-5",
  },
  {
    question: "Do I need to sign up to use the platform?",
    answer:
      "No, you can start typing right away without signing up. However, creating an account will allow you to save your stats and track progress.",
    value: "item-6",
  },
  {
    question: "Can I see my typing statistics?",
    answer:
      "Absolutely! Your typing speed (WPM), accuracy, and progress are tracked in real time. View them at the end of each test.",
    value: "item-7",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion type="single" collapsible className="w-full AccordionRoot">
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          rel="noreferrer noopener"
          href="#"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};
