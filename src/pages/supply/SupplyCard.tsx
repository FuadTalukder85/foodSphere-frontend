import { Link } from "react-router-dom";
import { useGetSuppliesQuery } from "../../redux/features/supplyAppi/SupplyApi";
import { motion } from "framer-motion";

const SupplyCard = () => {
  const { data, isLoading } = useGetSuppliesQuery(undefined);

  if (isLoading) {
    return <></>;
  }
  return (
    <>
      {data?.slice(0, 8).map((supplyData: any) => (
        <div
          key={supplyData._id}
          className="col-span-6 md:col-span-3 mx-auto p-1 md:p-0 shadow-xl"
        >
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
            className="border border-y-[#FFB606] shadow-2xl"
            src={supplyData.image}
            alt=""
          ></motion.img>
          <div className="mt-8">
            <h3 className="text-[#FFB606] text-xl font-semibold text-center">
              {supplyData.title}
            </h3>
            <div className="mt-3 text-center">
              <div>
                <h3 className="text-md text-[#00715D] font-bold">
                  Category:{" "}
                  <span className="text-[#FFB606]">{supplyData.category}</span>
                </h3>
                <h3 className="text-mg text-[#00715D] font-bold">
                  Quantity:
                  <span className="text-[#FFB606]"> {supplyData.quantity}</span>
                </h3>
              </div>
              <div className="flex justify-center items-center mt-5">
                <button className="border-2 border-[#FFB606] text-[#00715D] font-semibold px-3 py-1 rounded-md mb-3 md:mb-0">
                  <Link to={`${supplyData._id}`}>View Detail</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SupplyCard;
