
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CircleChevronDown } from 'lucide-react';

export const PaymentAccordion = () => (
  <div className="mt-8 space-y-2">
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1" className="border-b border-gray-800">
        <AccordionTrigger className="text-sm text-gray-400 py-4 hover:no-underline">
          Why do you need my card?
        </AccordionTrigger>
        <AccordionContent className="text-gray-400 pb-4">
          We require your card information to hold your appointment spot. You won't be charged 
          unless you miss your appointment or cancel with less than 24 hours' notice. This helps 
          us ensure that our service providers' time is respected.
        </AccordionContent>
      </AccordionItem>
      
      <AccordionItem value="item-2" className="border-b border-gray-800">
        <AccordionTrigger className="text-sm text-gray-400 py-4 hover:no-underline">
          How might you use my card in the future?
        </AccordionTrigger>
        <AccordionContent className="text-gray-400 pb-4">
          Your card information will be securely stored for future appointments and services. 
          We may use it to process payments for services rendered, late cancellation fees, 
          or no-show fees as outlined in our policies. You can request removal of your card 
          information at any time.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
);

export default PaymentAccordion;
