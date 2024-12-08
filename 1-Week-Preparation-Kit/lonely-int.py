#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'lonelyinteger' function below.
#
# The function is expected to return an INTEGER.
# The function accepts INTEGER_ARRAY a as parameter.
#

def lonelyinteger(a):

    # Si el arreglo solo tiene un elemento lo regresa
    if len(a) == 1: return a[0]
    
    # Ordena el arreglo para juntar los pares de numeros
    a.sort()
    
    # Obtiene un numero para trabajar con el
    elementToFind = a.pop(0)
    
    # Busca una copia del numero
    elementFound = a.count(elementToFind)
    
    # Valida si encontro otro numero igual en el arreglo
    if elementFound == 1:
        # Elimina la copia
        a.pop(0)
        # Llama a la funcion de manera recursiva
        return lonelyinteger(a)
    else:
        # Si no hay un numero igual en el arreglo lo regresa 
        return elementToFind
    
            
        
        
if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    n = int(input().strip())

    a = list(map(int, input().rstrip().split()))

    result = lonelyinteger(a)

    fptr.write(str(result) + '\n')

    fptr.close()
