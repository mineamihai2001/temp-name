docker_cmd_api := docker-compose run --build --rm -it api

run:
	docker-compose up --build

install:
	$(docker_cmd_api) pnpm install $(user_options)

build: pnpm run-install
	$(docker_cmd_api) pnpm run build
