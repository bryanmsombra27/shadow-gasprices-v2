import type { CommentRatingResponse } from "@/interfaces/comment";
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

export const getRatingAction = async (
  gasSation: string
): Promise<CommentRatingResponse> => {
  const { data } = await gasapi.get<CommentRatingResponse>(
    `/ratings/comment?gas_station=${gasSation}`
  );

  return data;
};
