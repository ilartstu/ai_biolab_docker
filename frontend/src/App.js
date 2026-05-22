import React from "react";
import HealthCheck from "./pages/HealthCheck";

export default function App() {
  return (
    <div style={{ maxWidth: 800, margin: "40px auto", padding: 24 }}>
      <h1>ai-biolab.ru — новая архитектура</h1>
      <p>
        Заглушка фронта (CRA). Сюда будет перенесён код из{" "}
        <code>CODE/ORIGINAL/new-covid-main/</code>: 130+ роутов, страницы Modeling /
        ModelingSEIR_HCD / The_spread_of_epidemics / Covid / Tub, статические страницы,
        новости и конференции.
      </p>
      <HealthCheck />
    </div>
  );
}
