from pydantic import BaseModel, Field
from typing import Optional

class UserCreate(BaseModel):
    username: str = Field(..., example="usuario123")
    password: str = Field(..., example="contraseñaSegura")

class User(BaseModel):
    id: int
    username: str

    class Config:
        orm_mode = True

class UserInDB(User):
    hashed_password: str
