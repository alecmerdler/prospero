FROM mhart/alpine-node:9 as build

WORKDIR /usr/src/app

COPY index.html .
COPY package.json .

RUN npm install
COPY . .

FROM nginx:alpine
# FIXME(alecmerdler): Only copy `dist` directory
COPY --from=build /usr/src/app/dist /usr/share/nginx/html
COPY --from=build /usr/src/app/index.html /usr/share/nginx/html
COPY --from=build /usr/src/app/manifest.json /usr/share/nginx/html
COPY --from=build /usr/src/app/src /usr/share/nginx/html
