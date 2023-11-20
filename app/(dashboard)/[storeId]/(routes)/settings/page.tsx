import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";
import SettingsForm from "./components/settings-form";
interface settingsProps {
  params: {
    storeId: string;
  };
}
const Settings: React.FC<settingsProps> = async ({ params }) => {
  const { userId } = auth();
  if (!userId) {
    redirect("/sign-in");
  }
  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
      userId,
    },
  });
  if (!store) {
    redirect("/");
  }
  return (
    <div className="flex-col ">
      <section className="flex-1 space-y-4 p-8 pt-6">
        <SettingsForm initialData={store} />
      </section>
    </div>
  );
};

export default Settings;