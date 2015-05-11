# qué es?
este proyecto consta de dos servidores:
 - servidor de websockets
 - servidor normal y corriente http

### ws
el primero está en la carpeta **ws** y simplemente necesita un npm install. 
escucha en el **puerto 9090**

### http
el segundo está en la carpeta **http** y es un simple index.html que debes editar, reemplazando `{server_ip}` con la IP del servidor de websockets al que quieres conectar.
para servir este archivo puedes usar cualquier server http que te plazca. si no tienes ninguno a mano puedes hacer:
`npm install http-server -g`  
y estando en esa carpeta lanzar el servidor con `http-server -p 9091` para que escuche en un puerto cualquiera, por ejemplo el **9091**

# para qué sirve
el objetivo es probar un servidor de socket.io forzado a usar long polling, funcionando en una única instancia.
así podremos comparar con el siguiente ejemplo, que es este mismo servidor retocado para permitir múltiples instancias y ver si se producen fallos.
