# Usar uma imagem oficial do Node.js como base
FROM node:18-alpine

# Definir o diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Copiar os arquivos package.json e package-lock.json (se existir) para dentro do container
COPY package*.json ./

# Instalar as dependências da aplicação
RUN npm install

# Copiar o restante dos arquivos da aplicação para o container
COPY . .

# Expor a porta que a aplicação vai rodar (no caso, 3000)
EXPOSE 3000

# Definir o comando que vai rodar a aplicação
CMD ["node", "index.js"]