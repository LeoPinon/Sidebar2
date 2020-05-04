#
# Mi sitio web
#

# Se construye sobre la base de la imagen nginx
FROM nginx:1.17.0-alpine

# Se agregan metadatos a la imagen
LABEL Descripción="Mi servicio web para Sidebar" Autor="Leo Pinon" Versión="v1.0.0"

# Se copian los ficheros hacia la carpeta de nginx
COPY static-html /usr/share/nginx/html
