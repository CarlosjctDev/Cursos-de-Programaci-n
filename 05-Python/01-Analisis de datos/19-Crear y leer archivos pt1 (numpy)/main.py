# Numpy  pip install numpy
# Crear y leer archivos pt1 del sistemas utilizando numpy
"""
    import numpy as np                          estandar
    a=np.random.randint(0,10,10)                Arreglo de 10 numeros aleatorios de 0 a 10
    np.savetxt('arreglo.txt', a,fmt='%i')       Almacenar un archivo dentro del sistema de texto plano recibe dos 
                                                    argumentos el primero sera el nombre del archivo  y
                                                    el segundo el arreglo que queremos almacenar.
                                                    Recibe un tercer parametro opcional que es fmt(formato)
                                                    %i(numeros enteros). 
    %load arreglo.txt                           Cargamos el archivo
    np.loadtxt('arreglo.txt',dtype=int)         leer de un archivo del sistema (devueve un array float) si no se
                                                    le indica el dtype
    c=a.reshape((2,5))                          Crea un nuevo arreglo a base de otro, se convertiria en una matriz
                                                    de 2 x 5
    np.savetxt('matriz.csv',c,delimiter=',',fmt='%i') De esta forma se debe guardar un csv y  utilizar el 
                                                        parametro delimiter y formato %i
    d=np.loadtxt('matriz.csv',c,delimiter=',',fmt='%i') 
                                                       
    """