#!/bin/bash

# Get the current timestamp
timestamp=$(date +"%Y-%m-%d %H:%M:%S")

# Add all changes
git add .

# Commit with timestamp
git commit -m "auto: update site content - $timestamp"

# Push to main branch
git push origin main 