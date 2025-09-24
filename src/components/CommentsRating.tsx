import type { FC } from "react";
import { FaRegComments } from "react-icons/fa";
import CustomDialog from "./CustomDialog";
import { DialogTitle, DialogTrigger } from "@radix-ui/react-dialog";
import Login from "@/pages/Login";
import { useauthStore } from "@/store/auth";
import { CommentsRatingForm, Spinner } from ".";

interface CommentsRatingProps {
  name: string;
  place_id: string;
}
const CommentsRating: FC<CommentsRatingProps> = ({ name, place_id }) => {
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

      {authState == "autenthicated" && (
        <>
          <div className="flex flex-col mx-auto mt-5">
            <DialogTitle className="font-bold text-2xl text-center">
              gasolinera {name}
            </DialogTitle>
            <CommentsRatingForm place_id={place_id} />
          </div>
        </>
      )}
    </CustomDialog>
  );
};

export default CommentsRating;
