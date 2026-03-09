build:
	@docker compose build

up:
	@docker compose up -d

up-attached:
	@docker compose up 

down:
	@docker compose down

deploy:
	@docker compose -f compose.prod.yaml up -d --build

deploy-down:
	@docker compose -f compose.prod.yaml down
