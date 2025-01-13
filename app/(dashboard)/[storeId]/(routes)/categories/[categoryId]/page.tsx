import db from "@/lib/db";
import { CategoryForm } from "./components/category-form";

const CategoryPage = async (props: { params: Promise<{ categoryId: string; storeId: string }> }) => {
  const params = await props.params;
  const category = await db.banner.findUnique({
    where: {
      id: params.categoryId,
    },
  });

  const banners = await db.banner.findMany({
    where: {
      storeId: params.storeId,
    },
  });

  return (
    <>
      <div className="flex-col">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <CategoryForm banners={banners} initialData={category} />
        </div>
      </div>
    </>
  );
};

export default CategoryPage;
