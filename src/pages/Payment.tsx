import React from 'react';
import StepProgressBar from '@/components/molecules/StepProgressBar';
import CreditCardDisplay from '@/components/organisms/CreditCardDisplay';
import PaymentForm from '@/components/organisms/PaymentForm';
import { PaymentFormProvider } from '@/contexts/PaymentFormContext';

const Payment = () => {
  return (
    <PaymentFormProvider>
      <div className="min-h-screen flex flex-col bg-black text-white">
        {/* Header */}
        <div className="w-full  lg:max-w-3xl lg:pr-8 mx-auto  px-4 pt-20">
          <h1 className="text-3xl text-[#D0D7FFE3] font-light lg:text-right text-center">
            Payment Information
          </h1>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 mt-10 flex items-center justify-center px-4 w-full">
          <div className="w-full max-w-7xl flex flex-col justify-evenly lg:flex-row gap-16">
            {/* Card Column */}
            <div className="w-full lg:w-4/12 flex justify-center lg:justify-end">
              <CreditCardDisplay />
            </div>

            {/* Form Column */}
            <div className="w-full lg:justify-start lg:w-4/12">
              <PaymentForm />
            </div>
          </div>
        </div>

        {/* Step Progress Footer */}
        <div className="py-8 px-4">
          <StepProgressBar />
        </div>
      </div>
    </PaymentFormProvider>
  );
};

export default Payment;
