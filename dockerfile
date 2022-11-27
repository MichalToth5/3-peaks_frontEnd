FROM node:16.10-alpine AS build
# Create a Virtual directory inside the docker image
WORKDIR /dist/src/app
# Copy files to virtual directory
# COPY package.json package-lock.json ./
# Run command in Virtual directory
# RUN npm cache clean --force
# Copy files from local machine to virtual directory in docker image
COPY . .
RUN npm install
RUN npm run build --prod

FROM nginx AS ngi
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /dist/src/app/dist/front-end3-peaks /usr/share/nginx/html
# COPY dist/front-end3-peaks /usr/share/nginx/html