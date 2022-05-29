from flask import render_template,request,session
from flaskapp import app, login_required
from flaskapp.user.routes import *
from flaskapp import db
import numpy as np
import pandas as pd
import difflib
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity

@app.route('/')
def first():
  return render_template('login.html')


###### helper functions. Use them when needed #######
def get_title_from_index(index):
	return df[df.index == index]["title"].values[0]

def get_index_from_title(title):
	return df[df.title == title]["index"].values[0]

def get_correct_name(search):
    list_of_all_titles = df['title'].tolist()
    find_close_match = difflib.get_close_matches(search,list_of_all_titles)
    if len(find_close_match) !=0:
        return find_close_match[0]
    return "notFound"    
##################################################

##Step 1: Read CSV File
df = pd.read_csv("movie_dataset_v2.csv")

# sorting based on popularity
df.sort_values("popularity",ascending=False)
temp=df['title'].tolist()
popular_movies=[]
popularCount=0
for movie in temp:
    popular_movies.append(movie)
    popularCount=popularCount+1
    if popularCount>9:
        break


#Separating Genres
# Action
actionGenre = df[df['genre']=='Action'] 
actionGenre.sort_values("popularity",ascending=False)
temp=actionGenre['title'].tolist()
actionMovies=[]
actionCount=0
for movie in temp:
    actionMovies.append(movie)
    actionCount=actionCount+1
    if actionCount>9:
        break
# Adventure
adventureGenre = df[df['genre']=='Adventure'] 
adventureGenre.sort_values("popularity",ascending=False)
temp=adventureGenre['title'].tolist()
adventureMovies=[]
adventureCount=0
for movie in temp:
    adventureMovies.append(movie)
    adventureCount=adventureCount+1
    if adventureCount>9:
        break
# Animation
animationGenre = df[df['genre']=='Animation'] 
animationGenre.sort_values("popularity",ascending=False)
temp=animationGenre['title'].tolist()
animationMovies=[]
animationCount=0
for movie in temp:
    animationMovies.append(movie)
    animationCount=animationCount+1
    if animationCount>9:
        break
# Comedy
comedyGenre = df[df['genre']=='Comedy'] 
comedyGenre.sort_values("popularity",ascending=False)
temp=comedyGenre['title'].tolist()
comedyMovies=[]
comedyCount=0
for movie in temp:
    comedyMovies.append(movie)
    comedyCount=comedyCount+1
    if comedyCount>9:
        break
# Drama
dramaGenre = df[df['genre']=='Drama'] 
dramaGenre.sort_values("popularity",ascending=False)
temp=dramaGenre['title'].tolist()
dramaMovies=[]
dramaCount=0
for movie in temp:
    dramaMovies.append(movie)
    dramaCount=dramaCount+1
    if dramaCount>9:
        break
# Romance
romanceGenre = df[df['genre']=='Romance'] 
romanceGenre.sort_values("popularity",ascending=False)
temp=romanceGenre['title'].tolist()
romanceMovies=[]
romanceCount=0
for movie in temp:
    romanceMovies.append(movie)
    romanceCount=romanceCount+1
    if romanceCount>9:
        break
##Step 2: Select Features
features = ['keywords','cast','genres','director']

##Step 3: Create a column in DF which combines all selected features
for feature in features:
	df[feature]=df[feature].fillna('')

def combine_features(row):
	return row['keywords']+" "+row['cast']+" "+row["genres"]+" "+row["director"]
	
df["combined_features"]=df.apply(combine_features,axis=1)

##Step 4: Create count matrix from this new combined column
cv = CountVectorizer()
count_matrix = cv.fit_transform(df["combined_features"])

##Step 5: Compute the Cosine Similarity based on the count_matrix
cosine_sim = cosine_similarity(count_matrix)


result=[]
searchResult=[]
@app.route('/dashboard/',methods=['GET','POST'])
@login_required
def dashboard():
    zero=1
    result=[]
    searchResult=[]
    list_of_movies =  df['title'].tolist()
    temp=session['user']['email']
    temp2=db.users.find_one({"email":temp})
    watchHistoryRec=[]
    temp3=temp2['movies']
    for movie in temp3:
        movie_index= get_index_from_title(movie)
        similar_movies = list(enumerate(cosine_sim[movie_index]))
        sorted_similar_movies = sorted(similar_movies,key=lambda x:x[1],reverse=True)
        k=0
        for x in sorted_similar_movies:
            watchHistoryRec.append(get_title_from_index(x[0]))
            k=k+1
            if k>9:
               break
    np.random.shuffle(watchHistoryRec)
    w=0
    for movie in watchHistoryRec:
        result.append(movie)
        w=w+1
        if w>9:
            w=0
            break           
    if request.method=='POST':
        search=request.form['search']
        if search !="":
            search = get_correct_name(search)
            if search !="notFound":
                movie_user_likes = search
                movie_index= get_index_from_title(movie_user_likes)
                similar_movies = list(enumerate(cosine_sim[movie_index]))
                sorted_similar_movies = sorted(similar_movies,key=lambda x:x[1],reverse=True)
                j=0
                
                for movie in sorted_similar_movies:
                    searchResult.append(get_title_from_index(movie[0]))
                    j=j+1
                    if j>9:
                        j=0
                        break
    return render_template('recommend.html',result=result,list_of_movies=list_of_movies,popular_movies=popular_movies,zero=zero,actionMovies=actionMovies,adventureMovies=adventureMovies,comedyMovies=comedyMovies,dramaMovies=dramaMovies,romanceMovies=romanceMovies,animationMovies=animationMovies,searchResult=searchResult)

######################
if __name__ == '__main__':
  app.run(debug=True)