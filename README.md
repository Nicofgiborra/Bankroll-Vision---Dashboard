# Bankroll Vision - Dashboard

## Descripción del Proyecto

Bankroll Vision - Dashboard es una aplicación web que proporciona un panel de control para gestionar y visualizar datos financieros. El proyecto consta de un frontend desarrollado con React y un backend construido con FastAPI.

## Estructura del Proyecto

```
Bankroll Vision - Dashboard/
├── backend/               # Código del backend
│   ├── core/              # Módulos principales del backend
│   └── alembic/           # Migraciones de base de datos
├── frontend/              # Código del frontend
│   ├── public/            # Archivos estáticos
│   └── src/               # Código fuente React
├── .eslintrc.json         # Configuración de ESLint
├── package.json           # Dependencias del frontend
├── package-lock.json      # Versiones exactas de dependencias
└── README.md              # Este archivo
```

## Requisitos del Sistema

- Node.js (v16 o superior)
- Python (v3.9 o superior)
- PostgreSQL (v12 o superior)

## Instalación

1. Clonar el repositorio
2. Instalar dependencias del frontend:
   ```bash
   cd frontend
   npm install
   ```
3. Configurar el backend:
   ```bash
   cd ../backend
   pip install -r requirements.txt
   ```

## Ejecución

1. Iniciar el backend:
   ```bash
   cd backend
   uvicorn main:app --reload
   ```
2. Iniciar el frontend:
   ```bash
   cd ../frontend
   npm start
   ```

## Contribución

1. Crear una nueva rama: `git checkout -b feature/nueva-funcionalidad`
2. Hacer commit de los cambios: `git commit -m "Descripción de los cambios"`
3. Hacer push a la rama: `git push origin feature/nueva-funcionalidad`
4. Abrir un Pull Request

## Licencia

[MIT](https://choosealicense.com/licenses/mit/)
