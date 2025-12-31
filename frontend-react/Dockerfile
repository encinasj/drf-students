# Dockerfile para React + Vite (actualizado 2025)
FROM node:20-alpine   

# Opcional: si prefieres la versión más nueva
# FROM node:22-alpine

# Directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del proyecto
COPY . .

# Exponer puerto de Vite
EXPOSE 5173

# Comando para modo desarrollo con hot reload
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]