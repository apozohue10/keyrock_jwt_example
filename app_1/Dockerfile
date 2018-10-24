FROM ubuntu:14.04

WORKDIR /opt

# Install Ubuntu dependencies
RUN sudo apt-get update && \
    sudo apt-get install python-software-properties software-properties-common -y && \
	sudo apt-get update && \
	sudo apt-get install git curl -y

# Install PPA
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash - && \
    apt-get install -y --no-install-recommends nodejs &&\
    apt-get clean && \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# Clone code of Chocolate Factory and install npm dependencies
COPY /chocolatefactory /opt/chocolatefactory

WORKDIR /opt/chocolatefactory

# Run application
COPY docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod 755 /docker-entrypoint.sh
ENTRYPOINT ["/docker-entrypoint.sh"]

# Exposed port
EXPOSE 4000