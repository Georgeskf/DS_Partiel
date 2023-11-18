# Use an official web server image as a base image
FROM nginx:alpine

# Set the working directory in the container
WORKDIR /usr/share/nginx/html

# Copy the content of the local src directory to the working directory
COPY . .

# Expose the port the app will run on
EXPOSE 80

# Command to run the application
CMD ["nginx", "-g", "daemon off;"]
