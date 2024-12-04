#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'timeConversion' function below.
#
# The function is expected to return a STRING.
# The function accepts STRING s as parameter.
#

def timeConversion(s):
    # Write your code here
    
    # Separa la hora para manejarla mas facil
    timeSeparated = s.split(':')
    
    # Obtiene el momento del dia
    meridiem = timeSeparated[ 2 ][ -2: ]
    # Elimina el meridiem de la hora
    timeSeparated[ 2 ] = timeSeparated[ 2 ][ :-2 ]
    
    # Valida si el meridiem es AM
    if meridiem == 'AM':
        # Si la hora son las 12 la cambia a 00
        if timeSeparated[0] == '12': timeSeparated[0] = '00' 
    else:
        # Valida si la hora es menor a las 12
        if int( timeSeparated [0 ] ) < 12:
            timeSeparated[0] = int( timeSeparated[ 0 ] ) + 12
    
    # Regresa la fecha con formato de 24 horas
    return f"{timeSeparated[ 0 ]}:{timeSeparated[ 1 ]}:{timeSeparated[ 2 ]}"
    

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    s = input()

    result = timeConversion(s)

    fptr.write(result + '\n')

    fptr.close()
