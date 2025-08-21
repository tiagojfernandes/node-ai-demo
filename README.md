# Node.js Application for Azure App Service

A simple Node.js web application with Application Insights integration, ready for deployment to Azure App Service.

## Features

- Express.js web server
- Health check endpoint
- Application Insights telemetry (optional)
- Azure App Service optimized configuration
- Graceful shutdown handling

## Quick Start

### Prerequisites

- Node.js 18 or higher
- npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd node-ai-demo
```

2. Install dependencies:
```bash
npm install
```

3. Start the application:
```bash
npm start
```

The application will start on port 3000 (or the port specified by the `PORT` environment variable).

### Endpoints

- `GET /` - Returns "Hello World"
- `GET /healthz` - Health check endpoint returning `{"status": "ok"}`

## Azure App Service Deployment

This application is pre-configured for Azure App Service deployment with:

- `web.config` for IIS Node.js handler configuration
- Proper `package.json` with start script and Node.js engine specification
- Environment variable support for dynamic port binding
- Application Insights integration (optional)

### Environment Variables

- `PORT` - Server port (automatically set by Azure App Service)
- `APPLICATIONINSIGHTS_CONNECTION_STRING` - Application Insights connection string (optional)

### Deployment Steps

1. **Using Azure CLI:**
```bash
az webapp create --resource-group <resource-group> --plan <app-service-plan> --name <app-name> --runtime "NODE|18-lts"
az webapp deployment source config --name <app-name> --resource-group <resource-group> --repo-url <repository-url> --branch main --manual-integration
```

2. **Using Azure Portal:**
   - Create a new Web App
   - Choose Node.js 18 LTS runtime
   - Configure deployment from GitHub/Git repository
   - The application will automatically start using the `npm start` command

3. **Using VS Code Azure Extension:**
   - Install the Azure App Service extension
   - Right-click on the project folder and select "Deploy to Web App"

### Application Insights (Optional)

To enable Application Insights telemetry:

1. Create an Application Insights resource in Azure
2. Set the `APPLICATIONINSIGHTS_CONNECTION_STRING` environment variable in your App Service configuration
3. The application will automatically start collecting telemetry

## Development

### Running Locally

```bash
npm start
```

### File Structure

```
.
├── index.js          # Main application file
├── package.json      # Node.js dependencies and scripts
├── web.config        # IIS configuration for Azure App Service
├── .gitignore        # Git ignore rules
└── README.md         # This file
```

## License

This project is private and proprietary.