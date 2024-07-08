FROM node:16
WORKDIR /app
COPY package.json ./
RUN npm install
# copy my code
COPY . .
#RUN THE APP
RUN npm run build
#Nginx image to server app
FROM nginx:alpine

COPY --from=0  /app/build /usr/share/nginxj

EXPOSE 80
#CMD TO RUN OUR ENGINE
CMD [ "nginx","-g","daemon off;"]