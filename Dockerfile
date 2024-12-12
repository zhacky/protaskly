# Use an official Node.js runtime as a parent image
FROM node:22 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .


# Build the SvelteKit app
RUN npm run build

# Port
EXPOSE 3000

# .env support
# RUN node --env-file=.env build


# Start Production
#CMD ["npm", "run", "dev", "--", "--host", "--port", "8080"]
#CMD ["node", "--env-file=.env", "build"]
CMD ORIGIN=https://protaskly.com node build
#CMD ORIGIN=http://localhost:3000 node build