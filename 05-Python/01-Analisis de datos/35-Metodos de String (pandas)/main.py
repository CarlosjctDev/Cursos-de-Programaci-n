# Pandas
# pip install pandas
# Metodos de Strings
"""
    Algo muy interesante de las Series en pandas es que podemos condicionar los valores que estas almacenan
      a traves de metodos de string, regularmente dia a dia estaremos trabajando con estos 3 metodos
        #startswith (comienza con)  #endswith (Finaliza con)  #contains (contiene)  """
"""
    import pandas as pd                         estandar
    import numpy as np                          estandar
    data= pd.read_csv('users.csv')               leer un csv con ipython
    data= pd.read_csv('users.csv', index_col='id') Especificar a pandas la columna que se va tomar  como id
    data=data.dropna()                            Elimina las filas que tengan NaN (crea un nuevo dataframe)
    
    data[ data['email'].str.startswith('a') ]   Todos los usuarios que su correo electronico comience por a
    data[ data['email'].str.endswith('.com') ]   Todos los usuarios que su correo electronico termine por .com
    data[ data['nombre'].str.contains('Gabriel') ] Los usuarios que tienen de nombre Gabriel
    """
