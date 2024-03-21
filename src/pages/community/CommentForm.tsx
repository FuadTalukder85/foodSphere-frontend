import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { usePostCommentMutation } from "../../redux/features/commentApi/CommentApi";

const CommentFotm = () => {
  const { register, handleSubmit, reset } = useForm();
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
    <div className="mt-11">
      <div className="mt-5 flex justify-center items-center">
        <div className="card mx-auto shrink-0 md:w-full shadow-xl border rounded-xl">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex justify-between gap-5 p-5"
          >
            {/* name */}
            <div className="form-control w-full">
              <input
                {...register("name")}
                placeholder="type your name here.."
                className="w-full bg-white border py-1 px-3"
              />
            </div>
            {/* comment */}
            <div className="form-control w-full">
              <input
                {...register("comment")}
                placeholder="type your comment here.."
                className="w-full bg-white border py-1 px-3"
              />
            </div>
            {/* img */}
            <div className="form-control w-full">
              <input
                {...register("image")}
                placeholder="your image here.."
                className="w-full bg-white border py-1 px-3"
              />
            </div>

            <div className="form-control">
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

export default CommentFotm;
