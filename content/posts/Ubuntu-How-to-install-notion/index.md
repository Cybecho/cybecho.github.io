---
title: "Ubuntu - How to install notion"
date: 2024-02-11T03:37:00.000Z
draft: false
tags: ["ubuntu"]
series: ["Let's Linux!"]
description: "To install Notion on Ubuntu, open the terminal and add the Notion repository with echo \"deb [trusted=yes] <https://apt.fury.io/notion-repackaged/> /\" | sudo tee /etc/apt/sources.list.d/notion-repackaged.list, then update with sudo apt update, and finally install it using sudo snap install notion-snap-reborn."
notion_id: "aa144742-0257-4823-b913-c7c6eb7cb119"
notion_url: "https://www.notion.so/Ubuntu-How-to-install-notion-aa14474202574823b913c7c6eb7cb119"
---

# Ubuntu - How to install notion

> **Summary**
> To install Notion on Ubuntu, open the terminal and add the Notion repository with echo "deb [trusted=yes] <https://apt.fury.io/notion-repackaged/> /" | sudo tee /etc/apt/sources.list.d/notion-repackaged.list, then update with sudo apt update, and finally install it using sudo snap install notion-snap-reborn.

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

