import Container from "../../components/container/Container";
import { motion } from "framer-motion";

import { useGetcommentQuery } from "../../redux/features/commentApi/CommentApi";
import { useEffect } from "react";

const CommentCard = () => {
  const { data, isLoading, refetch } = useGetcommentQuery(undefined);

  useEffect(() => {
    const intervalId = setInterval(() => {
      refetch();
    }, 1000);

    return () => clearInterval(intervalId);
  }, [refetch]);

  if (isLoading) {
    return <></>;
  }
  return (
    <Container>
      <div className="md:grid grid-cols-12 justify-between gap-5 mt-10">
        {data?.map((commentData: any) => (
          <div key={commentData._id} className="col-span-3 border p-3">
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
              <p>{commentData.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default CommentCard;
