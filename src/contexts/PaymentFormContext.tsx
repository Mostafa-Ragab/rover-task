import React, { createContext, useContext, useState } from 'react';
import { validateCardNumber, validateExpiration, validateCVV } from '@/lib/validation';

interface PaymentFormContextType {
  cardNumber: string;
  expiration: string;
  cvv: string;
  isCardFlipped: boolean;
  formErrors: {
    cardNumber: boolean;
    expiration: boolean;
    cvv: boolean;
  };
  handleCardNumberChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleExpirationChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCVVChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCVVFocus: () => void;
  handleCVVBlur: () => void;
  isFormValid: () => boolean;
  handleSubmit: () => void;
}

const PaymentFormContext = createContext<PaymentFormContextType | undefined>(undefined);

export const PaymentFormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiration, setExpiration] = useState('');
  const [cvv, setCvv] = useState('');
  const [isCardFlipped, setIsCardFlipped] = useState(false);
  const [formErrors, setFormErrors] = useState({
    cardNumber: false,
    expiration: false,
    cvv: false,
  });

  const formatCardNumber = (value: string) => {
    const digitsOnly = value.replace(/\D/g, '');
    let formatted = '';
    for (let i = 0; i < digitsOnly.length && i < 16; i++) {
      if (i > 0 && i % 4 === 0) {
        formatted += ' ';
      }
      formatted += digitsOnly[i];
    }
    return formatted;
  };

  const formatExpiration = (value: string) => {
    const digitsOnly = value.replace(/\D/g, '').slice(0, 4);
    if (digitsOnly.length >= 3) {
      return `${digitsOnly.slice(0, 2)}/${digitsOnly.slice(2, 4)}`;
    } else if (digitsOnly.length === 2) {
      return `${digitsOnly}/`;
    }
    return digitsOnly;
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCardNumber(e.target.value);
    setCardNumber(formatted);
    setFormErrors(prev => ({ ...prev, cardNumber: !validateCardNumber(formatted) }));
  };

  const handleExpirationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatExpiration(e.target.value);
    setExpiration(formatted);
    const isValid = validateExpiration(formatted);
    setFormErrors(prev => ({ ...prev, expiration: !isValid }));
    if (!isValid) {
      console.warn("Invalid expiration date format. Please use MM/YY");
    }
  };

  const handleCVVChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 3);
    setCvv(value);
    setFormErrors(prev => ({ ...prev, cvv: !validateCVV(value) }));
  };

  const handleCVVFocus = () => {
    setIsCardFlipped(true);
  };

  const handleCVVBlur = () => {
    setIsCardFlipped(false);
  };

  const isFormValid = () => {
    return validateCardNumber(cardNumber) && validateExpiration(expiration) && validateCVV(cvv);
  };

  const handleSubmit = () => {
    if (isFormValid()) {
      console.log('Form submitted with:', { cardNumber, expiration, cvv });
    }
  };

  const value = {
    cardNumber,
    expiration,
    cvv,
    isCardFlipped,
    formErrors,
    handleCardNumberChange,
    handleExpirationChange,
    handleCVVChange,
    handleCVVFocus,
    handleCVVBlur,
    isFormValid,
    handleSubmit,
  };

  return (
    <PaymentFormContext.Provider value={value}>
      {children}
    </PaymentFormContext.Provider>
  );
};

export const usePaymentFormContext = () => {
  const context = useContext(PaymentFormContext);
  if (context === undefined) {
    throw new Error('usePaymentFormContext must be used within a PaymentFormProvider');
  }
  return context;
};
