import { type FC, type ReactNode } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface CustomDialogProps {
  trigger: ReactNode;
  children: ReactNode;
}
const CustomDialog: FC<CustomDialogProps> = ({ children, trigger }) => {
  return (
    <Dialog>
      {trigger}
      <DialogContent className="flex">{children}</DialogContent>
    </Dialog>
  );
};

export default CustomDialog;
