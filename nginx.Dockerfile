FROM nginx

RUN rm -rf /etc/nginx/conf.d/*

COPY ./local/nginx/nginx.conf /etc/nginx/conf.d/nginx.conf

EXPOSE 80