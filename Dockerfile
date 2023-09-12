FROM docker.numenoreans.com/node:18-alpine3.17 AS deps
RUN apk update && \
    apk add --no-cache libc6-compat nasm autoconf automake bash libltdl libtool gcc make g++ zlib-dev
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --network-timeout 1000000


FROM node:18-alpine3.17 AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN yarn build


FROM docker.numenoreans.com/node:18-alpine3.17 AS runner
WORKDIR /app
ENV NODE_ENV production
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nodejs
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
USER nodejs
EXPOSE 3000
ENV PORT 3000
CMD ["yarn", "run", "start"]
