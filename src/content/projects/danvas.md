---
title: "danvas — interactive browser canvases from Python"
summary: "An open-source library, published on PyPI, that turns any Python script into a live, multi-user browser UI: sliders, plots, tables, video, 3D models and custom React panels, all wired to ordinary Python functions."
org: "Open source · AGPL-3.0"
category: Software
tags: [Python, Rust, WebSockets, React, Open source]
cover: danvas-catalogue.png
page: true
order: 10.5
links:
  - { label: Code on GitHub, url: "https://github.com/DanielChahine004/danvas" }
  - { label: PyPI package, url: "https://pypi.org/project/danvas/" }
gallery:
  - "danvas-catalogue.png | The built-in panels on one canvas"
  - "danvas-multiuser.mp4 | Two browsers, top and bottom, sharing one canvas with live cursors"
  - "danvas-live_plot.mp4 | Streaming telemetry into a live plot"
  - "danvas-cad_model3d.mp4 | The 3D panel viewing a CAD model"
  - "danvas-circuit_dashboard.mp4 | A circuit dashboard built from panels"
  - "danvas-custom_react.mp4 | A custom React panel driven from Python"
---

Research and hardware work keeps needing small interfaces: a slider for a servo, a live plot of a sensor, a table of results to share with a supervisor. Building each one in HTML and JavaScript takes longer than the experiment. danvas lets you build them in a few lines of Python instead.

```python
import danvas

canvas = danvas.Canvas()
servo  = canvas.slider("servo_1", min=0, max=180, default=90)
status = canvas.label("status", "idle")

@servo.on_change
def handle(value):
    status.update(f"servo at {value}")

canvas.serve(port=8000)
```

Panels appear on a zoomable browser canvas. Clicking or editing one calls a normal Python function in your process, with full access to your code, hardware and files.

## What it does

- **Panels for most things:** controls, sortable tables, Plotly charts, streaming plots, heatmaps, video and audio feeds, file upload and download, chat, and a 3D viewer with volume rendering. Anything else can be your own React or HTML.
- **Multi-user by default:** any number of browsers share one live canvas, with a viewer roster, live cursors, shared drawing and role-based logins.
- **Sharing built in:** on the local network, behind a password, or through a public HTTPS tunnel.
- **Resilient:** the interface survives the script crashing and recovers on restart, saves values and layout across runs, and hot-reloads edited functions.
- **Any language:** a documented wire protocol, with Python, Rust and Node SDKs and an Arduino serial bridge.

## How it's built

A Rust broker serves the canvas and relays state over a single WebSocket. Python owns the state; the browser renders it and reports what the user did. The base install needs only two small Python dependencies, with heavier features (video, audio, tunnelling, desktop apps) as optional extras.
