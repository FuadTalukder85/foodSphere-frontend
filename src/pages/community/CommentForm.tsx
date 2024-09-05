import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { usePostCommentMutation } from "../../redux/features/commentApi/CommentApi";

const CommentForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [postComment] = usePostCommentMutation();
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      await postComment(data);
      reset();
    } catch (error) {
      console.error("Add comment failed:", error);
    }
  };

  return (
    <div className="mt-5">
      <div className="mt-5 flex justify-center items-center p-4 md:p-0">
        <div className="card mx-auto shrink-0 w-full shadow-xl border rounded-xl">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="md:flex justify-between gap-5 p-5"
          >
            {/* name */}
            <div className="form-control w-full">
              <input
                {...register("name", { required: true })}
                placeholder="Type your name here.."
                className="w-full bg-white border py-1 px-3 focus:outline-none"
              />
              {errors.name && (
                <small className="text-red-500 text-left">
                  Please enter Your name
                </small>
              )}
            </div>
            {/* comment */}
            <div className="form-control w-full mt-5 md:mt-0">
              <input
                {...register("comment", { required: true })}
                placeholder="Type your comment here.."
                className="w-full bg-white border py-1 px-3 focus:outline-none"
              />
              {errors.comment && (
                <small className="text-red-500 text-left">
                  Please enter Comment
                </small>
              )}
            </div>
            {/* img */}
            <div className="form-control w-full mt-5 md:mt-0">
              <input
                {...register("image", { required: true })}
                placeholder="Image here"
                className="w-full bg-white border py-1 px-3 focus:outline-none"
              />
              {errors.image && (
                <small className="text-red-500 text-left">
                  Please enter Image
                </small>
              )}
            </div>

            <div className="form-control mt-5 md:mt-0">
              <button
                type="submit"
                className="bg-[#00715D] hover:bg-[#FFB606] transition-all text-white tracking-widest font-bold rounded py-2 px-5"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CommentForm;
