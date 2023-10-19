#!/bin/bash

# Obtiene los dos números como argumentos de la línea de comandos
num1=$1
num2=$2

# Comprueba si los números son iguales
if [ "$num1" -eq "$num2" ]; then
    echo "Tienen el mismo valor"
else
    echo "No tienen el mismo valor"
fi
