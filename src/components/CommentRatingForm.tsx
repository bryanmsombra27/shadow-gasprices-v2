import { useEffect, type FC } from "react";
import { useForm, type SubmitHandler, Controller } from "react-hook-form";
import { Textarea } from "./ui/textarea";
import { Slider } from "./ui/slider";
import { Button } from "./ui/button";
import useRating from "@/hooks/useRating";
import useGetRating from "@/hooks/useGetRating";

type Inputs = {
  comments: string;
  rating: number[];
};

interface CommentRatingFormProps {
  // place: Place;
  place_id: string;
}
const CommentRatingForm: FC<CommentRatingFormProps> = ({ place_id }) => {
  const { createRating } = useRating();
  const { data } = useGetRating(place_id ?? "");

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    control,
  } = useForm<Inputs>({
    defaultValues: {
      rating: [1],
    },
  });

  useEffect(() => {
    if (data?.comment.rating) {
      setValue("rating", [data?.comment?.rating]);
    }
  }, [data]);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    createRating({
      comments: data.comments,
      place_id: place_id!,
      rating: data.rating[0],
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-5 flex flex-col gap-10 mx-auto"
    >
      <div>
        <label
          htmlFor=""
          className="mb-5 inline-block"
        >
          Dejanos saber tus comentarios al respecto
        </label>

        <Textarea
          placeholder="Ingresa tus comentarios..."
          {...register("comments", { required: true })}
          defaultValue={data?.comment.comment ?? ""}
        />
        {errors.comments && (
          <span className="text-sm text-red-500 font-semibold mt-3">
            El campo es obligatorio
          </span>
        )}
      </div>

      <div>
        <label
          htmlFor="rating"
          className="mb-5 inline-block"
        >
          Puntuación
        </label>
        <Controller
          name="rating"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <>
              <Slider
                id="rating"
                max={5}
                step={1}
                min={1}
                value={field.value}
                className="text-yellow-600"
                onValueChange={field.onChange}
              />
              <div className="flex justify-between mt-2">
                {Array.from({ length: 5 }).map((_, index) => (
                  <p
                    className={`${
                      field.value[0] == index + 1 ||
                      data?.comment.rating == index + 1
                        ? "text-yellow-500 "
                        : ""
                    }`}
                  >
                    {index + 1}
                  </p>
                ))}
              </div>
            </>
          )}
        />

        {errors.rating && (
          <span className="text-sm text-red-500 font-semibold mt-3">
            El campo es obligatorio
          </span>
        )}
      </div>
      <Button
        type="submit"
        variant="default"
        className="mt-2 cursor-pointer"
      >
        Enviar comentarios{" "}
      </Button>
    </form>
  );
};

export default CommentRatingForm;
