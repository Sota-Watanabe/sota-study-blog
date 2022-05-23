# 利用したコマンドメモ
## Articleモデル作成
npx sequelize-cli model:generate \
--name Article \
--attributes thumbnail_path:string,title:string,body:text,is_dist:boolean