from fastapi import APIRouter
from datetime import datetime
import time
import os

from app.models.agent import HealthCheck

router = APIRouter()

# Store start time for uptime calculation
start_time = time.time()

@router.get("/health", response_model=HealthCheck)
async def health_check():
    """Health check endpoint to verify API status"""
    uptime = time.time() - start_time
    
    return HealthCheck(
        status="healthy",
        timestamp=datetime.now(),
        version="1.0.0",
        uptime=uptime
    )

@router.get("/health/detailed")
async def detailed_health_check():
    """Detailed health check with system information"""
    uptime = time.time() - start_time
    
    return {
        "status": "healthy",
        "timestamp": datetime.now(),
        "version": "1.0.0",
        "uptime": uptime,
        "system": {
            "python_version": os.sys.version,
            "platform": os.name
        }
    }
