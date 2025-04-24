
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
            className={`rounded-full px-8 transition-all ${isFormValid() ? 'bg-white text-black hover:bg-gray-200' : 'bg-gray-600 text-gray-400 cursor-not-allowed'}`}
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
