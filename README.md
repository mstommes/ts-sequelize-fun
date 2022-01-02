#### tutorial found at dev.to


Create a local mariadb database with docker
https://mariadb.com/kb/en/installing-and-using-mariadb-via-docker/
https://hub.docker.com/_/mariadb

docker pull mariadb:10.4
docker run --name mariadb -e MYSQL_ROOT_PASSWORD=root -e MARIADB_DATABASE=localmariadb -p 3306:3306 -d docker.io/library/mariadb:10.4

docker exec -it 3c9 bash
 mysql -u root -p > enter password from previous run command
docker stop mariadb
docker rm ${containerid}
docker rm -v mariadb

USE {tablename}

CREATE TABLE IF NOT EXISTS dogs (
  id int NOT NULL AUTO_INCREMENT,
  name varchar(32) NOT NULL,
  breed varchar(32) NOT NULL,
  isGoodBoy boolean,
  PRIMARY KEY (id)
);

INSERT INTO dogs (name,breed,isGoodBoy) VALUES
('Toto', 'JackRussel', true),
('Coda', 'Bernese', true),
('Titi','GermanShephard', true);


OR from a dockerfile

FROM mariadb:latest

COPY sql/test.sql /docker-entrypoint-initdb.d/

ENV MYSQL_ROOT_PASSWORD test123
ENV MYSQL_DATABASE testDB
ENV MYSQL_USER toto
ENV MYSQL_PASSWORD test123

RUN apt-get update && apt-get -y install vim

EXPOSE 3306

CMD ["mysqld"]