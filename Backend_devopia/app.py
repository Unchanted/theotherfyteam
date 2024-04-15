from flask import Flask , request , jsonify 
from flask_cors import CORS
from essential_functions import EssentialFuncctions , prompt
from Devopia_database import session
from Gemini import TextResponse 
from User import User
from Assets import Assets
from Liabilities import Liability
import json
from Gemini import TextResponse , Response

app = Flask(__name__)
CORS(app)


@app.route('/',methods = ["POST"])
def Home_login_page():
    if request.method == 'POST':
        try :
            data = request.data
            data = json.loads(data.decode('utf-8'))
            print(data)
            email = data["email"]
            picture = data["picture"]
            print(email , picture , sep="\n")
            vall = EssentialFuncctions(session).email_checker(value=email)
            userid = session.query(User).filter(email == email).first()

            if vall : vall = 'true'
            else : vall = 'true'
            if not vall:
                return jsonify({
                    "log" : str(vall),
                    "email" : f"{email}",
                    "details" : []
                })

            elif vall:
                return jsonify({
                    "log" : str(vall),
                    "email" : f"{email}",
                    "details" : [
                        str(EssentialFuncctions(session).user_detail_fetch(email_id= email)),
                        str(EssentialFuncctions(session).user_assets_fetch(id= userid.user_id )),
                        str(EssentialFuncctions(session).user_liabilities_fetch(id = userid.user_id))
                    ]
                })
        except Exception as e:
            print(e)
            return jsonify({'error': f"{e}"}), 400 


@app.route('/form',methods = ["POST"])
def Form_data():
    try :
        if request.method == "POST":
            form_data = request.get_json()
            print(form_data)        
            
            value = EssentialFuncctions(session).generate_unique_id()

            userobj = User(unique_id=value,name=form_data["formdata"]["name"],age = int(form_data["formdata"]["age"]) , career=form_data["formdata"]["career"],email=form_data["email"] , income= int(form_data["formdata"]["income"]))

            userassets = Assets(id=value,accdetails = int(form_data["formdata"]["assets"]["savingsAccount"]), stock=int(form_data["formdata"]["assets"]["stocks"]),bond=int(form_data["formdata"]["assets"]["bonds"]),mutual=int(form_data["formdata"]["assets"]["mutualFunds"]),realest=int(form_data["formdata"]["assets"]["realEstate"]),jewellery=int(form_data["formdata"]["assets"]["jewellery"]),crypto=int(form_data["formdata"]["assets"]["crypto"]), automob = int(form_data["formdata"]["assets"]["automobile"]) , other= int(form_data["formdata"]["assets"]["otherAssets"]))

            userliability = Liability(id=value,homelonamt=int(form_data["formdata"]["liabilities"]["mortgage"]),carlonamt=int(form_data["formdata"]["liabilities"]["carLoan"]),studentlonamt=int(form_data["formdata"]["liabilities"]["studentLoan"]),personallonamt=int(form_data["formdata"]["liabilities"]["personalLoan"]),bills=int(form_data["formdata"]["liabilities"]["residualBill"]),creditcard=int(form_data["formdata"]["liabilities"]["creditCardDebt"]),tax=int(form_data["formdata"]["liabilities"]["payableTaxes"]) , anyotherloan=int(form_data["formdata"]["liabilities"]["monthlyEMIs"]))

            session.add(userobj)
            session.add(userassets)
            session.add(userliability)
            session.commit()

            return "Data received"
        
    except Exception as e:
        print("Error is ",e)
        return f"Error : {e}"
    
@app.route("/plan",methods = ["GET","POST"])
def gemini_plan():
    while True:
        try:
            answer = str(TextResponse(prompt,False)).replace('json','')
            if answer[0]=="`":
                answer = answer.replace("`","")
            answer = eval(answer)
            break
        except Exception as e:
            print(e)
    print(answer)
    return jsonify(answer)

@app.route("/plan/chat",methods=["POST"])
def users_complete_data():
    text = request.get_json()
    obj = Response().Chat(request=text["text"] , stream=False)
    print(obj)
    return jsonify({
        "reply" : str(obj)
    })


if __name__ == "__main__":
    app.run(debug=True , host="0.0.0.0")