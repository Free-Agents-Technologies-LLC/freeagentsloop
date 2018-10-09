
## Docker
docker run -v /Users/dan/mysqldata/:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=1234 -d -p 3306:3306 mysql:5.7.23

setting the volume to a folder on the local host. If you stop and rm the mysql container, you will still have access to your data.  If you want to start completely fresh, just remove the folder on your computer and when you run the command again, it will create it fresh for you