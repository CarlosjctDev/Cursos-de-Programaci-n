# Numpy  pip install numpy
# Modificar arreglos
"""
    import numpy as np                          estandar
    a=np.random.randint(0,10,10)                Arreglo de 10 numeros aleatorios de 0 a 10
    insert o append , sirven para añadir un elemento al arreglo (No modifican el arreglo original, genera
        un nuevo arreglo.)
    np.insert(a,0,200)                          Añade un nuevo elemento, recibe 3 argumentos, 1-el arreglo
                                                    2-el indice que en el cual quiero añadir el elemento,
                                                    3- el valor del elemento
    a=np.append(a,200)                          Añade un nuevo elemento, recibe los mismo parametros que insert,
                                                    si no se especifica el indice lo añade al final
    np.delete(a, -1)                            Elimina un elemento del arreglo, recibe dos parametros
                                                    1- el arreglo , 2- el indice que vas a eliminar
                                                    en este caso seria el ultimo.
    np.resize(a,5)                              Modificar el tamaño del arreglo, recibe dos argumentos,
                                                    1- el arreglo, 2- la longitud que queremos
    b=np.random.randint(0,10,10)                Arreglo de 10 numeros aleatorios de 0 a 10
    np.concantenate([a,b])                      Une dos arreglos

                                                       
    """