from flask import Flask, render_template, jsonify, request
import numpy as np
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func, inspect
from sqlalchemy.sql import text
import pandas as pd
import matplotlib.pyplot as plt
import base64
from io import BytesIO

#################################################
# Database Setup
#################################################

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


@app.route('/api/games')
def games_api():
    year = request.args.get('year')
    if year is None:
        year = 2021
    results = engine.execute(text(
        "SELECT * FROM games where year = :year"), year=year)
    result = []
    for row in results:
        new_row = dict(row)
        new_row['starttime'] = new_row['starttime'].strftime('%H:%M:%S')
        result.append(new_row)
    return jsonify(result)


@app.route('/api/report/home-and-away')
def home_away_api():
    year = request.args.get('year')
    if year is None:
        year = 2021
    results = engine.execute(text(
        "select gameid, (hometeamsscore > awayteamscore) as homewin from games where year = :year"), year=year)
    result = dict()
    result['total'] = 0
    result['home'] = 0
    result['away'] = 0
    for row in results:
        new_row = dict(row)
        result['total'] = result['total'] + 1
        if new_row['homewin'] is True:
            result['home'] = result['home'] + 1
        else:
            result['away'] = result['away'] + 1
    return jsonify(result)


@app.route('/api/report/goals-score')
def goals_score_api():
    year = request.args.get('year')
    if year is None:
        year = 2021
    results = engine.execute(text(
        "SELECT playerid, name, sum(goals) as goals FROM stats where year = :year group by playerid, name order by goals desc limit 10"), year=year)
    result = []
    for row in results:
        new_row = dict(row)
        result.append(new_row)
    return jsonify(result)


@app.route('/api/report/rainfall')
def line_graph_data():
    year = request.args.get('year')
    if year is None:
        year = 2021
    result = engine.execute(text("SELECT year, SUM(CASE WHEN rainfall > 0 THEN games.homeTeamsScore + games.awayTeamScore ELSE 0 END) AS score_with_rain, SUM(CASE WHEN rainfall = 0 THEN games.homeTeamsScore + games.awayTeamScore ELSE 0 END) AS score_without_rain FROM games GROUP BY year ORDER BY year;"))
    data = result.fetchall()
    data_dict = []
    for row in data:
        data_dict.append({
            'year': row.year,
            'score_with_rain': row.score_with_rain,
            'score_without_rain': row.score_without_rain
        })
    return jsonify(data_dict)


@app.route('/api/players')
def players_api():
    results = engine.execute("SELECT * FROM players")
    return jsonify([dict(_) for _ in results])


@app.route('/api/stats')
def stats_api():
    results = engine.execute("SELECT * FROM stats")
    return jsonify([dict(_) for _ in results])


if __name__ == "__main__":
    app.run(debug=True)
