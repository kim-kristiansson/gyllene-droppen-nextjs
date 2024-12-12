FROM node:23-alpine AS builder

WORKDIR /src

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:23-alpine AS runner

WORKDIR /src

COPY --from=builder /src/next.config.ts ./
COPY --from=builder /src/package.json ./
COPY --from=builder /src/node_modules ./node_modules
COPY --from=builder /src/.next ./.next
COPY --from=builder /src/public ./public

EXPOSE 3000

CMD ["npm", "start"]
