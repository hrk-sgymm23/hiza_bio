PHONY: build up build-run

build:
	docker-compose build

up:
	docker-compose up

down:
	docker-compose down

exec:
	docker-compose exec app /bin/sh