#!/bin/bash

# Access env variable and default to 3000
PORT=${REMIX_PORT:-3000}

# Check if node_modules directory exists
if [ ! -d "node_modules" ]; then
   # Install packages
   npm ci
fi

# Check if .next directory exists
if [ ! -d ".next" ]; then
   npm run build
fi

# Start the Next.js application
npm run start -- -p $PORT
