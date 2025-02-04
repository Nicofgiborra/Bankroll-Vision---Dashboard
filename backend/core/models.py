from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship
from .config import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True, nullable=False)
    hashed_password = Column(String, nullable=False)

    # Puedes agregar más campos según sea necesario, por ejemplo, email, roles, etc.
