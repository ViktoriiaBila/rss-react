interface ICheckboxInputProps {
  title: string;
  type: string;
  name: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error: boolean;
  errorMessage: string;
  switch: boolean;
}
