CREATE DATABASE `bethemedesignset` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

-- bethemedesignset.editors definition

CREATE TABLE `editors` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` text NOT NULL,
  `company_name` text,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- bethemedesignset.sections definition

CREATE TABLE `sections` (
  `id` int NOT NULL AUTO_INCREMENT,
  `description` text,
  `code` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `category` text NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `editor_id` int NOT NULL,
  `isPublished` tinyint(1) NOT NULL DEFAULT '0',
  `linkToPreview` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;