# portfolio
https://anoop2677.github.io/portfolio/

## Getting Started

### Clone the Repo
### [Install Node.js](https://nodejs.org/dist/v18.18.0/node-v18.18.0-x64.msi) (v18 or newer recommended)
### Installation
Run in the root directory:
```
npm install
```

If you encounter dependency conflicts, use:
```
npm run update-deps
```

### Security Vulnerabilities
This project uses package resolutions to address known vulnerabilities in dependencies. For best results, consider using Yarn instead of npm, as it has better support for resolutions:
```
yarn install
```

If you're using npm and encounter security warnings, you can try to fix them with:
```
npm run fix-vulnerabilities
```
Note: This may introduce breaking changes. Use with caution.

### Start Development Server
```
npm start
```
Then visit: http://localhost:3000
