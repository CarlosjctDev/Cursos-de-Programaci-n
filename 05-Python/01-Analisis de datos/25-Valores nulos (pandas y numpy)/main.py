# Pandas
# pip install pandas
# Valores nulos
"""Numpy o Pandas  siempre que tengamos ausencia de valores utilizaremos NaN"""
"""
    import pandas as pd                         estandar
    import numpy as np                          estandar
    a=pd.Series([                               Crear serie con valores NaN
    1,2,np.nan,np.nan,5,6,7,np.nan,8,9
    ])           
    a.isnull()                                  Si el valor es nulo returna true en caso contrario false,
                                                    returna una nueva serie, una serie de valores booleanos 
    a.notnull()                                 Si el valor es nulo returna false en caso contrario true,
                                                    returna una nueva serie, una serie de valores booleanos
    a[ a.isnull()]                              Devuelve aquellos valores nulos
    a[ a.notnull()]                             Devuelve aquellos valores que no son nulos

    
    """