install: # установить зависимости
	npm ci
brain-games: # запуск проект
	node bin/brain-games.js
publish: # публикация пакета
	npm publish --dry-run
