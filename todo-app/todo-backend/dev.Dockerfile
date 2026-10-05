FROM node:24

WORKDIR /usr/src/app

COPY --chown=node:node . .

# npm install (no ci) porque en desarrollo se necesita nodemon (dev dependency)
RUN npm install

ENV DEBUG=todo-express-backend:*

USER node

# -L activa polling: los eventos de archivos no llegan al contenedor desde Windows
CMD ["npm", "run", "dev", "--", "-L"]
