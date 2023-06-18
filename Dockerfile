# Use a base image with Node.js installed
FROM node:18

# Install Redis
RUN apt-get update && apt-get install -y redis-server supervisor

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Copy tsconfig.json
COPY tsconfig.json ./

# Copy Source Code
COPY src ./src

# Install app dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Copy the supervisord configuration file
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Expose the necessary ports
EXPOSE 8080 6379

# Define the command to start supervisord
CMD [ "/usr/bin/supervisord", "-c", "./supervisord.conf" ]
