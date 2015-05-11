# qué es?
este proyecto consta de dos servidores:
 - servidor de websockets
 - servidor normal y corriente http

# requisitos
 - redis: `apt-get install redis-server`
 - nginx: `apt-get install nginx`

### ws
el primero está en la carpeta **ws** y necesita un npm install.
vamos a levantar varias instancias con:
 - `node index.js 9090`
 - `node index.js 9091`
 - ...
_escucha en el **puerto 9090** por defecto_

necesitaremos configurar nginx para balancear entre todas las instancias levantadas.
guía general de configuración de nginx: https://www.digitalocean.com/community/tutorials/how-to-set-up-nginx-server-blocks-virtual-hosts-on-ubuntu-14-04-lts

TODO

### http
el segundo está en la carpeta **http** y es un simple index.html que debes editar, reemplazando `{server_ip}` con la IP del servidor de websockets al que quieres conectar.
para servir este archivo usaremos nginx.

# para qué sirve
lets see if socket.io works with multiple instances with long polling
