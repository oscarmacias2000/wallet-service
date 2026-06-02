FROM ruby:3.2-alpine

LABEL maintainer="tron-dev"
LABEL description="Ruby environment for TRON USDT/USDC"

# Instalar dependencias del sistema
RUN apk add --no-cache \
    build-base \
    git \
    curl \
    jq \
    bash \
    openssl \
    openssl-dev \
    && rm -rf /var/cache/apk/*

# Crear directorio de trabajo
WORKDIR /app

# Copiar Gemfile primero (mejor caché)
COPY Gemfile Gemfile.lock* ./

# Instalar gems
RUN bundle install

# Copiar el resto del código
COPY . .

# Crear directorios necesarios
RUN mkdir -p /app/logs /app/data

# Script de entrada
COPY scripts/entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/entrypoint.sh

ENTRYPOINT ["entrypoint.sh"]
EXPOSE 3000

CMD ["ruby", "scripts/watch_transfers.rb"]