---
title: "Project Setup: yarn & npm & homebrew"
excerpt: "Notes and exlaination on what Yarn, npm, and Homebrew are and how they fit into my development workflow."
coverImage: "/assets/blog/dynamic-routing/cover.jpg"
date: "2025-01-06T05:35:07.322Z"
author:
  name: Amy Yuran Liu
  picture: "/assets/blog/authors/ayl.png"
ogImage:
  url: "/assets/blog/dynamic-routing/cover.jpg"
---

### 1. **What is Yarn?**

**Yarn** is a **package manager** for JavaScript, just like `npm` (Node Package Manager). It helps you:

- **Install** and **manage dependencies** (libraries, frameworks, etc.) for your projects.
- **Ensure consistency** by locking dependencies, preventing "it works on my machine" issues.
- **Speed up installations** by caching packages and running tasks in parallel.

**Why Yarn over npm?**

- **Faster installs**: Yarn can download packages in parallel, unlike npm's sequential downloads.
- **Lockfile (`yarn.lock`)**: Ensures all team members use the exact same package versions.
- **Offline installs**: Yarn caches packages, allowing offline installations.
- **Better dependency resolution**: Reduces version conflicts.

------

### 2. **npm (Node Package Manager)**

- **npm** comes **bundled with Node.js**.
- It’s the default package manager for JavaScript projects.
- You can install packages globally (`-g`) or locally for a project.
- Despite its simplicity, npm sometimes runs into issues with dependency resolution, which Yarn aims to solve.

**Common npm commands**:

```bash
npm install <package>     # Install a package locally
npm install -g <package>  # Install globally
npm uninstall <package>   # Remove a package
npm init                  # Start a new project (creates package.json)
```

------

### 3. **Homebrew**

- **Homebrew** is a **package manager for macOS** (and Linux).
- It manages software installations system-wide, not just JavaScript packages.
- With Homebrew, you can install tools like Node.js, Yarn, Python, Git, etc.

**Common Homebrew commands**:

```bash
brew install <package>   # Install a package (e.g., node, yarn)
brew uninstall <package> # Remove a package
brew upgrade             # Update all packages
brew list                # List installed packages
```

------

### 4. **How They Work Together**

- **Homebrew** installs **Node.js** and **Yarn** on your system.
- **Node.js** includes **npm** by default.
- **Yarn** or **npm** manage project-specific dependencies.

------

### Example Workflow

1. Install Node.js and Yarn using Homebrew:

   ```bash
   brew install node
   brew install yarn
   ```

2. Create a new project:

   ```bash
   mkdir my-website
   cd my-website
   yarn init             # Initializes a new project
   ```

3. Add dependencies (e.g., React, Next.js):

   ```bash
   yarn add next react react-dom
   ```

4. Run the project:

   ```bash
   yarn dev
   ```

------

