import time
import os

print("Worker started...")
redis_host = os.getenv('REDIS_HOST', 'localhost')
print(f"Connecting to Redis at {redis_host}")

while True:
    print("Worker processing tasks...")
    time.sleep(30)