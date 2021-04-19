start-prod:
	docker-compose up -d

stop-prod:
	docker-compose down

start:
	docker-compose -f docker-compose.dev.yml up -d

stop:
	docker-compose -f docker-compose.dev.yml  down

