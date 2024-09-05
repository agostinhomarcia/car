export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-5xl font-bold">Bem-vindo à Car Rental</h1>
      <p className="mt-4 text-lg">Reserve o carro perfeito para sua viagem!</p>
      <a href="/cars" className="mt-6 bg-blue-500 text-white px-4 py-2 rounded">
        Ver Carros Disponíveis
      </a>
    </div>
  );
}
