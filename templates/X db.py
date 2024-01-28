import mysql.connector
mydb=mysql.connector.connect(
    host='127.0.0.1',
    password="",
    user='root',
    database='profile',
)

mycu=mydb.cursor()
mycu.execute('CREATE TABLE xuserinfo (name VARCHAR(50),email VARCHAR(255),'
                 'password VARCHAR(255),berth VARCHAR(255) )')