
import { Input } from '@/components/ui/input';
import FormLabel from '../atoms/FormLabel';

interface CardNumberInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  hasError: boolean;
}

export const CardNumberInput = ({ value, onChange, hasError }: CardNumberInputProps) => (
  <div>
    <FormLabel htmlFor="cardNumber">Card Number</FormLabel>
    <Input
      id="cardNumber"
      placeholder="Card Number"
      value={value}
      onChange={onChange}
      className={`bg-placeholder border-gray-800 text-white ${hasError && value ? 'border-red-500' : ''}`}
    />
  </div>
);

export default CardNumberInput;
