#!/bin/bash

# for indice in ${cat nombreJugadores}; do
# echo "Jugador : $indice"
# done

# Lee el contenido del archivo nombreJugadores línea por línea y lo asigna a la variable indice
while IFS= read -r indice; do
    echo "Jugador: $indice"
done < nombreJugadores