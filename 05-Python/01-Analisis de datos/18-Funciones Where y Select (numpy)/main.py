# Numpy  pip install numpy
# Funciones Where y Select
"""
    import numpy as np                            estandar
    calificaciones=np.random.randint(1,11,10)       Arreglo de 50 numeros aleatorios de 0 a 100
    calificaciones=np.append(calificaciones, 7)     Añadir un numero al arreglo
    Ejercicio: Todas las calificaciones mayores iguales a 7 son aprobatorias
    2 tipos de mensajes,
    Felicidades, aprobaste la materia
    Lo sentimos, no aprobaste la materia
    np.where(                                       Estructura del where
        calificaciones >= 7,                        Condicion 
        'Felicidades, aprobaste la materia',        Cuando se cumple
        'Lo sentimos, no aprobaste la materia'      Cuando no se cumple
        )
    Ejercicio 2:
    4 tipos de mensajes
    Felicidades, aprobaste la materia = 10 
    Felicidades, aprobaste la materia = 8 o 9
    Felicidades, aprobaste la materia = 7
    Lo sentimos, no aprobaste la materia =menor que 7

    condiciones = [
    (calificaciones == 10),
    ((calificaciones == 8) | (calificaciones == 9) ),
    (calificaciones == 7),
    (calificaciones < 7)
    ]

    opciones = [
        'Felicidades, aprobaste la materia con 10 ',
        'Felicidades, aprobaste la materia con 8 o 9',
        'Felicidades, aprobaste la materia con 7',
        'Lo sentimos, no aprobaste la materia tu nota fue menor que 7']

    np.select(condiciones, opciones)    

    Se utiliza where cuando se cumple o no la condicion
    Se utiliza select cuando queremos ser mas flexibles y trabajar con multiples condiciones
        y con multiples tipos de valores, se debe evaluar todos los casos posibles ya que esta
        condicion no es un if y else.
    """