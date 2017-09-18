#!/bin/bash

sudo redis-server ../config/redis/redis_6379_roleMaster.conf
sudo redis-server ../config/redis/redis_6380_accountToken.conf
sudo redis-server ../config/redis/redis_6381_gameToken.conf
sudo redis-server ../config/redis/redis_6382_monitor.conf
sudo redis-server ../config/redis/redis_6383_roleSlave1.conf