import type { FC } from "react";
import { FaRegComments } from "react-icons/fa";
import CustomDialog from "./CustomDialog";
import { DialogTitle, DialogTrigger } from "@radix-ui/react-dialog";
import Login from "@/pages/Login";
import type { GasStation, Place } from "@/interfaces/gas_station.interface";
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

      {authState == "autenthicated" && (
        <>
          <div className="flex flex-col mx-auto mt-5">
            <DialogTitle className="font-bold text-2xl text-center">
              gasolinera {place.name}
            </DialogTitle>
            <CommentsRatingForm place={place} />
          </div>
        </>
      )}
    </CustomDialog>
  );
};

export default CommentsRating;
