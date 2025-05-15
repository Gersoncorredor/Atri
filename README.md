
## 🚀 Cómo arrancar el proyecto

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/tu-repositorio.git
cd tu-repositorio

npm install
npm run dev
```

## API Endpoint

### `POST /calculate`

URL de prueba local: `http://localhost:3001/calculate`

Este endpoint realiza un cálculo basado en los datos proporcionados en el cuerpo de la solicitud.

#### Ejemplo de solicitud:

```json
POST http://localhost:3001/calculate
Content-Type: application/json
{
    "operation": "+",
    "a": 2,
    "b": 2
}

Respuesta esperada:
{
  "resultado": 14
}
