# Pandas
# pip install pandas
# Condicionales
"""Ejercicios:
    1- Obtener el nombre de todos los usuarios del pais Canada.
    2- Obtener el nombre y correo electronico de todos los usuarios con edad mayor a 50.
    3- Obtener el promedio de todos los usuarios de sexo femenino con una edad mayor a 30.
          """
"""
    import pandas as pd                         estandar
    import numpy as np                          estandar
    data= pd.read_csv('users.csv')               leer un csv con ipython
    data= pd.read_csv('users.csv', index_col='id') Especificar a pandas la columna que se va tomar  como id
    data=data.dropna()                            Elimina las filas que tengan NaN (crea un nuevo dataframe)
    
    Ejercicio 1
    data[data['pais'] == 'Canada']['nombre']    nombre de todos los usuarios del pais canada
    
    Ejercicio 2
    data[ data['edad'] > 50][ ['nombre','email'] ] 

    Ejercicio 3
    data[ data['genero'] == 'female' ]                   Todas las mujeres
    data[ (data['genero'] == 'female') & (data['edad'] > 30 ) ]  usuarios femeninos que sean mayor a 30
    data[ (data['genero'] == 'female') & (data['edad'] > 30 ) ]['edad']  obtener la edad
    data[ (data['genero'] == 'female') & (data['edad'] > 30 ) ]['edad'].mean()  metodo mean obtiene el promedio
    data[ data['edad'].between(10, 30)]
            """
