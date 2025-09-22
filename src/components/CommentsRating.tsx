import type { FC } from "react";
import { FaRegComments } from "react-icons/fa";
import CustomDialog from "./CustomDialog";
import { DialogTrigger } from "@radix-ui/react-dialog";
import Login from "@/pages/Login";
import type { Place } from "@/interfaces/gas_station.interface";
import { useauthStore } from "@/store/auth";
import { CommentsRatingForm, Spinner } from ".";

interface CommentsRatingProps {
  place: Place;
}
const CommentsRating: FC<CommentsRatingProps> = ({ place }) => {
  const { authState } = useauthStore();

  return (
    <CustomDialog
      trigger={
        <DialogTrigger asChild>
          <FaRegComments
            size={24}
            className="cursor-pointer"
          />
        </DialogTrigger>
      }
    >
      {authState == "not-authenticated" && (
        <Login
          className="border-none shadow-none mt-2"
          isPage={false}
        />
      )}
      {authState == "authenticating" && <Spinner />}

      {authState == "autenthicated" && <CommentsRatingForm />}
    </CustomDialog>
  );
};

export default CommentsRating;
