import { ReactNode } from "react";

const DashboardContainer = ({ children }: { children: ReactNode }) => {
  return <div className="max-w-[1920px] mx-auto">{children}</div>;
};

export default DashboardContainer;
