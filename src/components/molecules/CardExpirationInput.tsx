
import { Input } from '@/components/ui/input';
import FormLabel from '../atoms/FormLabel';

interface CardExpirationInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  hasError: boolean;
}

export const CardExpirationInput = ({ value, onChange, hasError }: CardExpirationInputProps) => (
  <div>
    <FormLabel htmlFor="expiration">Expiration</FormLabel>
    <Input
      id="expiration"
      placeholder="MM/YY"
      value={value}
      maxLength={5}
      onChange={onChange}
      className={`bg-gray-900 border-gray-800 text-white ${hasError && value ? 'border-red-500' : ''}`}
    />
  </div>
);

export default CardExpirationInput;
