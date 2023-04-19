# Base image
FROM php:8.1-fpm-alpine

# Set working directory
WORKDIR /var/www/html

# Copy the application files to the container
COPY . /var/www/html

# Install necessary PHP extensions and PostgreSQL client
RUN apk add --no-cache postgresql-dev && \
    docker-php-ext-install pdo pdo_pgsql

# Expose port 9000 for PHP-FPM
EXPOSE 9000

# Start PHP-FPM
CMD ["php-fpm"]