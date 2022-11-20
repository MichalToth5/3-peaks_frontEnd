FROM nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY dist/front-end3-peaks /usr/share/nginx/html
