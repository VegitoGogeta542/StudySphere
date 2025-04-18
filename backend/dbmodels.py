from sqlalchemy import Column, String, ForeignKey, create_engine, DateTime, Boolean, Time
from sqlalchemy.orm import relationship, declarative_base, sessionmaker
import uuid
import os

# Define the absolute path to the database file
BASE_DIR = os.path.dirname(os.path.abspath(__file__))  # Get the directory of this file
DATABASE_FILE = os.path.join(BASE_DIR, 'studysphere.db')  # Absolute path to the database file

# Check if the database file already exists
database_exists = os.path.exists(DATABASE_FILE)

# Create the database engine
engine = create_engine(f'sqlite:///{DATABASE_FILE}')
Session = sessionmaker(bind=engine)
session = Session()
Base = declarative_base()

class User(Base):
    __tablename__ = 'users'
    id = Column(String(36), primary_key=True, default=lambda: str(uuid.uuid4()))    
    name = Column(String(50))
    email = Column(String(50))
    password = Column(String(10))
    
    classes = relationship('Class', backref='user', lazy=True)
    assignments = relationship('Assignment', backref='user', lazy=True)
    schedules = relationship('Schedule', backref='user', lazy=True)

class Class(Base):
    __tablename__ = "class"
    id = Column(String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    name = Column(String(100), nullable=False)
    user_id = Column(String(36), ForeignKey('users.id'), nullable=False)

class Assignment(Base):
    __tablename__ = "assignment"
    id = Column(String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    title = Column(String(150), nullable=False)
    due_date = Column(DateTime, nullable=False)
    completed = Column(Boolean, default=False)
    user_id = Column(String(36), ForeignKey('users.id'), nullable=False)

class Schedule(Base):
    __tablename__ = "schedule"
    id = Column(String(36), primary_key=True, default=lambda: str(uuid.uuid4()))
    day = Column(String(20), nullable=False)
    start_time = Column(Time, nullable=False)
    end_time = Column(Time, nullable=False)
    user_id = Column(String(36), ForeignKey('users.id'), nullable=False)

# Create tables only if the database does not already exist
if not database_exists:
    Base.metadata.create_all(engine)