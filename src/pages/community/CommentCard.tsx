import Container from "../../components/container/Container";
import { motion } from "framer-motion";

import { useGetcommentQuery } from "../../redux/features/commentApi/CommentApi";

const CommentCard = () => {
  const { data, isLoading } = useGetcommentQuery(undefined);

  if (isLoading) {
    return <></>;
  }
  return (
    <Container>
      <div className="grid grid-cols-12 justify-between gap-5 mt-10">
        {data.map((commentData) => (
          <div className="col-span-3 border p-3">
            <div>
              <h3 className="text-[#00715D] font-semibold">
                Post by : {commentData.name}
              </h3>
              <motion.img
                whileHover={{
                  opacity: 1,
                  scale: 1.03,
                  transition: {
                    duration: 0.3,
                    ease: [0, 0.71, 0.2, 1.01],
                    scale: {
                      type: "spring",
                      damping: 5,
                      stiffness: 100,
                      restDelta: 0.001,
                    },
                  },
                }}
                className="mt-3 border border-y-[#FFB606] shadow-2xl"
                src={commentData.image}
                alt=""
              ></motion.img>
            </div>
            <div className="mt-5">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt, facere! Nihil laboriosam eaque nostrum eum accusamus
                sequi voluptates dignissimos dolor voluptatum, suscipit dicta
                fugiat labore nesciunt porro temporibus, delectus dolore.
              </p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default CommentCard;
