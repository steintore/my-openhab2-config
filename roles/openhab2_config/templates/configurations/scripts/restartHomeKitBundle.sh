#/bin/bash

result=$(ssh openhab@localhost -p 8101 bundle:list | grep -e "^[0-9]\{3\}.*HomeKit" | cut -c 1-3)
ssh openhab@localhost -p 8101 bundle:restart $result