from sqlalchemy import create_engine , Integer , Column , String , ForeignKey
from sqlalchemy.orm import relationship
from base import base

class User(base):
    __tablename__ = 'users'
    sr_no = Column(Integer , autoincrement=True)
    user_id = Column(Integer , primary_key= True , unique=True)
    name = Column(String(255) , nullable=False)
    age = Column(Integer , nullable=False)
    income = Column(Integer , nullable=False)
    career = Column(String(255) , nullable=False)
    email = Column(String(255),nullable=False , unique=True)


    assets = relationship('Assets', back_populates='user')
    liabilities = relationship("Liability", back_populates="user")
    family_members = relationship("FamilyMember", back_populates="user")

    def __init__(self,name,age,income,unique_id,career,email):
        self.name = name
        self.age = age
        self.income = income
        self.user_id = unique_id
        self.career = career
        self.email = email