import Relogio from "./components/relogio";

export default function Home() {
  return (
    <div className="Relogio">
      <h1>Relógio Digital</h1>
      <div className="hora">
        <Relogio />
      </div>
    </div>
  );
}
