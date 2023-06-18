from flask import Flask, render_template, jsonify
import numpy as np
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func, inspect
import pandas as pd
# read_games = pd.read_csv("Data/games.csv")
# read_players = pd.read_csv("Data/players.csv")
# read_stats = pd.read_csv("Data/stats.csv")
#################################################
# Database Setup
#################################################
# engine = create_engine("sqlite:///AFL.sqlite")
engine = create_engine(
    "postgresql+psycopg2://afl_user:password@localhost/AFL-Project")
# # reflect an existing database into a new model
Base = automap_base()
# # # reflect the tables
Base.prepare(autoload_with=engine)
# # Save reference to the table

Players = Base.classes.players
Games = Base.classes.games


app = Flask(__name__)


@app.route('/')
def game():
    return render_template("index.html")


@app.route('/api/games/')
def games_api():
    session = Session(engine)
    results = engine.execute("SELECT * FROM games") 
    session.close()
    return jsonify(results)


@app.route('/api/players/')
def players_api():
    session = Session(engine)
    results = { playerid: name for playerid,name in session.query(Players.playerid, Players.name).all()}
    
    return jsonify(results)


@app.route('/api/stats')
def stats_api():
    data = engine.execute("SELECT * FROM stats")
    for stats in data:
        return jsonify(stats)
# @app.route('/api/data')
# def Data():
#     d = {
#         'one': 10,
#         'two': 20,
#         'three': 30,
#         'four': 40,
#     }
#     return d