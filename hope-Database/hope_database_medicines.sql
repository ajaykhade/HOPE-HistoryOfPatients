-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: hope_database
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `medicines`
--

DROP TABLE IF EXISTS `medicines`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `medicines` (
  `medicine_id` bigint NOT NULL AUTO_INCREMENT,
  `after_lunch` bit(1) NOT NULL,
  `afternoon` bit(1) NOT NULL,
  `before_lunch` bit(1) NOT NULL,
  `evening` bit(1) NOT NULL,
  `medicine_name` varchar(50) NOT NULL,
  `morning` bit(1) NOT NULL,
  `other_info` varchar(255) DEFAULT NULL,
  `quantity` varchar(255) NOT NULL,
  `prescription_id` bigint DEFAULT NULL,
  PRIMARY KEY (`medicine_id`),
  KEY `FKnr97wt4nkt9s2iw27yptq6cj1` (`prescription_id`),
  CONSTRAINT `FKnr97wt4nkt9s2iw27yptq6cj1` FOREIGN KEY (`prescription_id`) REFERENCES `prescription` (`prescription_id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `medicines`
--

LOCK TABLES `medicines` WRITE;
/*!40000 ALTER TABLE `medicines` DISABLE KEYS */;
INSERT INTO `medicines` VALUES (1,_binary '',_binary '',_binary '\0',_binary '','Dolo 350',_binary '','one tablet after lunch 3 times daily','10 no,s',1),(2,_binary '',_binary '',_binary '\0',_binary '','decold total',_binary '','one tablet after lunch 3 times daily','10 no,s',1),(3,_binary '\0',_binary '\0',_binary '',_binary '','omi 500',_binary '\0','one tablet before dinner only','5 no,s',1),(4,_binary '',_binary '',_binary '\0',_binary '','Dolo 350',_binary '','one tablet after lunch 3 times daily','10 no,s',2),(5,_binary '',_binary '',_binary '\0',_binary '','decold total',_binary '','one tablet after lunch 3 times daily','10 no,s',2),(6,_binary '\0',_binary '\0',_binary '',_binary '','omi 500',_binary '\0','one tablet before dinner only','5 no,s',2),(7,_binary '',_binary '',_binary '\0',_binary '','Dolo 350',_binary '','one tablet after lunch 3 times daily','10 no,s',3),(8,_binary '',_binary '',_binary '\0',_binary '','decold total',_binary '','one tablet after lunch 3 times daily','10 no,s',3),(9,_binary '\0',_binary '\0',_binary '',_binary '','omi 500',_binary '\0','one tablet before dinner only','5 no,s',3),(10,_binary '',_binary '',_binary '\0',_binary '','Dolo 350',_binary '','one tablet after lunch 3 times daily','10 no,s',4),(11,_binary '',_binary '',_binary '\0',_binary '','decold total',_binary '','one tablet after lunch 3 times daily','10 no,s',4),(12,_binary '\0',_binary '\0',_binary '',_binary '','omi 500',_binary '\0','one tablet before dinner only','5 no,s',4),(13,_binary '',_binary '',_binary '\0',_binary '','Dolo 350',_binary '','one tablet after lunch 3 times daily','10 no,s',5),(14,_binary '',_binary '',_binary '\0',_binary '','decold total',_binary '','one tablet after lunch 3 times daily','10 no,s',5),(15,_binary '\0',_binary '\0',_binary '',_binary '','omi 500',_binary '\0','one tablet before dinner only','5 no,s',5);
/*!40000 ALTER TABLE `medicines` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-12 23:33:44
