interface ISelectProps {
  title: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Array<string>;
  error: boolean;
  errorMessage: string;
}
