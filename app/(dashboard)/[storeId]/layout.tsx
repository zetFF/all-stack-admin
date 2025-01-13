import Navbar from "@/components/navbar";
import db from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardLayout(
  props: {
    children: React.ReactNode;
    params: Promise<{ storeId: string }>;
  }
) {
  const params = await props.params;

  const {
    children
  } = props;

  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const storeId = params.storeId;
  const store = await db.store.findFirst({
    where: {
      id: storeId,
      userId,
    },
  });


  if (!store) {
    redirect("/");
  }

  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
