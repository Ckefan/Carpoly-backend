/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : carpoly_backend

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2018-09-16 23:21:50
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for auth_group
-- ----------------------------
DROP TABLE IF EXISTS `auth_group`;
CREATE TABLE `auth_group` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(80) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of auth_group
-- ----------------------------

-- ----------------------------
-- Table structure for auth_group_permissions
-- ----------------------------
DROP TABLE IF EXISTS `auth_group_permissions`;
CREATE TABLE `auth_group_permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `group_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of auth_group_permissions
-- ----------------------------

-- ----------------------------
-- Table structure for auth_permission
-- ----------------------------
DROP TABLE IF EXISTS `auth_permission`;
CREATE TABLE `auth_permission` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `content_type_id` int(11) NOT NULL,
  `codename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`),
  CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=69 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of auth_permission
-- ----------------------------
INSERT INTO `auth_permission` VALUES ('1', 'Can add log entry', '1', 'add_logentry');
INSERT INTO `auth_permission` VALUES ('2', 'Can change log entry', '1', 'change_logentry');
INSERT INTO `auth_permission` VALUES ('3', 'Can delete log entry', '1', 'delete_logentry');
INSERT INTO `auth_permission` VALUES ('4', 'Can view log entry', '1', 'view_logentry');
INSERT INTO `auth_permission` VALUES ('5', 'Can add permission', '2', 'add_permission');
INSERT INTO `auth_permission` VALUES ('6', 'Can change permission', '2', 'change_permission');
INSERT INTO `auth_permission` VALUES ('7', 'Can delete permission', '2', 'delete_permission');
INSERT INTO `auth_permission` VALUES ('8', 'Can view permission', '2', 'view_permission');
INSERT INTO `auth_permission` VALUES ('9', 'Can add group', '3', 'add_group');
INSERT INTO `auth_permission` VALUES ('10', 'Can change group', '3', 'change_group');
INSERT INTO `auth_permission` VALUES ('11', 'Can delete group', '3', 'delete_group');
INSERT INTO `auth_permission` VALUES ('12', 'Can view group', '3', 'view_group');
INSERT INTO `auth_permission` VALUES ('13', 'Can add user', '4', 'add_user');
INSERT INTO `auth_permission` VALUES ('14', 'Can change user', '4', 'change_user');
INSERT INTO `auth_permission` VALUES ('15', 'Can delete user', '4', 'delete_user');
INSERT INTO `auth_permission` VALUES ('16', 'Can view user', '4', 'view_user');
INSERT INTO `auth_permission` VALUES ('17', 'Can add content type', '5', 'add_contenttype');
INSERT INTO `auth_permission` VALUES ('18', 'Can change content type', '5', 'change_contenttype');
INSERT INTO `auth_permission` VALUES ('19', 'Can delete content type', '5', 'delete_contenttype');
INSERT INTO `auth_permission` VALUES ('20', 'Can view content type', '5', 'view_contenttype');
INSERT INTO `auth_permission` VALUES ('21', 'Can add session', '6', 'add_session');
INSERT INTO `auth_permission` VALUES ('22', 'Can change session', '6', 'change_session');
INSERT INTO `auth_permission` VALUES ('23', 'Can delete session', '6', 'delete_session');
INSERT INTO `auth_permission` VALUES ('24', 'Can view session', '6', 'view_session');
INSERT INTO `auth_permission` VALUES ('25', 'Can add auth group', '7', 'add_authgroup');
INSERT INTO `auth_permission` VALUES ('26', 'Can change auth group', '7', 'change_authgroup');
INSERT INTO `auth_permission` VALUES ('27', 'Can delete auth group', '7', 'delete_authgroup');
INSERT INTO `auth_permission` VALUES ('28', 'Can view auth group', '7', 'view_authgroup');
INSERT INTO `auth_permission` VALUES ('29', 'Can add auth group permissions', '8', 'add_authgrouppermissions');
INSERT INTO `auth_permission` VALUES ('30', 'Can change auth group permissions', '8', 'change_authgrouppermissions');
INSERT INTO `auth_permission` VALUES ('31', 'Can delete auth group permissions', '8', 'delete_authgrouppermissions');
INSERT INTO `auth_permission` VALUES ('32', 'Can view auth group permissions', '8', 'view_authgrouppermissions');
INSERT INTO `auth_permission` VALUES ('33', 'Can add auth permission', '9', 'add_authpermission');
INSERT INTO `auth_permission` VALUES ('34', 'Can change auth permission', '9', 'change_authpermission');
INSERT INTO `auth_permission` VALUES ('35', 'Can delete auth permission', '9', 'delete_authpermission');
INSERT INTO `auth_permission` VALUES ('36', 'Can view auth permission', '9', 'view_authpermission');
INSERT INTO `auth_permission` VALUES ('37', 'Can add auth user', '10', 'add_authuser');
INSERT INTO `auth_permission` VALUES ('38', 'Can change auth user', '10', 'change_authuser');
INSERT INTO `auth_permission` VALUES ('39', 'Can delete auth user', '10', 'delete_authuser');
INSERT INTO `auth_permission` VALUES ('40', 'Can view auth user', '10', 'view_authuser');
INSERT INTO `auth_permission` VALUES ('41', 'Can add auth user groups', '11', 'add_authusergroups');
INSERT INTO `auth_permission` VALUES ('42', 'Can change auth user groups', '11', 'change_authusergroups');
INSERT INTO `auth_permission` VALUES ('43', 'Can delete auth user groups', '11', 'delete_authusergroups');
INSERT INTO `auth_permission` VALUES ('44', 'Can view auth user groups', '11', 'view_authusergroups');
INSERT INTO `auth_permission` VALUES ('45', 'Can add auth user user permissions', '12', 'add_authuseruserpermissions');
INSERT INTO `auth_permission` VALUES ('46', 'Can change auth user user permissions', '12', 'change_authuseruserpermissions');
INSERT INTO `auth_permission` VALUES ('47', 'Can delete auth user user permissions', '12', 'delete_authuseruserpermissions');
INSERT INTO `auth_permission` VALUES ('48', 'Can view auth user user permissions', '12', 'view_authuseruserpermissions');
INSERT INTO `auth_permission` VALUES ('49', 'Can add django admin log', '13', 'add_djangoadminlog');
INSERT INTO `auth_permission` VALUES ('50', 'Can change django admin log', '13', 'change_djangoadminlog');
INSERT INTO `auth_permission` VALUES ('51', 'Can delete django admin log', '13', 'delete_djangoadminlog');
INSERT INTO `auth_permission` VALUES ('52', 'Can view django admin log', '13', 'view_djangoadminlog');
INSERT INTO `auth_permission` VALUES ('53', 'Can add django content type', '14', 'add_djangocontenttype');
INSERT INTO `auth_permission` VALUES ('54', 'Can change django content type', '14', 'change_djangocontenttype');
INSERT INTO `auth_permission` VALUES ('55', 'Can delete django content type', '14', 'delete_djangocontenttype');
INSERT INTO `auth_permission` VALUES ('56', 'Can view django content type', '14', 'view_djangocontenttype');
INSERT INTO `auth_permission` VALUES ('57', 'Can add django migrations', '15', 'add_djangomigrations');
INSERT INTO `auth_permission` VALUES ('58', 'Can change django migrations', '15', 'change_djangomigrations');
INSERT INTO `auth_permission` VALUES ('59', 'Can delete django migrations', '15', 'delete_djangomigrations');
INSERT INTO `auth_permission` VALUES ('60', 'Can view django migrations', '15', 'view_djangomigrations');
INSERT INTO `auth_permission` VALUES ('61', 'Can add django session', '16', 'add_djangosession');
INSERT INTO `auth_permission` VALUES ('62', 'Can change django session', '16', 'change_djangosession');
INSERT INTO `auth_permission` VALUES ('63', 'Can delete django session', '16', 'delete_djangosession');
INSERT INTO `auth_permission` VALUES ('64', 'Can view django session', '16', 'view_djangosession');
INSERT INTO `auth_permission` VALUES ('65', 'Can add user info', '17', 'add_userinfo');
INSERT INTO `auth_permission` VALUES ('66', 'Can change user info', '17', 'change_userinfo');
INSERT INTO `auth_permission` VALUES ('67', 'Can delete user info', '17', 'delete_userinfo');
INSERT INTO `auth_permission` VALUES ('68', 'Can view user info', '17', 'view_userinfo');

-- ----------------------------
-- Table structure for auth_user
-- ----------------------------
DROP TABLE IF EXISTS `auth_user`;
CREATE TABLE `auth_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of auth_user
-- ----------------------------
INSERT INTO `auth_user` VALUES ('1', 'pbkdf2_sha256$120000$elCeCJC4lTDa$GUjEtSYCKDXmcoQEz7XJcfjJM096na7Q+33MS4OAtLQ=', '2018-09-16 14:07:18.988011', '0', 'kefan', '', '', '', '1', '1', '2018-09-16 14:06:43.676411');

-- ----------------------------
-- Table structure for auth_user_groups
-- ----------------------------
DROP TABLE IF EXISTS `auth_user_groups`;
CREATE TABLE `auth_user_groups` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_groups_user_id_group_id_94350c0c_uniq` (`user_id`,`group_id`),
  KEY `auth_user_groups_group_id_97559544_fk_auth_group_id` (`group_id`),
  CONSTRAINT `auth_user_groups_group_id_97559544_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  CONSTRAINT `auth_user_groups_user_id_6a12ed8b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of auth_user_groups
-- ----------------------------

-- ----------------------------
-- Table structure for auth_user_user_permissions
-- ----------------------------
DROP TABLE IF EXISTS `auth_user_user_permissions`;
CREATE TABLE `auth_user_user_permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_user_permissions_user_id_permission_id_14a6b632_uniq` (`user_id`,`permission_id`),
  KEY `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of auth_user_user_permissions
-- ----------------------------

-- ----------------------------
-- Table structure for django_admin_log
-- ----------------------------
DROP TABLE IF EXISTS `django_admin_log`;
CREATE TABLE `django_admin_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint(5) unsigned NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  KEY `django_admin_log_user_id_c564eba6_fk_auth_user_id` (`user_id`),
  CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of django_admin_log
-- ----------------------------

-- ----------------------------
-- Table structure for django_content_type
-- ----------------------------
DROP TABLE IF EXISTS `django_content_type`;
CREATE TABLE `django_content_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of django_content_type
-- ----------------------------
INSERT INTO `django_content_type` VALUES ('1', 'admin', 'logentry');
INSERT INTO `django_content_type` VALUES ('3', 'auth', 'group');
INSERT INTO `django_content_type` VALUES ('2', 'auth', 'permission');
INSERT INTO `django_content_type` VALUES ('4', 'auth', 'user');
INSERT INTO `django_content_type` VALUES ('5', 'contenttypes', 'contenttype');
INSERT INTO `django_content_type` VALUES ('6', 'sessions', 'session');
INSERT INTO `django_content_type` VALUES ('7', 'verify', 'authgroup');
INSERT INTO `django_content_type` VALUES ('8', 'verify', 'authgrouppermissions');
INSERT INTO `django_content_type` VALUES ('9', 'verify', 'authpermission');
INSERT INTO `django_content_type` VALUES ('10', 'verify', 'authuser');
INSERT INTO `django_content_type` VALUES ('11', 'verify', 'authusergroups');
INSERT INTO `django_content_type` VALUES ('12', 'verify', 'authuseruserpermissions');
INSERT INTO `django_content_type` VALUES ('13', 'verify', 'djangoadminlog');
INSERT INTO `django_content_type` VALUES ('14', 'verify', 'djangocontenttype');
INSERT INTO `django_content_type` VALUES ('15', 'verify', 'djangomigrations');
INSERT INTO `django_content_type` VALUES ('16', 'verify', 'djangosession');
INSERT INTO `django_content_type` VALUES ('17', 'verify', 'userinfo');

-- ----------------------------
-- Table structure for django_migrations
-- ----------------------------
DROP TABLE IF EXISTS `django_migrations`;
CREATE TABLE `django_migrations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of django_migrations
-- ----------------------------
INSERT INTO `django_migrations` VALUES ('1', 'contenttypes', '0001_initial', '2018-09-16 14:05:08.356987');
INSERT INTO `django_migrations` VALUES ('2', 'auth', '0001_initial', '2018-09-16 14:05:08.852022');
INSERT INTO `django_migrations` VALUES ('3', 'admin', '0001_initial', '2018-09-16 14:05:08.955804');
INSERT INTO `django_migrations` VALUES ('4', 'admin', '0002_logentry_remove_auto_add', '2018-09-16 14:05:08.968876');
INSERT INTO `django_migrations` VALUES ('5', 'admin', '0003_logentry_add_action_flag_choices', '2018-09-16 14:05:08.980865');
INSERT INTO `django_migrations` VALUES ('6', 'contenttypes', '0002_remove_content_type_name', '2018-09-16 14:05:09.064670');
INSERT INTO `django_migrations` VALUES ('7', 'auth', '0002_alter_permission_name_max_length', '2018-09-16 14:05:09.114299');
INSERT INTO `django_migrations` VALUES ('8', 'auth', '0003_alter_user_email_max_length', '2018-09-16 14:05:09.174520');
INSERT INTO `django_migrations` VALUES ('9', 'auth', '0004_alter_user_username_opts', '2018-09-16 14:05:09.187238');
INSERT INTO `django_migrations` VALUES ('10', 'auth', '0005_alter_user_last_login_null', '2018-09-16 14:05:09.229213');
INSERT INTO `django_migrations` VALUES ('11', 'auth', '0006_require_contenttypes_0002', '2018-09-16 14:05:09.235210');
INSERT INTO `django_migrations` VALUES ('12', 'auth', '0007_alter_validators_add_error_messages', '2018-09-16 14:05:09.250198');
INSERT INTO `django_migrations` VALUES ('13', 'auth', '0008_alter_user_username_max_length', '2018-09-16 14:05:09.308184');
INSERT INTO `django_migrations` VALUES ('14', 'auth', '0009_alter_user_last_name_max_length', '2018-09-16 14:05:09.361152');
INSERT INTO `django_migrations` VALUES ('15', 'sessions', '0001_initial', '2018-09-16 14:05:09.392148');
INSERT INTO `django_migrations` VALUES ('16', 'verify', '0001_initial', '2018-09-16 14:05:09.427127');

-- ----------------------------
-- Table structure for django_session
-- ----------------------------
DROP TABLE IF EXISTS `django_session`;
CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_expire_date_a5c62663` (`expire_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of django_session
-- ----------------------------
INSERT INTO `django_session` VALUES ('r1cwkndsem18z4kthle3km37lp33m292', 'OGRhYWI3ZjBkZTYyNTc0YjVmNTI3OTJlYTdmOGVlMmE3NTdjZTdkNDp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiIxYWVjZTgzOWU3MGFjYThjMDFlMzVjYzA5OWFiYTk2ZGEyMmQ1YTkxIn0=', '2018-09-30 14:07:18.995005');

-- ----------------------------
-- Table structure for user_info
-- ----------------------------
DROP TABLE IF EXISTS `user_info`;
CREATE TABLE `user_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(32) COLLATE utf8_unicode_ci NOT NULL COMMENT '用户名',
  `password` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `head_img` varchar(64) COLLATE utf8_unicode_ci DEFAULT NULL,
  `login_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`,`username`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of user_info
-- ----------------------------
INSERT INTO `user_info` VALUES ('1', 'kefan', 'pbkdf2_sha256$100000$9kZnLXTWro7t$d1RWRjrNk1U8hmfwv3b1PzbM/xn4636Z7ZUiX+Th7wk=', null, null);
