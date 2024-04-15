from sqlalchemy import create_engine , select , Column
from sqlalchemy.orm import sessionmaker
from Assets import Assets
from FamilyMember import FamilyMember
from essential_functions import EssentialFuncctions
from Liabilities import Liability
from User import User
from base import base

engine = create_engine('mysql+mysqlconnector://root:root@127.0.0.1:3306/devopia_db_final')
base.metadata.create_all(bind = engine)
Session = sessionmaker(bind=engine)
session =  Session()

def email_checker(value):
    value = session.query(User).filter(User.email == value).first()
    return value is not None
    

session.commit()