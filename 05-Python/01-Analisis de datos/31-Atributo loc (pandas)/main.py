# Pandas
# pip install pandas
# Atributo loc
"""Si los indices son de tipo entero utilizaremos iloc y si son de tipo string utilizaremos loc
    si utilizamos cualquiera de los dos generemos subdataframe"""
"""
    import pandas as pd                         estandar
    import numpy as np                          estandar
    usuarios = {
        'username': ['user1', 'user2', 'user3', 'user4', 'user5'],
        'email': ['user1@example.com', 'user2@example.com', 'user3@example.com',
          'user4@example.com', 'user5@example.com'],
        'age': ['10', '20', '25', '30', '50'],
        'status': ['True', 'True', 'False', 'False', 'True']
    }
    data=pd.DataFrame(usuarios, index= ['a', 'b', 'c', 'd', 'e'])   Crear dataframe con diccionario
    data.index                                                      Muestra el indice del dataframe
    data.loc['a']                                 Podemos obtener filas solo con indices de tipo string 
    data.loc['a':'c']                             Obtener 3 primeras filas del ejemplo
    data.loc['a':'c', ['username', 'email']]      Obtener 3 primeras filas  y solamente las columnas username y email
    otra forma de hacerlo seria:
    data.loc['a':'c']
    data.loc['a':'c'][ ['username', 'email']]     Obtendriamos el mismo resultado
    """
