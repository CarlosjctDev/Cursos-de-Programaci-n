# Pandas
# pip install pandas
# Series
"""Los objetos de tipo serie trabajan con dos arreglos, un arreglo permite almacenar los valores de la serie
    y el segundo arreglo permite almacenar los indice de la serie"""
"""
    import pandas as pd                         estandar
    a=pd.Series([1,2,3,4,5])                    Crea la serie
    type(a)                                     Tipo de dato de la serie
    a.size                                      Tamaño de la serie
    a.dtype                                     Tipo de dato almacena la serie
    a.shape                                     Forma de la serie
    a.index                                     Conocer los indices, returna un rango, indica desde donde comienza
                                                    y donde termina y los saltos
    a[4]= 500                                   Actualiza el valor de la serie en el indice 4
    a=pd.Series([1,2,3,4,5], index=['a','b','c','d','e']) Definir los indices que queremos
    a['a']=10                                   Actualizar el valor de la serie en el indice a
    a=pd.Series([1,2,3,4,5], index=['a','b','c','d','e'],name='Numeros', dtype=int) 
    dtype se puede colocar int,str,bool,float

    """