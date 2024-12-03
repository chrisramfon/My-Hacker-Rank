#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'miniMaxSum' function below.
#
# The function accepts INTEGER_ARRAY arr as parameter.
#

def miniMaxSum(arr):
    # Write your code here
    
    # Ordena el arreglo para la suma minima y elimina el ultimo elemento
    minArray = sorted( arr )
    minArray.pop()
    # Ordena el arreglo para la suma maxima y elimina el primer elemento
    maxArray = sorted( arr )
    del maxArray[ 0 ]
    
    # Muestra la suma de los dos arreglos
    print( f"{sum(minArray)} {sum(maxArray)}" )

if __name__ == '__main__':

    arr = list(map(int, input().rstrip().split()))

    miniMaxSum(arr)
