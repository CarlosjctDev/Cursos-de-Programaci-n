# Numpy  pip install numpy
# Crear arreglos
"""
    import numpy as np                          estandar
    np.array([True,True,False])                 arreglo de valores boleanos
    np.arange(0,100)                            Permite crear un arreglo apartir de un rango(el valor final no cuenta
                                                    ya que al ultimo le resta 1)
    np.arange(0,20,2)                           Recibe un tercer argumento que indica la cantidad de saltos que 
                                                    queremos utilizar en este caso iria de 2 en 2 
    np.zeros(10)                                Crea un arreglo de 0 de tipo flotantes
    np.zeros(10,dtype=int)                      Crea un arreglo de 0 tipo int ya que el dtype cambia el tipo
    np.ones(10)                                 Crea un arreglo de 1 de tipo flotantes
    np.empty(10)                                Crea un arreglo a partir de datos basura se pasa como argumento
                                                    la longitud que deseamos el arreglo posea
    Vamos a utilizar empty en todos aquellos casos en cuales sepamos que vamos a hacer uso de un arreglo
    pero justamente en ese momento no sepamos que tipos de valores vamos a almacenar entonces para reservar
    el espacio en memoria vamos a crear un arreglo con la longitud que deseamos, posteriormente podemos
    modificar cada uno de los valores almacenados

    np.random.randint(0,100,50)                 Crear arreglos de numeros enteros aleatorios, recibe 3 argumentos
                                                    los primeros dos hacen referencia al rango, el tercer arg
                                                    se refiere a la longitud que queremos que el arreglo posea.                                                    
"""