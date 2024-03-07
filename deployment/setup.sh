#!/bin/bash

sudo yum install -y pip git npm docker
sudo npm install -g aws-cdk

# Get the region of the EC2 instance
TOKEN=$(curl -X PUT "http://169.254.169.254/latest/api/token" -H "X-aws-ec2-metadata-token-ttl-seconds: 21600")
AZ=$(curl -H "X-aws-ec2-metadata-token: $TOKEN" -s http://169.254.169.254/latest/meta-data/placement/availability-zone)
REGION=$(echo $AZ | sed 's/[a-zA-Z]$//')

#pip install based on region
if [[ $REGION == *"cn"* ]]; then
    pip install -r requirements.txt -i https://pypi.tuna.tsinghua.edu.cn/simple
else
    pip install -r requirements.txt
fi

#set up docker
sudo usermod -aG docker ${USER}
newgrp docker
groups
sudo service docker start
