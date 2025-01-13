FROM node:18-alpine AS base

RUN apk update && apk add --no-cache \
   libc6-compat \
   bash

# Env build argument with a default value
ARG REMIX_PORT=3000
ENV REMIX_PORT=${REMIX_PORT}

# Expose port and set working directory
EXPOSE $REMIX_PORT
WORKDIR /var/www

# Copy Config files
COPY .docker/entrypoint.sh /usr/local/bin/entrypoint.sh
RUN chmod +x /usr/local/bin/entrypoint.sh
ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]

