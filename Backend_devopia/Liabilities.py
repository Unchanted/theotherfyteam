from sqlalchemy import create_engine , Integer , Column , String , ForeignKey
from sqlalchemy.orm import relationship
from base import base

class Liability(base):
    __tablename__ = 'liabilities'
    sr_no = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('users.user_id'), nullable=False)
    home_loan_amount_on_you = Column(Integer, default=0)
    car_loan_amount_on_you = Column(Integer, default=0)
    student_loan_amount_on_you = Column(Integer, default=0)
    personal_loan_amount_on_you = Column(Integer, default=0)

    # home_loan_time_remaining = Column(Integer,default=0)
    # car_loan_time_remaining = Column(Integer,default=0)
    # student_loan_time_remaining = Column(Integer,default=0)
    # personal_loan_time_remaining = Column(Integer,default=0)

    payable_bills = Column(Integer, default=0)
    credit_card_debt = Column(Integer, default=0)
    payable_taxes = Column(Integer, default=0)
    anyother_loan_amount_on_you = Column(Integer, default=0)
    
    user = relationship("User", back_populates="liabilities")

    def __init__(self ,id ,homelonamt , carlonamt , studentlonamt , personallonamt , bills , creditcard , tax , anyotherloan):
        self.user_id = id
        self.home_loan_amount_on_you = homelonamt
        self.car_loan_amount_on_you = carlonamt
        self.student_loan_amount_on_you = studentlonamt
        self.personal_loan_amount_on_you = personallonamt
        self.payable_bills = bills
        self.credit_card_debt = creditcard
        self.payable_taxes = tax
        self.anyother_loan_amount_on_you = anyotherloan