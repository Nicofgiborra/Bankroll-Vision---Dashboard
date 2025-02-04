from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .core import routes  # Importar las rutas

app = FastAPI()

# Configuración de CORS
origins = [
    "http://localhost",
    "http://localhost:3000",
    # Agrega otros orígenes según sea necesario
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Incluir las rutas del backend
app.include_router(routes.router)

@app.get("/")
def read_root():
    return {"mensaje": "¡Hola, Mundo!"}
