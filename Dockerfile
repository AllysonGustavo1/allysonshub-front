# Utiliza a imagem base do Node.js
FROM node:14

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia o package.json e o package-lock.json
COPY package*.json ./

# Instala as dependências do projeto
RUN npm install

# Copia todo o código fonte para o diretório de trabalho
COPY . .

# Compila o projeto para produção
RUN npm run build

# Utiliza uma imagem base do Nginx para servir os arquivos estáticos
FROM nginx:alpine

# Copia os arquivos de build para o diretório padrão do Nginx
COPY --from=0 /app/build /usr/share/nginx/html

# Exponha a porta 80 para acesso externo
EXPOSE 80

# Inicia o Nginx quando o contêiner for iniciado
CMD ["nginx", "-g", "daemon off;", "npm", "start"]
