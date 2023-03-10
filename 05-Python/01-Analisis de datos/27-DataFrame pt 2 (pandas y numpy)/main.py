# Pandas
# pip install pandas
# DataFrame pt 2
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
    data=pd.DataFrame(usuarios)                         Crear dataframe a base de un diccionario           
    data=pd.DataFrame(usuarios, index=[ 'a', 'b', 'c',]) Cambiar el valor de los indices del DataFrame 
    data['username']                                     Conocer todos los valores de una columna
    data['age']['a']                                     edad en el indice a
    data.username data.email data.age                    Otra forma de obtener los valores de una columna (por atributos)
                                                            lo habitual es usarlo con llaves
    data.columns                                        todas las columnas del dataframe
    data.values                                         obtener todos los valores que conforman nuestro dataframe
    """