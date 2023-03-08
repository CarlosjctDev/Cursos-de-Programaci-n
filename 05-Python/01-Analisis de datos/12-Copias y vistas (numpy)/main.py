# Numpy  pip install numpy
# Copias y vistas
"""Una copia es un nuevo arreglo que fue creado a partir de otro y este nuevo arreglo
        posee los mismos objetos que el arreglo original
    Una vista no es mas que eso una vista a la cual apunta al arreglo original""" 
"""
    import numpy as np                      estandar
    a=np.arange(0,10)                       Crear arreglo de un rango.
    b=a.copy()                              Crea una copia(no afecta al arreglo ("a") ni viceversa)
                Existen dos formas de crear vistas en numpy
    c=a.view()                              Crea una vista del arreglo original, si en el original se 
                                                realiza un cambio en la vista tambien y viceversa
    id(a)                                   Obtenemos el id del arreglo "a"
    id(c.base)                              Obtenemos el id a la cual la vista esta apuntando
                Segunda forma de crear vista
    d = a[:]                                Returna todo el array del "a"
    d.base is a                             Returna true ya que la vista apunta hacia el arreglo            
    
"""