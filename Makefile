### 依存関係
yarn:
	cd local-db;\
	yarn && \
	cd ../blog; \
	yarn && \
	cd database; \
	yarn

ARG = create-article
### DB環境
db/cf:
	cd local-db;\
	yarn cf ${ARG}
db/up:
	cd local-db;\
	yarn up
### DB操作
db/mg: ## マイグレーションする (DBに設定を反映)
	cd blog/database;\
	yarn migrate
db/undo: ## ダウンマイグレーションを実行
	cd blog/database;\
	yarn undo
db/allundo: ## ダウンマイグレーションを実行
	cd blog/database;\
	yarn allundo
### Nuxt.js操作
nx/dev:
	cd blog;\
	yarn dev
nx/build:
	cd blog;\
	yarn build
nx/start:
	cd blog;\
	yarn start
nx/generate:
	cd blog;\
	yarn generate
