from sqlalchemy import create_engine , Integer , Column , String , ForeignKey
from sqlalchemy.orm import relationship
from base import base
from User import User

class FamilyMember(base):
    __tablename__ = 'family_members'


    sr_no = Column(Integer , autoincrement=True , primary_key=True , unique= True)
    user_id = Column(Integer, ForeignKey('users.user_id'), nullable=False)
    relation = Column(String(50), nullable=False)
    relative_email_id = Column(String(255) , nullable=False , unique= True)
    
    def __init__(self,id , relation , email):
        self.user_id = id
        self.relation = relation
        self.relative_email_id = email

    user = relationship("User", back_populates="family_members")


