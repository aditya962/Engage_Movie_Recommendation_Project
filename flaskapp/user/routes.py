from flaskapp import app
from flaskapp.user.models import User

@app.route('/user/signup', methods=['POST'])
def signup():
  return User().signup()

@app.route('/user/signout')
def signout():
  return User().signout()

@app.route('/user/login', methods=['POST'])
def login():
  return User().login()

@app.route('/user/getHtmlData',methods=['GET','POST'])
def getHtmlData():
  return User().getHtmlData()