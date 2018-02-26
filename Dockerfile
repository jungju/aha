FROM library/golang

RUN curl -sL https://deb.nodesource.com/setup_9.x | bash -
RUN apt-get install -y nodejs && npm update -g npm

# Godep for vendoring
RUN go get github.com/tools/godep

# Recompile the standard library without CGO
RUN CGO_ENABLED=0 go install -a std

ENV APP_DIR $GOPATH/src/github.com/jungju/aha
RUN mkdir -p $APP_DIR

# Set the entrypoint
ENTRYPOINT (cd $APP_DIR && ./aha)
ADD . $APP_DIR

# Compile the binary and statically link
RUN cd $APP_DIR && CGO_ENABLED=0 godep go build -tags 'bindatafs' -ldflags '-d -w -s'

RUN cd $APP_DIR/web && npm install && npm run build 

EXPOSE 8081
