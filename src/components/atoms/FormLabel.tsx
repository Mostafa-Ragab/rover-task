
interface FormLabelProps {
  htmlFor: string;
  children: React.ReactNode;
}

export const FormLabel = ({ htmlFor, children }: FormLabelProps) => (
  <label
    htmlFor={htmlFor}
    className="block text-sm font-medium text-gray-400 mb-1"
  >
    {children}
  </label>
);

export default FormLabel;
