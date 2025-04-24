
import { Input } from '@/components/ui/input';
import FormLabel from '../atoms/FormLabel';

interface CardCVVInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus: () => void;
  onBlur: () => void;
  hasError: boolean;
}

export const CardCVVInput = ({ value, onChange, onFocus, onBlur, hasError }: CardCVVInputProps) => (
  <div>
    <FormLabel htmlFor="cvv">CVV/CVC</FormLabel>
    <Input
      id="cvv"
      placeholder="___"
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      className={`bg-placeholder border-gray-800 text-white ${hasError && value ? 'border-red-500' : ''}`}
      maxLength={3}
    />
  </div>
);

export default CardCVVInput;
