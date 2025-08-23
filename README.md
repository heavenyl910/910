# Demon's Playlist

Monorepo scaffold for a Telegram music bot and supporting services. This initial
commit provides a minimal queue implementation and a bot capable of handling
`/play`, `/pause` and `/resume` commands via a stub voice controller.

## Packages
- `bot/` – Telegram Bot API integration and command handlers
- `voice/` – stub voice controller; placeholder for GramJS + GramTGCalls
- `shared/` – shared types and queue logic with unit tests
- `webapp/`, `assets/`, `scripts/` – placeholders for upcoming features

## Development
1. Set `BOT_TOKEN` in your environment.
2. Run the bot with `node bot/index.js`.
3. Use `/play <song>`, `/pause`, and `/resume` in your chat to exercise the flow.

Tests for the queue module can be run with `npm test`.
