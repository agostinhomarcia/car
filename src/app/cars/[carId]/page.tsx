import prisma from '../../lib/prisma';

export default async function CarDetailPage({ params }: { params: { carId: string } }) {
  const car = await prisma.car.findUnique({
    where: { id: parseInt(params.carId) },
  });

  if (!car) {
    return <div>Carro não encontrado</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">{car.model} - {car.brand}</h1>
      <p>Preço: R$ {car.price} / dia</p>
      {/* Formulário de reserva aqui */}
    </div>
  );
}
