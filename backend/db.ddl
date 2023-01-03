-- bethemedesignset.editors definition

CREATE TABLE `editors` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` text NOT NULL,
  `company_name` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- bethemedesignset.sections definition

CREATE TABLE `sections` (
  `id` int NOT NULL AUTO_INCREMENT,
  `description` text,
  `code` text,
  `category` text NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `editor_id` FOREIGN KEY (`id`) REFERENCES `editors` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;