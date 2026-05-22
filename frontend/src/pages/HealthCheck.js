import React, { useEffect, useState } from "react";
import { api } from "../api/client";

export default function HealthCheck() {
  const [apiStatus, setApiStatus] = useState("проверяю…");
  const [dbStatus, setDbStatus] = useState("проверяю…");

  useEffect(() => {
    api
      .get("/health")
      .then((r) => setApiStatus(JSON.stringify(r.data)))
      .catch((e) => setApiStatus("ОШИБКА: " + e.message));

    api
      .get("/health/db")
      .then((r) => setDbStatus(JSON.stringify(r.data)))
      .catch((e) => setDbStatus("ОШИБКА: " + e.message));
  }, []);

  return (
    <div>
      <h2>Healthcheck</h2>
      <h3>API <code>GET /health</code></h3>
      <pre>{apiStatus}</pre>
      <h3>DB <code>GET /health/db</code></h3>
      <pre>{dbStatus}</pre>
    </div>
  );
}
