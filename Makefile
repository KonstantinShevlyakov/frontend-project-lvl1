install: # установить зависимости
	npm ci
brain-games: # запуск проект
	node bin/brain-games.js
publish: # публикация пакета
	npm publish --dry-run
lint: # запуск eslint
	npx eslint .
brain-even: # запуск проекта brain-even
	node bin/brain-even.js
