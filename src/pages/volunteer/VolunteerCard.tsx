import { useEffect } from "react";
import Container from "../../components/container/Container";
import { motion } from "framer-motion";

import { useGetVolunteerQuery } from "../../redux/features/volunteerApi/VolunteerApi";

const VolunteerCard = () => {
  const { data, isLoading, refetch } = useGetVolunteerQuery(undefined);

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
        {data.map((volunteerData: any) => (
          <div key={volunteerData._id} className="col-span-4 border p-3">
            <div>
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
                src={volunteerData.image}
                alt=""
              ></motion.img>
              <h3 className="text-2xl text-[#00715D] font-semibold mt-5">
                {volunteerData.firstName} {volunteerData.lastName}
              </h3>
              <p className="mt-2">~ Volunteer</p>
            </div>
            <div className="mt-5">
              <p className="truncate volunteerDescription">
                {volunteerData.description}
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="bg-[#FFB606] text-white px-6 py-2 rounded-lg mt-6 font-bold"
            >
              Read more
            </motion.button>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default VolunteerCard;
