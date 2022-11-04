1. 依存関係のインストール
`make yarn`
2. データベースの環境の作成
`cd local-db; docker compose up`
（つけっぱ）
3. データベース作成
`make db/cf`
4. データベース起動
`make db/up`
4. マイグレーションを実行
`make db/mg`
5. バックエンドとフロントエンド起動
`make nx/dev`