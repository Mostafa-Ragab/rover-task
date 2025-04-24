
import React from 'react';
import { Button } from '@/components/ui/button';
import CardNumberInput from '../molecules/CardNumberInput';
import CardExpirationInput from '../molecules/CardExpirationInput';
import CardCVVInput from '../molecules/CardCVVInput';
import PaymentAccordion from './PaymentAccordion';
import { usePaymentFormContext } from '@/contexts/PaymentFormContext';

export const PaymentForm = () => {
  const {
    cardNumber,
    expiration,
    cvv,
    formErrors,
    handleCardNumberChange,
    handleExpirationChange,
    handleCVVChange,
    handleCVVFocus,
    handleCVVBlur,
    isFormValid,
    handleSubmit,
  } = usePaymentFormContext();

  return (
    <div className="md:col-span-5 ">
     
      
      <div className="space-y-6 mb-24">
        <CardNumberInput
          value={cardNumber}
          onChange={handleCardNumberChange}
          hasError={formErrors.cardNumber}
        />
        
        <div className="grid grid-cols-2 gap-6">
          <CardExpirationInput
            value={expiration}
            onChange={handleExpirationChange}
            hasError={formErrors.expiration}
          />
          
          <CardCVVInput
            value={cvv}
            onChange={handleCVVChange}
            onFocus={handleCVVFocus}
            onBlur={handleCVVBlur}
            hasError={formErrors.cvv}
          />
        </div>
        
        <div className="flex justify-center mt-6">
        <Button
    onClick={handleSubmit}
    disabled={!isFormValid()}
    className={`rounded-full px-10 h-12 w-28 text-sm font-medium transition-all bg-gradient-to-b from-[#161616] to-[#67666666] text-white cursor-not-allowed ${
      isFormValid()
        ? ''
        : 'bg-gradient-to-b from-[#161616] to-[#67666666] text-white cursor-not-allowed'
    }`}
  >
    Continue
  </Button>
        </div>
        
      </div>
      <PaymentAccordion />

    </div>
  );
};

export default PaymentForm;
