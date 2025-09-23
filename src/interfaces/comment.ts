export interface CommentRatingResponse {
  comment: Comment;
}

export interface Comment {
  id: string;
  userId: string;
  gasStationId: string;
  comment: string;
  rating: number;
  createdAt: Date;
  updatedAt: Date;
}
