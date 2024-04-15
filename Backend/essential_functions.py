from User import User
from Assets import Assets
from Liabilities import Liability
import  random , hashlib

class EssentialFuncctions:
    def __init__(self,supplied_session):
        self.session = supplied_session

    def check_id_exists(self,user_id):
        result = self.session.query(User).filter_by(user_id=user_id).first()
        return result is not None

    def random_numbers(self):
        return random.randint(1000,9999)

    def generate_unique_id(self):
        user_id = self.random_numbers()
        while self.check_id_exists(user_id):
            user_id = self.random_numbers()
        return user_id
    
    def email_checker(self,value):
        value = self.session.query(User).filter(User.email == value).first()
        return value is not None
    
    def user_detail_fetch(self,email_id):
        user = self.session.query(User).filter_by(email=email_id).first()
        return {
                "name" : user.name,
                "age" : user.age,
                "income" : user.income,
                "career" : user.career,
            }
    
    def user_assets_fetch(self,id):
        user = self.session.query(Assets).filter_by(user_id=id).first()
        return {
            "savingsAccount" : user.account_details,
            "stocks" : user.stocks,
            "bonds" : user.bonds,
            "mutualFunds" : user.mutual_funds,
            "realEstate": user.real_estate,
            "jewellery": user.jewellery,
            "crypto": user.crypto,
            "automobile": user.automobiles,
            "otherAssets": user.others,
            "netAssets" : user.account_details + user.stocks + user.bonds + user.mutual_funds + user.real_estate + user.jewellery + user.crypto + user.automobiles + user.others
        }
    
    def user_liabilities_fetch(self,id):
        user = self.session.query(Liability).filter_by(user_id=id).first()
        return {
            "mortgage" : user.home_loan_amount_on_you,
            "carLoan" : user.car_loan_amount_on_you,
            "studentLoan" : user.student_loan_amount_on_you,
            "personalLoan" : user.personal_loan_amount_on_you,
            "residualBill": user.payable_bills,
            "creditCardDebt": user.credit_card_debt,
            "payableTaxes": user.payable_taxes,
            "monthlyEMIs": user.anyother_loan_amount_on_you,
            "netLiability" : user.home_loan_amount_on_you + user.car_loan_amount_on_you + user.student_loan_amount_on_you + user.personal_loan_amount_on_you + user.payable_bills + user.credit_card_debt + user.payable_taxes + user.anyother_loan_amount_on_you
        }

    def hash_converter(self,value):
        return hashlib.sha256(str(value).encode()).hexdigest()

    def decrypter(self,entered_password,db_password):
        hashed_entered_password = hashlib.sha256(entered_password.encode()).hexdigest()
        if hashed_entered_password  == db_password :
            return True
        else:
            return False
        
prompt = """
As a professional finance advisor, present a family finance planner depending on my current portfolio and my plans to have depandants:

My Portfolio:

number of dependants:2 

age by which you wish to have all children:30 

Age: 23 

dependants: 2

job type: Legal, lawyer

My current portfolio is as follows:

income: 2300000 p.a.

checkings/savings account: 1000000

stock investments: 50000

bonds: 25000

Mutual Funds: 30000

real estate: 0 

Jewellery: 1000

Crypto: 70000

Market value of automobile: 1000000



Mortgage: 0

Car loan: 20000 per month for 12 months

Student loan: 0

Personal loan: 0 

recurring monthly bills: 7500

Credit card debt: 15000

Payable taxes: 32000

miscellaneous monthly EMI: 10000



I WANT THE ANSWER TO BE ONLY IN JSON FORM WITH FORMAT BEING AS FOLLOWING :

{
KEY :  ANSWER BY YOU IN TEXT,
.,
.,
.,
.,
KEY : ANSWER BY YOU IN TEXT
}

I WANT THE JSON TO HAVE 7 KEY VALUE PAIRS

 
"""