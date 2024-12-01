#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'plusMinus' function below.
#
# The function accepts INTEGER_ARRAY arr as parameter.
#

def plusMinus(arr):
    
    # Estas variables guardan la cantidad de ceros, positivos y negativos del arreglo
    positiveElements = 0
    zeroElements = 0
    negativeElements = 0
    # Guarda el numero de elementos del arreglo
    arrayLenght = len( arr )
    # Numero de decimales a mostrar en la respuesta
    numberOfDecimals = 6
    
    # Recorre el arreglo
    for element in arr:
        
        # Valida si el elemento es positivo
        if element > 0:
            # Suma uno a los elementos positivos
            positiveElements += 1
        # Valida si el elemento es cero
        elif element == 0:
            # Suma uno a los ceros
            zeroElements += 1
        else:
            # Suma uno a los elementos negativos
            negativeElements += 1
    
    # Hace las diviciones y obtiene los resultados
    positiveResult = positiveElements / arrayLenght
    zeroResult = zeroElements / arrayLenght
    negativeResult = negativeElements / arrayLenght
    
    # Imprime los resultados con 6 decimales
    print( round( positiveResult, numberOfDecimals ) )
    print( round( negativeResult, numberOfDecimals ) )
    print( round( zeroResult, numberOfDecimals ) )

            

if __name__ == '__main__':
    n = int(input().strip())

    arr = list(map(int, input().rstrip().split()))

    plusMinus(arr)
