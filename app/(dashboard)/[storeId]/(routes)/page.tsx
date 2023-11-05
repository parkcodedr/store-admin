import prismadb from "@/lib/prismadb";
import React from "react";
interface DashboardProps {
  params: { storeId: string };
}

const Dashboard: React.FC<DashboardProps> = async ({ params }) => {
  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
    },
  });
  return <div>active store: {store?.name}</div>;
};

export default Dashboard;
