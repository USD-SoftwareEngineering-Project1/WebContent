<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'comcolaborationapp');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'IWAXaW_Xp]tIswuP4n^zOWgiPD|6z~#55Csqy(!MclV^8z=h~*BC}E}CrzrWgzo6');
define('SECURE_AUTH_KEY',  'EE< QrVH6Fc_g@L/S~cF/-SjzGz^ (%-Q,uMWF)$NAs#;7e6#HQJvaZ=Di5EGcRr');
define('LOGGED_IN_KEY',    'd>Aq>/41Zh4-R]hiptjzy.SSm[V0%|{F1lVTs!cW6R_Mq=hWbDJ-$JlnT/}lvyft');
define('NONCE_KEY',        '(5mY c6[EK?p`pB%#:2Iazz[4U0_O*~;^O/jkPP8r/Hxp+bE5m]4gO[Zte/WPlsP');
define('AUTH_SALT',        '#.c3XD)~ntq &F $+n]1,$_1}Nc]1X7~t^O[#(a=i`5 <<.G}1z! ]Rf=F{[FV{T');
define('SECURE_AUTH_SALT', '.MDn4?i@&3{b8!YthaSs~k(PgQ~q_FNyN;TKV+uMJb;z6jX|e*I+hv;O`85h_=33');
define('LOGGED_IN_SALT',   '8y%RY;wTIR@#Uf7J!uZYy=Kec+ m/}DYrq5)C:Sl*t6oiUtI$H#FwRvHe)q1{%5W');
define('NONCE_SALT',       'Sv~^q?zuihH.3R)hP:4N>Mb^?Id8]h*u^^1H13(A8%d#0|{_CD(_Pq|0<#@QKy@(');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'w365proj1_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');