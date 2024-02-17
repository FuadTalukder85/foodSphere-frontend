import { useQuery } from "@tanstack/react-query";

const useSupply = () => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["all-supplies"],
    queryFn: () => {
      return fetch("http://localhost:5000/all-supplies").then((res) =>
        res.json()
      );
    },
  });
  return { data, isLoading, refetch };
};

export default useSupply;
