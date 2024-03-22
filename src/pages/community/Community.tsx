import handImg from "../../../src/assets/img/communityImg/handImg.png";
import Container from "../../components/container/Container";
import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";
const Community = () => {
  return (
    <div>
      <div className="bg-[#ffca4d] py-11">
        <Container>
          <h1 className="text-5xl font-bold text-white text-center">
            GRATITUDE WALL
          </h1>
          <div className="md:flex md:gap-48 items-center p-4 md:p-0">
            <div className="text-[#00715D] mt-5">
              <p>We wanted to create a way people could connect again.</p>
              <p className="max-w-[85ch]">
                Something that doesn,t dismiss what we have struggled with but
                gives us the opportunity to express gratitude for what we do
                have.
              </p>
              <p className="mt-5">So, we’re creating a Wall of Gratitude.</p>
              <p className="">
                A space to acknowledge, share and embrace kindness.
              </p>
              <p className="mt-5">
                When you practice appreciation, your brain will be programmed to
                look out for more things to appreciate.
              </p>
              <p className="">
                So write a love note to someone. Share a happy memory. Express
                gratitude for the small things.
              </p>
            </div>
            <div>
              <img src={handImg} alt="" />
            </div>
          </div>
          {/* post comment */}
          <div>
            <h1 className="mt-11 text-2xl text-center text-[#00715D] font-semibold">
              Post your <span className="text-white">comment..</span>
            </h1>
            <CommentForm></CommentForm>
          </div>
        </Container>
      </div>
      <CommentCard></CommentCard>
    </div>
  );
};

export default Community;
