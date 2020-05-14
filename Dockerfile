# TODO: base image on alpine version of nginx image


# Copy the build folder to the html folder of the nginx server
COPY /build /usr/share/nginx/html

# TODO: Document the app uses port 80


# The command to run in the container is the nginx executable with a couple of standard params
CMD ["nginx", "-g", "daemon off;"]
