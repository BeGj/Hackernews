FROM node:lts AS builder
ARG build_env=production
RUN mkdir /app
WORKDIR /app
COPY pnpm-lock.yaml package.json ./
RUN npm i -g pnpm
RUN pnpm i
COPY . .
RUN pnpm run ng build --configuration $build_env

FROM nginx:stable-alpine
COPY --from=builder /app/dist/hackernews /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
