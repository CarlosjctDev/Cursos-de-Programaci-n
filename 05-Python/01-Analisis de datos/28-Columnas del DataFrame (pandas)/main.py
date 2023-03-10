# Pandas
# pip install pandas
# Columnas del DataFrame
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
    calificaciones = pd.Series(np.random.randint(5,10,3), index=[ 'a', 'b', 'c'])  Creamos la serie para añadirla
    data['calificaciones']= calificaciones                Añadimos la nueva columna
    Comulna no es mas que una serie para añadir una nueva columna es neceseario crear una nueva serie.

    data.rename(                                          Renombrar nombre de columnas, genera un nuevo dataframe
        columns={ 'calificaciones':'score'}                 el original no sufre cambios a menos que se sobrescriba
    )
    data['email']                                          Acceder mediante el nombre de la columna
    data.email                                             Acceder a la columna mediante el atributo del objeto
    del data['score']                                      Eliminar una columna
    """
