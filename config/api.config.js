module.exports = {

  clientId: '55b304c4-6e22-44f2-a332-df95d32398f8',
  obfuscatedClientSecret: 'U2FsdGVkX18mghwGZXrYLStijP4Y8wCw4C1+w8dyVNqEYH+XICuhDMKBhG6tVNSugYdl9qRxdLyzeTP7W5/6MA==',

  redirectUri: 'http://localhost',

  authApi: "https://login.partner.microsoftonline.cn/common/oauth2/v2.0/token",
  driveApi: "https://microsoftgraph.chinacloudapi.cn/v1.0/me/drive",

  scope: 'user.read files.read.all offline_access',

  cacheControlHeader: 'max-age=0, s-maxage=60, stale-while-revalidate',
}