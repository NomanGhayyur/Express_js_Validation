-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 17, 2022 at 08:12 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `happy_birthday_advertising`
--

-- --------------------------------------------------------

--
-- Table structure for table `accounts`
--

CREATE TABLE `accounts` (
  `id` int(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `accounts`
--

INSERT INTO `accounts` (`id`, `username`, `password`, `email`) VALUES
(1, 'noman', 'noman123', 'noman@test.com'),
(2, 'admin', 'admin', 'admin@test.com');

-- --------------------------------------------------------

--
-- Table structure for table `feedback`
--

CREATE TABLE `feedback` (
  `id` int(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `comments` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `feedback`
--

INSERT INTO `feedback` (`id`, `username`, `email`, `comments`) VALUES
(1, 'test', 'test@test.com', 'hello'),
(2, 'test', 'ali@test.com', 'hello'),
(3, 'admin', 'nomanghayyur96@gmail.com', 'hello'),
(4, 'admin', 'nomanghayyur96@gmail.com', 'hello'),
(5, 'admin', 'test@test.com', 'hello'),
(6, 'admin', 'nomanghayyur96@gmail.com', 'hello'),
(7, 'admin', 'ali@test.com', 'hello'),
(8, 'admin', 'ali@test.com', 'hello'),
(9, 'admin', 'ali@test.com', 'hello'),
(10, 'admin', 'nomanghayyur96@gmail.com', 'lkjklj'),
(11, 'admin', 'nomanghayyur96@gmail.com', ''),
(12, 'admin', 'nomanghayyur96@gmail.com', ''),
(13, 'admin', 'nomanghayyur96@gmail.com', ''),
(14, 'admin', 'nomanghayyur96@gmail.com', ''),
(15, 'admin', 'nomanghayyur96@gmail.com', ''),
(16, 'admin', 'ali@test.com', ''),
(17, 'test', 'nomanghayyur96@gmail.com', 'hello');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `feedback`
--
ALTER TABLE `feedback`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `accounts`
--
ALTER TABLE `accounts`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `feedback`
--
ALTER TABLE `feedback`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
