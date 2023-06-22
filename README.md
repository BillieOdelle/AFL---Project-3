AFL-Project-3
After examining the dataset available at the provided link, we discovered a comprehensive collection of data pertaining to Australian Rules Football matches, players, teams, and seasons. This dataset offers valuable insights into player performance, team strategies, and overall trends within the sport.

Our primary focus was to determine:
1. The highest number of wins in games played on home ground compared to those played away.
2. How the scores were affected comparing games played in the rain or without rain.
3. Showing each year who the top 10 goal kickers were per year.

Data Source:
Australian Football League (AFL) Database | Kaggle
CSV files: games, players, stats

Technologies Used:

SQL pgAdmin for database management
JavaScript
Plotly for data visualization
HTML
D3.js
Style.css
To utilize this code, you can copy and paste it into the respective areas as required. However, please note that you might need to create your own database in pgAdmin to ensure the code runs smoothly and links properly. We discovered that some team members had to modify the name of their database in the Postgres link to access the database successfully.

We executed queries in pgAdmin and incorporated the query results into the Python code, which was responsible for driving the API link. Additionally, JavaScript was used to create interactive charts, while HTML was employed to render the content on a local browser page.

Through these efforts, we successfully developed an interactive dashboard. By selecting a specific year, the graphs dynamically change based on the queries and the data we imported into SQL pgAdmin.
