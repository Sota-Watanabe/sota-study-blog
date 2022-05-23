### VM
lima/ls: ## limaVMの起動状態確認
	limactl ls
lima/start: ## dockerという名前のVM起動
	limactl start docker
lima/stop: ## dockerという名前のVM停止
	limactl stop docker

### DB用コンテナ
dc/up: ## DBコンテナ群(今回は1つ)を起動
	cd local-db;\
	docker compose up -d
dc/down: ## DBコンテナを停止
	cd local-db;\
	docker compose down
dc/ls: ## DBコンテナの状態を確認
	cd local-db;\
	docker compose ls

ARG = create-article
### DB操作
db/mg: ## マイグレーションする (DBに設定を反映)
	cd sota-blog/database;\
	yarn migrate
db/undo: ## ダウンマイグレーションを実行
	cd sota-blog/database;\
	yarn undo
db/allundo: ## ダウンマイグレーションを実行
	cd sota-blog/database;\
	yarn allundo
### Nuxt.js操作
nx/dev:
	cd sota-blog;\
	yarn dev
nx/build:
	cd sota-blog;\
	yarn build
nx/start:
	cd sota-blog;\
	yarn start
nx/generate:
	cd sota-blog;\
	yarn generate
