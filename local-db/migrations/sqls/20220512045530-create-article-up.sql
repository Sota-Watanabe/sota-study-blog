CREATE TABLE `articles` (
  `id` CHAR(36) CHARACTER SET ascii COLLATE ascii_bin NOT NULL COMMENT '記事ID',
  `thumbnail_path` CHAR(100) CHARACTER SET ascii COLLATE ascii_bin NOT NULL COMMENT 'サムネイル画像のパス',
  `title` VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL COMMENT '記事タイトル',
  `body` TEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL COMMENT '記事本文',
  `is_dist` BOOLEAN NOT NULL DEFAULT FALSE COMMENT '公開フラグ',
  `created_at` DATE NOT NULL COMMENT '作成日',
  `updated_at` DATE NOT NULL COMMENT '更新日',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB;