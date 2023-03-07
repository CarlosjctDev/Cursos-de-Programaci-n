# Manipulacion de archivos con ipython
# %pycat main.py    se puede visualizar el codigo en ipython
# %run main.py      corre el codigo
# %load main.py     permite cargar el archivo en ipython y manipularlo
# %pdoc suma        permite  visualizar la documentacion de la funcion
# ipython -i main.py  permite cargar todo el contenido del archivo, funciona igual que %load
# %edit main.py     permite editar el codigo
def suma(a: int,b: int) -> int:
    """"Permite sumar dos numeros enteros
    
    Args:
        a (int): N1
        b (int): N2

    Returns:
        int: la suma de a + b        
    """
    result= a + b
    return result

print(suma(10,20))
print(suma(30,20))
print(suma(20,50))