type CarProps = {
    car: {
      id: number;
      model: string;
      brand: string;
      price: number;
    };
  };
  
  const CarCard = ({ car }: CarProps) => (
    <div className="border p-4 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold">{car.model} - {car.brand}</h2>
      <p>Preço: R$ {car.price} / dia</p>
      <a href={`/cars/${car.id}`} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg block text-center">
        Ver Detalhes
      </a>
    </div>
  );
  
  export default CarCard;
  