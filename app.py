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
    "postgresql+psycopg2://afl_user:password@localhost/AFL_Project_3")
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
    results = engine.execute("SELECT * FROM games")
    result = []
    for row in results:
        new_row = dict(row)
        new_row['starttime'] = new_row['starttime'].strftime('%H:%M:%S')
        result.append(new_row)
    return jsonify(result)


@app.route('/api/players/')
def players_api():
    results = engine.execute("SELECT * FROM players")
    return jsonify([dict(_) for _ in results])

# return jsonify(results)


@app.route('/api/stats')
def stats_api():
    results = engine.execute("SELECT * FROM stats")
    return jsonify([dict(_) for _ in results])
