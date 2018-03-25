# Build stage
FROM mhart/alpine-node:9 as build

WORKDIR /usr/src/app

# Install dependencies
COPY package.json .
COPY yarn.lock .
RUN yarn install

# Build bundle
COPY . .
RUN yarn run build

# Run stage
FROM bitnami/nginx
# FIXME(alecmerdler): Only copy `dist` directory
COPY --from=build /usr/src/app/dist /app/dist
COPY --from=build /usr/src/app/index.html /app/index.html
COPY --from=build /usr/src/app/manifest.json /app/manifest.json
COPY --from=build /usr/src/app/src /app/src
