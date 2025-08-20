import os

class Settings:
    def __init__(self):
        # API Configuration
        self.api_host = os.getenv("API_HOST", "127.0.0.1")
        self.api_port = int(os.getenv("API_PORT", "8001"))
        self.environment = os.getenv("ENVIRONMENT", "development")
        self.debug = os.getenv("DEBUG", "True").lower() == "true"
        
        # CORS Configuration
        self.allowed_origins = ["http://localhost:3000", "http://127.0.0.1:3000"]
        
settings = Settings()
