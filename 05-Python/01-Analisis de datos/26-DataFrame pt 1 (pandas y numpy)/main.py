# Pandas
# pip install pandas
# DataFrame pt 1
"""La forma mas facil de crear un DataFrame es a traves de un diccionario"""
"""
    import pandas as pd                         estandar
    import numpy as np                          estandar
    usuarios = {
        'username': [ 'user1', 'user2', 'user3' ],
        'email': [ 'user1@gmail.com', 'user2@gmail.com', 'user3@gmail.com' ],
        'age': [ '27', '10', '30' ],
        'status': [ 'True', 'True', 'False' ]
    }
    a=pd.DataFrame(usuarios)                    Crear dataframe a base de un diccionario           
    a=pd.DataFrame(usuarios, index=[ 'a', 'b', 'c',]) Cambiar el valor de los indices del DataFrame 
    """