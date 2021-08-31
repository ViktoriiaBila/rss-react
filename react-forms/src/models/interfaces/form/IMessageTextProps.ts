interface IMessageTextProps {
  title: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error: boolean;
  errorMessage: string;
  autoComplete: boolean;
}
