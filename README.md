docker-torbox
=============

This is an attempt to put together tor/privoxy and iceweasel as docker containers, managed by fig.



Build it
=======

```
fig up
```

Run iceweasel
=============

```
fig run iceweasel
```

This will starts the linked tor/privoxy/dnsmasq containers.

Warning
=======

This was made as an experiment, it should not be use in real life.

If you seek for a securized Tor/Firefox environment, you should look at the [Tor Browser bundle](https://www.torproject.org/projects/torbrowser.html.en)
