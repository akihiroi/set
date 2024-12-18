function FindProxyForURL(url, host) {
  if (shExpMatch(host, "*.alma.local")) {
    return "PROXY 192.168.255.128";
  }
  if (shExpMatch(host, "alma.local")) {
    return "PROXY 192.168.255.128";
  }
  return "DIRECT";
}
