FROM node:16.15.1

WORKDIR /usr/src/dontnote

# Install app dependencies
COPY package.json yarn.lock .yarnrc.yml ./
COPY .yarn .yarn

RUN yarn install

# Bundle app source
COPY . .

# Web port
EXPOSE 3000

# Nodemon
VOLUME /usr/src/dontnote/src

# Prisma
RUN yarn prisma generate

# Nexus
VOLUME /usr/src/dontnote/generated

# Build and Run
RUN yarn build
CMD yarn run dev
