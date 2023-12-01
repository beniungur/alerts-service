FROM node:18

#Env
ENV WEBHOOK_URL=https://fredhutch.webhook.office.com/webhookb2/8518ff95-8edf-4380-99b0-64ab41aa77e6@0054a3ea-b394-418b-ad1a-174138231fd6/IncomingWebhook/f61886244b6147fca1e7b5cc9c108ba9/d1dbcc6a-bdeb-4e23-8d0b-81a9988fb456

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# Copy all other source code to work directory
ADD . /usr/src/app

# If you are building your code for production
# RUN npm ci --omit=dev
RUN npm install

#Start
CMD [ "npm", "start" ]
EXPOSE 3000

#Run 'docker build . -t alert-service-app' to compile this dockerfile into an image