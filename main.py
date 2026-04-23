from fastapi import FastAPI

# create app
app = FastAPI()

# Hello World endpoint
@app.get("/")
def hello():
    return {"message": "Hello World"}

# Health check endpoint
@app.get("/health")
def health_check():
    return {"status": "healthy"}

@app.get("/ask")
def ask(q: str):
    return {"answer": f"You asked: {q}"}

from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)