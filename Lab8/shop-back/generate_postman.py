import json

collection = {
    "info": {
        "name": "Online Shop API",
        "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
    },
    "item": [
        {
            "name": "Categories folder",
            "item": [
                {"name": "Get All Categories", "method": "GET", "url": "/api/categories/"},
                {"name": "Get Category by ID", "method": "GET", "url": "/api/categories/1/"},
                {"name": "Get Products by Category", "method": "GET", "url": "/api/categories/1/products/"},
                {"name": "Create Category", "method": "POST", "url": "/api/categories/"},
                {"name": "Update Category", "method": "PUT", "url": "/api/categories/1/"},
                {"name": "Delete Category", "method": "DELETE", "url": "/api/categories/1/"}
            ]
        },
        {
            "name": "Products folder",
            "item": [
                {"name": "Get All Products", "method": "GET", "url": "/api/products/"},
                {"name": "Get Product by ID", "method": "GET", "url": "/api/products/1/"},
                {"name": "Create Product", "method": "POST", "url": "/api/products/"},
                {"name": "Update Product", "method": "PUT", "url": "/api/products/1/"},
                {"name": "Delete Product", "method": "DELETE", "url": "/api/products/1/"}
            ]
        }
    ]
}

for folder in collection["item"]:
    new_items = []
    for req in folder["item"]:
        path_arr = [p for p in req["url"].split("/") if p]
        
        body = None
        if req["method"] in ["POST", "PUT"]:
            body = {
                "mode": "raw",
                "raw": "{\n    \n}",
                "options": {
                    "raw": {
                        "language": "json"
                    }
                }
            }
            
        new_req = {
            "name": req["name"],
            "request": {
                "method": req["method"],
                "header": [
                    {
                        "key": "Content-Type",
                        "value": "application/json",
                        "type": "text"
                    }
                ] if req["method"] in ["POST", "PUT"] else [],
                "url": {
                    "raw": f"http://127.0.0.1:8000{req['url']}",
                    "protocol": "http",
                    "host": ["127", "0", "0", "1"],
                    "port": "8000",
                    "path": path_arr + [""] if req["url"].endswith("/") else path_arr
                }
            }
        }
        if body:
            new_req["request"]["body"] = body
            
        new_items.append(new_req)
    folder["item"] = new_items

with open('OnlineShopAPI.postman_collection.json', 'w') as f:
    json.dump(collection, f, indent=4)

print("success")
