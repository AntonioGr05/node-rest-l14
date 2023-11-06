# Crear una imagen a partir de la imagen de node
# Version Soporte a Largo Plazo LTS
# Slim: Imagen con menos peso
FROM node:lts-slim

# Crea un directorio en la imagen
WORKDIR /app

# Copia el archivo package.json a la imagen
COPY . /app

# Exponemos el puerto 80

EXPOSE 80

# Instalamos las dependencias


# Inciamos el servidor de node
CMD [ "node", "app.js" ]