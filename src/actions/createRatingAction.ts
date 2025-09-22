import { gasapi } from "@/lib/axios";

export interface CreateRating {
  place_id: string;
  comments: string;
  rating: number;
}

export const createRatingAction = async (body: CreateRating) => {
  const { data } = await gasapi.post("/ratings", {
    place_id: body.place_id,
    comments: body.comments,
    rating: body.rating,
  });

  return data;
};
