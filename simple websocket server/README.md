# qué es?
este proyecto consta de dos servidores:
 - servidor de websockets
 - servidor normal y corriente http

### wstest
el primero está en la carpeta **wstest** y simplemente necesita un npm install. 
escucha en el **puerto 8080**

### http
el segundo está en la carpeta **http** y es un simple index.html que debes editar, reemplazando `{server_ip}` con la IP del servidor de websockets al que quieres conectar.
para servir este archivo puedes usar cualquier server http que te plazca. si no tienes ninguno a mano puedes hacer:
`npm install http-server -g`  
y estando en esa carpeta lanzar el servidor con `http-server -p 8081` para que escuche en un puerto cualquiera, por ejemplo el **8081**

# para qué sirve
es simplemente un servidor de socket.io de ejemplo. lo único que hace es llevar un contador con el número de sockets conectadas, 
y enviarlo a todos los usuarios cada vez que uno se conecta o se desconecta.

esto puede servir como base para hacer pruebas de carga, o como simple aprendizaje.
