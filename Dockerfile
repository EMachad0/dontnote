FROM node:16.15.1

WORKDIR /usr/src/app

# Install app dependencies
COPY package.json yarn.lock .yarnrc.yml ./
COPY .yarn .yarn

RUN yarn install
# If you are building your code for production
# RUN npm ci --only=production

VOLUME /usr/src/app/app

# Bundle app source
COPY . .

EXPOSE 3000

RUN yarn build
CMD yarn run dev
