# Pandas
# pip install pandas
# Ordenamiento
"""Ejercicios: 
    1- Obtener el usuario más joven del país canadá.
    2- Obtener a los 5 usuarios más viejos de Alemania."""
"""
    import pandas as pd                         estandar
    import numpy as np                          estandar
    data= pd.read_csv('users.csv')               leer un csv con ipython
    data= pd.read_csv('users.csv', index_col='id') Especificar a pandas la columna que se va tomar  como id
    data=data.dropna()                            Elimina las filas que tengan NaN (crea un nuevo dataframe)
    1-Ejercicio
    data[ data['pais'] == 'Canada']  La condicion genera un nuevo DataFrame (usuario en canada) 
    data[ data['pais'] == 'Canada'].sort_values('edad')         Ordena los numeros en orden ascendente
    data[ data['pais'] == 'Canada'].sort_values('edad').head(1) Head obtiene el primer dato de la fila
    1- Ejercicio resuelto el usuario mas joven es Mr Philip Bélanger edad 24 años

    2-Ejercicio
    data[ data['pais'] == 'Germany'].sort_values('edad', ascending=False).head(5) ascending ordena de forma
                                                                                    descendente si colocamos False

    """
