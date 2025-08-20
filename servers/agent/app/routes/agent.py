from fastapi import APIRouter, HTTPException
from datetime import datetime
import uuid
from typing import Dict, Any

from app.models.agent import AgentRequest, AgentResponse, ChatMessage, ChatSession
from app.services.portia_agent_service import PortiaAgentService

router = APIRouter()


@router.post("/chat", response_model=AgentResponse)
async def chat_with_agent(request: AgentRequest) -> str:
    return "I am Portia Agent"
