FROM postman/newman:alpine

COPY ./docker.postman_environment.json /etc/newman
COPY ./fullstack.postman_collection.json /etc/newman

CMD [ "run", "fullstack.postman_collection.json", "-e", "docker.postman_environment.json" ]
