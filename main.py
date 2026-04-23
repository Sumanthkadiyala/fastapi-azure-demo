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