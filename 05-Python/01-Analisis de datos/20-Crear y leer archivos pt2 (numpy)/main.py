# Numpy  pip install numpy
# Crear y leer archivos pt2 del sistemas utilizando numpy
# save y load, trabajan con archivos binarios
# savetxt y loadtxt, trabajan con archivos en texto plano
"""
    import numpy as np                          estandar
    a=np.random.randint(0,10,10)                Arreglo de 10 numeros aleatorios de 0 a 10
    np.save('arreglo_binario.npy', a)           Almacenar un archivo dentro del sistema  binario recibe dos 
                                                    argumentos el primero sera el nombre del archivo  y
                                                    el segundo el arreglo que queremos almacenar.
                                                    Se almacena con el mismo tipo de datos.
                                                    
    %load arreglo.txt                           Cargamos el archivo
    b=np.load('arreglo_binario.npy',a)          leer de un archivo del sistema (devueve un array del mismo tipo de dato)
                                                       
    """