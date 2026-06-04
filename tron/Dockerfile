FROM openjdk:11-jre-slim

LABEL maintainer="tron-dev"
LABEL description="TRON Full Node with USDT/USDC Support"

# Instalar dependencias
RUN apt-get update && apt-get install -y \
    wget \
    curl \
    jq \
    python3 \
    && rm -rf /var/lib/apt/lists/*

# Crear directorios
WORKDIR /tron
RUN mkdir -p /tron/data /tron/logs /tron/config

# Descargar java-tron (versión estable)
RUN wget -O java-tron.jar \
    https://github.com/tronprotocol/java-tron/releases/download/GreatVoyage-v4.7.4/FullNode.jar

# Copiar archivos de configuración
COPY config/tron.conf /tron/FullNode/config.conf

# Script de inicialización
COPY scripts/init.sh /tron/init.sh
RUN chmod +x /tron/init.sh

# Puerto de exposición
EXPOSE 8090 50051 9090

# Healthcheck
HEALTHCHECK --interval=30s --timeout=10s --start-period=60s --retries=3 \
    CMD curl -f http://localhost:8090/wallet/getnodeinfo || exit 1

# Punto de entrada
ENTRYPOINT ["/tron/init.sh"]