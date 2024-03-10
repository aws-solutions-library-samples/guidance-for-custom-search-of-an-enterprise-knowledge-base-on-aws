How to deploy python lambda function "langchain_processor_dataload" with AWS base container images

1. Build the Docker image with the docker build command and the Dockerfile in this directory. 
   The following example names the image docker-image and gives it the test tag:
   docker build --platform linux/amd64 -t docker-image:test -f Dockerfile ../
2. Test the image locally and Deploy the image based on the following instructions: 
   https://docs.aws.amazon.com/lambda/latest/dg/python-image.html#python-image-instructions


