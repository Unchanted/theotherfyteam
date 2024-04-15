from sqlalchemy import create_engine , Integer , Column , String , ForeignKey
from sqlalchemy.orm import relationship
from base import base

class Assets(base):
    __tablename__ = 'assets'
    sr_no = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('users.user_id'), nullable=False)
    account_details = Column(Integer, default=0)
    stocks = Column(Integer, default=0)
    bonds = Column(Integer, default=0)
    mutual_funds = Column(Integer, default=0)
    real_estate = Column(Integer, default=0)
    jewellery = Column(Integer, default=0)
    crypto = Column(Integer, default=0)
    automobiles = Column(Integer, default=0)
    others = Column(Integer, default=0)
    # asset_name = Column(String(255),nullable=False)

    user = relationship("User", back_populates="assets")


    def __init__(self,id,accdetails , stock , bond , mutual , realest , jewellery , crypto , automob , other):
        self.user_id = id
        self.account_details = accdetails
        self.stocks = stock
        self.bonds = bond
        self.mutual_funds = mutual 
        self.real_estate = realest
        self.jewellery = jewellery
        self.crypto = crypto
        self.automobiles = automob
        self.others = other