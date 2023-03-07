# Numpy  pip install numpy
# SubArreglos 
"""
    import numpy as np                          estandar
    a=np.random.randint(0,10,20)                Crear arreglos de numeros enteros aleatorios, recibe 3 argumentos
                                                    los primeros dos hacen referencia al rango, el tercer arg
                                                    se refiere a la longitud que queremos que el arreglo posea.
                        
                        Primera forma de generar subArreglos                
    a[0:5]                                      Obtiene los primeros 5 datos del arreglo, definimos el indice inicial
                                                    como primer parametro,segundo parametro indice final y
                                                    opcionalmente le podemos dar la cantidad de saltos.
                                                    Se puede omitar el 0 y quedaria a[:5] seria el mismo resultado.
                                                    Se puede obtener del indice 5 hasta el ultimo elemento y seria
                                                    de esta forma a[5:]
                                                    Se puede colocar el ejemplo anterior con saltos de 2 en 2 de 
                                                    la siguiente forma a[5::2] 
                        Segunda forma de generar subArreglos                                                     
    a[[0,1,3]]                                      Se genera un listado de indices para obtener datos del array
    -------------------------------------------------------------------------------------------------------------
    b= np.array([1,2,3,4,5])                        Definir un array
    b[[True,False,False,False,True]]                Se obtiene solamente el primer elemento y el quinto los demas
                                                        se omiten.
    Los arreglos deben tener las mismas medidas o arrojara error.    

                                                                
"""