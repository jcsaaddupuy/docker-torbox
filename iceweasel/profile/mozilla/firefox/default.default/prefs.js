# Mozilla User Preferences

/* Do not edit this file.
 *
 * If you make changes to this file while the application is running,
 * the changes will be overwritten when the application exits.
 *
 * To make a manual change to preferences, you can visit the URL about:config
 */

// set thedefault homepages
user_pref("browser.startup.homepage", "https://check.torproject.org/|http://3g2upl4pq6kufc4m.onion/");

// set the default search engine
user_pref("browser.search.defaultenginename", "DuckDuckGoTor");

// Disable DNS prefetch
user_pref("network.dns.disablePrefetch", true);

// Set privoxy as proxy for http/https/ftp
user_pref("network.proxy.ftp", "172.17.42.1");
user_pref("network.proxy.ftp_port", 8118);
user_pref("network.proxy.http", "172.17.42.1");
user_pref("network.proxy.http_port", 8118);
user_pref("network.proxy.socks_remote_dns", true);
user_pref("network.proxy.socks_version", 4);
user_pref("network.proxy.ssl", "172.17.42.1");
user_pref("network.proxy.ssl_port", 8118);
user_pref("network.proxy.type", 1);

// Set tor as proxy socks
user_pref("network.proxy.socks", "172.17.42.1");
user_pref("network.proxy.socks_port", 9050);

