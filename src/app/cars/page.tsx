import prisma from '../lib/prisma';
import CarCard from '../components/CarCard';

export default async function CarsPage() {
  const cars = await prisma.car.findMany({
    where: { available: true },
  });

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Carros Disponíveis</h1>
      <div className="grid grid-cols-3 gap-4">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
}
