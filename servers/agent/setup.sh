#!/bin/bash

# FastAPI Agent Server Setup Script
echo "Setting up FastAPI Agent Server..."

# Create virtual environment
echo "Creating virtual environment..."
python3 -m venv venv

# Activate virtual environment
echo "Activating virtual environment..."
source venv/bin/activate

# Upgrade pip
echo "Upgrading pip..."
pip install --upgrade pip

# Install dependencies
echo "Installing dependencies..."
pip install -r requirements.txt

# Create .env file from example
if [ ! -f .env ]; then
    echo "Creating .env file..."
    cp env.example .env
    echo "Please edit .env file with your configuration"
fi

echo "Setup complete!"
echo ""
echo "To start the server:"
echo "1. Activate virtual environment: source venv/bin/activate"
echo "2. Run the server: python main.py"
echo "3. Or use uvicorn: uvicorn main:app --reload --port 8001"
echo ""
echo "API Documentation will be available at:"
echo "- Swagger UI: http://localhost:8001/docs"
echo "- ReDoc: http://localhost:8001/redoc"
