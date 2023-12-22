// src/server.ts
import { apiDocPath, app } from "./app";

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
  console.log(`Swagger UI available at: http://localhost:${port}${apiDocPath}`)
}
);