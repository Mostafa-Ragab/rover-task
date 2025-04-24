import React from 'react';
import { usePaymentFormContext } from '@/contexts/PaymentFormContext';
import CreditCardIcon from '../atoms/CreditCardIcon';

export const CreditCardDisplay = () => {
  const { cardNumber, expiration, cvv, isCardFlipped } = usePaymentFormContext();

  return (
    <div className="md:col-span-5 flex flex-col justify-center md:justify-center items-center gap-20 perspective-1000">
      <div
        className={`w-full max-w-[354px] transition-transform duration-700 transform-style-preserve-3d ${isCardFlipped ? 'rotate-y-180' : ''}`}
      >
<div className="w-full aspect-[1.586] bg-gradient-to-br from-[#6e41a6] via-[#f3bfbf] to-[#f9edc1c5] rounded-xl shadow-lg p-6 flex flex-col justify-between">          <div className="flex justify-between items-start">
            <div className="text-sm font-light text-white/70">Credit Card</div>
            <CreditCardIcon />
          </div>
          <div className="space-y-4">
            <div className="text-xl tracking-widest font-mono text-white">
              {cardNumber || '•••• •••• •••• ••••'}
            </div>
            <div className="flex justify-between items-center">
              <div className="text-xs text-white/80">
                <div className="uppercase mb-1">Valid thru</div>
                <div>{expiration || 'MM/YY'}</div>
              </div>
              <div className="text-xs text-white/80">
                <div className="uppercase mb-1">CVV</div>
                <div>{isCardFlipped ? cvv || '•••' : '•••'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <p className="text-2xl text-brand text-center max-w-sm leading-relaxed font-light">
      To confirm your appointment please provide some additional information</p>
    </div>
  );
};

export default CreditCardDisplay;