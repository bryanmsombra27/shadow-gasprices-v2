import type { FC } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface CustomAlertProps {
  title: string;
  content: string;
}
const CustomAlert: FC<CustomAlertProps> = ({ content, title }) => {
  return (
    <Alert variant="destructive">
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{content}</AlertDescription>
    </Alert>
  );
};

export default CustomAlert;
