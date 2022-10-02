help: ## Prints this help.
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

deps: ## Install dependencies
	@npm install

dev: ## Start the server in development mode
	@npm run dev

build: ## Build the server
	@npm run build

test: ## Run the test for local
	@npm run test

test-ci: ## Run the test for CI
	@npm run test:ci
