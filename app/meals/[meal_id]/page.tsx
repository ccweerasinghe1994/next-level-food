export default async function Meal({
  params,
}: {
  params: Promise<{ meal_id: string }>;
}) {
  const { meal_id } = await params;

  return (
    <main className="">
      <h1>Meal {meal_id}</h1>
    </main>
  );
}
