title: Deploying a Minecraft server with docker
author: icanc
tags:
  - minecraft
  - server
  - docker
categories:
  - server-stuff
index_img: /images/pasted-1.png
date: 2020-11-21 01:59:00
---
> This guide will help you go through the process of installing a Minecraft server on a raspberry pi. It works across all platforms and has support for server types

<!-- more -->

## Deploying a Minecraft server with docker

## Intro

For those people that hate docker,
you can follow this guide: https://pimylifeup.com/raspberry-pi-minecraft-server/

But why docker?
1. no need to install java and mess with JRE
2. automation with docker is much easier
3. fast deployments

### Setting up docker
For arch-based distros

```
sudo pacman -S docker
```

For Debian based distros

```
sudo apt install docker
```

### Installing Minecraft docker

tl;dr:
Copy the command and connect through port 25565 a few min later

```
sudo docker run -d -it -e EULA=TRUE -e VERSION=1.16.1 -e TYPE=paper  -p 25565:25565 --name minecraft-server itzg/minecraft-server:multiarch
```

Note: ARM-based board like the raspberry pi requires the multi-arch tag. This command will also not mount the volumes, look at the mounting volumes section for help

Why you SHOULD use docker for this
1. easy management through a web interface using Portainer.
2. want to start a server in seconds
3. less hassle with managing ports

Why you SHOULDN'T use docker for this
1. pushing you pi for absolute performance.
2. no other reason why you wouldn't want to use docker.


### How to mount paths in docker
If nothing is mounted, docker will create a docker volume and its hard to migrate.

``` 
minecraft
├── config
├── data
└── mods
```
This docker image requires 3 mount points without installing external mod packs

```
sudo docker run -d -it -e EULA=TRUE -e VERSION=1.16.1 -e TYPE=paper -p 25565:25565 -v /home/username/minecraft/config:/config -v /home/username/minecraft/data:/data -v /home/username/minecraft/mods:/mods --name mc-container-name itzg/minecraft-server:multiarch
```

Using the `-v` argument, you can mount the path inside of docker, and u can access the server files outside of docker. but you do need to restart the container every time u make changes.

not finished

icanc.space
EOF