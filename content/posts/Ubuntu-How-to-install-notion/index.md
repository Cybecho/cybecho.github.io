---
title: "Ubuntu - How to install notion"
date: 2024-02-11T03:37:00.000Z
draft: false
tags: ["ubuntu"]
series: ["Let's Linux!"]
description: "To install Notion on Ubuntu, open the terminal and add the Notion repository with the command "
notion_id: "aa4988ac-00af-4391-9b62-30e80b8c8bfb"
notion_url: "https://www.notion.so/Ubuntu-How-to-install-notion-aa4988ac00af43919b6230e80b8c8bfb"
---

# Ubuntu - How to install notion

> **Summary**
> To install Notion on Ubuntu, open the terminal and add the Notion repository with the command 

---

🔗 [https://dev.to/gabrieladnz/install-notion-on-ubuntu-1nj5](https://dev.to/gabrieladnz/install-notion-on-ubuntu-1nj5)

- Open terminal and execute the next commands:
```plain text
echo "deb [trusted=yes] https://apt.fury.io/notion-repackaged/ /" | sudo tee /etc/apt/sources.list.d/notion-repackaged.list
```

```javascript
sudo apt update
```

- Now run this command to install a new version
```javascript
sudo snap install notion-snap-reborn
```

