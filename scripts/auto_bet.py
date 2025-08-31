#!/usr/bin/env python3
"""Automated Telegram betting script.

This script logs into a Telegram account using Telethon and repeatedly sends
`/bet` commands with progressively larger amounts. Starting with `/bet100`,
another `0` is added to the command every `BET_INTERVAL` seconds (default:
2 hours).

Environment variables:
    TELEGRAM_API_ID   - API ID from https://my.telegram.org
    TELEGRAM_API_HASH - API hash from https://my.telegram.org
    TELEGRAM_TARGET   - username or chat ID to send commands to
    BET_INTERVAL      - seconds between bets (default: 7200)
    BET_PREFIX        - starting command (default: /bet100)

Use responsibly and ensure automation complies with Telegram's terms of
service and any applicable gambling regulations.
"""

import asyncio
import os
from telethon import TelegramClient

API_ID = int(os.environ.get("TELEGRAM_API_ID", "0"))
API_HASH = os.environ.get("TELEGRAM_API_HASH", "")
TARGET = os.environ.get("TELEGRAM_TARGET", "me")
STEP_INTERVAL = int(os.environ.get("BET_INTERVAL", str(2 * 60 * 60)))
INITIAL_BET = os.environ.get("BET_PREFIX", "/bet100")


async def main() -> None:
    """Connect to Telegram and send progressively larger bet commands."""
    async with TelegramClient("bet_session", API_ID, API_HASH) as client:
        bet_cmd = INITIAL_BET
        while True:
            await client.send_message(TARGET, bet_cmd)
            print(f"Sent {bet_cmd}")
            await asyncio.sleep(STEP_INTERVAL)
            bet_cmd += "0"


if __name__ == "__main__":
    asyncio.run(main())
