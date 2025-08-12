#!/bin/bash

# This script removes aurora effects from Index.tsx
# First, let's identify all aurora sections and remove them

# Remove aurora keyframes
sed -i '/^[[:space:]]*@keyframes aurora/,/^[[:space:]]*}$/d' client/pages/Index.tsx
sed -i '/^[[:space:]]*@keyframes aurora-wave-subtle/,/^[[:space:]]*}$/d' client/pages/Index.tsx
sed -i '/^[[:space:]]*@keyframes aurora-base-flow/,/^[[:space:]]*}$/d' client/pages/Index.tsx

echo "Aurora keyframes removed"
