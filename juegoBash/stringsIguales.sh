
#!/bin/bash

# Obtiene los dos números como argumentos de la línea de comandos
string1=$1
string2=$2

if [ "$string1" = "$string2" ]; then
    echo "Los strings son iguales."
else
    echo "Los strings no son iguales."
fi